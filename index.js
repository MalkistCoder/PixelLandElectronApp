const { app, BrowserWindow } = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        minWidth: 800,
        minHeight: 450,
        autoHideMenuBar: true,
        icon: './zeno_logo.png'
    })

    window.loadURL('https://pixel.land/')
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})
  
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
