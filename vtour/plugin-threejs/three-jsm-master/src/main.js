import App from './App.js';

// Inicializar cuando exista la variable global de krpano
// Función para comprobar si window.krpano está definido
function comprobarKrpano() {
    if (typeof window.krpano !== 'undefined') {
      clearInterval(intervaloComprobacion); // Detener la comprobación
      
      const app = new App(window.krpano);
      // app.init(); // El metodo init() se llama ahora en el contructor de App

      // save app in global variable
      window.threejsm = app;
      console.log("execute threejsm project, app:  ",{appwindow: window.threejsm});
    } else {
      console.log('Esperando a que window.krpano esté definido...');
    }
  }
  
  // Establecer el intervalo para comprobar cada 1000 ms (1 segundo)
  const intervaloComprobacion = setInterval(comprobarKrpano, 1000);
