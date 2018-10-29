import * as THREE from 'three';

export default function({ scene } = {}) {
  const cubePointsGeometry = new THREE.Geometry();
  const cubePointsVertices = new THREE.BoxGeometry(70, 40, 4, 60, 50).vertices;
  cubePointsGeometry.vertices = cubePointsVertices;
  const cubePointsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.02,
    transparent: true,
    opacity: 0.3,
  });

  const cubePoints = new THREE.Points(cubePointsGeometry, cubePointsMaterial);
  const group = new THREE.Group();
  group.add(cubePoints);

  scene.add(group);

  this.update = ({ mouseX = 0, mouseY = 0 } = {}) => {
    const targetX = mouseX * 0.00025;
    const targetY = mouseY * 0.00025;

    cubePoints.rotation.y += 0.05 * -(targetX + cubePoints.rotation.y);
    cubePoints.rotation.x += 0.05 * -(targetY + cubePoints.rotation.x);
  };

  this.instances = [group];
}
