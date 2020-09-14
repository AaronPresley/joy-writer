import { ipcMain } from "electron";
import { State as StorageTargetState } from "../../website/wstate/storage-target-state";
import { store } from "../store";

export const useStorageTargetState = () => {
  // store.delete("s3Key");
  // store.delete("s3Secret");
  store.delete("s3Bucket");

  const currStorageTargetState = (): StorageTargetState => ({
    hasCredentials: !!store.get("s3Key") && !!store.get("s3Secret"),
    hasDirectory: !!store.get("s3Bucket"),
  });

  ipcMain.on("storage-target-get", (event, args) => {
    event.returnValue = currStorageTargetState();
  });

  ipcMain.on(`storage-target-set-credentials`, (event, { s3Key, s3Secret }) => {
    console.log("setting storage credentials", { s3Key, s3Secret });
    store.set("s3Key", s3Key);
    store.set("s3Secret", s3Secret);
    event.returnValue = currStorageTargetState();
  });

  ipcMain.on("storage-target-get-buckets", async (event, args) => {
    event.returnValue = [
      {
        name: "apnet-something",
      },
      {
        name: "apnet-notes",
      },
    ];
  });

  ipcMain.on(`storage-target-set-directory`, (event, { s3Bucket }) => {
    console.log("setting storage bucket", { s3Bucket });
    store.set("s3Bucket", s3Bucket);
    event.returnValue = currStorageTargetState();
  });
};
