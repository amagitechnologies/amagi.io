import * as THREE from 'three';

export default function({ scene = {} } = {}) {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
  directionalLight.position.set(-3, 1, 0);
  directionalLight.castShadow = true;

  scene.add(directionalLight);

  this.update = () => {};
}
