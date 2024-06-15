var juego = {
    puntaje: 10,
  
    itemClick: function(itemName) {
      switch(itemName) {
        case 'item1':
          this.puntaje--;
          alert("¡Te quedan " +  this.puntaje + " puntos!" );
          break;
        case 'item2':
          this.puntaje--;
          alert("¡Te quedan " +  this.puntaje + " puntos!" );
          break;
        // Maneja otros ítems aquí
      }
    }
  };
  