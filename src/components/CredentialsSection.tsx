import React from 'react';
import { Award, GraduationCap, Binary, CheckCircle2, ShieldCheck } from 'lucide-react';
import { EDUCATION_CREDENTIALS } from '../data/cvData';

export function CredentialsSection() {
  const andrewNgCourses = [
    'Supervised Machine Learning: Regression & Classification',
    'Advanced Learning Algorithms (Neural Networks, Decision Trees)',
    'Unsupervised Learning, Recommenders & Reinforcement Learning',
  ];

  return (
    <section id="credentials" className="py-20 border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D99B38] mb-2 uppercase tracking-wider">
            <span>04 // EDUCATION & RIGOR</span>
            <span aria-hidden="true">·</span>
            <span>ACADEMIC & TECHNICAL ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDE8DC] font-sans">
            Continuous Technical Mastery & Certification
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Rigorous foundations in machine learning algorithms, information security, enterprise
            data analytics, and systems architecture.
          </p>
        </div>

        {/* Featured Card: Stanford / Andrew Ng ML Specialization */}
        <div className="mb-10 rounded-xl bg-gradient-to-br from-[#181C26] to-[#12141C] border border-stone-700/80 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Subtle 70s accent mark */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D99B38]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono text-[#D99B38] uppercase tracking-wider mb-1">
                DeepLearning.AI & Stanford Online (2026)
              </div>
              <h3 className="text-2xl font-bold text-[#EDE8DC] font-sans flex items-center gap-2.5">
                <Binary className="w-6 h-6 text-[#D99B38]" />
                Machine Learning Specialization — Taught by Andrew Ng
              </h3>
            </div>
            <div className="text-xs font-mono text-stone-400">
              STANFORD ONLINE · VERIFIED
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {andrewNgCourses.map((course, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#0E1015]/60 border border-stone-800/80 text-xs font-mono space-y-1.5"
              >
                <div className="text-[#D99B38] font-bold">MODULE 0{idx + 1}</div>
                <div className="text-stone-200 leading-relaxed">{course}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid of Certifications & Degrees */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EDUCATION_CREDENTIALS.map((cred, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#14171F] border border-stone-800/90 hover:border-stone-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                  <span className="text-[#D99B38]">{cred.year}</span>
                  <span className="text-stone-400">
                    {cred.category === 'ai-ml' ? 'AI/ML' : cred.category === 'cert' ? 'CERT' : 'DEGREE'}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#EDE8DC] font-sans leading-snug">
                  {cred.title}
                </h4>
                <div className="text-xs font-mono text-stone-400 mt-1">{cred.institution}</div>
              </div>

              {cred.details && (
                <p className="mt-4 pt-3 border-t border-stone-800/60 text-xs text-stone-300 leading-relaxed font-mono">
                  {cred.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
