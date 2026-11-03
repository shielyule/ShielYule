import React, { useState } from 'react';
import { ExternalLink, Layers, Shield, X, Cpu, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/cvData';
import { ProjectSchematicCard } from './RetroGraphics';
import { playRetroBlip } from '../utils/audio';

export function PortfolioGallery() {
  const [filter, setFilter] = useState<'all' | 'ai-products' | 'publications' | 'creative'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    filter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  const openModal = (item: PortfolioItem) => {
    playRetroBlip('open');
    setSelectedItem(item);
  };

  const closeModal = () => {
    playRetroBlip('click');
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="py-20 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D99B38] mb-2 uppercase tracking-wider">
              <span>02 // PORTFOLIO GALLERY</span>
              <span aria-hidden="true">·</span>
              <span>LIVE AI & INVENTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDE8DC] font-sans">
              Projects, Systems, Publications & Ventures
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-300">
              Live products in production, books adopted by enterprise institutions, and creative
              arts engineering. Built with human-in-the-loop integrity and strict governance.
            </p>
          </div>

          {/* Interactive Filter Control (Buttons Allowed as Functional Controls) */}
          <div className="flex items-center p-1 bg-[#14171F] border border-stone-800 rounded-lg overflow-x-auto">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'ai-products', label: 'Governed AI' },
              { id: 'publications', label: 'Publications' },
              { id: 'creative', label: 'Creative & Arts' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  playRetroBlip('toggle');
                  setFilter(tab.id as typeof filter);
                }}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded transition-all whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-[#D99B38] text-[#0E1015] font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group cursor-pointer rounded-xl bg-[#14171F] border border-stone-800/90 hover:border-stone-600 transition-all duration-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-[#D99B38]/5"
            >
              <div>
                {/* 70s Vector Schematic Graphic */}
                <ProjectSchematicCard projectId={item.id} title={item.title} />

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                    <span className="text-[#D99B38]">{item.period}</span>
                    <span className="text-stone-400">{item.status}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-[#EDE8DC] group-hover:text-[#D99B38] transition-colors font-sans flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D99B38]" />
                    </h3>
                    <div className="text-xs font-mono text-stone-400 mt-0.5">{item.subtitle}</div>
                  </div>

                  {/* Brief summary */}
                  <p className="text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Technologies unboxed list */}
              <div className="px-5 pb-5 pt-2 border-t border-stone-800/60">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-stone-400">
                  {item.technologies.slice(0, 3).map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {idx < Math.min(item.technologies.length, 3) - 1 && (
                        <span className="text-stone-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="text-stone-500">+{item.technologies.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Deep Inspection */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#14171F] border border-stone-700 p-6 sm:p-8 text-[#EDE8DC] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 70s Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 flex">
              <div className="flex-1 bg-[#C85A32]" />
              <div className="flex-1 bg-[#D99B38]" />
              <div className="flex-1 bg-[#C4B062]" />
              <div className="flex-1 bg-[#4A7C7D]" />
            </div>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-1">
                  <span className="text-[#D99B38]">{selectedItem.period}</span>
                  <span>·</span>
                  <span>{selectedItem.status}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-sans">{selectedItem.title}</h3>
                <div className="text-sm font-mono text-stone-400 mt-1">{selectedItem.subtitle}</div>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="py-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                  System Overview
                </h4>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Architecture & Engineering Notes */}
              <div>
                <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#D99B38]" />
                  <span>Architecture & Technical Highlights</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-mono">
                  {selectedItem.architecture.map((arch, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D99B38] select-none">→</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Governance & Safeguards */}
              {selectedItem.governance && selectedItem.governance.length > 0 && (
                <div className="p-4 rounded-lg bg-[#0E1015]/60 border border-stone-800">
                  <h4 className="text-xs font-mono text-[#4A7C7D] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Governance, Privacy & Audit Controls</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-300 font-mono">
                    {selectedItem.governance.map((gov, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#4A7C7D] select-none">✓</span>
                        <span>{gov}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-stone-800/80 text-stone-300 border border-stone-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {selectedItem.liveUrl ? (
                  <a
                    href={selectedItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded text-xs font-mono font-semibold uppercase tracking-wide bg-[#D99B38] text-[#0E1015] hover:bg-[#e6a946] transition-all flex items-center gap-2 shadow-sm"
                  >
                    <span>{selectedItem.secondaryUrl ? 'Primary Channel / Demo' : 'Launch Live System'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-stone-500">
                    Enterprise deployment / Published book
                  </span>
                )}

                {selectedItem.secondaryUrl && (
                  <a
                    href={selectedItem.secondaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded text-xs font-mono font-medium tracking-wide bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-all flex items-center gap-2"
                  >
                    <span>{selectedItem.secondaryUrlLabel || 'Secondary Link'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 text-xs font-mono text-stone-400 hover:text-white transition-colors ml-auto"
              >
                Close Viewer [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
