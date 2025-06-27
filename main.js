// import { app, BrowserWindow, session } from 'electron'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1280,
//     height: 800,
//     show: false,
//     webPreferences: {
//       nodeIntegration: false,
//       contextIsolation: true,
//     },
//   })

//   win.loadURL('http://localhost:3000')

//   // ✅ Handle download requests
//   session.defaultSession.on('will-download', (event, item) => {
//     const filePath = path.join(app.getPath('downloads'), item.getFilename())
//     item.setSavePath(filePath)

//     item.on('done', (e, state) => {
//       if (state === 'completed') {
//         console.log('✅ Download completed:', filePath)
//       } else {
//         console.log('❌ Download failed:', state)
//       }
//     })
//   })

//   win.once('ready-to-show', () => win.show())
//   // win.webContents.openDevTools()
// }

// app.whenReady().then(createWindow)

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit()
// })

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow()
// })

import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Platform-specific icon paths
const iconPaths = {
  win32: path.join(__dirname, 'assets', 'icons', 'app-icon.ico'),
  darwin: path.join(__dirname, 'assets', 'icons', 'app-icon.icns'),
  linux: path.join(__dirname, 'assets', 'icons', 'app-icon.png'),
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    show: false,
    icon: iconPaths[process.platform],
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.loadURL('http://localhost:3000')
  win.once('ready-to-show', () => win.show())
}

app.whenReady().then(() => {
  if (process.platform === 'darwin') {
    // Set dock icon for macOS (must be called after whenReady)
    app.dock.setIcon(iconPaths.darwin)
  }
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
