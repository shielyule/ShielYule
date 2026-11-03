import React from 'react';
import { ArrowDownRight, ShieldCheck, MapPin, Terminal, BookOpen, Cpu, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';
import { SolarSystemOrrery } from './SolarSystemOrrery';
import { playRetroBlip } from '../utils/audio';

export function Hero() {
  const scrollTo = (id: string) => {
    playRetroBlip('click');
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-stone-800/80">
      {/* Background Subtle Starfield / Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Mission Metadata: Clean unboxed text with separators */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono tracking-wide text-stone-400">
              <span className="text-[#D99B38] font-bold">SHIEL YULE</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-300 font-medium">SCOTLAND</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE IMMEDIATELY
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EDE8DC] font-sans leading-[1.08]">
                Safe, Governed AI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D99B38] via-[#C4B062] to-[#4A7C7D]">
                  for Regulated Enterprise
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-200 font-medium max-w-2xl leading-relaxed">
                I build AI products people can actually use, and take the same craft into regulated delivery.
              </p>
              <p className="text-sm sm:text-base text-stone-300 font-normal max-w-2xl leading-relaxed">
                Tribunal Ally, Employee Ally, DealTable and GridRecord &mdash; hacked, shipped and hardened on Google Cloud and Railway with Gemini, Cursor and Grok. Same hands that took Copilot Studio through Purview and PEN testing at National Grid, and a private open source model into Azure AI Studio at ACCA.
              </p>
            </div>

            {/* Approach */}
            <div className="text-xs sm:text-sm font-mono text-stone-300 bg-stone-900/60 border border-stone-800/80 rounded px-3.5 py-2.5 leading-relaxed">
              <span className="text-[#D99B38] font-bold">Approach:</span>{' '}
              <span className="text-stone-300">
                regulated go-live · human-in-the-loop · discovery → pilot → harden → controlled go-live → continuous improvement
              </span>
            </div>

            {/* Enterprise & Lab Stacks */}
            <div className="space-y-2 py-1 text-xs sm:text-sm font-mono">
              <div className="leading-relaxed">
                <span className="text-[#D99B38] font-bold">Enterprise:</span>{' '}
                <span className="text-stone-300">Copilot Studio · Azure AI Foundry · Purview · Power Platform</span>
              </div>
              <div className="leading-relaxed">
                <span className="text-[#4A7C7D] font-bold">Lab:</span>{' '}
                <span className="text-stone-300">Cursor · Gemini · Grok · BigQuery · Looker · Vercel · GCP · GitLab · WebMCP · Qloo · Nemotron</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('#portfolio')}
                className="px-6 py-3 rounded text-sm font-mono font-semibold uppercase tracking-wider bg-[#D99B38] text-[#0E1015] hover:bg-[#e6a946] active:translate-y-0.5 transition-all flex items-center gap-2 shadow-md shadow-[#D99B38]/10"
              >
                <span>View Portfolio & AI products</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#work-history')}
                className="px-6 py-3 rounded text-sm font-mono tracking-wider text-stone-300 hover:text-[#EDE8DC] bg-stone-900/60 hover:bg-stone-800/80 border border-stone-700/80 transition-all flex items-center gap-2"
              >
                <span>20-year work history</span>
              </button>
            </div>

            {/* Clearance & Security Subtext */}
            <div className="pt-1 flex items-center gap-2 text-xs font-mono text-stone-400">
              <ShieldCheck className="w-4 h-4 text-[#4A7C7D]" />
              <span>Previous SC · Current Basic Disclosure</span>
            </div>
          </div>

          {/* Right Column: 70s Retro Aerospace Console Panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-stone-700/70 bg-[#14171F] p-6 shadow-2xl overflow-hidden">
              {/* Retro Rainbow Accent at top of the telemetry console */}
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[#C85A32]" />
                <div className="flex-1 bg-[#D99B38]" />
                <div className="flex-1 bg-[#C4B062]" />
                <div className="flex-1 bg-[#4A7C7D]" />
              </div>

              {/* Console Header Bar */}
              <div className="flex items-center justify-between border-b border-stone-800/80 pb-3 mb-4 text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D99B38]" />
                  <span className="text-stone-300 font-semibold">FLIGHT DECK TELEMETRY</span>
                </div>
                <span>SYS.ID: SY-2026</span>
              </div>

              {/* Animated Proportionate Solar System Orrery */}
              <div className="relative my-2 text-stone-300">
                <SolarSystemOrrery className="w-full" />
              </div>

              {/* Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-stone-800/80 font-mono">
                <div className="p-2.5 rounded bg-[#0E1015]/60 border border-stone-800/80">
                  <div className="text-[11px] text-stone-400 uppercase">Enterprise Delivery</div>
                  <div className="text-lg font-bold text-[#D99B38] tabular-nums">20+ Years</div>
                  <div className="text-[10px] text-stone-500">Regulated change</div>
                </div>
                <div className="p-2.5 rounded bg-[#0E1015]/60 border border-stone-800/80">
                  <div className="text-[11px] text-stone-400 uppercase">Max Budget Managed</div>
                  <div className="text-lg font-bold text-[#EDE8DC] tabular-nums">£36,000,000</div>
                  <div className="text-[10px] text-stone-500">Standard Life Aberdeen</div>
                </div>
                <div className="p-2.5 rounded bg-[#0E1015]/60 border border-stone-800/80">
                  <div className="text-[11px] text-stone-400 uppercase">Max Distributed Team</div>
                  <div className="text-lg font-bold text-[#4A7C7D] tabular-nums">80+ Devs</div>
                  <div className="text-[10px] text-stone-500">Liberty Global (US/UK/EU)</div>
                </div>
                <div className="p-2.5 rounded bg-[#0E1015]/60 border border-stone-800/80">
                  <div className="text-[11px] text-stone-400 uppercase">Published Books</div>
                  <div className="text-lg font-bold text-[#C85A32] tabular-nums">3 Titles</div>
                  <div className="text-[10px] text-stone-500">Practical Scrum & Fiction</div>
                </div>
              </div>

              {/* Console Status Ticker */}
              <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  COPILOT & AZURE AI READY
                </span>
                <span className="text-stone-500">UK GDPR · PEN TESTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
