import * as THREE from 'three';
import * as TWEEN from 'es6-tween';
import Animate from 'utils/general/animate';
import FlashingStarShader from './FlashingStarShader';
import BlueStar from 'assets/images/bluestar.png';
import Orangestar from 'assets/images/orangestar.png';

export default function({ scene } = {}) {
  const blueStarTexture = new THREE.TextureLoader().load(BlueStar);
  blueStarTexture.wrapS = THREE.RepeatWrapping;
  blueStarTexture.wrapT = THREE.RepeatWrapping;

  const orangeStarTexture = new THREE.TextureLoader().load(Orangestar);
  orangeStarTexture.wrapS = THREE.RepeatWrapping;
  orangeStarTexture.wrapT = THREE.RepeatWrapping;

  const flashEffect = FlashingStarShader;
  flashEffect.uniforms.texture.value = blueStarTexture;
  const blueMaterial = new THREE.ShaderMaterial(flashEffect);

  const orangeMaterial = blueMaterial.clone();
  orangeMaterial.uniforms.texture.value = orangeStarTexture;

  const flashingStars = [
    new createFlashingStars({
      scene,
      material: blueMaterial,
      indices: [
        17,
        20,
        24,
        30,
        35,
        36,
        52,
        55,
        56,
        57,
        73,
        78,
        80,
        81,
        83,
        87,
        89,
        92,
        108,
        111,
        117,
        127,
        133,
      ],
      sphereVertices: new THREE.SphereGeometry(6.5, 12, 12).vertices,
    }),
    new createFlashingStars({
      scene,
      material: orangeMaterial,
      indices: [2, 4, 8, 12, 16, 20, 24, 28, 34, 36, 42, 43, 46, 53, 54, 57],
      sphereVertices: new THREE.SphereGeometry(9, 8, 8).vertices,
      position: {
        z: -7,
      },
    }),
    new createFlashingStars({
      scene,
      material: blueMaterial,
      indices: [2, 4, 8, 12, 16, 20, 24, 28, 34, 36, 42, 43, 46, 53, 54, 57],
      sphereVertices: new THREE.SphereGeometry(12, 8, 8).vertices,
    }),
    new createFlashingStars({
      scene,
      material: orangeMaterial,
      indices: [
        10,
        18,
        22,
        38,
        30,
        36,
        41,
        44,
        62,
        63,
        66,
        91,
        118,
        130,
        140,
        168,
        199,
        209,
        217,
        225,
        227,
        240,
      ],
      sphereVertices: new THREE.SphereGeometry(7, 16, 16).vertices,
      position: {
        z: -4,
      },
      rotation: {
        z: THREE.Math.degToRad(90),
      },
    }),
  ];

  this.update = ({ mouseX = 0, mouseY = 0 } = {}) => {
    flashingStars.map(group => group.update({ mouseX, mouseY }));
  };

  this.instances = flashingStars.map(flashingStar => flashingStar.instance);
}

function createFlashingStars({
  scene,
  indices,
  sphereVertices,
  material,
  position = {
    z: -5,
  },
  rotation = {
    z: 0,
  },
}) {
  const radius = 1;
  const vertices = [];

  for (let i = 0; i < sphereVertices.length; i++) {
    const vertex = sphereVertices[i];
    vertex.multiplyScalar(radius);

    if (indices.includes(i)) {
      vertices.push(vertex);
    }
  }

  const positions = new Float32Array(vertices.length * 3);
  const colors = new Float32Array(vertices.length * 3);
  const sizes = new Float32Array(vertices.length);

  let vertex = null;
  const color = new THREE.Color();

  for (let i = 0; i < vertices.length; i++) {
    vertex = vertices[i];
    vertex.toArray(positions, i * 3);

    color.toArray(colors, i * 3);

    sizes[i] = 6;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.addAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3, true)
  );
  geometry.addAttribute('ca', new THREE.BufferAttribute(colors, 3));
  geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const flashingStars = new THREE.Points(geometry, material);
  flashingStars.position.z = position.z;
  flashingStars.rotation.z = rotation.z;

  const group = new THREE.Group();
  group.add(flashingStars);
  scene.add(group);

  for (
    let i = 0;
    i < flashingStars.geometry.attributes.position.array.length;
    i += 3
  ) {
    const x = flashingStars.geometry.attributes.position.array[i];
    const y = flashingStars.geometry.attributes.position.array[i + 1];

    const coords = { x, y };

    Animate({
      from: coords,
      to: {
        x: coords.x + 1,
        y: coords.y + 0.5,
      },
      duration: 2000 * i,
      easing: TWEEN.Easing.Quadratic.Out,
      repeat: Infinity,
      yoyo: true,
      update: ({ x, y }) => {
        flashingStars.geometry.attributes.position.array[i] = x;
        flashingStars.geometry.attributes.position.array[i + 1] = y;
        flashingStars.geometry.attributes.position.needsUpdate = true;
      },
    });
  }

  this.update = ({ mouseX = 0, mouseY = 0 } = {}) => {
    const time = Date.now() * 0.005;
    const targetX = mouseX * 0.00025;
    const targetY = mouseY * 0.00025;

    const geometry = flashingStars.geometry;
    const attributes = geometry.attributes;

    for (let i = 0; i < attributes.size.array.length; i++) {
      attributes.size.array[i] = Math.sin(i + 0.25 * time);
    }

    flashingStars.rotation.y += 0.05 * -(targetX + flashingStars.rotation.y);
    flashingStars.rotation.x += 0.05 * -(targetY + flashingStars.rotation.x);

    attributes.size.needsUpdate = true;
  };

  this.instance = group;
}
