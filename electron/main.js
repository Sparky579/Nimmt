const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;

function createWindow() {
    Menu.setApplicationMenu(null);
    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        show: false,
        minWidth: 1440,
        minHeight: 900,
        webPreferences: {
            partition: String(+new Date()),
            preload: path.join(__dirname, "preload.js"),
        },
    });
    mainWindow.maximize();
    mainWindow.show();
    // 如果是开发环境就把当前运行的web端口做成客户端预览
    // 如果是生产环境就把打包后的index做成客户端预览
    mainWindow.loadURL(
        NODE_ENV === "development"
            ? "http://localhost:8080"
            : `file://${path.join(__dirname, "../dist/index.html")}`
    );
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    createWindow();

    app.on("activate", function () {
        // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
        // 打开的窗口，那么程序会重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});