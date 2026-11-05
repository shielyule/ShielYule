import React from 'react';

/**
 * 70s Retro Space Visual Elements
 * Inspired by NASA Graphic Standards Manual (1975), Swiss international typography,
 * and classic aerospace telemetry schematics.
 */

export function RetroRainbowStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`flex h-1.5 w-full overflow-hidden ${className}`}>
      <div className="flex-1 bg-[#C85A32]" title="Burnt Orange" />
      <div className="flex-1 bg-[#D99B38]" title="Warm Ochre" />
      <div className="flex-1 bg-[#C4B062]" title="Muted Gold" />
      <div className="flex-1 bg-[#4A7C7D]" title="Dusty Spruce" />
    </div>
  );
}

export function RetroVerticalStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col w-1.5 overflow-hidden ${className}`}>
      <div className="flex-1 bg-[#C85A32]" />
      <div className="flex-1 bg-[#D99B38]" />
      <div className="flex-1 bg-[#C4B062]" />
      <div className="flex-1 bg-[#4A7C7D]" />
    </div>
  );
}

export function OrbitalSchematic({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D99B38" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D99B38" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Coordinate grid lines */}
      <line x1="20" y1="150" x2="380" y2="150" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 3" />
      <line x1="200" y1="20" x2="200" y2="280" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 3" />

      {/* Central celestial body */}
      <circle cx="200" cy="150" r="44" fill="url(#sunGlow)" />
      <circle cx="200" cy="150" r="28" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="4" fill="#C85A32" />

      {/* Orbital ellipses */}
      <ellipse
        cx="200"
        cy="150"
        rx="140"
        ry="65"
        stroke="#D99B38"
        strokeOpacity="0.5"
        strokeWidth="1.2"
        transform="rotate(-18 200 150)"
      />
      <ellipse
        cx="200"
        cy="150"
        rx="175"
        ry="80"
        stroke="#4A7C7D"
        strokeOpacity="0.4"
        strokeWidth="1"
        strokeDasharray="4 4"
        transform="rotate(12 200 150)"
      />
      <ellipse
        cx="200"
        cy="150"
        rx="95"
        ry="42"
        stroke="#C4B062"
        strokeOpacity="0.45"
        strokeWidth="1.2"
        transform="rotate(-35 200 150)"
      />

      {/* Orbital node indicators */}
      <circle cx="95" cy="120" r="4" fill="#D99B38" />
      <circle cx="310" cy="175" r="3" fill="#4A7C7D" />
      <circle cx="270" cy="130" r="2.5" fill="#C85A32" />

      {/* Telemetry tick marks */}
      <path d="M 180 30 L 220 30" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M 200 25 L 200 35" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      <text x="230" y="34" fill="currentColor" fillOpacity="0.4" fontSize="9" fontFamily="monospace">
        ORBIT 2026.9 · TR-01
      </text>

      <text x="30" y="270" fill="currentColor" fillOpacity="0.35" fontSize="8" fontFamily="monospace">
        SYS.GOV: 55.9533° N / 3.1883° W
      </text>
    </svg>
  );
}

export function ProjectSchematicCard({
  projectId,
  title,
}: {
  projectId: string;
  title: string;
}) {
  if (projectId.includes('skateboard-scotland')) {
    return (
      <div className="relative w-full h-44 bg-[#F4F4F2] flex items-center justify-between px-6 py-4 border-b border-stone-800/80 overflow-hidden">
        <div className="space-y-1.5 max-w-[150px]">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-[#1D4ED8]/10 text-[#1D4ED8] border border-[#1D4ED8]/30">
            <span>SPORTSCOTLAND NGB</span>
          </div>
          <h4 className="text-xs font-mono text-[#0E1015] font-bold tracking-wider">SKATEBOARD SCOTLAND</h4>
          <p className="text-[11px] text-stone-600 font-mono leading-tight">
            Founded, chaired, then handed to younger skaters.
          </p>
        </div>
        <div className="relative w-32 h-28 rounded-xl bg-white border border-stone-300/80 flex items-center justify-center p-2 shadow-inner">
          <img
            src="/assets/aistudio/skateboard-scotland.png"
            alt="Skateboard Scotland logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  if (projectId.includes('complaint-path')) {
    // ComplaintPath: UK Statutory Redress Router with Hard Gates & Human-Approved Packs
    return (
      <div className="relative w-full h-44 bg-[#12141C] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Statutory Redress Pipeline Grid */}
          <rect x="20" y="30" width="70" height="100" rx="3" stroke="#D99B38" strokeWidth="1.2" strokeOpacity="0.7" fill="#181512" />
          <text x="28" y="48" fill="#D99B38" fontSize="7" fontFamily="monospace" fontWeight="bold">LETTER INTAKE</text>
          <line x1="28" y1="56" x2="82" y2="56" stroke="#D99B38" strokeOpacity="0.4" />
          <text x="28" y="70" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">ZETARIS CLOCKS</text>
          <text x="28" y="84" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">NEMOTRON EXTRACT</text>
          <text x="28" y="98" fill="#38A169" fontSize="6.5" fontFamily="monospace">BRIGHT DATA CONTEXT</text>

          {/* Pipeline Connector */}
          <path d="M 90 80 L 130 80" stroke="#D99B38" strokeWidth="1.2" strokeDasharray="3 3" />
          <polygon points="128,77 136,80 128,83" fill="#D99B38" />

          {/* Hard Jurisdictional Gate State Machine */}
          <rect x="136" y="25" width="85" height="110" rx="4" stroke="#4A7C7D" strokeWidth="1.5" fill="#131B1D" />
          <text x="146" y="44" fill="#4A7C7D" fontSize="7.5" fontFamily="monospace" fontWeight="bold">HARD JURISDICTION</text>
          <line x1="146" y1="50" x2="211" y2="50" stroke="#4A7C7D" strokeOpacity="0.4" />
          <text x="146" y="66" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">1. ELIGIBLE</text>
          <text x="146" y="80" fill="#C85A32" fontSize="6.5" fontFamily="monospace">2. PREMATURE</text>
          <text x="146" y="94" fill="#C85A32" fontSize="6.5" fontFamily="monospace">3. OUT OF TIME</text>
          <text x="146" y="108" fill="#C85A32" fontSize="6.5" fontFamily="monospace">4. WRONG DOOR</text>
          <text x="146" y="124" fill="#D99B38" fontSize="6" fontFamily="monospace">BLOCKED IF NO DATES</text>

          {/* Connector to Human Pack Approval */}
          <path d="M 221 80 L 250 80" stroke="#C4B062" strokeWidth="1.2" />
          <polygon points="248,77 256,80 248,83" fill="#C4B062" />

          <rect x="256" y="45" width="55" height="70" rx="3" stroke="#C4B062" strokeWidth="1.2" fill="#1C1A14" />
          <text x="262" y="62" fill="#C4B062" fontSize="7" fontFamily="monospace" fontWeight="bold">HUMAN</text>
          <text x="262" y="75" fill="#C4B062" fontSize="6.5" fontFamily="monospace">PACK</text>
          <text x="262" y="88" fill="#C4B062" fontSize="6.5" fontFamily="monospace">APPROVAL</text>
          <circle cx="283" cy="102" r="4" fill="#38A169" />
        </svg>
      </div>
    );
  }

  if (projectId.includes('countermark')) {
    // Countermark: Consumer dispute drafting with confidence-badged routing and self-send handoff
    return (
      <div className="relative w-full h-44 bg-[#131A17] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Dispute Intake & Extraction Grid */}
          <rect x="20" y="28" width="90" height="104" rx="3" stroke="#38A169" strokeWidth="1.2" fill="#141C18" />
          <text x="28" y="46" fill="#38A169" fontSize="7" fontFamily="monospace" fontWeight="bold">DISPUTE INTAKE</text>
          <line x1="28" y1="52" x2="102" y2="52" stroke="#38A169" strokeOpacity="0.4" />
          <text x="28" y="66" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">PASTE OR PDF/JPEG</text>
          <text x="28" y="80" fill="#D99B38" fontSize="6.5" fontFamily="monospace">GEMINI VISION EXTRACTION</text>
          <text x="28" y="94" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">MERCHANT & AMOUNT</text>
          <text x="28" y="108" fill="#38A169" fontSize="6.5" fontFamily="monospace">BREACH SUMMARY</text>

          {/* Connector */}
          <path d="M 110 80 L 138 80" stroke="#38A169" strokeWidth="1.2" strokeDasharray="3 3" />
          <polygon points="136,77 144,80 136,83" fill="#38A169" />

          {/* Confidence Routing & Tone Variants */}
          <rect x="144" y="28" width="156" height="104" rx="3" stroke="#D99B38" strokeWidth="1.2" fill="#18201A" />
          <text x="154" y="46" fill="#D99B38" fontSize="7" fontFamily="monospace" fontWeight="bold">ROUTING & TONE VARIANTS</text>
          <line x1="154" y1="52" x2="290" y2="52" stroke="#D99B38" strokeOpacity="0.4" />
          <text x="154" y="66" fill="#38A169" fontSize="6.5" fontFamily="monospace">HIGH / INFERRED / NONE BADGES</text>
          <text x="154" y="80" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">POLITE · ASSERTIVE · REGULATORY</text>
          <text x="154" y="94" fill="#C85A32" fontSize="6.5" fontFamily="monospace">USER RETAINS SEND CONTROL (MAILTO)</text>
          <text x="154" y="112" fill="#C4B062" fontSize="6.5" fontFamily="monospace">SESSION ZERO-RETENTION (NO DB)</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('undo')) {
    // UNDO: Prove-the-previous-package gate with supervised promote
    return (
      <div className="relative w-full h-44 bg-[#14161B] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* GitLab CI Pipeline State Machine */}
          <rect x="20" y="32" width="280" height="96" rx="4" stroke="#4A7C7D" strokeWidth="1.2" fill="#131820" />
          <text x="30" y="50" fill="#4A7C7D" fontSize="7.5" fontFamily="monospace" fontWeight="bold">GITLAB DUO & CI PIPELINE STATE MACHINE</text>
          <line x1="30" y1="56" x2="290" y2="56" stroke="#4A7C7D" strokeOpacity="0.3" />

          {/* Pipeline Nodes */}
          <g transform="translate(30, 68)">
            <rect width="52" height="46" rx="2" fill="#1C2430" stroke="#4A7C7D" strokeWidth="1" />
            <text x="6" y="18" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace" fontWeight="bold">TEST</text>
            <text x="6" y="32" fill="#38A169" fontSize="6" fontFamily="monospace">PASS</text>
          </g>
          <path d="M 82 91 L 100 91" stroke="#4A7C7D" strokeWidth="1" />

          <g transform="translate(100, 68)">
            <rect width="60" height="46" rx="2" fill="#1C2430" stroke="#D99B38" strokeWidth="1" />
            <text x="6" y="18" fill="#D99B38" fontSize="6.5" fontFamily="monospace" fontWeight="bold">PROVE_</text>
            <text x="6" y="28" fill="#D99B38" fontSize="6.5" fontFamily="monospace" fontWeight="bold">ROLLBACK</text>
            <text x="6" y="40" fill="#38A169" fontSize="6" fontFamily="monospace">ROLLBACK_OK</text>
          </g>
          <path d="M 160 91 L 178 91" stroke="#D99B38" strokeWidth="1" />

          <g transform="translate(178, 68)">
            <rect width="55" height="46" rx="2" fill="#1C2430" stroke="#C4B062" strokeWidth="1" />
            <text x="6" y="18" fill="#C4B062" fontSize="6.5" fontFamily="monospace" fontWeight="bold">DUO WORK</text>
            <text x="6" y="30" fill="#C4B062" fontSize="6.5" fontFamily="monospace" fontWeight="bold">ITEM APPROVE</text>
          </g>
          <path d="M 233 91 L 251 91" stroke="#C4B062" strokeWidth="1" />

          <g transform="translate(251, 68)">
            <rect width="45" height="46" rx="2" fill="#1C2430" stroke="#C85A32" strokeWidth="1" />
            <text x="6" y="18" fill="#C85A32" fontSize="6.5" fontFamily="monospace" fontWeight="bold">PROMOTE</text>
            <text x="6" y="32" fill="#EDE8DC" fontSize="6" fontFamily="monospace">PROD RUN</text>
          </g>
        </svg>
      </div>
    );
  }

  if (projectId.includes('truce')) {
    // Truce: Taste Overlap for Divided Tables — Powered by Qloo
    return (
      <div className="relative w-full h-44 bg-[#1A1612] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Left Table Profile */}
          <rect x="20" y="30" width="80" height="100" rx="3" stroke="#C85A32" strokeWidth="1.2" fill="#201714" />
          <text x="28" y="48" fill="#C85A32" fontSize="7" fontFamily="monospace" fontWeight="bold">LEFT TABLE</text>
          <line x1="28" y1="54" x2="92" y2="54" stroke="#C85A32" strokeOpacity="0.4" />
          <text x="28" y="70" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">MEDIA DIET</text>
          <text x="28" y="84" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">PODCASTS</text>
          <text x="28" y="98" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">FILM PREFS</text>

          {/* Qloo Bridge Intersection */}
          <circle cx="160" cy="80" r="32" fill="#D99B38" fillOpacity="0.15" stroke="#D99B38" strokeWidth="1.5" />
          <circle cx="160" cy="80" r="18" fill="#D99B38" fillOpacity="0.3" stroke="#D99B38" strokeWidth="1" />
          <text x="136" y="77" fill="#EDE8DC" fontSize="7" fontFamily="monospace" fontWeight="bold">QLOO</text>
          <text x="132" y="89" fill="#C4B062" fontSize="6" fontFamily="monospace">AFFINITY</text>

          {/* Right Table Profile */}
          <rect x="220" y="30" width="80" height="100" rx="3" stroke="#4A7C7D" strokeWidth="1.2" fill="#141D20" />
          <text x="228" y="48" fill="#4A7C7D" fontSize="7" fontFamily="monospace" fontWeight="bold">RIGHT TABLE</text>
          <line x1="228" y1="54" x2="292" y2="54" stroke="#4A7C7D" strokeOpacity="0.4" />
          <text x="228" y="70" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">CULTURE</text>
          <text x="228" y="84" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">MUSIC TASTE</text>
          <text x="228" y="98" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">ART & BOOKS</text>

          {/* Connecting Vectors */}
          <line x1="100" y1="80" x2="128" y2="80" stroke="#D99B38" strokeWidth="1.2" strokeDasharray="2 2" />
          <line x1="192" y1="80" x2="220" y2="80" stroke="#D99B38" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      </div>
    );
  }

  if (projectId.includes('ghost')) {
    // GhostMerchant: Zero-Trust PayPal Escrow for Autonomous Buyers
    return (
      <div className="relative w-full h-44 bg-[#161218] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Policy Firewall & Velocity Circuit Breaker */}
          <rect x="20" y="28" width="85" height="104" rx="3" stroke="#9333EA" strokeWidth="1.2" fill="#1C1422" />
          <text x="28" y="46" fill="#C084FC" fontSize="7" fontFamily="monospace" fontWeight="bold">POLICY FIREWALL</text>
          <line x1="28" y1="52" x2="97" y2="52" stroke="#9333EA" strokeOpacity="0.4" />
          <text x="28" y="66" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">MAX SPEND LIMITS</text>
          <text x="28" y="80" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">VELOCITY CAPS</text>
          <text x="28" y="94" fill="#38A169" fontSize="6.5" fontFamily="monospace">VENDOR TRUST OK</text>

          {/* PayPal Authorize Hold */}
          <path d="M 105 80 L 132 80" stroke="#C084FC" strokeWidth="1.2" strokeDasharray="3 3" />
          <polygon points="130,77 138,80 130,83" fill="#C084FC" />

          <rect x="138" y="28" width="75" height="104" rx="3" stroke="#3B82F6" strokeWidth="1.2" fill="#141824" />
          <text x="146" y="46" fill="#60A5FA" fontSize="7" fontFamily="monospace" fontWeight="bold">PAYPAL ESCROW</text>
          <line x1="146" y1="52" x2="205" y2="52" stroke="#3B82F6" strokeOpacity="0.4" />
          <text x="146" y="66" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">AUTHORIZE HOLD</text>
          <text x="146" y="80" fill="#D99B38" fontSize="6.5" fontFamily="monospace">DELIVERY PROBE</text>
          <text x="146" y="98" fill="#38A169" fontSize="6.5" fontFamily="monospace">CAPTURE / VOID</text>

          {/* Forensic Dispute Dossier */}
          <path d="M 213 80 L 235 80" stroke="#3B82F6" strokeWidth="1.2" />
          <polygon points="233,77 241,80 233,83" fill="#3B82F6" />

          <rect x="241" y="45" width="60" height="70" rx="3" stroke="#C084FC" strokeWidth="1.2" fill="#1E1424" />
          <text x="247" y="62" fill="#C084FC" fontSize="7" fontFamily="monospace" fontWeight="bold">DOSSIER</text>
          <text x="247" y="76" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">FORENSIC</text>
          <text x="247" y="90" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">AUDIT LOG</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('ally')) {
    // Legal AI / Case-File Document Grounding Schematic
    return (
      <div className="relative w-full h-44 bg-stone-900/60 flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Grounding Grid */}
          <rect x="20" y="20" width="70" height="110" rx="3" stroke="#D99B38" strokeWidth="1.2" strokeOpacity="0.7" fill="#1C1814" />
          <line x1="30" y1="40" x2="75" y2="40" stroke="#D99B38" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="30" y1="52" x2="80" y2="52" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
          <line x1="30" y1="64" x2="70" y2="64" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
          <line x1="30" y1="76" x2="78" y2="76" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
          <text x="30" y="115" fill="#D99B38" fontSize="8" fontFamily="monospace">GOV.UK / ACAS</text>

          {/* Verification Pipeline Link */}
          <path d="M 90 75 L 140 75" stroke="#D99B38" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="115" cy="75" r="3" fill="#C85A32" />

          {/* Central AI Extraction Node */}
          <circle cx="165" cy="75" r="28" stroke="#4A7C7D" strokeWidth="1.5" fill="#121D20" />
          <circle cx="165" cy="75" r="20" stroke="#4A7C7D" strokeDasharray="2 2" strokeOpacity="0.6" />
          <text x="145" y="78" fill="#EDE8DC" fontSize="8" fontFamily="monospace" fontWeight="bold">GEMINI</text>

          {/* Human-in-the-Loop Confirmation Gate */}
          <path d="M 193 75 L 235 75" stroke="#C4B062" strokeWidth="1.2" />
          <polygon points="230,72 238,75 230,78" fill="#C4B062" />

          <rect x="238" y="45" width="65" height="60" rx="4" stroke="#C4B062" strokeWidth="1.2" fill="#1C1A14" />
          <text x="245" y="65" fill="#C4B062" fontSize="8" fontFamily="monospace" fontWeight="bold">HUMAN</text>
          <text x="245" y="78" fill="#C4B062" fontSize="7" fontFamily="monospace">CONFIRM</text>
          <circle cx="288" cy="72" r="4" fill="#38A169" />
        </svg>
      </div>
    );
  }

  if (projectId.includes('countermark')) {
    // Countermark Brand Schematic with uploaded countermark logo
    return (
      <div className="relative w-full h-44 bg-[#131A17] flex items-center justify-between px-6 py-4 border-b border-stone-800/80 overflow-hidden">
        <div className="space-y-1.5 max-w-[160px]">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-[#38A169]/10 text-[#38A169] border border-[#38A169]/30">
            <span>CONFIDENCE GATE</span>
          </div>
          <h4 className="text-xs font-mono text-[#EDE8DC] font-bold tracking-wider">COUNTERMARK</h4>
          <p className="text-[11px] text-stone-400 font-mono leading-tight">Consumer dispute drafting & self-send handoff.</p>
        </div>
        <div className="relative w-28 h-28 rounded-xl bg-[#182420] border border-stone-700/80 flex items-center justify-center p-2 shadow-inner">
          <img
            src="/assets/aistudio/countermark-logo_ccbbf6ae.png"
            alt="Countermark Logo"
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#D99B38]" title="Verified Routing" />
        </div>
      </div>
    );
  }

  if (projectId.includes('undo')) {
    // UNDO Brand Schematic with uploaded undo logo
    return (
      <div className="relative w-full h-44 bg-[#14161B] flex items-center justify-between px-6 py-4 border-b border-stone-800/80 overflow-hidden">
        <div className="space-y-1.5 max-w-[160px]">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-[#4A7C7D]/10 text-[#4A7C7D] border border-[#4A7C7D]/30">
            <span>ROLLBACK GATE</span>
          </div>
          <h4 className="text-xs font-mono text-[#EDE8DC] font-bold tracking-wider">UNDO</h4>
          <p className="text-[11px] text-stone-400 font-mono leading-tight">Prove-the-previous-package with supervised promote.</p>
        </div>
        <div className="relative w-28 h-28 rounded-xl bg-[#1C222D] border border-stone-700/80 flex items-center justify-center p-2 shadow-inner">
          <img
            src="/assets/aistudio/undo_small2_78e31f1e.jpeg"
            alt="UNDO Logo"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#38A169]" title="Rollback OK" />
        </div>
      </div>
    );
  }

  if (projectId.includes('truce')) {
    // Truce Brand Schematic with uploaded truce logo
    return (
      <div className="relative w-full h-44 bg-[#1A1612] flex items-center justify-between px-6 py-4 border-b border-stone-800/80 overflow-hidden">
        <div className="space-y-1.5 max-w-[160px]">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-[#C85A32]/10 text-[#C85A32] border border-[#C85A32]/30">
            <span>QLOO TASTE GRAPH</span>
          </div>
          <h4 className="text-xs font-mono text-[#EDE8DC] font-bold tracking-wider">TRUCE</h4>
          <p className="text-[11px] text-stone-400 font-mono leading-tight">Taste overlap for divided tables & bridge cards.</p>
        </div>
        <div className="relative w-28 h-28 rounded-xl bg-[#251F1A] border border-stone-700/80 flex items-center justify-center p-2 shadow-inner">
          <img
            src="/assets/aistudio/Truce_just_circle_d011ae7d.jpeg"
            alt="Truce Logo"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#D99B38]" title="Taste Affinity Active" />
        </div>
      </div>
    );
  }

  if (projectId.includes('ghost')) {
    // GhostMerchant Brand Schematic with uploaded ghostmerchant logo
    return (
      <div className="relative w-full h-44 bg-[#161218] flex items-center justify-between px-6 py-4 border-b border-stone-800/80 overflow-hidden">
        <div className="space-y-1.5 max-w-[160px]">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
            <span>PAYPAL ESCROW</span>
          </div>
          <h4 className="text-xs font-mono text-[#EDE8DC] font-bold tracking-wider">GHOSTMERCHANT</h4>
          <p className="text-[11px] text-stone-400 font-mono leading-tight">Zero-trust escrow & policy firewall for buyers.</p>
        </div>
        <div className="relative w-28 h-28 rounded-xl bg-[#221B25] border border-stone-700/80 flex items-center justify-center p-2 shadow-inner">
          <img
            src="/assets/aistudio/Ghostmerchant_dark_9ba710c4.jpeg"
            alt="GhostMerchant Logo"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-400" title="Zero-Trust Hold Active" />
        </div>
      </div>
    );
  }

  if (projectId.includes('ally')) {
    // Legal AI / Case-File Document Grounding Schematic
    return (
      <div className="relative w-full h-44 bg-stone-900/60 flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Grounding Grid */}
          <rect x="20" y="20" width="70" height="110" rx="3" stroke="#D99B38" strokeWidth="1.2" strokeOpacity="0.7" fill="#1C1814" />
          <line x1="30" y1="40" x2="75" y2="40" stroke="#D99B38" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="30" y1="52" x2="80" y2="52" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
          <line x1="30" y1="64" x2="70" y2="64" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
          <line x1="30" y1="76" x2="78" y2="76" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
          <text x="30" y="115" fill="#D99B38" fontSize="8" fontFamily="monospace">GOV.UK / ACAS</text>

          {/* Verification Pipeline Link */}
          <path d="M 90 75 L 140 75" stroke="#D99B38" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="115" cy="75" r="3" fill="#C85A32" />

          {/* Central AI Extraction Node */}
          <circle cx="165" cy="75" r="28" stroke="#4A7C7D" strokeWidth="1.5" fill="#121D20" />
          <circle cx="165" cy="75" r="20" stroke="#4A7C7D" strokeDasharray="2 2" strokeOpacity="0.6" />
          <text x="145" y="78" fill="#EDE8DC" fontSize="8" fontFamily="monospace" fontWeight="bold">GEMINI</text>

          {/* Human-in-the-Loop Confirmation Gate */}
          <path d="M 193 75 L 235 75" stroke="#C4B062" strokeWidth="1.2" />
          <polygon points="230,72 238,75 230,78" fill="#C4B062" />

          <rect x="238" y="45" width="65" height="60" rx="4" stroke="#C4B062" strokeWidth="1.2" fill="#1C1A14" />
          <text x="245" y="65" fill="#C4B062" fontSize="8" fontFamily="monospace" fontWeight="bold">HUMAN</text>
          <text x="245" y="78" fill="#C4B062" fontSize="7" fontFamily="monospace">CONFIRM</text>
          <circle cx="288" cy="72" r="4" fill="#38A169" />
        </svg>
      </div>
    );
  }

  if (projectId.includes('dealtable')) {
    // DealTable Walkaway / Mandate Control Schematic
    return (
      <div className="relative w-full h-44 bg-stone-900/60 flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Radial Mandate Gauge */}
          <path d="M 60 110 A 55 55 0 0 1 160 110" stroke="currentColor" strokeOpacity="0.2" strokeWidth="10" strokeLinecap="round" />
          <path d="M 60 110 A 55 55 0 0 1 125 58" stroke="#C85A32" strokeWidth="10" strokeLinecap="round" />
          <path d="M 125 58 A 55 55 0 0 1 160 110" stroke="#4A7C7D" strokeWidth="10" />
          
          <line x1="110" y1="110" x2="135" y2="68" stroke="#EDE8DC" strokeWidth="2" strokeLinecap="round" />
          <circle cx="110" cy="110" r="5" fill="#EDE8DC" />

          <text x="45" y="130" fill="#C85A32" fontSize="8" fontFamily="monospace">WALKAWAY</text>
          <text x="135" y="130" fill="#4A7C7D" fontSize="8" fontFamily="monospace">MANDATE</text>

          {/* Tool Call Ledger */}
          <rect x="185" y="30" width="115" height="95" rx="3" stroke="#D99B38" strokeWidth="1.2" strokeOpacity="0.6" fill="#181512" />
          <text x="195" y="48" fill="#D99B38" fontSize="8" fontFamily="monospace" fontWeight="bold">MCP TOOL LEDGER</text>
          <line x1="195" y1="55" x2="290" y2="55" stroke="#D99B38" strokeOpacity="0.3" />
          <text x="195" y="70" fill="currentColor" fillOpacity="0.6" fontSize="7" fontFamily="monospace">CALL: propose_counter()</text>
          <text x="195" y="84" fill="#38A169" fontSize="7" fontFamily="monospace">STATUS: THRESHOLD_OK</text>
          <text x="195" y="98" fill="currentColor" fillOpacity="0.6" fontSize="7" fontFamily="monospace">PAUSE: BELOW_FLOOR</text>
          <text x="195" y="112" fill="#D99B38" fontSize="7" fontFamily="monospace">AUDIT: IMMUTABLE_LOG</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('apocalypse')) {
    // 70s Sci-Fi Paperback Book Cover Graphic
    return (
      <div className="relative w-full h-44 bg-[#141210] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Celestial Disc & Horizon */}
          <circle cx="160" cy="70" r="42" fill="#C85A32" fillOpacity="0.9" />
          <circle cx="160" cy="70" r="40" fill="#D99B38" />
          
          {/* Retro 70s Horizon Lines */}
          <line x1="20" y1="85" x2="300" y2="85" stroke="#141210" strokeWidth="3" />
          <line x1="20" y1="95" x2="300" y2="95" stroke="#141210" strokeWidth="3" />
          <line x1="20" y1="105" x2="300" y2="105" stroke="#141210" strokeWidth="3" />
          <line x1="20" y1="115" x2="300" y2="115" stroke="#141210" strokeWidth="3" />

          {/* Minimalist Tower Silhouette */}
          <polygon points="152,140 168,140 163,30 157,30" fill="#141210" stroke="#EDE8DC" strokeWidth="0.8" />
          <line x1="160" y1="20" x2="160" y2="30" stroke="#EDE8DC" strokeWidth="1" />
          <circle cx="160" cy="18" r="2" fill="#C85A32" />

          <text x="35" y="40" fill="#EDE8DC" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">
            THE AGILE APOCALYPSE
          </text>
          <text x="35" y="54" fill="#C4B062" fontSize="7" fontFamily="monospace">
            A NOVEL OF CORPORATE RITUALS
          </text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('scrum')) {
    // Practical Scrum book schematic
    return (
      <div className="relative w-full h-44 bg-stone-900/60 flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Sprint Circle Loop */}
          <circle cx="160" cy="80" r="45" stroke="#4A7C7D" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M 195 55 L 205 60 L 195 70" fill="#4A7C7D" />

          <circle cx="160" cy="80" r="25" fill="#181512" stroke="#D99B38" strokeWidth="1.5" />
          <text x="144" y="83" fill="#EDE8DC" fontSize="8" fontFamily="monospace" fontWeight="bold">SPRINT</text>

          {/* RBS Adopted Seal */}
          <rect x="30" y="45" width="60" height="70" rx="3" stroke="#C85A32" strokeWidth="1" fill="#1A1412" />
          <text x="36" y="65" fill="#C85A32" fontSize="7" fontFamily="monospace" fontWeight="bold">RBS</text>
          <text x="36" y="78" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">INTERNAL</text>
          <text x="36" y="90" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">MANUAL</text>
          <text x="36" y="103" fill="#C4B062" fontSize="6" fontFamily="monospace">LICENSED</text>

          {/* Practical Scrum 2 Arrow */}
          <line x1="205" y1="80" x2="260" y2="80" stroke="#C4B062" strokeWidth="1.5" />
          <polygon points="258,76 268,80 258,84" fill="#C4B062" />
          <text x="235" y="105" fill="#EDE8DC" fontSize="8" fontFamily="monospace">VOLUME 2</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('national-grid')) {
    // National Grid: High-Voltage Transmission Tower, Storm Mode Alert Radar & Gemini Search Node
    return (
      <div className="relative w-full h-44 bg-[#12141A] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Transmission Grid Background Mesh */}
          <line x1="20" y1="130" x2="300" y2="130" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
          <line x1="20" y1="45" x2="160" y2="60" stroke="#D99B38" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="160" y1="60" x2="300" y2="50" stroke="#D99B38" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 3" />

          {/* High-Voltage Pylon Tower Silhouette */}
          <polygon points="65,130 95,130 83,35 77,35" stroke="#EDE8DC" strokeWidth="1.2" strokeOpacity="0.8" fill="#181B22" />
          <line x1="74" y1="55" x2="86" y2="55" stroke="#EDE8DC" strokeWidth="1" strokeOpacity="0.8" />
          <line x1="60" y1="75" x2="100" y2="75" stroke="#EDE8DC" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="55" y1="98" x2="105" y2="98" stroke="#EDE8DC" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="65" y1="130" x2="95" y2="98" stroke="#EDE8DC" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="95" y1="130" x2="65" y2="98" stroke="#EDE8DC" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="60" y1="98" x2="100" y2="75" stroke="#EDE8DC" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="100" y1="98" x2="60" y2="75" stroke="#EDE8DC" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Storm Mode Radar Sweep */}
          <circle cx="170" cy="85" r="42" stroke="#C85A32" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />
          <circle cx="170" cy="85" r="28" stroke="#C85A32" strokeWidth="1" strokeOpacity="0.8" />
          <circle cx="170" cy="85" r="14" stroke="#D99B38" strokeWidth="1.2" />
          <circle cx="170" cy="85" r="3" fill="#C85A32" />
          <line x1="170" y1="43" x2="170" y2="127" stroke="#C85A32" strokeOpacity="0.3" />
          <line x1="128" y1="85" x2="212" y2="85" stroke="#C85A32" strokeOpacity="0.3" />
          <path d="M 170 85 L 198 57" stroke="#D99B38" strokeWidth="1.5" />

          {/* Storm Mode Telemetry Badge */}
          <rect x="135" y="18" width="70" height="18" rx="2" fill="#1C1412" stroke="#C85A32" strokeWidth="1" />
          <circle cx="143" cy="27" r="2.5" fill="#C85A32" />
          <text x="150" y="30" fill="#EDE8DC" fontSize="7" fontFamily="monospace" fontWeight="bold">STORM MODE</text>

          {/* Gemini Enterprise Agent Search Node */}
          <rect x="230" y="48" width="75" height="72" rx="3" fill="#131B1D" stroke="#4A7C7D" strokeWidth="1.2" />
          <text x="238" y="64" fill="#4A7C7D" fontSize="7" fontFamily="monospace" fontWeight="bold">GEMINI SEARCH</text>
          <line x1="238" y1="70" x2="297" y2="70" stroke="#4A7C7D" strokeOpacity="0.4" />
          <text x="238" y="82" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">AGENT PLATFORM</text>
          <text x="238" y="94" fill="#D99B38" fontSize="6.5" fontFamily="monospace">GTA DATA LAYER</text>
          <text x="238" y="106" fill="#38A169" fontSize="6.5" fontFamily="monospace">CLOUDFLARE EDGE</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('gridrecord')) {
    // GridRecord: Retro Analog VU Meter & Audio Transcription Waveform
    return (
      <div className="relative w-full h-44 bg-[#111317] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Dual Analog VU Meters */}
          {/* Left Meter */}
          <rect x="22" y="24" width="130" height="78" rx="4" fill="#1A1815" stroke="#D99B38" strokeWidth="1.2" />
          <path d="M 32 78 A 60 60 0 0 1 142 78" stroke="#EDE8DC" strokeOpacity="0.4" strokeWidth="1" />
          <path d="M 115 48 A 60 60 0 0 1 142 78" stroke="#C85A32" strokeWidth="2.5" />
          {/* Meter Scale Ticks */}
          <line x1="45" y1="70" x2="48" y2="65" stroke="#EDE8DC" strokeOpacity="0.5" />
          <line x1="65" y1="56" x2="70" y2="52" stroke="#EDE8DC" strokeOpacity="0.5" />
          <line x1="87" y1="48" x2="87" y2="42" stroke="#D99B38" strokeWidth="1.2" />
          <line x1="110" y1="52" x2="108" y2="46" stroke="#EDE8DC" strokeOpacity="0.5" />
          <line x1="130" y1="65" x2="126" y2="60" stroke="#C85A32" strokeWidth="1.2" />
          {/* Needle Left */}
          <line x1="87" y1="92" x2="102" y2="46" stroke="#D99B38" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="87" cy="92" r="3.5" fill="#D99B38" />
          <text x="32" y="38" fill="#D99B38" fontSize="7" fontFamily="monospace" fontWeight="bold">CH-L (VU)</text>
          <text x="120" y="38" fill="#C85A32" fontSize="6.5" fontFamily="monospace">+3dB</text>

          {/* Right Meter */}
          <rect x="168" y="24" width="130" height="78" rx="4" fill="#1A1815" stroke="#D99B38" strokeWidth="1.2" />
          <path d="M 178 78 A 60 60 0 0 1 288 78" stroke="#EDE8DC" strokeOpacity="0.4" strokeWidth="1" />
          <path d="M 261 48 A 60 60 0 0 1 288 78" stroke="#C85A32" strokeWidth="2.5" />
          {/* Needle Right */}
          <line x1="233" y1="92" x2="242" y2="46" stroke="#4A7C7D" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="233" cy="92" r="3.5" fill="#4A7C7D" />
          <text x="178" y="38" fill="#4A7C7D" fontSize="7" fontFamily="monospace" fontWeight="bold">CH-R (VU)</text>
          <text x="266" y="38" fill="#C85A32" fontSize="6.5" fontFamily="monospace">+3dB</text>

          {/* Audio Waveform Stream at Bottom */}
          <rect x="22" y="110" width="276" height="34" rx="3" fill="#12171A" stroke="#4A7C7D" strokeWidth="1" />
          <circle cx="34" cy="127" r="3" fill="#C85A32" />
          <text x="42" y="130" fill="#C85A32" fontSize="7" fontFamily="monospace" fontWeight="bold">REC</text>
          {/* Waveform Bars */}
          {[12, 18, 8, 22, 14, 26, 16, 28, 20, 10, 24, 18, 12, 22, 16, 26, 14, 20, 8, 16, 24, 18, 12, 8].map((h, i) => (
            <line
              key={i}
              x1={75 + i * 7}
              y1={127 - h / 2}
              x2={75 + i * 7}
              y2={127 + h / 2}
              stroke={i % 2 === 0 ? '#4A7C7D' : '#D99B38'}
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          <text x="250" y="130" fill="#EDE8DC" fontSize="7" fontFamily="monospace">00:42:18</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('halspan')) {
    // Halspan: Precision Architectural CAD Blueprint, IAM Least Privilege & ISO Compliance
    return (
      <div className="relative w-full h-44 bg-[#0F171E] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* CAD Blueprint Grid */}
          <line x1="20" y1="20" x2="300" y2="20" stroke="#4A7C7D" strokeOpacity="0.15" />
          <line x1="20" y1="55" x2="300" y2="55" stroke="#4A7C7D" strokeOpacity="0.15" />
          <line x1="20" y1="90" x2="300" y2="90" stroke="#4A7C7D" strokeOpacity="0.15" />
          <line x1="20" y1="125" x2="300" y2="125" stroke="#4A7C7D" strokeOpacity="0.15" />

          {/* Architectural Fire Door Elevation Profile */}
          <rect x="35" y="24" width="58" height="110" stroke="#4A7C7D" strokeWidth="1.5" fill="#132029" />
          <rect x="41" y="32" width="46" height="44" stroke="#4A7C7D" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
          <rect x="41" y="82" width="46" height="44" stroke="#4A7C7D" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
          <circle cx="85" cy="85" r="2.5" fill="#D99B38" />

          {/* Dimension Guidelines & Ticks */}
          <line x1="24" y1="24" x2="24" y2="134" stroke="#D99B38" strokeWidth="1" />
          <line x1="20" y1="24" x2="28" y2="24" stroke="#D99B38" strokeWidth="1" />
          <line x1="20" y1="134" x2="28" y2="134" stroke="#D99B38" strokeWidth="1" />
          <text x="14" y="83" fill="#D99B38" fontSize="6.5" fontFamily="monospace" transform="rotate(-90 14 83)">2040mm</text>

          {/* AWS IAM Least Privilege Node */}
          <rect x="115" y="32" width="85" height="95" rx="3" fill="#161B22" stroke="#D99B38" strokeWidth="1.2" />
          <text x="123" y="48" fill="#D99B38" fontSize="7" fontFamily="monospace" fontWeight="bold">AWS IAM LEAST-PRIV</text>
          <line x1="123" y1="54" x2="192" y2="54" stroke="#D99B38" strokeOpacity="0.3" />
          {/* Keyhole / Shield Icon */}
          <circle cx="157" cy="72" r="10" stroke="#C4B062" strokeWidth="1.2" fill="#1D2218" />
          <circle cx="157" cy="70" r="3" fill="#C4B062" />
          <polygon points="155,71 159,71 160,78 154,78" fill="#C4B062" />
          <text x="123" y="98" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">CLOUDTRAIL AUDIT</text>
          <text x="123" y="112" fill="#38A169" fontSize="6.5" fontFamily="monospace">REST API GATEWAY</text>

          {/* Compliance & Data Officer Stamp */}
          <rect x="218" y="38" width="85" height="84" rx="3" fill="#1A1815" stroke="#C85A32" strokeWidth="1.2" />
          <text x="226" y="54" fill="#C85A32" fontSize="7" fontFamily="monospace" fontWeight="bold">DATA OFFICER</text>
          <line x1="226" y1="60" x2="295" y2="60" stroke="#C85A32" strokeOpacity="0.3" />
          <text x="226" y="73" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">GDPR & SAR OPS</text>
          <text x="226" y="86" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">AI BIAS AUDITS</text>
          <text x="226" y="99" fill="#4A7C7D" fontSize="6.5" fontFamily="monospace">MONDAY.com CRM</text>
          <text x="226" y="112" fill="#C4B062" fontSize="6.5" fontFamily="monospace">ISO-27001 GATES</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('tarot')) {
    // Mystic Tarot: Celestial Arcane 3-Card Spread, Sunburst & Sacred Geometry
    return (
      <div className="relative w-full h-44 bg-[#14121A] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Celestial Circle & Radiant Rays */}
          <circle cx="160" cy="75" r="50" stroke="#D99B38" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="160" cy="75" r="35" stroke="#C4B062" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
          <circle cx="160" cy="75" r="16" fill="#C85A32" fillOpacity="0.25" stroke="#D99B38" strokeWidth="1" />

          {/* Mystic Sunburst Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 160 + 20 * Math.cos(rad);
            const y1 = 75 + 20 * Math.sin(rad);
            const x2 = 160 + 32 * Math.cos(rad);
            const y2 = 75 + 32 * Math.sin(rad);
            return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D99B38" strokeWidth="1.2" />;
          })}

          {/* 3-Card Spread Layout: Past, Present, Future */}
          {/* Card 1: Past */}
          <g transform="translate(38, 30) rotate(-6)">
            <rect width="60" height="96" rx="4" fill="#1C1824" stroke="#C4B062" strokeWidth="1.2" />
            <rect x="4" y="4" width="52" height="88" rx="2" stroke="#C4B062" strokeOpacity="0.3" strokeWidth="0.8" />
            <circle cx="30" cy="42" r="12" stroke="#D99B38" strokeWidth="1" />
            <path d="M 24 42 A 6 6 0 0 0 36 42" stroke="#D99B38" strokeWidth="1" />
            <text x="18" y="76" fill="#C4B062" fontSize="6.5" fontFamily="monospace" fontWeight="bold">I. PAST</text>
          </g>

          {/* Card 2: Present (Elevated Center) */}
          <g transform="translate(130, 22)">
            <rect width="60" height="98" rx="4" fill="#201A2B" stroke="#D99B38" strokeWidth="1.5" />
            <rect x="4" y="4" width="52" height="90" rx="2" stroke="#D99B38" strokeOpacity="0.4" strokeWidth="0.8" />
            {/* Arcane Star / Pentacle */}
            <polygon points="30,26 35,38 48,39 37,48 41,60 30,52 19,60 23,48 12,39 25,38" fill="#D99B38" fillOpacity="0.3" stroke="#D99B38" strokeWidth="1" />
            <text x="11" y="80" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace" fontWeight="bold">II. PRESENT</text>
          </g>

          {/* Card 3: Future */}
          <g transform="translate(222, 30) rotate(6)">
            <rect width="60" height="96" rx="4" fill="#1C1824" stroke="#C4B062" strokeWidth="1.2" />
            <rect x="4" y="4" width="52" height="88" rx="2" stroke="#C4B062" strokeOpacity="0.3" strokeWidth="0.8" />
            <circle cx="30" cy="42" r="12" stroke="#C4B062" strokeWidth="1" />
            <path d="M 30 30 A 12 12 0 0 0 30 54" stroke="#D99B38" strokeWidth="1.2" />
            <text x="12" y="76" fill="#C4B062" fontSize="6.5" fontFamily="monospace" fontWeight="bold">III. FUTURE</text>
          </g>

          {/* Constellation Guide Dots */}
          <circle cx="25" cy="20" r="1.5" fill="#D99B38" />
          <circle cx="95" cy="18" r="1.5" fill="#D99B38" />
          <circle cx="295" cy="20" r="1.5" fill="#D99B38" />
          <circle cx="160" cy="142" r="2" fill="#D99B38" />
          <text x="115" y="145" fill="#EDE8DC" fontSize="7" fontFamily="monospace" opacity="0.6">RAILWAY DEPLOYED // LAB</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('rubik') || projectId.includes('cube')) {
    // Interactive 3D Rubik's Cube: Isometric Wireframe, Face Permutations & Notation
    return (
      <div className="relative w-full h-44 bg-[#111618] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Spatial Rotation Arc Vectors */}
          <path d="M 60 40 A 90 45 0 0 1 260 40" stroke="#4A7C7D" strokeWidth="1.2" strokeDasharray="3 3" />
          <polygon points="262,37 268,43 258,45" fill="#4A7C7D" />

          {/* Isometric 3D Rubik's Cube Center */}
          <g transform="translate(160, 80)">
            {/* TOP FACE (Isometric Diamond) */}
            {/* Row 1 Top */}
            <polygon points="0,-48 24,-36 0,-24 -24,-36" fill="#EDE8DC" stroke="#111618" strokeWidth="1.5" />
            <polygon points="24,-36 48,-24 24,-12 0,-24" fill="#D99B38" stroke="#111618" strokeWidth="1.5" />
            <polygon points="-24,-36 0,-24 -24,-12 -48,-24" fill="#EDE8DC" stroke="#111618" strokeWidth="1.5" />
            {/* Row 2 Top */}
            <polygon points="0,-24 24,-12 0,0 -24,-12" fill="#D99B38" stroke="#111618" strokeWidth="1.5" />

            {/* LEFT FACE (Isometric Slant Left) */}
            <polygon points="-48,-24 -24,-12 -24,12 -48,0" fill="#C85A32" stroke="#111618" strokeWidth="1.5" />
            <polygon points="-24,-12 0,0 0,24 -24,12" fill="#C85A32" stroke="#111618" strokeWidth="1.5" />
            <polygon points="-48,0 -24,12 -24,36 -48,24" fill="#C85A32" stroke="#111618" strokeWidth="1.5" />
            <polygon points="-24,12 0,24 0,48 -24,36" fill="#C85A32" stroke="#111618" strokeWidth="1.5" />

            {/* RIGHT FACE (Isometric Slant Right) */}
            <polygon points="0,0 24,-12 24,12 0,24" fill="#4A7C7D" stroke="#111618" strokeWidth="1.5" />
            <polygon points="24,-12 48,-24 48,0 24,12" fill="#4A7C7D" stroke="#111618" strokeWidth="1.5" />
            <polygon points="0,24 24,12 24,36 0,48" fill="#4A7C7D" stroke="#111618" strokeWidth="1.5" />
            <polygon points="24,12 48,0 48,24 24,36" fill="#4A7C7D" stroke="#111618" strokeWidth="1.5" />
          </g>

          {/* Notation & Telemetry Markers */}
          <rect x="25" y="35" width="60" height="90" rx="3" fill="#151A1D" stroke="#4A7C7D" strokeWidth="1" />
          <text x="32" y="52" fill="#4A7C7D" fontSize="7" fontFamily="monospace" fontWeight="bold">NOTATION</text>
          <text x="32" y="68" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">[R U R' U']</text>
          <text x="32" y="82" fill="#D99B38" fontSize="6.5" fontFamily="monospace">[F R U' R']</text>
          <text x="32" y="96" fill="#C85A32" fontSize="6.5" fontFamily="monospace">SINGMASTER</text>
          <text x="32" y="110" fill="#38A169" fontSize="6.5" fontFamily="monospace">SOLVER: OK</text>

          <rect x="235" y="35" width="65" height="90" rx="3" fill="#151A1D" stroke="#D99B38" strokeWidth="1" />
          <text x="242" y="52" fill="#D99B38" fontSize="7" fontFamily="monospace" fontWeight="bold">ENGINE</text>
          <text x="242" y="68" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">3D WEBGL</text>
          <text x="242" y="82" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">RAYCASTING</text>
          <text x="242" y="96" fill="#4A7C7D" fontSize="6.5" fontFamily="monospace">60 FPS TOUCH</text>
          <text x="242" y="110" fill="#C85A32" fontSize="6.5" fontFamily="monospace">RAILWAY HOST</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('youtube')) {
    // YouTube Channels: 70s CRT Screen, Cathode Tube Bezel, Broadcast Test Pattern & Dials
    return (
      <div className="relative w-full h-44 bg-[#181113] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* CRT Monitor Outer Curved Chassis */}
          <rect x="25" y="18" width="220" height="124" rx="14" fill="#201518" stroke="#D99B38" strokeWidth="1.5" />
          
          {/* Curved Inner Phosphor Screen */}
          <rect x="36" y="28" width="160" height="104" rx="8" fill="#120D0F" stroke="#E53E3E" strokeWidth="1" />
          {/* Scanline lines */}
          <line x1="36" y1="45" x2="196" y2="45" stroke="#E53E3E" strokeOpacity="0.15" />
          <line x1="36" y1="65" x2="196" y2="65" stroke="#E53E3E" strokeOpacity="0.15" />
          <line x1="36" y1="85" x2="196" y2="85" stroke="#E53E3E" strokeOpacity="0.15" />
          <line x1="36" y1="105" x2="196" y2="105" stroke="#E53E3E" strokeOpacity="0.15" />

          {/* Test Pattern Color Bars at Screen Bottom */}
          <rect x="42" y="112" width="22" height="12" fill="#EDE8DC" />
          <rect x="64" y="112" width="22" height="12" fill="#D99B38" />
          <rect x="86" y="112" width="22" height="12" fill="#4A7C7D" />
          <rect x="108" y="112" width="22" height="12" fill="#38A169" />
          <rect x="130" y="112" width="22" height="12" fill="#C85A32" />
          <rect x="152" y="112" width="22" height="12" fill="#E53E3E" />

          {/* Video Play Glyph Center */}
          <circle cx="116" cy="70" r="24" fill="#E53E3E" fillOpacity="0.9" />
          <polygon points="110,60 128,70 110,80" fill="#EDE8DC" />

          {/* CRT Control Panel on Right Side */}
          <circle cx="218" cy="46" r="10" stroke="#D99B38" strokeWidth="1.2" fill="#2A1B20" />
          <line x1="218" y1="46" x2="224" y2="40" stroke="#D99B38" strokeWidth="1.5" />
          <text x="208" y="65" fill="#D99B38" fontSize="6" fontFamily="monospace">UHF/VHF</text>

          <circle cx="218" cy="85" r="8" stroke="#EDE8DC" strokeWidth="1" strokeOpacity="0.6" fill="#2A1B20" />
          <line x1="218" y1="85" x2="214" y2="80" stroke="#EDE8DC" strokeWidth="1.2" />
          <text x="210" y="102" fill="#EDE8DC" fontSize="6" fontFamily="monospace">VOLUME</text>

          {/* Channel Badges on Right */}
          <rect x="255" y="26" width="55" height="48" rx="3" fill="#1C1417" stroke="#E53E3E" strokeWidth="1" />
          <text x="260" y="42" fill="#E53E3E" fontSize="6.5" fontFamily="monospace" fontWeight="bold">@shielyule</text>
          <text x="260" y="54" fill="#EDE8DC" fontSize="6" fontFamily="monospace">WEBMCP DEMO</text>
          <text x="260" y="64" fill="#D99B38" fontSize="6" fontFamily="monospace">AGENT ROOMS</text>

          <rect x="255" y="82" width="55" height="48" rx="3" fill="#1C1417" stroke="#4A7C7D" strokeWidth="1" />
          <text x="260" y="98" fill="#4A7C7D" fontSize="6.5" fontFamily="monospace" fontWeight="bold">@shielyule1223</text>
          <text x="260" y="110" fill="#EDE8DC" fontSize="6" fontFamily="monospace">VIDEO ARCHIVE</text>
          <text x="260" y="120" fill="#C85A32" fontSize="6" fontFamily="monospace">TUTORIALS</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('blog')) {
    // shielyule.co.uk: Minimalist Typography Galley, Typewriter Carriage & Satirical Ink Dispatch
    return (
      <div className="relative w-full h-44 bg-[#171513] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Printing Galley Column Layout */}
          <rect x="35" y="20" width="175" height="120" rx="3" fill="#1F1C18" stroke="#D99B38" strokeWidth="1.2" />
          {/* Masthead Headline Lines */}
          <rect x="48" y="32" width="100" height="6" fill="#D99B38" />
          <rect x="48" y="42" width="65" height="4" fill="#C4B062" />
          <line x1="48" y1="52" x2="195" y2="52" stroke="#EDE8DC" strokeOpacity="0.2" strokeWidth="1" />

          {/* Paragraph Galley Text Simulations */}
          <line x1="48" y1="62" x2="195" y2="62" stroke="#EDE8DC" strokeOpacity="0.5" strokeWidth="1.2" />
          <line x1="48" y1="72" x2="185" y2="72" stroke="#EDE8DC" strokeOpacity="0.5" strokeWidth="1.2" />
          <line x1="48" y1="82" x2="192" y2="82" stroke="#EDE8DC" strokeOpacity="0.5" strokeWidth="1.2" />
          <line x1="48" y1="92" x2="160" y2="92" stroke="#EDE8DC" strokeOpacity="0.5" strokeWidth="1.2" />

          {/* Red Ink Satirical Seal */}
          <circle cx="165" cy="112" r="16" stroke="#C85A32" strokeWidth="1.5" fill="#251714" />
          <text x="151" y="112" fill="#C85A32" fontSize="6" fontFamily="monospace" fontWeight="bold">SATIRICAL</text>
          <text x="151" y="120" fill="#C85A32" fontSize="6" fontFamily="monospace" fontWeight="bold">DISPATCH</text>

          {/* Fountain Pen Nib Vector Illustration */}
          <g transform="translate(245, 45)">
            <polygon points="18,0 32,0 36,40 25,65 14,40" stroke="#EDE8DC" strokeWidth="1.2" fill="#25211D" />
            <line x1="25" y1="20" x2="25" y2="52" stroke="#D99B38" strokeWidth="1.2" />
            <circle cx="25" cy="52" r="1.5" fill="#D99B38" />
            <circle cx="25" cy="72" r="3" fill="#C85A32" />
            <text x="0" y="85" fill="#D99B38" fontSize="7" fontFamily="monospace" fontWeight="bold">SHIELYULE.CO.UK</text>
            <text x="10" y="96" fill="#EDE8DC" fontSize="6" fontFamily="monospace">AGILE ESSAYS</text>
          </g>
        </svg>
      </div>
    );
  }

  if (projectId.includes('leith')) {
    // Leith Walk Studios: Guerrilla Projection Tricycle, Beam Cone & Fringe 421 Badge
    return (
      <div className="relative w-full h-44 bg-[#141518] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Urban Brick Wall Facade Silhouette on Right */}
          <rect x="235" y="25" width="65" height="110" fill="#1D2026" stroke="#EDE8DC" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="235" y1="45" x2="300" y2="45" stroke="#EDE8DC" strokeOpacity="0.2" />
          <line x1="235" y1="65" x2="300" y2="65" stroke="#EDE8DC" strokeOpacity="0.2" />
          <line x1="235" y1="85" x2="300" y2="85" stroke="#EDE8DC" strokeOpacity="0.2" />
          <line x1="235" y1="105" x2="300" y2="105" stroke="#EDE8DC" strokeOpacity="0.2" />
          <line x1="235" y1="125" x2="300" y2="125" stroke="#EDE8DC" strokeOpacity="0.2" />

          {/* Projector Light Beam Cone */}
          <polygon points="142,66 235,38 235,115 142,74" fill="#D99B38" fillOpacity="0.15" stroke="#D99B38" strokeOpacity="0.5" strokeWidth="1" />
          <circle cx="255" cy="72" r="18" stroke="#D99B38" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="242" y="75" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace" fontWeight="bold">LIGHT GRAFFITI</text>

          {/* Projection Cargo Tricycle Profile */}
          {/* Rear Wheel */}
          <circle cx="45" cy="115" r="18" stroke="#EDE8DC" strokeWidth="1.5" />
          <circle cx="45" cy="115" r="3" fill="#D99B38" />
          {/* Front Wheels (Pair) */}
          <circle cx="125" cy="115" r="18" stroke="#EDE8DC" strokeWidth="1.5" />
          <circle cx="125" cy="115" r="3" fill="#D99B38" />
          {/* Frame Tubes */}
          <line x1="45" y1="115" x2="72" y2="85" stroke="#C85A32" strokeWidth="2.5" />
          <line x1="72" y1="85" x2="100" y2="115" stroke="#C85A32" strokeWidth="2.5" />
          <line x1="45" y1="115" x2="100" y2="115" stroke="#C85A32" strokeWidth="2.5" />
          <line x1="72" y1="85" x2="70" y2="72" stroke="#C85A32" strokeWidth="2.5" />
          {/* Saddle */}
          <line x1="64" y1="72" x2="78" y2="72" stroke="#EDE8DC" strokeWidth="3" />
          {/* Front Cargo Box & Projector Housing */}
          <rect x="105" y="80" width="36" height="35" rx="2" fill="#1C2128" stroke="#4A7C7D" strokeWidth="1.5" />
          <rect x="120" y="60" width="22" height="20" rx="2" fill="#242B35" stroke="#D99B38" strokeWidth="1.2" />
          <circle cx="142" cy="70" r="4" fill="#D99B38" />

          {/* Festival Fringe Venue 421 Seal */}
          <rect x="25" y="24" width="60" height="30" rx="3" fill="#1F1618" stroke="#C85A32" strokeWidth="1" />
          <text x="30" y="38" fill="#C85A32" fontSize="7" fontFamily="monospace" fontWeight="bold">EDINBURGH</text>
          <text x="30" y="48" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">FRINGE #421</text>
        </svg>
      </div>
    );
  }

  if (projectId.includes('yoga')) {
    // Ro-Yoga: Yoga Pose Silhouette, Meridian Axis & Mysore Coordinates
    return (
      <div className="relative w-full h-44 bg-[#171512] flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
        <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
          {/* Celestial Sun Salutation Halo */}
          <circle cx="160" cy="75" r="52" stroke="#D99B38" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
          <circle cx="160" cy="75" r="38" stroke="#C4B062" strokeWidth="1" strokeOpacity="0.4" />

          {/* Central Vertical Alignment Meridian */}
          <line x1="160" y1="20" x2="160" y2="140" stroke="#4A7C7D" strokeWidth="1.2" strokeOpacity="0.5" />
          {/* Chakra Energy Nodes */}
          <circle cx="160" cy="36" r="3" fill="#D99B38" />
          <circle cx="160" cy="56" r="3" fill="#C4B062" />
          <circle cx="160" cy="75" r="4" fill="#4A7C7D" />
          <circle cx="160" cy="94" r="3" fill="#C85A32" />
          <circle cx="160" cy="114" r="3" fill="#A04020" />

          {/* Yoga Pose Silhouette (Lotus / Meditation Balance Pose) */}
          <g fill="#EDE8DC">
            {/* Head */}
            <circle cx="160" cy="46" r="9" />
            {/* Torso & Spine */}
            <path d="M 152 58 L 168 58 L 171 88 L 149 88 Z" />
            {/* Crossed Legs in Lotus / Easy Seat */}
            <path d="M 136 102 C 145 92 175 92 184 102 C 190 108 178 118 160 114 C 142 118 130 108 136 102 Z" />
            {/* Arms in Jnana Mudra / Meditation */}
            <path d="M 152 64 C 142 70 132 82 138 90 C 141 94 146 90 144 86 C 138 80 146 70 152 68 Z" />
            <path d="M 168 64 C 178 70 188 82 182 90 C 179 94 174 90 176 86 C 182 80 174 70 168 68 Z" />
          </g>

          {/* Mysore & Studio Details */}
          <rect x="25" y="45" width="80" height="60" rx="3" fill="#1C1814" stroke="#D99B38" strokeWidth="1" />
          <text x="32" y="62" fill="#D99B38" fontSize="7" fontFamily="monospace" fontWeight="bold">RO-YOGA</text>
          <text x="32" y="74" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">FORTH STREET</text>
          <text x="32" y="86" fill="#C4B062" fontSize="6.5" fontFamily="monospace">EDINBURGH</text>
          <text x="32" y="98" fill="#4A7C7D" fontSize="6" fontFamily="monospace">MALAGA RETREATS</text>

          <rect x="215" y="45" width="85" height="60" rx="3" fill="#1C1814" stroke="#4A7C7D" strokeWidth="1" />
          <text x="222" y="62" fill="#4A7C7D" fontSize="7" fontFamily="monospace" fontWeight="bold">ASHTANGA</text>
          <text x="222" y="74" fill="#EDE8DC" fontSize="6.5" fontFamily="monospace">MYSORE INDIA</text>
          <text x="222" y="86" fill="#D99B38" fontSize="6" fontFamily="monospace">12.2958° N</text>
          <text x="222" y="98" fill="#D99B38" fontSize="6" fontFamily="monospace">76.6394° E</text>
        </svg>
      </div>
    );
  }

  // General 70s Retro Vector Schematic Fallback (NASA Deep-Space Telemetry Compass)
  return (
    <div className="relative w-full h-44 bg-stone-900/60 flex items-center justify-center p-4 border-b border-stone-800/80 overflow-hidden">
      <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
        {/* Orbital Range Rings */}
        <circle cx="160" cy="80" r="56" stroke="#4A7C7D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
        <circle cx="160" cy="80" r="38" stroke="#D99B38" strokeWidth="1.2" strokeOpacity="0.5" />
        <circle cx="160" cy="80" r="20" stroke="#C85A32" strokeWidth="1" strokeOpacity="0.7" />
        <circle cx="160" cy="80" r="4" fill="#EDE8DC" />

        {/* Telemetry Crosshairs */}
        <line x1="40" y1="80" x2="280" y2="80" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="160" y1="15" x2="160" y2="145" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />

        {/* Dial Ticks */}
        <line x1="160" y1="20" x2="160" y2="28" stroke="#D99B38" strokeWidth="1.5" />
        <line x1="160" y1="132" x2="160" y2="140" stroke="#D99B38" strokeWidth="1.5" />
        <line x1="100" y1="80" x2="108" y2="80" stroke="#4A7C7D" strokeWidth="1.5" />
        <line x1="212" y1="80" x2="220" y2="80" stroke="#4A7C7D" strokeWidth="1.5" />

        <text x="25" y="145" fill="currentColor" fillOpacity="0.4" fontSize="8" fontFamily="monospace">
          {title.toUpperCase().slice(0, 32)}
        </text>
        <text x="210" y="145" fill="#D99B38" fontSize="8" fontFamily="monospace">
          SYS.TEL // 2026
        </text>
      </svg>
    </div>
  );
}
