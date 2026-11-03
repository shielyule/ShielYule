import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { WorkHistory } from './components/WorkHistory';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'space-dark' | 'archival-light'>('space-dark');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'space-dark' ? 'archival-light' : 'space-dark'));
  };

  // Scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'work-history', 'credentials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'archival-light' ? 'archival-light' : 'bg-[#0E1015] text-[#EDE8DC]'
      }`}
    >
      {/* Top 3-Zone Header */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* 01. About & Governance Principles */}
        <AboutSection />

        {/* 02. Portfolio Gallery */}
        <PortfolioGallery />

        {/* 03. Work History Timeline */}
        <WorkHistory />

        {/* 04. Credentials & Education */}
        <CredentialsSection />

        {/* 05. Direct Contact & Dispatch Console */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
