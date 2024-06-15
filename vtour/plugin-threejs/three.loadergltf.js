

// function krpanoplugin()
// {

// 	var path_folder_plugin = 'plugin-threejs/';

// 	var local  = this;
// 	var krpano = null;
// 	var device = null;
// 	var plugin = null;

// 	// sepinaco-code
// 	var currentSceneKrpano = null;


// 	local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
// 	{
// 		krpano = krpanointerface;
// 		device = krpano.device;
// 		plugin = pluginobject;

// 		if (krpano.version < "1.19")
// 		{
// 			krpano.trace(3,"ThreeJS plugin - too old krpano version (min. 1.19)");
// 			return;
// 		}

// 		if (!device.webgl)
// 		{
// 			// show warning
// 			krpano.trace(2,"ThreeJS plugin - WebGL required");
// 			return;
// 		}

// 		krpano.debugmode = true;
// 		krpano.trace(0, "ThreeJS krpano plugin");

// 		// load the requiered three.js scripts
// 		startPlugin();
// 	}

// 	local.unloadplugin = function()
// 	{
// 		// no unloading support at the moment
// 	}

// 	local.onresize = function(width, height)
// 	{
// 		return false;
// 	}

//     function startPlugin() {
//         console.log("HOLI");
//     } 
    
//     function resolve_url_path(url)
//         {
//             var path_folder_plugin = 'plugin-threejs/';
    
//             if (url.charAt(0) != "/" && url.indexOf("://") < 0)
//             {
//                 // adjust relative url path
//                 url = krpano.parsepath("%CURRENTXML%/" + path_folder_plugin + url);
//             }
    
//             return url;
//         }
    
    
    
    
    
// }








// // // Crear script para Three.js
// // var scriptThree = document.createElement('script');
// // scriptThree.src = 'https://cdn.jsdelivr.net/npm/three@0.138.3/build/three.min.js';
// // document.head.appendChild(scriptThree);

// // // Crear script para GLTFLoader
// // var scriptGLTFLoader = document.createElement('script');
// // scriptGLTFLoader.src = 'https://cdn.jsdelivr.net/npm/three@0.138.3/examples/js/loaders/GLTFLoader.js';
// // document.head.appendChild(scriptGLTFLoader);

// // // Esperar a que los scripts se carguen
// // scriptGLTFLoader.onload = function() {

// //     // Get global variables
// //     var scene = window.scene;
// //     // window.scene = scene;
// // 	// var camera = window.camera;
// // 	// window.renderer = renderer;
// // 	// window.krpano = krpano;
// // 	// window.THREE = THREE;


// //     // Crear la escena
// //     // var scene = new THREE.Scene();

// //     // Crear la cámara
// //     // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //     // camera.position.z = 5;

// //     // Crear el renderizador
// //     // var renderer = new THREE.WebGLRenderer();
// //     // renderer.setSize(window.innerWidth, window.innerHeight);
// //     // document.body.appendChild(renderer.domElement);

// //     // Añadir luz
// //     // var light = new THREE.DirectionalLight(0xffffff, 1);
// //     // light.position.set(0, 1, 1).normalize();
// //     // scene.add(light);

// //     // Cargar el modelo GLTF
// //     var loader = new THREE.GLTFLoader();
// //     loader.load(resolve_url_path('soldier.glb'), function(gltf) {
// //         console.log("LLEGAMOS!",{scene,gltf});
// //         scene.add(gltf.scene);
// //     }, undefined, function(error) {
// //         console.error(error);
// //     });

// //     // Función de animación
// //     // function animate() {
// //     //     requestAnimationFrame(animate);
// //     //     renderer.render(scene, camera);
// //     // }
// //     // animate();
// // };

