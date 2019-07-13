const vertexShader = `
  varying vec2 vUv;
  void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D texture1;
  uniform sampler2D texture2;
  uniform sampler2D texture3;
  uniform float textureId;

  void main() {
    vec2 uv = vUv;
    vec4 disp;
    if (textureId == 1.) {
      disp =  texture2D(texture1, uv);;
    }
    else if (textureId == 2.){
      disp = texture2D(texture2, uv);
    }
    else{
      disp = texture2D(texture3, uv);
    }
    gl_FragColor = disp;
  }`

export { vertexShader, fragmentShader }
