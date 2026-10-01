const { app, BrowserWindow } = require('electron');
const path = require('path')

function CriarJanela(){
    const janela = new BrowserWindow({
        width: 1100,
        height: 750,
        minWidth:820,
        minHeight:600,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'build', 'icon.ico'),
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    })

    janela.loadFile('index.html')
}

app.whenReady().then( ()=>{
    CriarJanela()

    app.on('activate', ()=>{
        if (BrowserWindow.getAllWindows().length === 0) CriarJanela();
    })
})

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin') app.quit();
})