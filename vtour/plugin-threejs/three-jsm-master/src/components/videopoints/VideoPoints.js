import {
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  Vector3,
  VideoTexture,
} from 'three';
import VideoPointShader from './VideoPointsShader';
import Analyser from './Analyser';

export class VideoPoints {
  constructor(videoEl, scene) {
    if (!videoEl) {
      console.error(
        ' NO EXISTE VIDEO HTML ELEMENT PARA CONSTRUIR VIDEOPOINTS '
      );
    }

    // Define Geometry
    const geometry = new BufferGeometry();
    const positions = [];
    const uvs = [];

    const videoWidth = videoEl.width;
    const videoHeight = videoEl.height;
    console.log('video height: ' + videoHeight);
    console.log('video width: ' + videoWidth);
    console.log("SCENEEEEEEEEEEEEE",scene)

    for (let y = 0, height = videoHeight; y < height; y += 1) {
      for (let x = 0, width = videoWidth; x < width; x += 1) {
        const vertex = new Vector3(x - videoWidth / 2, -y + videoHeight / 2, 0);
        positions.push(vertex.x, vertex.y, vertex.z);
        uvs.push(x / videoWidth, y / videoHeight);
      }
    }

    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));

    // Define Material
    const material = new VideoPointShader();
    material.uniforms.iChannel0.value = new VideoTexture(videoEl);

    // Define Points
    const particles = new Points(geometry, material);
    particles.rotation.x += Math.PI;

    particles.name = 'box';

    this.points = particles;

    // particles.position.set(position[0], position[1], position[2]);

    // Temporal
    // particles.position.z += -200.0;
    // particles.scale.set(0.5,0.5,0.5);

    scene.add(particles);

    const fftSize = 2048;
    const analyser = new Analyser(videoEl, fftSize);
    this.analyser = analyser;

  }

  update() {
    if (this.analyser && this.points) {
        this.points.material.uniforms.bass.value = this.analyser.getUpdateLowerMax();
      }
  }
}
