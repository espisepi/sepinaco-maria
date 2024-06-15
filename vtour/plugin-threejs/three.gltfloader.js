/*
	krpano ThreeJS example plugin
	- use three.js inside krpano
	- with stereo-rendering and WebVR support
	- with 3d object hit-testing (onover, onout, onup, ondown, onclick) and mouse cursor handling
*/

// =========================================================================

// CONFIGURACION PLUGIN KRPANO

// =========================================================================

function krpanoplugin()
{

	var path_folder_plugin = 'plugin-threejs/';

	var local  = this;
	var krpano = null;
	var device = null;
	var plugin = null;


	local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
	{
		krpano = krpanointerface;
		device = krpano.device;
		plugin = pluginobject;

		if (krpano.version < "1.19")
		{
			krpano.trace(3,"ThreeJS plugin - too old krpano version (min. 1.19)");
			return;
		}

		if (!device.webgl)
		{
			// show warning
			krpano.trace(2,"ThreeJS plugin - WebGL required");
			return;
		}

		krpano.debugmode = true;
		krpano.trace(0, "ThreeJS krpano plugin");

		// load the requiered three.js scripts
		load_scripts(['https://cdn.jsdelivr.net/npm/three@0.138.3/build/three.min.js','https://cdn.jsdelivr.net/npm/three@0.138.3/examples/js/loaders/GLTFLoader.js'], start);
	}

	local.unloadplugin = function()
	{
		// no unloading support at the moment
	}

	local.onresize = function(width, height)
	{
		return false;
	}


	function resolve_url_path(url)
	{
		if (url.charAt(0) != "/" && url.indexOf("://") < 0)
		{
			// adjust relative url path
			url = krpano.parsepath("%CURRENTXML%/" + path_folder_plugin + url);
		}

		return url;
	}


	function load_scripts(urls, callback)
	{
		if (urls.length > 0)
		{
			var url = resolve_url_path( urls.splice(0,1)[0] );

			var script = document.createElement("script");
			script.src = url;
			script.addEventListener("load", function(){ load_scripts(urls,callback); });
			script.addEventListener("error", function(){ krpano.trace(3,"loading file '"+url+"' failed!"); });
			document.getElementsByTagName("head")[0].appendChild(script);
		}
		else
		{
			// done
			callback();
		}
	}

	// =========================================================================

	// AQUI EMPIEZA LA VAINA (sepinaco-code)

	// =========================================================================

	var scene = null;
	var sceneObjects = null;


	function start() {
		console.log("START");
		// ===========================================
		// THREEJS_VERSION_GLTFLOADER = THREE;
		// delete THREE;
		// delete window.THREE;
		// ===========================================
		// console.log({THREEJS_VERSION_GLTFLOADER});
		console.log({THREE})

		// GET Scene KrpanoPlugin
		// scene = window.krpanoplugin.scene
		// console.log({scene})
		// loadGLTFModel();
		initPlugin();
	}

	function initPlugin() 
	{
		function ejecutarCuandoExista() {
			// Aquí coloca la lógica que quieres ejecutar cuando la variable exista
			console.log("¡La variable window.krpanoplugin.scene ya existe!");
			// Puedes agregar cualquier otra funcionalidad que necesites aquí
			startPlugin();
		}
		
		// Configura un setInterval para verificar la existencia de la variable cada cierto tiempo (por ejemplo, cada 100 ms)
		var intervalo = setInterval(function() {
			if (window.krpanoplugin && window.krpanoplugin.scene && window.krpanoplugin.sceneObjects) {
				// La variable existe, así que limpia el intervalo y ejecuta la función
				clearInterval(intervalo);
				ejecutarCuandoExista();
			}
		}, 100); // Verifica cada 100 milisegundos
		
	}

	function startPlugin()
	{
		scene = window.krpanoplugin.scene;
		sceneObjects = window.krpanoplugin.sceneObjects;
		loadGLTFModel();
	}

function loadGLTFModel() {
	// //     // Cargar el modelo GLTF
    var loader = new THREE.GLTFLoader();
    loader.load(resolve_url_path('soldier.glb'), function(gltf) {
        console.log("LLEGAMOS!",{scene,gltf});
        scene.add(gltf.scene);

		// gltf.scene.name = "soldier";
		// sceneObjects.push(gltf.scene)
		// assign_object_properties
		// (
		// 	gltf.scene,
		// 	gltf.scene.name,
		// 	{
		// 		ath:+30,  atv:+15, depth:500,  scale:0.1, rx:180, ry:60  ,rz:0,   ondown:function(obj){ obj.properties.scale *= 1.2; update_object_properties(obj); }, onup:function(obj){ obj.properties.scale /= 1.2; update_object_properties(obj); }
		// 	}
		// );

		// }, undefined, function(error) {
		// 	console.error(error);
	});
}

function resolve_url_path(url)
	{
		var path_folder_plugin = 'plugin-threejs/';

		if (url.charAt(0) != "/" && url.indexOf("://") < 0)
		{
			// adjust relative url path
			url = krpano.parsepath("%CURRENTXML%/" + path_folder_plugin + url);
		}

		return url;
	}


// add a krpano hotspot like handling for the 3d objects
function assign_object_properties(obj, name, properties)
{
	// set defaults (krpano hotspot like properties)
	if (properties          === undefined)	properties         = {};
	if (properties.name     === undefined)	properties.name    = name;
	if (properties.ath      === undefined)	properties.ath     = 0;
	if (properties.atv      === undefined)	properties.atv     = 0;
	if (properties.depth    === undefined)	properties.depth   = 1000;
	if (properties.scale    === undefined)	properties.scale   = 1;
	if (properties.rx       === undefined)	properties.rx      = 0;
	if (properties.ry       === undefined)	properties.ry      = 0;
	if (properties.rz       === undefined)	properties.rz      = 0;
	if (properties.rorder   === undefined)	properties.rorder  = "YXZ";
	if (properties.enabled  === undefined)	properties.enabled = true;
	if (properties.capture  === undefined)	properties.capture = true;
	if (properties.onover   === undefined)	properties.onover  = null;
	if (properties.onout    === undefined)	properties.onout   = null;
	if (properties.ondown   === undefined)	properties.ondown  = null;
	if (properties.onup     === undefined)	properties.onup    = null;
	if (properties.onclick  === undefined)	properties.onclick = null;
	properties.pressed  = false;
	properties.hovering = false;

	obj.properties = properties;

	update_object_properties(obj);
}


function update_object_properties(obj)
{
	var p = obj.properties;

	var px = p.depth * Math.cos(p.atv * M_RAD)*Math.cos((180-p.ath) * M_RAD);
	var py = p.depth * Math.sin(p.atv * M_RAD);
	var pz = p.depth * Math.cos(p.atv * M_RAD)*Math.sin((180-p.ath) * M_RAD);
	obj.position.set(px,py,pz);

	obj.rotation.set(p.rx*M_RAD, p.ry*M_RAD, p.rz*M_RAD, p.rorder);

	obj.scale.set(p.scale, p.scale, p.scale);

	obj.updateMatrix();
}





}
