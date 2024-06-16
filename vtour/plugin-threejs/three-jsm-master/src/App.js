import {
	BoxGeometry,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer;

class App {

	// Constructor
	constructor() {
		this.renderer = null;
		this.camera = null;
		this.scene = null;

		this.init();
	}

	init() {

		camera = new PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
		camera.position.z = 4;

		scene = new Scene();

		const geometry = new BoxGeometry();
		const material = new MeshBasicMaterial();

		const mesh = new Mesh( geometry, material );
		scene.add( mesh );

		renderer = new WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		window.addEventListener( 'resize', onWindowResize, false );

		const controls = new OrbitControls( camera, renderer.domElement );

		// save variables
		this.renderer = renderer;
		this.scene = scene;
		this.camera = camera;

		animate();

	}

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}

export default App;
