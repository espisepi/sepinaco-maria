krpanoplugin = function() {
    console.log("HOYLIIIIII")
    var local = this;
    var krpano = null;
    var hotspot = null;
    var videoTexture = null;
    var particlesProgram = null;
    var videoElement = null;
  
    local.registerplugin = function(krpanointerface, pluginpath, pluginobject) {
      krpano = krpanointerface;
      hotspot = krpano.get('hotspot[manolo]');
        console.log("HOTSPOT ENCONTRADO! ", hotspot);
      if (hotspot) {
        console.log("url: ",hotspot.videourl)
        videoElement = document.createElement('video');
        videoElement.src = hotspot.videourl;
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true; // mute video
        videoElement.crossOrigin = 'anonymous'; // for cross-origin video sources
  
        videoElement.addEventListener('loadeddata', function() {
          initParticlesShader();
          krpano.set('events[video_frame].onframe', updateVideoTexture);
        });
      }
    };
  
    function initParticlesShader() {
      var gl = krpano.webGL.context;
      console.log("GL ====> ", gl);
      videoTexture = gl.createTexture();
      
      gl.bindTexture(gl.TEXTURE_2D, videoTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, videoElement);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  
      var vertexShaderSource = `
        attribute vec2 a_position;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;
  
        void main() {
          v_texCoord = a_texCoord;
          gl_PointSize = 1.0;
          gl_Position = vec4(a_position, 0.0, 1.0);
        }
      `;
  
      var fragmentShaderSource = `
        precision mediump float;
        uniform sampler2D u_videoTexture;
        varying vec2 v_texCoord;
  
        void main() {
          vec4 color = texture2D(u_videoTexture, v_texCoord);
          gl_FragColor = color;
        }
      `;
  
      var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
      particlesProgram = createProgram(gl, vertexShader, fragmentShader);
  
      gl.useProgram(particlesProgram);
  
      var positionLocation = gl.getAttribLocation(particlesProgram, 'a_position');
      var texCoordLocation = gl.getAttribLocation(particlesProgram, 'a_texCoord');
      var textureLocation = gl.getUniformLocation(particlesProgram, 'u_videoTexture');
  
      var positions = new Float32Array([
        -1, -1, 1, -1, -1, 1,
        -1, 1, 1, -1, 1, 1,
      ]);
  
      var texCoords = new Float32Array([
        0, 0, 1, 0, 0, 1,
        0, 1, 1, 0, 1, 1,
      ]);
  
      var positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  
      var texCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
  
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  
      gl.enableVertexAttribArray(texCoordLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
  
      gl.uniform1i(textureLocation, 0);
    }
  
    function updateVideoTexture() {
      var gl = krpano.webGL.context;
      gl.bindTexture(gl.TEXTURE_2D, videoTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, videoElement);
  
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
  
    function createShader(gl, type, source) {
      var shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }
  
    function createProgram(gl, vertexShader, fragmentShader) {
      var program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Error linking program:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      return program;
    }
  
    local.unloadplugin = function() {
      if (videoElement) {
        videoElement.pause();
        videoElement.src = '';
        videoElement.load();
        videoElement = null;
      }
      if (videoTexture) {
        krpano.webGL.context.deleteTexture(videoTexture);
        videoTexture = null;
      }
      if (particlesProgram) {
        krpano.webGL.context.deleteProgram(particlesProgram);
        particlesProgram = null;
      }
    };
  };
  