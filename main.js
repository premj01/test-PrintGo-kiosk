const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    kiosk: true,       // fullscreen kiosk mode
    frame: false,      // no window frame
    alwaysOnTop: true,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile("./index.html");
  win.once('ready-to-show', () => win.show());

  // Disable devtools for privacy
  win.webContents.on("devtools-opened", () => win.webContents.closeDevTools());

}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
