import { BrowserWindow, dialog, ipcMain } from 'electron';
import path from 'path';

function createMainWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/pages/main.html`);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/pages/main.html`));
  }
  
  ipcMain.on('main:openfile', async () => {
    let {canceled, filePaths} = await dialog.showOpenDialog({});
    if (canceled) return;
    mainWindow.webContents.send('main:loadfile', filePaths);
  });
}

export default createMainWindow;