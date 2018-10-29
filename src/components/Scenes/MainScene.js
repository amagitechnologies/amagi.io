import React from 'react';
import Animate from 'utils/general/animate';
import SceneManager from '../SceneManager';
import FilmShader from './FilmShader';

import * as TWEEN from 'es6-tween';
import * as THREE from 'three';

import { RenderPass, ShaderPass } from 'three-effectcomposer-es6';
import {
  CubePoints,
  FlashingStars,
  GeneralLights,
  TealVignette,
} from '../SceneSubjects';

class MainScene extends React.Component {
  currentRotation = 0;

  componentDidMount = () => {
    this.sceneManager = new SceneManager({
      rootElement: this.wrapper,
    });

    const { scene, camera } = this.sceneManager;

    this.filmEffect = new ShaderPass(FilmShader);
    this.filmEffect.renderToScreen = true;

    const renderBackground = new RenderPass(scene, camera);

    this.sceneManager.composer.addPass(renderBackground);
    this.sceneManager.composer.addPass(this.filmEffect);

    this.flashingStars = new FlashingStars({ scene });
    this.cubePoints = new CubePoints({ scene });

    this.sceneManager.addSceneSubjects([
      new TealVignette({ scene }),
      this.cubePoints,
      this.flashingStars,
      new GeneralLights({ scene }),
    ]);

    window.addEventListener(
      'mousemove',
      this.sceneManager.onDocumentMouseMove,
      false
    );
    window.addEventListener(
      'resize',
      this.sceneManager.onDocumentResize,
      false
    );

    Animate({
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 1500,
      easing: TWEEN.Easing.Quadratic.In,
      update: ({ opacity }) => {
        this.wrapper.style.opacity = opacity;
      },
    });

    this.animate();
  };

  animate = () => {
    requestAnimationFrame(this.animate);

    this.sceneManager.update();

    this.filmEffect.uniforms.amount.value += 0.1;

    TWEEN.update();
  };

  nextPage = () => {
    Animate({
      from: {
        rotation: THREE.Math.degToRad(this.currentRotation),
        zoom: -1,
      },
      to: {
        rotation: THREE.Math.degToRad(this.currentRotation - 90),
        zoom: 0,
      },
      duration: 1250,
      easing: TWEEN.Easing.Back.InOut,
      update: ({ rotation, zoom }) => {
        this.flashingStars.instances.map(instance => {
          instance.rotation.y = rotation;
          return rotation;
        });

        this.cubePoints.instances.map(instance => {
          instance.position.z = zoom;
          return instance;
        });
      },
    });

    this.currentRotation -= 90;
  };

  previousPage = () => {
    Animate({
      from: {
        rotation: THREE.Math.degToRad(this.currentRotation),
        zoom: -1,
      },
      to: {
        rotation: THREE.Math.degToRad(this.currentRotation + 90),
        zoom: 0,
      },
      duration: 1250,
      easing: TWEEN.Easing.Back.InOut,
      update: ({ rotation, zoom }) => {
        this.flashingStars.instances.map(instance => {
          instance.rotation.y = rotation;
          return instance;
        });

        this.cubePoints.instances.map(instance => {
          instance.position.z = zoom;
          return instance;
        });
      },
    });

    this.currentRotation += 90;
  };

  render() {
    return (
      <div
        ref={instance => (this.wrapper = instance)}
        style={{
          width: '100vw',
          height: '100vh',
          opacity: 0,
        }}
      />
    );
  }
}

export default MainScene;
