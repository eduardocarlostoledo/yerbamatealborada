import {
  WebGLRenderer, Scene, OrthographicCamera, Clock,
  InstancedMesh, Object3D, SphereGeometry,
  MeshBasicMaterial, Color,
} from 'three';

const PARTICLE_COUNT = 40;

export default class ProductCardEffect {
  constructor(canvas) {
    this._canvas = canvas;
    this._raf = null;
    this._clock = null;
    this._renderer = null;
    this._running = false;
    this._disposed = false;
    this._dummy = new Object3D();
    this._velocities = [];
    this._animate = this._animate.bind(this);
  }

  init() {
    const w = this._canvas.width || 300;
    const h = this._canvas.height || 250;

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

    this._camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    this._camera.position.z = 2;

    this._scene = new Scene();

    const geo = new SphereGeometry(0.02, 6, 4);
    const mat = new MeshBasicMaterial({
      color: new Color(0xd4a520),
      transparent: true,
      opacity: 0.6,
    });

    this._mesh = new InstancedMesh(geo, mat, PARTICLE_COUNT);
    this._scene.add(this._mesh);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this._velocities.push({
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.004,
        px: (Math.random() - 0.5) * 1.6,
        py: (Math.random() - 0.5) * 1.6,
        scale: 0.5 + Math.random() * 1.5,
      });
    }

    this._updatePositions();
    this._clock = new Clock();
    return this;
  }

  start() {
    if (this._running || this._disposed) return;
    this._running = true;
    this._clock.start();
    this._animate();
  }

  stop() {
    this._running = false;
    cancelAnimationFrame(this._raf);
    this._renderer?.clear();
  }

  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    this.stop();
    this._scene.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
    this._renderer.dispose();
  }

  _updatePositions() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const v = this._velocities[i];
      this._dummy.position.set(v.px, v.py, 0);
      this._dummy.scale.setScalar(v.scale);
      this._dummy.updateMatrix();
      this._mesh.setMatrixAt(i, this._dummy.matrix);
    }
    this._mesh.instanceMatrix.needsUpdate = true;
  }

  _animate() {
    if (!this._running || this._disposed) return;
    this._raf = requestAnimationFrame(this._animate);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const v = this._velocities[i];
      v.px += v.x;
      v.py += v.y;
      if (Math.abs(v.px) > 1.2) v.x *= -1;
      if (Math.abs(v.py) > 1.2) v.y *= -1;
    }

    this._updatePositions();
    this._renderer.render(this._scene, this._camera);
  }
}
