import React, { useState } from 'react';
import { Volume2, VolumeX, Moon, Sun, Menu, X } from 'lucide-react';
import { isAudioEnabled, toggleAudio, playRetroBlip } from '../utils/audio';

interface HeaderProps {
  theme: 'space-dark' | 'archival-light';
  onToggleTheme: () => void;
  activeSection: string;
}

export function Header({ theme, onToggleTheme, activeSection }: HeaderProps) {
  const [audioOn, setAudioOn] = useState(isAudioEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAudioToggle = () => {
    const newState = toggleAudio();
    setAudioOn(newState);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Work History', href: '#work-history' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    playRetroBlip('click');
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 border-stone-800/80 bg-[#0E1015]/90 text-[#EDE8DC]">
      {/* 70s Retro Rainbow Horizon Accent Line */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-[#C85A32]" />
        <div className="flex-1 bg-[#D99B38]" />
        <div className="flex-1 bg-[#C4B062]" />
        <div className="flex-1 bg-[#4A7C7D]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            playRetroBlip('high');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-mono text-base sm:text-lg font-bold tracking-wider text-[#EDE8DC] hover:text-[#D99B38] transition-colors flex items-center gap-2.5 whitespace-nowrap"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C85A32] animate-pulse" />
          <span>SHIEL YULE</span>
          <span className="hidden sm:inline-block text-xs font-normal text-stone-500 tracking-normal">
            / AI DELIVERY
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`transition-colors relative py-1 text-sm ${
                  isActive
                    ? 'text-[#D99B38] font-semibold'
                    : 'text-stone-400 hover:text-[#EDE8DC]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D99B38] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-1 sm:gap-2.5">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleAudioToggle}
            type="button"
            className="p-2 rounded-lg text-stone-400 hover:text-[#EDE8DC] hover:bg-stone-800/60 transition-colors border border-transparent hover:border-stone-700/60 flex items-center gap-1.5 text-xs font-mono"
            title={audioOn ? 'Mute retro synth audio' : 'Enable 70s analog sound blips'}
            aria-label="Toggle retro audio synth"
          >
            {audioOn ? (
              <>
                <Volume2 className="w-4 h-4 text-[#D99B38]" />
                <span className="hidden lg:inline text-[#D99B38]">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden lg:inline">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Theme Palette Toggle */}
          <button
            onClick={() => {
              playRetroBlip('toggle');
              onToggleTheme();
            }}
            type="button"
            className="p-2 rounded-lg text-stone-400 hover:text-[#EDE8DC] hover:bg-stone-800/60 transition-colors border border-transparent hover:border-stone-700/60 flex items-center gap-1.5 text-xs font-mono"
            title={theme === 'space-dark' ? 'Switch to 70s Archival Cream' : 'Switch to Deep Orbit Dark'}
            aria-label="Toggle 70s theme"
          >
            {theme === 'space-dark' ? (
              <>
                <Sun className="w-4 h-4 text-[#C4B062]" />
                <span className="hidden xl:inline text-stone-300">ARCHIVAL</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[#4A7C7D]" />
                <span className="hidden xl:inline text-stone-300">DEEP ORBIT</span>
              </>
            )}
          </button>

          {/* Primary Action Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono font-medium tracking-wide uppercase text-[#0E1015] bg-[#D99B38] hover:bg-[#e6a946] active:translate-y-0.5 rounded transition-all whitespace-nowrap shadow-sm"
          >
            Contact
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => {
              playRetroBlip('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-lg text-stone-400 hover:text-[#EDE8DC] hover:bg-stone-800/60"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-800/80 bg-[#12141B] px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block py-2 text-base font-medium text-stone-300 hover:text-[#D99B38] border-b border-stone-800/50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between text-xs font-mono text-stone-400">
            <span>COORDINATES: SCOTLAND / UK</span>
            <span className="text-[#D99B38]">AVAILABLE NOW</span>
          </div>
        </div>
      )}
    </header>
  );
}
