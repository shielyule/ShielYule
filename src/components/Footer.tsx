import React from 'react';
import { RetroRainbowStrip } from './RetroGraphics';
import { PERSONAL_INFO } from '../data/cvData';
import { playRetroBlip } from '../utils/audio';

export function Footer() {
  const scrollToTop = () => {
    playRetroBlip('high');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-800/80 bg-[#0A0C0F] text-stone-400 text-xs font-mono">
      {/* 70s Retro Rainbow Horizon Line */}
      <RetroRainbowStrip />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Wordmark & Identity */}
          <div className="space-y-2 md:col-span-2">
            <div className="text-base font-bold text-[#EDE8DC] tracking-wider font-sans">
              SHIEL YULE
            </div>
            <p className="text-xs text-stone-400 max-w-md leading-relaxed">
              AI Delivery Manager specializing in Copilot Studio, Azure AI Foundry, Microsoft
              Purview, and governed enterprise AI products in regulated UK/US environments.
            </p>
            <div className="text-[11px] text-stone-500 pt-1">
              BASE: Scotland, UK · 55.9533° N, 3.1883° W
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <div className="text-[11px] uppercase tracking-wider text-stone-300 font-bold">
              Index
            </div>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <a href="#about" className="hover:text-[#D99B38] transition-colors">
                  01. About & Principles
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#D99B38] transition-colors">
                  02. Portfolio Gallery
                </a>
              </li>
              <li>
                <a href="#work-history" className="hover:text-[#D99B38] transition-colors">
                  03. Work History
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-[#D99B38] transition-colors">
                  04. Credentials & Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D99B38] transition-colors">
                  05. Contact Telemetry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Work & Writing */}
          <div className="space-y-2">
            <div className="text-[11px] uppercase tracking-wider text-stone-300 font-bold">
              Published & Live
            </div>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <a
                  href="https://tribunal-ally-828288109486.europe-west2.run.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D99B38] transition-colors"
                >
                  Tribunal Ally (Live)
                </a>
              </li>
              <li>
                <a
                  href="https://dealtable-webmcp.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D99B38] transition-colors"
                >
                  DealTable WebMCP (Live)
                </a>
              </li>
              <li>
                <a
                  href="https://gridrecord.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D99B38] transition-colors"
                >
                  GridRecord (Live)
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D99B38] transition-colors"
                >
                  shielyule.co.uk (Blog)
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.eu/d/0jj9PJ5E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D99B38] transition-colors"
                >
                  The Agile Apocalypse (2025)
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.eu/d/09h67V3T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D99B38] transition-colors"
                >
                  Practical Scrum 1 & 2 (RBS)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500">
          <div>
            © {new Date().getFullYear()} Shiel Yule. Designed with 70s retro space minimalism.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-stone-300 transition-colors flex items-center gap-1.5"
          >
            <span>Back to Top of Orbit</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
