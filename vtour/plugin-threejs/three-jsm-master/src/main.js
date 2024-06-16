import App from './App.js';

const app = new App();
app.init();

// save app in global variable
window.threejsm = app;
console.log("execute threejsm project, app:  ",{appwindow: window.threejsm});
