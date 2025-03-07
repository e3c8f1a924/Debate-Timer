// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
    openFile: () => ipcRenderer.send('main:openfile'),
    onLoadFile: (callback: (data: string[]) => Promise<void>) => ipcRenderer.on('main:loadfile', (_, data) => callback(data))
})
