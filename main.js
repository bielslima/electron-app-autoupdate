const { app, BrowserWindow, ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  //   mainWindow.webContents.openDevTools();

  ipcMain.on("app_version_request", function (event) {
    console.log("request");
    mainWindow.webContents.send("app_version_response", {
      version: app.getVersion(),
    });
  });

  mainWindow.once("ready-to-show", () => {
    autoUpdater.checkForUpdatesAndNotify();
  });

  autoUpdater.on("update-available", () => {
    mainWindow.webContents.send("update_available");
  });
  autoUpdater.on("update-downloaded", () => {
    mainWindow.webContents.send("update_downloaded");
  });

  ipcMain.on("restart_app", () => {
    autoUpdater.quitAndInstall();
  });
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", function () {
  app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
