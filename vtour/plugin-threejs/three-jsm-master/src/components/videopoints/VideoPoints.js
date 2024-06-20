// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Video Points</title>
//   <style>
//     body { margin: 0; }
//     canvas { display: block; }
//   </style>
// </head>
// <body>
//   <video id="video" style="display:none;" controls crossorigin="anonymous">
//     <source src="path_to_your_video.mp4" type="video/mp4">
//   </video>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
//   <script>
//     let scene, camera, renderer, points;
//     const resolution = { width: 1920, height: 1080 }; // Set the resolution here or dynamically get it
//     const video = document.getElementById('video');

//     function init() {
//       scene = new THREE.Scene();
//       camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//       renderer = new THREE.WebGLRenderer();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       document.body.appendChild(renderer.domElement);

//       video.addEventListener('loadeddata', onVideoLoaded, false);
//     }

//     function onVideoLoaded() {
//       const geometry = new THREE.BufferGeometry();
//       const positions = [];
//       const uvs = [];

//       for (let y = 0; y < resolution.height; y++) {
//         for (let x = 0; x < resolution.width; x++) {
//           const vertex = new THREE.Vector3(
//             x - resolution.width / 2,
//             -y + resolution.height / 2,
//             0
//           );
//           positions.push(vertex.x, vertex.y, vertex.z);
//           uvs.push(x / resolution.width, y / resolution.height);
//         }
//       }

//       geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//       geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));

//       const videoTexture = new THREE.VideoTexture(video);
//       const material = new THREE.ShaderMaterial({
//         uniforms: {
//           iChannel0: { value: videoTexture },
//           // Add other uniforms here
//         },
//         vertexShader: /* Your vertex shader here */,
//         fragmentShader: /* Your fragment shader here */
//       });

//       points = new THREE.Points(geometry, material);
//       points.rotation.x = Math.PI;
//       scene.add(points);
//       camera.position.z = 1000;

//       animate();
//     }

//     function animate() {
//       requestAnimationFrame(animate);

//       // Update uniforms here if needed
//       renderer.render(scene, camera);
//     }

//     window.onload = init;
//   </script>
// </body>
// </html>


// =================================

















// import React, { useState, useEffect } from "react";
// import * as THREE from "three";
// import { useFrame, useThree } from "@react-three/fiber";

// import useAnalyser from "../hooks/analyser/useAnalyser";

// import VideoPointShader from "./shaders/VideoPointShader";
// import useVideo from "../hooks/useVideo";

// import { useVideoPlayerStore } from "../features/videoplayer/my-server-media/VideoPlayerStoreMyServerMedia";



// export default function VideoPoints({
//   id_video = "video",
//   position = [0, 0, 0],
// }) {
//   const { scene } = useThree();

//   // Hacer un setInterval que finaliza hasta que encuentra el video y cuando lo encuentra se ejecuta el useEffect siguiente (crear useState para el video)
//   const video = useVideo(id_video);

//   // Obtener todo el tema de las resoluciones del video
//   const resolution = useVideoPlayerStore((state) => state.resolution);
//   // const originalResolution = useVideoPlayerStore((state) => state.originalResolution);
//   // const setResolution = useVideoPlayerStore((state) => state.setResolution);

  



//   // Crear particles con el video
//   const [points, setPoints] = useState();
//   useEffect(() => {
//     if (video) {
//       // Define Geometry
//       const geometry = new THREE.BufferGeometry();
//       const positions = [];
//       const uvs = [];

//       // TODO: Crear listado de resoluciones (https://www.jvs-informatica.com/blog/que-es-la-resolucion-de-pantalla-y-cuales-son-las-mas-usadas/)
//       // junto con la opcion de resolucion original (que seria la que trae el video por defecto)
//       // TODO: Cambiar el range que modifica la scale del videopoints por un range que modifique la resolution del video, es decir su videoWidth y videoHeight
//       // TODO: Cambiar o añadir un Range para modificar la posicion en el eje z hacia delante y hacia atras de la camara
//       // const videoWidth = video.videoWidth;
//       // const videoHeight = video.videoHeight;
//       // const videoWidth = 1920;
//       // const videoHeight = 1080;
//       // const videoWidth = 1024;
//       // const videoHeight = 768;
//       const videoWidth = resolution.width;
//       const videoHeight = resolution.height;
      

//       for (let y = 0, height = videoHeight; y < height; y += 1) {
//         for (let x = 0, width = videoWidth; x < width; x += 1) {
//           const vertex = new THREE.Vector3(
//             x - videoWidth / 2,
//             -y + videoHeight / 2,
//             0
//           );
//           positions.push(vertex.x, vertex.y, vertex.z);
//           uvs.push(x / videoWidth, y / videoHeight);
//         }
//       }
//       console.log("video height: " + videoHeight);
//       console.log("video width: " + videoWidth);

//       geometry.setAttribute(
//         "position",
//         new THREE.Float32BufferAttribute(positions, 3)
//       );
//       geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));

//       // Define Material
//       const material = new VideoPointShader();
//       material.uniforms.iChannel0.value = new THREE.VideoTexture(video);

//       // Define Points
//       const particles = new THREE.Points(geometry, material);
//       particles.rotation.x += Math.PI;

//       particles.position.set(position[0], position[1], position[2]);

//       // Temporal
//       // particles.position.z += -200.0;
//       // particles.scale.set(0.5,0.5,0.5);

//       scene.add(particles);
//       setPoints((v) => particles);

//       // Esto lo hacemos para acceder al videoPoints en cualquier parte del codigo (por ejemplo para cambiar atributos del shader como el tamano de los puntos)
//       window.videoPoints = particles;

//       return () => {
//         scene.remove(particles);
//         setPoints((v) => null);
//       };
//     }
//   }, [video, resolution]);

//   const analyser = useAnalyser(video);
//   useFrame(() => {
//     if (analyser && points) {
//       points.material.uniforms.bass.value = analyser.getUpdateLowerMax();
//     }
//   });

//   return null;
//   // Lo mas logico es hacerlo en un useEffect para controlar cuando se renderiza por parámetro
//   // <points>
//   //     <bufferGeometry attach="geometry">
//   //     <bufferAttribute
//   //         attachObject={['attributes', 'position']}
//   //         array={new THREE.Float32BufferAttribute( positions, 3 )}
//   //         // count={positions.length / 3}
//   //         // itemSize={3}
//   //     />
//   //     </bufferGeometry>
//   // </points>
// }
