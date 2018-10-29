import EffectsComposer from 'three-effectcomposer-es6';
import * as THREE from 'three';

class SceneManager {
  constructor({ rootElement } = {}) {
    const screenDimensions = {
      width: rootElement.clientWidth,
      height: rootElement.clientHeight,
    };

    this.mouseX = 0;
    this.mouseY = 0;
    this.sceneSubjects = [];
    this.rootElement = rootElement;
    this.webglRenderer = this.buildRenderer({ rootElement, screenDimensions });
    this.perpectiveCamera = this.buildCamera({ screenDimensions });
    this.sceneDisplay = this.buildScene();
    this.effectsComposer = this.buildComposer();
  }

  addSceneSubjects = (subjects = []) => {
    this.sceneSubjects.push(...subjects);
  };

  buildRenderer = ({ rootElement, screenDimensions = {} } = {}) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setClearColor(0x000000);
    renderer.shadowMapEnabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setSize(screenDimensions.width, screenDimensions.height);
    rootElement.appendChild(renderer.domElement);

    return renderer;
  };

  buildScene = () => {
    const scene = new THREE.Scene();

    return scene;
  };

  buildCamera = ({ screenDimensions = {} } = {}) => {
    const FOV = 75;
    const ASPECT = screenDimensions.width / screenDimensions.height;
    const NEAR = 0.1;
    const FAR = 1000;

    const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
    camera.position.set(0, 0, 5);

    return camera;
  };

  buildComposer = () => {
    const composer = new EffectsComposer(this.webglRenderer);

    return composer;
  };

  onDocumentResize = () => {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    this.perpectiveCamera.aspect = WIDTH / HEIGHT;
    this.perpectiveCamera.updateProjectionMatrix();

    this.webglRenderer.setSize(WIDTH, HEIGHT);
  };

  onDocumentMouseMove = event => {
    this.mouseX = event.clientX - this.rootElement.clientWidth / 2;
    this.mouseY = event.clientY - this.rootElement.clientHeight / 2;
  };

  update = () => {
    this.sceneSubjects.map(subject => {
      if (subject.update) {
        subject.update({
          mouseX: this.mouseX,
          mouseY: this.mouseY,
        });
      }

      return subject;
    });

    this.effectsComposer.render();
  };

  get renderer() {
    return this.webglRenderer;
  }

  get camera() {
    return this.perpectiveCamera;
  }

  get scene() {
    return this.sceneDisplay;
  }

  get composer() {
    return this.effectsComposer;
  }
}

export default SceneManager;
