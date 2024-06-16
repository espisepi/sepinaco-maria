

var videoPerformance = {

  videos_exception: ["portal_linea2"],

  krpano: null,

  checkVideoVisibility: function() {
    this.krpano = window.krpano;
    if(!krpano) {
      return;
    }
    this._checkVideoVisibility();
  },

  _checkVideoVisibility: function() {

    var krpano = this.krpano;

    var hlookat = krpano.get('view.hlookat');

    var vlookat = krpano.get('view.vlookat');
    var fov = krpano.get('view.fov') / 2;

    var hotspots = krpano.get('hotspot').getArray();

    var self = this;

    hotspots.forEach(function(hotspot) {

      var exit = false;

      if(hotspot.name == "portal_linea2") {
          exit = true;
      }
      // if(videos_exception.includes(hotspot.name)) {
      //   exit = true;
      // }

      if(!exit && hotspot.url === "plugins/videoplayer.js") {
        var videoAth = hotspot.ath;
        var videoAtv = hotspot.atv;

        var videoVisible = self.isInFieldOfView(hlookat, vlookat, fov, videoAth, videoAtv);

        // console.log({videoVisible});
        self.controlVideoPlayback(hotspot.name, videoVisible);
      }
      
    });

  },

  isInFieldOfView: function(hlookat, vlookat, fov, ath, atv) {
    var hDiff = Math.abs(hlookat - ath);
    var vDiff = Math.abs(vlookat - atv);

    return hDiff <= fov && vDiff <= fov;
  },

  controlVideoPlayback: function(hotspotName, shouldPlay) {
    // var krpano = document.getElementById('krpanoSWFObject').get('krpano');
    var krpano = this.krpano;
    if (shouldPlay) {
      krpano.call('hotspot[' + hotspotName + '].play();');
    } else {
      krpano.call('hotspot[' + hotspotName + '].pause();');
    }
  }

};
  