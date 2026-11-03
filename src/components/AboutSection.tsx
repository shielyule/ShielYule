import React from 'react';
import { ShieldCheck, Users, Layers, Lock, FileCode, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';
import { playRetroBlip } from '../utils/audio';

export function AboutSection() {
  const deliveryPillars = [
    {
      title: 'Lifecycle Discipline',
      subtitle: 'From Discovery to Controlled Go-Live',
      description:
        'Shaping and prioritizing measurable AI use cases. Rigorous business case validation, sandbox testing, pilot approval gates, and continuous post-launch improvement in regulated UK/US industries.',
      accent: 'border-l-[#C85A32]',
      color: 'text-[#C85A32]',
    },
    {
      title: 'Enterprise Governance',
      subtitle: 'Responsible AI, Not Shadow IT',
      description:
        'Governing Copilot Studio, Azure AI Foundry, and LLMs with Microsoft Purview, UK GDPR compliance, PEN-testing gates, algorithmic bias safeguards, and audit-ready risk documentation.',
      accent: 'border-l-[#D99B38]',
      color: 'text-[#D99B38]',
    },
    {
      title: 'Human-in-the-Loop',
      subtitle: 'Deterministic Boundaries & Safeguards',
      description:
        'Embedding mandatory human verification for critical extractions (e.g. Tribunal Ally) and enforcing hard mandate/walkaway boundaries before automated execution (e.g. DealTable).',
      accent: 'border-l-[#C4B062]',
      color: 'text-[#C4B062]',
    },
    {
      title: 'Multi-Disciplinary Bridge',
      subtitle: 'Aligning Tech, Risk & C-Suite',
      description:
        'Translating complex technical dynamics into transparent executive narratives. Bridging data science, cloud architecture, InfoSec, legal, compliance, and product business owners.',
      accent: 'border-l-[#4A7C7D]',
      color: 'text-[#4A7C7D]',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D99B38] mb-2 uppercase tracking-wider">
            <span>01 // MISSION PRINCIPLES</span>
            <span aria-hidden="true">·</span>
            <span>EXECUTIVE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDE8DC] font-sans">
            Bridging Safe AI Innovation with Regulated Enterprise Control
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            With more than twenty years orchestrating high-stakes software, infrastructure, and
            regulatory programs, I help organisations adopt modern AI with confidence — replacing
            unmonitored "shadow IT" with transparent, audit-ready operational systems.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: In-depth Background & CV Narrative */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-lg bg-[#14171F] border border-stone-800/80 space-y-4">
              <h3 className="text-base font-mono font-semibold text-[#EDE8DC] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D99B38] rounded-full" />
                Proven Track Record Across Regulated Sectors
              </h3>
              <p>
                From coordinating <strong>National Grid's</strong> 3,000+ page enterprise web
                migration and customer-facing <strong>Microsoft Copilot Studio</strong> deployment, to
                directing <strong>ACCA's</strong> containerized AI chatbot stack and Dynamics 365
                financial transformation, my focus is delivering measurable business value while
                ensuring complete operational resilience.
              </p>
              <p>
                Having led multi-disciplinary teams across <strong>Flagstone</strong>, <strong>Morgan Stanley</strong>,{' '}
                <strong>HSBC</strong>, <strong>Scottish Government</strong>, and{' '}
                <strong>Liberty Global</strong> (managing over 80 distributed engineers), I bring a
                deep command of both the technical code layer (Python, TypeScript, SQL, Docker,
                Kubernetes) and the institutional governance framework (SOX, Basel III BCBS 239, UK
                GDPR, PEN testing).
              </p>
            </div>

            {/* Author & Cultural Breadth */}
            <div className="p-6 rounded-lg bg-[#14171F]/60 border border-stone-800/80 space-y-3">
              <h3 className="text-base font-mono font-semibold text-[#EDE8DC] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C85A32] rounded-full" />
                Author, Thought Leader & Practitioner
              </h3>
              <p className="text-sm text-stone-300">
                Author of <em>Practical Scrum</em> and <em>Practical Scrum 2</em> — the first edition
                was purchased by <strong>Royal Bank of Scotland (RBS)</strong> for internal
                enterprise training. In late 2025, published the speculative satire{' '}
                <em>The Agile Apocalypse</em>, examining the comic excesses of modern corporate agile
                theater. Creator of Edinburgh's <em>Leith Walk Studios</em> and the{' '}
                <em>Guerrilla Projections</em> mobile arts initiative.
              </p>
            </div>
          </div>

          {/* Right: 4 Governance Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-stone-400 uppercase tracking-wider pb-1">
              Core Operating Pillars
            </div>
            {deliveryPillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`p-4 rounded bg-[#14171F] border border-stone-800/80 border-l-4 ${pillar.accent} transition-all hover:bg-[#181C25]`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold text-[#EDE8DC] font-sans">
                    {pillar.title}
                  </h4>
                  <span className={`text-[10px] font-mono font-medium ${pillar.color}`}>
                    GOV-SPEC
                  </span>
                </div>
                <div className="text-xs font-mono text-stone-400 mb-1.5">{pillar.subtitle}</div>
                <p className="text-xs text-stone-300 leading-normal">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Experience Strip: Organizations Served */}
        <div className="pt-8 border-t border-stone-800/60">
          <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-4">
            Regulated Organizations & Client History
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 text-center font-mono text-xs">
            {[
              { name: 'National Grid', sub: 'Utilities & AI', href: 'https://www.nationalgrid.com/' },
              { name: 'ACCA', sub: 'Global Finance', href: '#work-history' },
              { name: 'Flagstone', sub: 'React Mobile App', href: '#work-history' },
              { name: 'Scottish Gov', sub: 'Public Sector', href: '#work-history' },
              { name: 'Morgan Stanley', sub: 'Investment Bank', href: '#work-history' },
              { name: 'HSBC', sub: 'Markets & CTB', href: '#work-history' },
              { name: 'Liberty Global', sub: 'Set Top Box & Mobile', href: '#work-history' },
              { name: 'Standard Life', sub: 'Robo Pension Advice', href: '#work-history' },
              { name: 'Royal Bank of Scotland', sub: 'Basel III', href: '#work-history' },
            ].map((client) => (
              <a
                key={client.name}
                href={client.href}
                {...(client.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="p-3 rounded bg-[#14171F]/50 border border-stone-800/60 hover:border-[#D99B38]/50 hover:bg-[#181C25] transition-all block text-left"
              >
                <div className="font-semibold text-stone-200">{client.name}</div>
                <div className="text-[10px] text-stone-500 mt-0.5">{client.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
