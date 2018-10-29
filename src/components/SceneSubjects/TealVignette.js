import * as THREE from 'three';
import Vignette from 'assets/images/vignette.png';

export default function({ scene } = {}) {
  const planeGeometry = new THREE.PlaneGeometry(20, 15, 1);
  const planeTexture = new THREE.TextureLoader().load(Vignette);
  const planeMaterial = new THREE.MeshBasicMaterial({
    map: planeTexture,
    depthTest: false,
    transparent: true,
    overdraw: 0.5,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
  });

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);

  this.update = () => {};
}
