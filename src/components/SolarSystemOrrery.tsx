import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Eye, Info } from 'lucide-react';
import { playRetroBlip } from '../utils/audio';

interface PlanetData {
  id: string;
  name: string;
  type: string;
  realDiameterKm: number;
  realDistanceAU: number;
  periodDays: number;
  radiusPx: number; // proportionate visual radius
  a: number; // semi-major axis (px)
  b: number; // semi-minor axis (px)
  speed: number; // relative angular velocity
  initialAngle: number;
  color: string;
  details: string;
  hasRings?: boolean;
  hasMoon?: boolean;
}

const PLANETS: PlanetData[] = [
  {
    id: 'mercury',
    name: 'MERCURY',
    type: 'Terrestrial / Rocky',
    realDiameterKm: 4879,
    realDistanceAU: 0.39,
    periodDays: 88,
    radiusPx: 1.8,
    a: 32,
    b: 14,
    speed: 1.4,
    initialAngle: 0.5,
    color: '#A0A3A8',
    details: '0.39 AU · 88d orbit · 4,879 km Ø',
  },
  {
    id: 'venus',
    name: 'VENUS',
    type: 'Terrestrial / Dense Atmosphere',
    realDiameterKm: 12104,
    realDistanceAU: 0.72,
    periodDays: 225,
    radiusPx: 2.8,
    a: 48,
    b: 21,
    speed: 0.9,
    initialAngle: 2.1,
    color: '#EAD7B2',
    details: '0.72 AU · 225d orbit · 12,104 km Ø',
  },
  {
    id: 'earth',
    name: 'EARTH',
    type: 'Terrestrial / Hydrosphere',
    realDiameterKm: 12742,
    realDistanceAU: 1.0,
    periodDays: 365.25,
    radiusPx: 3.1,
    a: 68,
    b: 30,
    speed: 0.65,
    initialAngle: 4.2,
    color: '#4A7C7D',
    details: '1.00 AU · 365.25d orbit · 12,742 km Ø',
    hasMoon: true,
  },
  {
    id: 'mars',
    name: 'MARS',
    type: 'Terrestrial / Iron Oxide',
    realDiameterKm: 6779,
    realDistanceAU: 1.52,
    periodDays: 687,
    radiusPx: 2.2,
    a: 90,
    b: 39,
    speed: 0.45,
    initialAngle: 1.1,
    color: '#C85A32',
    details: '1.52 AU · 687d orbit · 6,779 km Ø',
  },
  {
    id: 'jupiter',
    name: 'JUPITER',
    type: 'Gas Giant / Jovian',
    realDiameterKm: 139820,
    realDistanceAU: 5.2,
    periodDays: 4333,
    radiusPx: 6.8,
    a: 122,
    b: 53,
    speed: 0.22,
    initialAngle: 5.3,
    color: '#D99B38',
    details: '5.20 AU · 11.86y orbit · 139,820 km Ø',
  },
  {
    id: 'saturn',
    name: 'SATURN',
    type: 'Gas Giant / Ring System',
    realDiameterKm: 116460,
    realDistanceAU: 9.58,
    periodDays: 10759,
    radiusPx: 5.6,
    a: 148,
    b: 64,
    speed: 0.14,
    initialAngle: 3.4,
    color: '#C4B062',
    details: '9.58 AU · 29.46y orbit · 116,460 km Ø',
    hasRings: true,
  },
  {
    id: 'uranus',
    name: 'URANUS',
    type: 'Ice Giant / Retrograde Tilt',
    realDiameterKm: 50724,
    realDistanceAU: 19.2,
    periodDays: 30687,
    radiusPx: 4.1,
    a: 172,
    b: 74,
    speed: 0.08,
    initialAngle: 0.9,
    color: '#6EA4A6',
    details: '19.2 AU · 84.0y orbit · 50,724 km Ø',
  },
  {
    id: 'neptune',
    name: 'NEPTUNE',
    type: 'Ice Giant / Supersonic Winds',
    realDiameterKm: 49244,
    realDistanceAU: 30.05,
    periodDays: 60190,
    radiusPx: 3.9,
    a: 194,
    b: 83,
    speed: 0.05,
    initialAngle: 2.8,
    color: '#3B6C8C',
    details: '30.1 AU · 164.8y orbit · 49,244 km Ø',
  },
];

