import * as THREE from 'three';

export default {
  uniforms: {
    color: { value: new THREE.Color(0xffffff) },
    texture: { value: null },
  },
  vertexShader: [
    'attribute float size;',
    'attribute vec4 ca;',

    'varying vec4 vColor;',

    'void main() {',

    'vColor = ca;',

    'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',

    'gl_PointSize = size * ( 70.0 / -mvPosition.z );',

    'gl_Position = projectionMatrix * mvPosition;',
    '}',
  ].join('\n'),
  fragmentShader: [
    'uniform vec3 color;',
    'uniform sampler2D texture;',

    'varying vec4 vColor;',

    'void main() {',

    'vec4 outColor = texture2D( texture, gl_PointCoord );',

    'if ( outColor.a < 0.5 ) discard;',

    'gl_FragColor = outColor * vec4( color * vColor.xyz, 0.5 );',

    'float depth = gl_FragCoord.z / gl_FragCoord.w;',
    'const vec3 fogColor = vec3( 0.0 );',

    'float fogFactor = smoothstep( 200.0, 600.0, depth );',
    'gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );',
    '}',
  ].join('\n'),
};
