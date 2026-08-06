import '../css/components/terrain-divider.css'

export default function TerrainDivider() {
  return (
    <div className="terrain-divider" aria-hidden="true">
      <svg
        className="terrain-divider-svg"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="td-band" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0e1f11" />
            <stop offset="50%" stopColor="#1a3a1e" />
            <stop offset="100%" stopColor="#0e1f11" />
          </linearGradient>
          <radialGradient id="td-glow" cx="50%" cy="35%" r="60%">
            <stop offset="0%" stopColor="rgba(232,176,64,0.28)" />
            <stop offset="100%" stopColor="rgba(232,176,64,0)" />
          </radialGradient>
        </defs>
        <rect width="1440" height="160" fill="url(#td-band)" />
        <rect width="1440" height="160" fill="url(#td-glow)" className="terrain-divider-glow" />
        <path
          d="M0,86 C240,50 480,116 720,84 C960,52 1200,110 1440,80 L1440,160 L0,160 Z"
          fill="rgba(74,138,82,0.16)"
        />
        <path
          d="M0,92 C240,64 480,108 720,92 C960,64 1200,104 1440,90"
          fill="none"
          stroke="rgba(200,146,26,0.4)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}
