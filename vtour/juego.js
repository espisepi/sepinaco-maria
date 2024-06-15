
var PUNTUACION_INICIAL = 10;

var juego = {

    puntaje: PUNTUACION_INICIAL,
  
    itemClick: function(itemName) {
      switch(itemName) {
        case 'item1':
          this.puntaje--;
        //   alert("¡Te quedan " +  this.puntaje + " puntos!" );
          break;
        case 'item2':
          this.puntaje--;
        //   alert("¡Te quedan " +  this.puntaje + " puntos!" );
          break;
        // Maneja otros ítems aquí
      }
      // render ui
      this.render();
    },

    render: function() {
        this.showUI();
        this.updateContador();
    },

    showUI: function() {
        var divContadorElement = document.querySelector('.juego-contador');
        divContadorElement.style.display = 'block';
    },

    hiddenUI: function() {
        var divContadorElement = document.querySelector('.juego-contador');
        divContadorElement.style.display = 'none';
    },

    updateContador: function() {
        var h1ContadorElement = document.querySelector('.juego-contador h1');
        h1ContadorElement.textContent = this.puntaje;
    },

    restore: function() {
        this.puntaje = PUNTUACION_INICIAL;
        this.render();
    }

    
  };
  