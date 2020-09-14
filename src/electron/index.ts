import { app, BrowserWindow, ipcMain } from "electron";
import { useStorageTargetState } from "./estate/storage-target";

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

  useStorageTargetState();

  // Triggered by React once it's ready to rock
  ipcMain.on("website-ready", (event, arg) => {});
});
