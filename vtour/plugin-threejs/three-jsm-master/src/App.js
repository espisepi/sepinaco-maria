import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Raycaster,
  Euler,
  Camera,
  Clock,
  DoubleSide,
  Color,
} from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { startWhenDefined } from './utils/startWhenDefined';
import { VideoPlayer } from './components/videoplayer/VideoPlayer';


let camera, scene, renderer;

class App {
  // Constructor
  constructor(krpano) {
    this.krpano = krpano;
    console.log('App Class: krpano attribute: ', this.krpano);
    this.renderer = null;
    this.camera = null;
    this.scene = null;

    this.stereocamera = new Camera();
    this.camera_hittest_raycaster = new Raycaster();
    this.krpano_panoview_euler = new Euler();
    this.clock = new Clock();

    this.init();
  }

  init() {
    camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 4;

    scene = new Scene();

    // Create box
    const geometry = new BoxGeometry(500, 500, 500);
    const material = new MeshBasicMaterial({
      side: DoubleSide,
      color: new Color(0xff0000),
    });

    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
    mesh.name = 'box';

    this.initVideoPoints();

    // Create soldier
    // Cargar el modelo GLTF
    // const loader = new GLTFLoader();
    // loader.load(this.resolve_url_path('soldier.glb'), function(gltf) {
    // 	console.log("LLEGAMOS!",{scene,gltf});
    // 	scene.add(gltf.scene);
    // 	gltf.scene.name = "box";

    // }, undefined, function(error) {
    // 	console.error(error);
    // });

    // renderer = new WebGLRenderer( { antialias: true } );
    renderer = new WebGLRenderer({
      canvas: krpano.webGL.canvas,
      context: krpano.webGL.context,
    });
    // renderer.setPixelRatio( window.devicePixelRatio );
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );

    // window.addEventListener( 'resize', onWindowResize, false );

    // const controls = new OrbitControls( camera, renderer.domElement );

    // save variables
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    animate();
  }

  // Krpano methods
  resolve_url_path(url) {
    const path_folder_plugin = 'plugin-threejs/three-jsm-master/assets/';
    if (url.charAt(0) != '/' && url.indexOf('://') < 0) {
      // adjust relative url path
      url = this.krpano.parsepath('%CURRENTXML%/' + path_folder_plugin + url);
    }

    return url;
  }

  initVideoPoints() {
    console.log('SETUP VIDEOPOINTS');

    this.initVideo();
    // const arrayVideoEl = document.getElementsByTagName('video');
    // console.log("Video Elements: ",{arrayVideoEl})
    // startWhenDefined('#video', function(videosEl) {
    // 	console.log("VIDEOS ELEMENTS FINDED: ", {videosEl});
    // }, 1000);
  }

  initVideo() {
      const videoPlayer = new VideoPlayer(this.resolve_url_path('stayHigh.mp4'));
      console.log("videoPlayer ejecutado: ",{videoPlayer});
  }
}

function onWindowResize() {
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.updateProjectionMatrix();
  // renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  // requestAnimationFrame( animate );
  // renderer.render( scene, camera );
}

export default App;
