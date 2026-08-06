import {
  WebGLRenderer, Scene, PerspectiveCamera, Clock,
  BufferGeometry, BufferAttribute, Points, ShaderMaterial,
  Color,
} from 'three';

const vertexShader = `
attribute float aLayer;
uniform float uTime;
uniform float uScroll;

varying float vAlpha;
varying float vLayer;

void main() {
  vLayer = aLayer;

  vec3 pos = position;

  // parallax: each layer scrolls at different speed
  float speed = 0.3 + aLayer * 0.7;
  pos.y += uScroll * speed * 0.002;

  // gentle float
  pos.x += sin(uTime * 0.2 + position.y * 0.5 + aLayer * 2.0) * 0.15;
  pos.y += sin(uTime * 0.15 + position.x * 0.3) * 0.08;

  // wrap vertically
  pos.y = mod(pos.y + 8.0, 16.0) - 8.0;

  vAlpha = 0.22 + aLayer * 0.18;

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = (2.0 + aLayer * 1.6) * (46.0 / -mvPos.z);
  gl_Position = projectionMatrix * mvPos;
}
`;

const fragmentShader = `
varying float vAlpha;
varying float vLayer;

void main() {
  // circular particle
  float dist = length(gl_PointCoord - vec2(0.5));
  if (dist > 0.5) discard;

  float alpha = vAlpha * smoothstep(0.5, 0.2, dist);

  // luciérnagas doradas + acento verde selva por capa
  vec3 color1 = vec3(0.78, 0.57, 0.16); // dorado
  vec3 color2 = vec3(0.33, 0.45, 0.18); // verde oliva
  vec3 color3 = vec3(0.91, 0.69, 0.25); // dorado claro
  vec3 color = mix(mix(color1, color2, step(0.33, vLayer)), color3, step(0.66, vLayer));

  gl_FragColor = vec4(color, alpha);
}
`;

export default class ParticleField {
  constructor(canvas) {
    this._canvas = canvas;
    this._raf = null;
    this._clock = null;
    this._renderer = null;
    this._disposed = false;
    this._scrollY = 0;
    this._resizeObs = null;
    this._animate = this._animate.bind(this);
  }

  init() {
    const rect = this._canvas.parentElement?.getBoundingClientRect()
      || this._canvas.getBoundingClientRect();
    const w = rect.width || 800;
    const h = rect.height || 400;

    try {
      this._renderer = new WebGLRenderer({
        canvas: this._canvas,
        antialias: false,
        alpha: true,
      });
    } catch {
      this._disposed = true;
      return this;
    }
    this._renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this._renderer.setSize(w, h);
    this._renderer.setClearColor(0x000000, 0);

    this._camera = new PerspectiveCamera(50, w / h, 0.1, 100);
    this._camera.position.z = 12;

    this._scene = new Scene();

    const COUNT = 1100;
    const positions = new Float32Array(COUNT * 3);
    const layers = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      layers[i] = Math.random();
    }

    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(positions, 3));
    geo.setAttribute('aLayer', new BufferAttribute(layers, 1));

    this._material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime:   { value: 0 },
        uScroll: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
    });

    this._scene.add(new Points(geo, this._material));

    this._resizeObs = new ResizeObserver(entries => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width === 0 || height === 0) return;
      this._renderer.setSize(width, height);
      this._camera.aspect = width / height;
      this._camera.updateProjectionMatrix();
    });
    this._resizeObs.observe(this._canvas.parentElement || this._canvas);

    this._clock = new Clock();
    this._animate();
    return this;
  }

  updateScroll(scrollY) {
    this._scrollY = scrollY;
  }

  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    cancelAnimationFrame(this._raf);
    this._resizeObs?.disconnect();
    this._scene.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
    this._renderer.dispose();
  }

  _animate() {
    if (this._disposed) return;
    this._raf = requestAnimationFrame(this._animate);
    this._material.uniforms.uTime.value = this._clock.getElapsedTime();
    this._material.uniforms.uScroll.value = this._scrollY;
    this._renderer.render(this._scene, this._camera);
  }
}
