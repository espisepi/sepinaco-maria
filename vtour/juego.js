
var PUNTUACION_INICIAL = 10;

var juego = {

    puntaje: PUNTUACION_INICIAL,
  
    itemClick: function(itemName) {
        console.log({krpano:window.krpano})
      switch(itemName) {
        case 'item1':
          this.puntaje--;
          break;
        case 'item2':
          this.puntaje--;
          break;
      }
      // render ui
      this.render();
    },

    render: function() {
        this.updateHotspotText();
        // this.showUIContador();
        // this.updateContador();
    },

    showUIContador: function() {
        // var divContadorElement = document.querySelector('.juego-contador');
        // divContadorElement.style.display = 'block';
    },

    hiddenUIContador: function() {
        // var divContadorElement = document.querySelector('.juego-contador');
        // divContadorElement.style.display = 'none';
    },

    updateContador: function() {
        // var h1ContadorElement = document.querySelector('.juego-contador h1');
        // h1ContadorElement.textContent = this.puntaje;
    },

    restartGame: function() {

        // restore contador
        this,hiddenUIContador();
        this.puntaje = PUNTUACION_INICIAL;
        this.updateContador();

        // restore scene krpano

    },

    showUIGameover: function() {

    },
    hiddenUIGameover: function() {

    },

    // krpano ======================

    updateHotspotText: function() {
        var hotspotName = "puntuacion";
        var hotspot = krpano.get("hotspot[" + hotspotName + "]");
        if (hotspot) {
        //   hotspot.html = '<div style="background: rgba(0,0,0,0.5); padding: 5px; border-radius: 5px; color: white;">' + this.puntaje + '</div>';
        hotspot.html = '<div class="hotspot-puntuacion-container"><div class="hotspot-puntuacion">' + this.puntaje + '</div></div>';
        }
    },

      // Example of changing the text of the hotspot
    //   changeHotspotText("text_hotspot", "New Text Here");

    
  };
  