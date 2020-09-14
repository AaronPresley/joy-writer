/**
 * All code that connects the website code to the electron code around S3 logic
 */
import { ipcMain } from "electron";
import { EventResponse } from "../../types";
import { State } from "../../website/store/s3";
import { store } from "../store";

export const currWebS3State = (): State => ({
  pathIsSet: false,
});

// Returns the current S3 state
ipcMain.on("curr-s3-state-msg", (event, args) => {
  event.reply(
    "curr-s3-state-reply",
    (): EventResponse<State> => ({
      errors: null,
      data: currWebS3State(),
    })
  );
});

// Returns a list of possible S3 buckets, assuming the user
// has set the necessary info
ipcMain.on("get-s3-buckets-msg", (event, args) => {
  // Mocking an API call
  setTimeout(() => {
    event.reply(
      "get-s3-buckets-reply",
      (): EventResponse<Record<string, any>[]> => ({
        errors: null,
        data: [
          {
            name: "some-bucket-1",
          },
          {
            name: "some-bucket-2",
          },
        ],
      })
    );
  }, 5000);
});

// Sets the path of the user's AWS credentials file
ipcMain.on("set-s3-path-msg", (event, s3Path) => {
  store.set("s3CredsPath", s3Path);
  event.reply(
    "set-s3-path-reply",
    (): EventResponse<boolean> => ({
      errors: null,
      data: true,
    })
  );
});

// Sets the user's desired bucket for notes
ipcMain.on("set-s3-bucket-msg", (event, s3Bucket) => {
  store.set("s3Bucket", s3Bucket);
  event.reply(
    "set-s3-bucket-reply",
    (): EventResponse<boolean> => ({
      errors: null,
      data: true,
    })
  );
});
