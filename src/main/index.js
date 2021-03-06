const electron = require("electron");
const app = electron.app;
const { BrowserWindow, ipcMain, dialog } = electron;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => 
        (mainWindow = null)
    );
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('item:add', (e, item) => {
    //TODO quantitiy and pricing
    mainWindow.webContents.send('item:add', 2, item, 16);
    //TODO reset quantity input
});