import App from './App.js';

const app = new App();
// app.init(); // El metodo init() se llama ahora en el contructor de App

// save app in global variable
window.threejsm = app;
console.log("execute threejsm project, app:  ",{appwindow: window.threejsm});
