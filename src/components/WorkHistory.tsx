import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Briefcase, Calendar, MapPin, Shield, CheckCircle2 } from 'lucide-react';
import { WORK_HISTORY, WorkRole } from '../data/cvData';
import { playRetroBlip } from '../utils/audio';

export function WorkHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    'national-grid': true,
    'acca': true,
    'halspan': false,
  });

  const toggleRole = (id: string) => {
    playRetroBlip('click');
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleAll = (expand: boolean) => {
    playRetroBlip('toggle');
    const newState: Record<string, boolean> = {};
    WORK_HISTORY.forEach((role) => {
      newState[role.id] = expand;
    });
    setExpandedRoles(newState);
  };

  const filteredRoles = WORK_HISTORY.filter((role) => {
    const matchesCategory =
      activeCategory === 'all' ? true : role.category === activeCategory;

    const term = searchTerm.toLowerCase().trim();
    if (!term) return matchesCategory;

    const matchesSearch =
      role.company.toLowerCase().includes(term) ||
      role.role.toLowerCase().includes(term) ||
      role.summary.toLowerCase().includes(term) ||
      role.technologies.some((t) => t.toLowerCase().includes(term)) ||
      role.highlights.some((h) => h.toLowerCase().includes(term));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work-history" className="py-20 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D99B38] mb-2 uppercase tracking-wider">
              <span>03 // CAREER CHRONOLOGY</span>
              <span aria-hidden="true">·</span>
              <span>20+ YEARS ENTERPRISE DELIVERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDE8DC] font-sans">
              Work History & Executive Engagements
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
              Full career record across utilities, tier-1 financial institutions, central
              government, and scaling technology ventures. Grounded in audit-ready governance and
              high-velocity delivery.
            </p>
          </div>

          {/* Expand / Collapse Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleAll(true)}
              className="px-3 py-1.5 rounded text-xs font-mono text-stone-400 hover:text-stone-200 bg-stone-900/60 border border-stone-800 transition-colors"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={() => toggleAll(false)}
              className="px-3 py-1.5 rounded text-xs font-mono text-stone-400 hover:text-stone-200 bg-stone-900/60 border border-stone-800 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Filter Bar: Category Tabs + Search Input */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Category Tabs */}
          <div className="flex items-center p-1 bg-[#14171F] border border-stone-800 rounded-lg overflow-x-auto">
            {[
              { id: 'all', label: 'All History' },
              { id: 'ai', label: 'AI & Digital' },
              { id: 'fintech', label: 'Banking & FS' },
              { id: 'gov', label: 'Public Sector' },
              { id: 'saas', label: 'SaaS & Scale' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  playRetroBlip('toggle');
                  setActiveCategory(tab.id);
                }}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase rounded transition-all whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-[#D99B38] text-[#0E1015] font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search companies, tech, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-[#14171F] border border-stone-800 text-xs font-mono text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#D99B38] transition-colors"
            />
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-stone-800/80 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {filteredRoles.map((role) => {
            const isExpanded = !!expandedRoles[role.id];
            return (
              <div
                key={role.id}
                className="relative group transition-all duration-200"
              >
                {/* Timeline node marker with 70s retro colors */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-4 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-200 ${
                    role.isFeatured
                      ? 'bg-[#D99B38] border-[#EDE8DC]'
                      : 'bg-[#14171F] border-stone-600 group-hover:border-[#D99B38]'
                  }`}
                />

                {/* Role Card Container */}
                <div className="rounded-xl bg-[#14171F] border border-stone-800/90 hover:border-stone-700 p-5 sm:p-6 transition-all duration-200">
                  {/* Card Header */}
                  <div
                    onClick={() => toggleRole(role.id)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-start justify-between gap-3 select-none"
                  >
                    <div className="space-y-1">
                      {/* Clean unboxed company & location metadata */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-stone-400">
                        <span className="text-[#D99B38] font-bold text-sm">
                          {role.company}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 text-stone-300">
                          <MapPin className="w-3 h-3 text-[#C85A32]" />
                          {role.location}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#EDE8DC] font-sans pt-0.5">
                        {role.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 self-start md:self-auto">
                      <span className="text-xs font-mono text-stone-400 whitespace-nowrap">
                        {role.period}
                      </span>
                      <button
                        type="button"
                        className="p-1 rounded text-stone-400 hover:text-white transition-colors"
                        aria-label={isExpanded ? 'Collapse role' : 'Expand role'}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Role Brief Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {role.summary}
                  </p>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-stone-800/80 space-y-4 text-xs sm:text-sm">
                      {/* Key Achievements & Delivery Highlights */}
                      <div>
                        <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                          Key Deliverables & Responsibilities
                        </div>
                        <ul className="space-y-2">
                          {role.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-stone-300 leading-relaxed"
                            >
                              <span className="text-[#D99B38] select-none text-xs mt-1">▸</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Governance Highlights if present */}
                      {role.governanceHighlights && role.governanceHighlights.length > 0 && (
                        <div className="p-3.5 rounded bg-[#0E1015]/60 border border-stone-800/80">
                          <div className="text-[11px] font-mono text-[#4A7C7D] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5" />
                            <span>Governance & Regulatory Controls</span>
                          </div>
                          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-stone-300">
                            {role.governanceHighlights.map((gov, i) => (
                              <span key={i} className="flex items-center gap-1">
                                <span className="text-[#4A7C7D]">✓</span>
                                {gov}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies Used */}
                      <div>
                        <div className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                          Technology & Tools
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {role.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-stone-800/60 text-stone-300 text-[11px] font-mono border border-stone-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {filteredRoles.length === 0 && (
            <div className="p-8 text-center text-stone-400 font-mono text-xs border border-dashed border-stone-800 rounded-xl">
              No matching engagements found for "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
