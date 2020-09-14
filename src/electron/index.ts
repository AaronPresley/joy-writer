import { app, BrowserWindow, ipcMain } from "electron";
import { store } from "./store";
import { State as DataTargetWState } from "../website/wstate/data-target-state";

app.on("ready", () => {
  // once electron has started up, create a window.
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // hide the default menu bar that comes with the browser window
  window.setMenuBarVisibility(true);

  // load a website to display
  window.loadURL(`file://${__dirname}/../website/index.html`);

  // Collect the data that our website will be asking for once it's ready
  const stateData: DataTargetWState = {
    hasStorageCredentials: !!store.get("s3Key") && !!store.get("s3Secret"),
    hasStorageDirectory: !!store.get("s3Bucket"),
    // hasStorageCredentials: true,
    // hasStorageDirectory: false,
  };

  // Triggered by React once it's ready to rock
  ipcMain.on("website-ready", (event, arg) => {
    event.reply("store-data", stateData);
  });
});
