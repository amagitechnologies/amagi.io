import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';
import { OBJLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js";


const handleMobile = () => {
  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  const logoText = document.querySelector("article#hero > .logo__text");

  if (isMobile) {
    logoText.style.display = "initial";

    return true;
  }

  logoText.style.display = "none";
  return false;
}

document.addEventListener("resize", () => {
  handleMobile();
});

(function() {
  const isMobile = handleMobile();

  if (isMobile) return;

  // 'To actually be able to display anything with Three.js, we need three things:
  // A scene, a camera, and a renderer so we can render the scene with the camera.'
  // - https://threejs.org/docs/#Manual/Introduction/Creating_a_scene

  var scene, camera, renderer;

  // And for this animation, these, too:
  var HEIGHT, WIDTH,
      windowHalfX, windowHalfY,
      // fieldOfView, aspectRatio,
      // nearPlane,
      // farPlane,
      // cameraZ,
      // controls,
      container,
      loader,
      mouseX, mouseY;

  const hero = document.querySelector("article#hero");

  init();
  animate();

  function init() {
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      windowHalfX = WIDTH / 2;
      windowHalfY = HEIGHT / 2;

      mouseX = 0;
      mouseY = 0;

      // fieldOfView = 75;
      // aspectRatio = WIDTH / HEIGHT;
      // nearPlane = 0.1;
      // farPlane = 1000;

      /* 	fieldOfView — Camera frustum vertical field of view.
aspectRatio — Camera frustum aspect ratio.
nearPlane — Camera frustum near plane.
farPlane — Camera frustum far plane.

- https://threejs.org/docs/#Reference/Cameras/PerspectiveCamera

In geometry, a frustum (plural: frusta or frustums)
is the portion of a solid (normally a cone or pyramid)
that lies between two parallel planes cutting it. - wikipedia.		*/

      // camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
      camera = new THREE.OrthographicCamera(WIDTH / -2, WIDTH / 2, HEIGHT / 2, HEIGHT / -2, 1, 1000 );
      camera.position.z = 400;

      scene = new THREE.Scene();

      loader = new OBJLoader();

      loader.load('./assets/amagi-logo.obj', (obj) => {
        var box = new THREE.Box3().setFromObject( obj );
        var center = new THREE.Vector3();
        box.getCenter( center );
        obj.position.sub( center ); // center the model
        obj.castShadow = true;
        obj.scale.x = obj.scale.y = obj.scale.z = 1.3;
        scene.add(obj);
      }, (xhr) => {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      }, (error) => {
        console.error( error );
      });

      // Let there be light
      var ambient = new THREE.AmbientLight( 0x111111 );
      // ambient.castShadow = true;
      scene.add( ambient );

      // var light = new THREE.PointLight( 0xffffff, 1, 100 );
      // light.position.set( 0, 10, -1 );
      // light.castShadow = true;            // default false
      // scene.add( light );

      // And more light
      var directionalLight = new THREE.DirectionalLight( 0x333333 );
      directionalLight.position.set( 0, 1, 1 ).normalize();
      // directionalLight.castShadow = true;
      
      scene.add( directionalLight );

      // const spotLight = new THREE.SpotLight( 0xffffff );
      // spotLight.position.set( 100, 1000, 100 );
      
      // spotLight.castShadow = true;
      
      // spotLight.shadow.mapSize.width = 1024;
      // spotLight.shadow.mapSize.height = 1024;
      
      // spotLight.shadow.camera.near = 500;
      // spotLight.shadow.camera.far = 4000;
      // spotLight.shadow.camera.fov = 30;
      
      // scene.add( spotLight );

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      }); /*	Big and bold: AMAGI.	*/
      renderer.shadowMap.enabled = true;
      renderer.shadowMapSoft = true;

      renderer.shadowCameraNear = 3;
      renderer.shadowCameraFar = camera.far;
      renderer.shadowCameraFov = 50;

      renderer.shadowMapBias = 0.0039;
      renderer.shadowMapDarkness = 0.5;
      renderer.shadowMapWidth = 1024;
      renderer.shadowMapHeight = 1024;
      // renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
      renderer.setPixelRatio(window.devicePixelRatio); /*	Probably 1	*/
      renderer.setSize(WIDTH, HEIGHT); /*	Full screen	*/
      renderer.setClearColor( 0xffffff, 0); /* Oooh, see-through */

      // controls = new OrbitControls( camera, renderer.domElement );
      // controls.update();

      // 3... 2... 1... Lift off!
      container = document.createElement('div');
      hero.appendChild(container);
      hero.style.margin = 0;
      hero.style.padding = 0;
      hero.style.overflow = 'hidden';

      container.appendChild(renderer.domElement);

      /* Event Listeners */

      window.addEventListener('resize', onWindowResize, false);
      document.addEventListener('mousemove', onDocumentMouseMove, false);
      document.addEventListener('touchstart', onDocumentTouchStart, false);
      document.addEventListener('touchmove', onDocumentTouchMove, false);

  }

  function render() {
      camera.position.x = Math.max(-100, Math.min(100, camera.position.x + ((mouseX - camera.position.x) * 0.002)));
      camera.position.y = Math.max(-100, Math.min(100, camera.position.y + ((-mouseY - camera.position.y) * 0.002)));

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
  }

  function animate() {
      requestAnimationFrame(animate);
      
      // controls.update();

      render();
  }

  function onDocumentMouseMove(e) {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
  }

  /*	Mobile users?  I got your back homey	*/

  function onDocumentTouchStart(e) {

      if (e.touches.length === 1) {

          e.preventDefault();
          mouseX = e.touches[0].pageX - windowHalfX;
          mouseY = e.touches[0].pageY - windowHalfY;
      }
  }

  function onDocumentTouchMove(e) {

      if (e.touches.length === 1) {

          e.preventDefault();
          mouseX = e.touches[0].pageX - windowHalfX;
          mouseY = e.touches[0].pageY - windowHalfY;
      }
  }

  function onWindowResize() {

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  }
})();