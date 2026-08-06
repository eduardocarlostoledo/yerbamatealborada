import { LoadingManager } from 'three';

export default class SceneLoader {
  constructor(onProgress, onComplete) {
    this._onProgress = onProgress;
    this._onComplete = onComplete;
    this._startTime = Date.now();
    this._minDuration = 2500;

    this.manager = new LoadingManager(
      () => this._handleComplete(),
      (url, loaded, total) => {
        const pct = total > 0 ? loaded / total : 0;
        this._onProgress?.(Math.min(pct, 0.95));
      }
    );
  }

  _handleComplete() {
    const elapsed = Date.now() - this._startTime;
    const remaining = Math.max(0, this._minDuration - elapsed);
    setTimeout(() => {
      this._onProgress?.(1);
      setTimeout(() => this._onComplete?.(), 300);
    }, remaining);
  }

  simulateLoad() {
    let pct = 0;
    const iv = setInterval(() => {
      pct += 0.12 + Math.random() * 0.08;
      if (pct >= 0.95) {
        clearInterval(iv);
        this._handleComplete();
        return;
      }
      this._onProgress?.(pct);
    }, 100);
  }
}