export function SolarSystemOrrery({ className = '' }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetData | null>(null);
  const [time, setTime] = useState(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Center coordinate of solar system
  const cx = 200;
  const cy = 125;
  const tiltAngle = -10 * (Math.PI / 180); // 70s isometric tilt

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (lastTimeRef.current !== null) {
        const delta = (timestamp - lastTimeRef.current) / 1000;
        if (isPlaying) {
          setTime((prev) => prev + delta * speedMultiplier);
        }
      }
      lastTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, speedMultiplier]);

  const activeInfoPlanet = hoveredPlanet || selectedPlanet || PLANETS[2]; // Default to Earth

  const togglePlay = () => {
    playRetroBlip('toggle');
    setIsPlaying(!isPlaying);
  };

  const cycleSpeed = () => {
    playRetroBlip('click');
    setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 4 : 1));
  };

  const handleSelectPlanet = (planet: PlanetData) => {
    playRetroBlip('high');
    setSelectedPlanet(selectedPlanet?.id === planet.id ? null : planet);
  };

  // Compute position of planet at current time
  const getPlanetPos = (planet: PlanetData) => {
    const currentAngle = planet.initialAngle + time * planet.speed;
    const unrotX = planet.a * Math.cos(currentAngle);
    const unrotY = planet.b * Math.sin(currentAngle);

    // Apply tilt
    const x = cx + unrotX * Math.cos(tiltAngle) - unrotY * Math.sin(tiltAngle);
    const y = cy + unrotX * Math.sin(tiltAngle) + unrotY * Math.cos(tiltAngle);

    // Depth effect: sin(currentAngle) determines front/back position
    const isFront = Math.sin(currentAngle) >= 0;
    const depthScale = 1 + 0.15 * Math.sin(currentAngle);
    const opacity = isFront ? 1 : 0.75;

    return { x, y, isFront, depthScale, opacity, angle: currentAngle };
  };

  return (
    <div className={`relative flex flex-col ${className}`}>
      {/* 70s Orrery Control Toolbar */}
      <div className="flex items-center justify-between px-1 py-1 mb-1 text-[11px] font-mono border-b border-stone-800/80">
        <div className="flex items-center gap-1.5 text-stone-400">
          <button
            type="button"
            onClick={togglePlay}
            className="p-1 rounded hover:bg-stone-800/80 text-stone-300 hover:text-[#D99B38] transition-colors"
            title={isPlaying ? 'Pause orbital motion' : 'Resume orbital motion'}
            aria-label={isPlaying ? 'Pause orbital motion' : 'Resume orbital motion'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#D99B38]" />}
          </button>

          <button
            type="button"
            onClick={cycleSpeed}
            className="px-1.5 py-0.5 rounded bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 text-stone-300 hover:text-[#D99B38] transition-colors"
            title="Cycle orbital speed"
          >
            {speedMultiplier}X SPEED
          </button>

          <button
            type="button"
            onClick={() => {
              playRetroBlip('click');
              setTime(0);
            }}
            className="p-1 rounded hover:bg-stone-800/80 text-stone-400 hover:text-stone-200 transition-colors"
            title="Reset planetary alignment"
            aria-label="Reset planetary alignment"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        <div className="text-[10px] text-stone-400 font-mono tracking-tight flex items-center gap-2">
          <span className="hidden sm:inline">KEPLER ORBITS // T² ∝ a³</span>
          <span className="text-[#D99B38]">8 PLANETS</span>
        </div>
      </div>

      {/* SVG Solar System Canvas */}
      <div className="relative w-full aspect-[400/255] bg-[#0E1015]/90 rounded-lg overflow-hidden border border-stone-800/90 shadow-inner">
        <svg
          viewBox="0 0 400 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full select-none"
        >
          <defs>
            {/* Sun Core & Corona Glow */}
            <radialGradient id="sunCorona" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D99B38" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#C85A32" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D99B38" stopOpacity="0" />
            </radialGradient>

            {/* Jupiter Atmospheric Stripes */}
            <linearGradient id="jupiterBands" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D99B38" />
              <stop offset="25%" stopColor="#B37822" />
              <stop offset="50%" stopColor="#EDE8DC" />
              <stop offset="75%" stopColor="#A8681E" />
              <stop offset="100%" stopColor="#D99B38" />
            </linearGradient>

            {/* Saturn Ring Filter/Glow */}
            <linearGradient id="saturnRingGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C4B062" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#EDE8DC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C4B062" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Coordinate Crosshairs & Telemetry Grids */}
          <line
            x1="20"
            y1={cy}
            x2="380"
            y2={cy}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeDasharray="2 3"
          />
          <line
            x1={cx}
            y1="15"
            x2={cx}
            y2="235"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeDasharray="2 3"
          />

          {/* Coordinate Tick Marks */}
          <path d="M 180 20 L 220 20" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
          <path d="M 200 15 L 200 25" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
          <text
            x="225"
            y="23"
            fill="currentColor"
            fillOpacity="0.4"
            fontSize="8"
            fontFamily="monospace"
          >
            SOLAR SYSTEM 1970 // ORRERY
          </text>

          {/* Orbit Trajectory Lines for All 8 Planets */}
          {PLANETS.map((planet) => {
            const isSelected = selectedPlanet?.id === planet.id;
            const isHovered = hoveredPlanet?.id === planet.id;
            return (
              <ellipse
                key={`orbit-${planet.id}`}
                cx={cx}
                cy={cy}
                rx={planet.a}
                ry={planet.b}
                stroke={isSelected || isHovered ? '#D99B38' : planet.color}
                strokeOpacity={isSelected ? 0.7 : isHovered ? 0.5 : 0.22}
                strokeWidth={isSelected ? 1.4 : 0.9}
                strokeDasharray={planet.id === 'mercury' || planet.id === 'neptune' ? '3 3' : undefined}
                transform={`rotate(${-10} ${cx} ${cy})`}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Asteroid Belt Representation between Mars and Jupiter (~106px semi-major) */}
          <ellipse
            cx={cx}
            cy={cy}
            rx={106}
            ry={46}
            stroke="#C4B062"
            strokeOpacity="0.15"
            strokeWidth="2.5"
            strokeDasharray="1 5"
            transform={`rotate(${-10} ${cx} ${cy})`}
          />

          {/* Central Sun */}
          {/* Coronal Glow Disc */}
          <circle cx={cx} cy={cy} r="32" fill="url(#sunCorona)" />
          {/* Chromosphere Ring */}
          <circle
            cx={cx}
            cy={cy}
            r="16"
            stroke="#D99B38"
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          {/* Solar Photosphere Core (Scaled proportionately as dominant star) */}
          <circle cx={cx} cy={cy} r="8.5" fill="#E09F3E" />
          <circle cx={cx} cy={cy} r="6.5" fill="#FCE8A6" />
          <circle cx={cx} cy={cy} r="3" fill="#FFFFFF" fillOpacity="0.9" />

          {/* Render Planets in Two Passes for True 3D Depth (Back Planets first, then Sun, then Front Planets) */}
          {/* 1. Back Planets (orbiting behind Sun) */}
          {PLANETS.map((planet) => {
            const pos = getPlanetPos(planet);
            if (pos.isFront) return null; // Render later in front pass
            return renderPlanetElement(planet, pos);
          })}

          {/* 2. Front Planets (orbiting in front of Sun) */}
          {PLANETS.map((planet) => {
            const pos = getPlanetPos(planet);
            if (!pos.isFront) return null;
            return renderPlanetElement(planet, pos);
          })}

          {/* Bottom Telemetry Coordinates Text */}
          <text
            x="20"
            y="245"
            fill="currentColor"
            fillOpacity="0.35"
            fontSize="8"
            fontFamily="monospace"
          >
            SYS.GOV: 55.9533° N / 3.1883° W · SCOTLAND
          </text>

          <text
            x="380"
            y="245"
            textAnchor="end"
            fill="currentColor"
            fillOpacity="0.35"
            fontSize="8"
            fontFamily="monospace"
          >
            SCALE: PROPORTIONATE PLANETARY RADII
          </text>
        </svg>

        {/* Floating Target Overlay when planet is hovered/selected */}
        {selectedPlanet && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded bg-[#14171F]/90 border border-[#D99B38]/60 text-[10px] font-mono text-[#EDE8DC] backdrop-blur-sm shadow-md animate-fade-in">
            <span className="text-[#D99B38] font-bold">LOCK:</span> {selectedPlanet.name}
          </div>
        )}
      </div>

      {/* Real Planetary Telemetry Readout Strip */}
      <div className="mt-2 p-2.5 rounded-lg bg-[#0E1015]/80 border border-stone-800/80 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ backgroundColor: activeInfoPlanet.color }}
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#EDE8DC] tracking-wider">
                {activeInfoPlanet.name}
              </span>
              <span className="text-[10px] text-stone-400">({activeInfoPlanet.type})</span>
            </div>
            <div className="text-[11px] text-[#D99B38]">{activeInfoPlanet.details}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[10px] text-stone-400 border-t sm:border-t-0 pt-1.5 sm:pt-0 border-stone-800">
          <div>
            REAL DIAMETER:{' '}
            <span className="text-stone-200 tabular-nums">
              {activeInfoPlanet.realDiameterKm.toLocaleString()} km
            </span>
          </div>
          <div>
            DISTANCE:{' '}
            <span className="text-stone-200 tabular-nums">
              {activeInfoPlanet.realDistanceAU.toFixed(2)} AU
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Helper to render planet with proportionate geometry, rings, and moon
  function renderPlanetElement(
    planet: PlanetData,
    pos: { x: number; y: number; isFront: boolean; depthScale: number; opacity: number; angle: number }
  ) {
    const isSelected = selectedPlanet?.id === planet.id;
    const isHovered = hoveredPlanet?.id === planet.id;
    const effectiveRadius = planet.radiusPx * pos.depthScale * (isSelected ? 1.25 : 1);

    return (
      <g
        key={planet.id}
        transform={`translate(${pos.x}, ${pos.y})`}
        className="cursor-pointer"
        onClick={() => handleSelectPlanet(planet)}
        onMouseEnter={() => setHoveredPlanet(planet)}
        onMouseLeave={() => setHoveredPlanet(null)}
        opacity={pos.opacity}
      >
        {/* Selection/Hover Halo Reticle */}
        {(isSelected || isHovered) && (
          <>
            <circle
              r={effectiveRadius + 5}
              fill="none"
              stroke="#D99B38"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              className="animate-spin-slow"
            />
            <line
              x1={-effectiveRadius - 7}
              y1="0"
              x2={effectiveRadius + 7}
              y2="0"
              stroke="#D99B38"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1={-effectiveRadius - 7}
              x2="0"
              y2={effectiveRadius + 7}
              stroke="#D99B38"
              strokeWidth="0.5"
            />
          </>
        )}

        {/* Saturn's Rings (Back Half if rendered in 3D, or tilted oval disc) */}
        {planet.hasRings && (
          <g transform="rotate(-18)">
            <ellipse
              cx="0"
              cy="0"
              rx={effectiveRadius * 2.3}
              ry={effectiveRadius * 0.75}
              fill="none"
              stroke="url(#saturnRingGrad)"
              strokeWidth={effectiveRadius * 0.65}
              opacity="0.85"
            />
            <ellipse
              cx="0"
              cy="0"
              rx={effectiveRadius * 2.5}
              ry={effectiveRadius * 0.82}
              fill="none"
              stroke="#C4B062"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </g>
        )}

        {/* Planet Sphere Core */}
        <circle
          r={effectiveRadius}
          fill={planet.id === 'jupiter' ? 'url(#jupiterBands)' : planet.color}
          stroke="#0E1015"
          strokeWidth="0.5"
        />

        {/* Subtle 70s Terminator Shadow (Light coming from central Sun) */}
        {/* We calculate angle from planet back to (cx, cy) */}
        <path
          d={`M 0 ${-effectiveRadius} A ${effectiveRadius} ${effectiveRadius} 0 0 1 0 ${effectiveRadius} A ${effectiveRadius * 0.3} ${effectiveRadius} 0 0 0 0 ${-effectiveRadius}`}
          fill="#000000"
          fillOpacity="0.35"
          transform={`rotate(${((Math.atan2(cy - pos.y, cx - pos.x) * 180) / Math.PI) + 90})`}
        />

        {/* Earth's Orbiting Moon */}
        {planet.hasMoon && (
          <g
            transform={`rotate(${(time * 4 * 180) / Math.PI}) translate(${effectiveRadius + 4}, 0)`}
          >
            <circle r="0.9" fill="#EDE8DC" />
          </g>
        )}

        {/* Subtle Label on Hover/Selected */}
        {(isSelected || isHovered) && (
          <text
            x="0"
            y={-effectiveRadius - 7}
            textAnchor="middle"
            fill="#EDE8DC"
            fontSize="7.5"
            fontFamily="monospace"
            fontWeight="bold"
            className="select-none pointer-events-none drop-shadow"
          >
            {planet.name}
          </text>
        )}
      </g>
    );
  }
}
