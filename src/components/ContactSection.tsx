import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, Download, Radio, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';
import { playRetroBlip } from '../utils/audio';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'ai-delivery',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'transmitted'>('idle');
  const [dispatchReceipt, setDispatchReceipt] = useState<{
    timestamp: string;
    refId: string;
  } | null>(null);

  const handleCopyEmail = () => {
    playRetroBlip('click');
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadVCard = () => {
    playRetroBlip('click');
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Yule;Shiel;;;
FN:Shiel Yule
TITLE:AI Delivery Manager
ORG:Enterprise AI & Digital Delivery
EMAIL;TYPE=INTERNET,PREF:${PERSONAL_INFO.email}
ADR;TYPE=WORK:;;Scotland;United Kingdom;;;
NOTE:Copilot Studio, Azure AI Foundry, Purview, Governed AI Products. Previous SC clearance.
URL:${PERSONAL_INFO.blog}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Shiel_Yule_AI_Delivery_Manager.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playRetroBlip('transmit');
    setStatus('transmitting');

    setTimeout(() => {
      setStatus('transmitted');
      setDispatchReceipt({
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
        refId: 'DISPATCH-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      });
      playRetroBlip('high');
    }, 900);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D99B38] mb-2 uppercase tracking-wider">
            <span>05 // TELEMETRY & TRANSMISSION</span>
            <span aria-hidden="true">·</span>
            <span>DIRECT ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDE8DC] font-sans">
            Initiate Contact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Available for immediate contract or interim roles across AI Delivery Management, Copilot Studio / Azure AI implementations, and enterprise agile transformations. Hands-on expertise in front-end AI development (React, TypeScript, Tailwind), supported by strong proficiency in Python, Drupal, and multi-cloud DevOps (Azure, AWS, GCP, Acquia).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details & vCard */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#14171F] border border-stone-800/90 space-y-6">
              {/* Direct channels */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  Direct Channels
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0E1015]/60 border border-stone-800">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#D99B38]" />
                    <div>
                      <div className="text-[11px] font-mono text-stone-400">Electronic Mail</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-mono text-stone-200 hover:text-[#D99B38] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center p-3 rounded-lg bg-[#0E1015]/60 border border-stone-800 gap-3">
                  <MapPin className="w-4 h-4 text-[#4A7C7D]" />
                  <div>
                    <div className="text-[11px] font-mono text-stone-400">Base Location</div>
                    <div className="text-xs sm:text-sm font-mono text-stone-200">
                      Scotland, UK
                    </div>
                  </div>
                </div>
              </div>

              {/* Status and Clearances */}
              <div className="pt-4 border-t border-stone-800 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-stone-300">
                  <span>CLEARANCE:</span>
                  <span className="text-[#D99B38]">Prev SC · Basic Disclosure</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span>AVAILABILITY:</span>
                  <span className="text-emerald-400">Immediate</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span>PERSONAL BLOG:</span>
                  <a
                    href={PERSONAL_INFO.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A7C7D] hover:underline"
                  >
                    shielyule.co.uk
                  </a>
                </div>
              </div>

              {/* vCard Action */}
              <button
                type="button"
                onClick={handleDownloadVCard}
                className="w-full py-2.5 rounded text-xs font-mono font-semibold uppercase tracking-wider bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-[#D99B38]" />
                <span>Download vCard Contact (.vcf)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Mission Control Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#14171F] border border-stone-800/90 shadow-xl relative overflow-hidden">
              {/* 70s Rainbow strip */}
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-[#C85A32]" />
                <div className="flex-1 bg-[#D99B38]" />
                <div className="flex-1 bg-[#C4B062]" />
                <div className="flex-1 bg-[#4A7C7D]" />
              </div>

              {status === 'transmitted' && dispatchReceipt ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EDE8DC] font-sans">
                      Transmission Dispatched
                    </h3>
                    <p className="text-xs font-mono text-stone-400 mt-1">
                      Your transmission has been formatted and logged. Shiel will respond directly to{' '}
                      <span className="text-[#D99B38]">{formData.email}</span>.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto p-4 rounded bg-[#0E1015]/80 border border-stone-800 text-left font-mono text-xs text-stone-300 space-y-1">
                    <div className="text-[10px] text-stone-500 uppercase">Receipt Details</div>
                    <div className="flex justify-between">
                      <span>REFERENCE:</span>
                      <span className="text-[#D99B38]">{dispatchReceipt.refId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TIMESTAMP:</span>
                      <span>{dispatchReceipt.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-emerald-400">QUEUED_FOR_REVIEW</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        projectType: 'ai-delivery',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 text-xs font-mono text-stone-400 hover:text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-4">
                    <span className="text-stone-400 uppercase tracking-wider">
                      Transmission Console
                    </span>
                    <span className="text-[#D99B38]">DIRECT CHANNEL</span>
                  </div>

                  {/* Name & Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-400 mb-1">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-3.5 py-2.5 rounded bg-[#0E1015]/80 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#D99B38] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-400 mb-1">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded bg-[#0E1015]/80 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#D99B38] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Organization & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-400 mb-1">ORGANIZATION / COMPANY</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Energy UK / Financial Corp"
                        className="w-full px-3.5 py-2.5 rounded bg-[#0E1015]/80 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#D99B38] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-400 mb-1">TOPIC OF INQUIRY</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-[#0E1015]/80 border border-stone-800 text-stone-200 focus:outline-none focus:border-[#D99B38] transition-colors"
                      >
                        <option value="ai-delivery">AI Delivery & Copilot Studio</option>
                        <option value="azure-foundry">Azure AI Foundry & Purview</option>
                        <option value="agile-coaching">Agile Transformation & SAFe</option>
                        <option value="executive-contract">Interim Contract Engagement</option>
                        <option value="advisory">Advisory & Speaking</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-stone-400 mb-1">TRANSMISSION MESSAGE *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your program requirements, timeline, and scope..."
                      className="w-full px-3.5 py-2.5 rounded bg-[#0E1015]/80 border border-stone-800 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#D99B38] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'transmitting'}
                    className="w-full py-3 rounded text-xs font-mono font-semibold uppercase tracking-wider bg-[#D99B38] text-[#0E1015] hover:bg-[#e6a946] active:translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                  >
                    {status === 'transmitting' ? (
                      <>
                        <Radio className="w-4 h-4 animate-spin text-[#0E1015]" />
                        <span>Transmitting over encrypted channel...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
