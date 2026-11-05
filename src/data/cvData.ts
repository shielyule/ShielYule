export interface WorkRole {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  category: 'ai' | 'fintech' | 'gov' | 'saas' | 'creative';
  summary: string;
  highlights: string[];
  technologies: string[];
  governanceHighlights?: string[];
  isFeatured?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'ai-products' | 'publications' | 'creative';
  subtitle: string;
  period: string;
  status: string;
  liveUrl?: string;
  secondaryUrl?: string;
  secondaryUrlLabel?: string;
  description: string;
  architecture: string[];
  governance: string[];
  technologies: string[];
  badgeColor: string;
}

export interface CredentialItem {
  institution: string;
  title: string;
  year: string;
  category: 'ai-ml' | 'cert' | 'degree';
  details?: string;
}

export const PERSONAL_INFO = {
  name: 'Shiel Yule',
  title: 'AI Delivery Manager',
  tagline: 'Copilot Studio · Azure AI Foundry · Purview · Governed AI Products',
  email: 'shielyule@shielyule.co.uk',
  location: 'Scotland, UK',
  availability: 'Available Immediately',
  clearance: 'Previous SC Clearance · Current Basic Disclosure',
  blog: 'https://shielyule.co.uk',
  stats: [
    { label: 'Enterprise Delivery', value: '20+ Yrs' },
    { label: 'Max Team Managed', value: '80+ Devs' },
    { label: 'Max Project Budget', value: '£36M' },
    { label: 'Published Books', value: '3 Titles' },
  ],
  bio: `AI Delivery Manager specializing in safe, measurable AI use cases from discovery through pilot, controlled go-live, and continuous improvement in regulated environments. Over 20 years of experience delivering complex software, infrastructure, and regulatory change for enterprise leaders including National Grid, ACCA, Scottish Government, Morgan Stanley, and HSBC. Hands-on technical acumen paired with rigorous governance (UK GDPR, PEN testing gates, Microsoft Purview data controls, human-in-the-loop review).`,
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'tribunal-ally',
    title: 'Tribunal Ally & Employee Ally',
    category: 'ai-products',
    subtitle: 'Governed Legal AI Case-File Systems',
    period: '2026',
    status: 'Live Production',
    liveUrl: 'https://tribunal-ally-828288109486.europe-west2.run.app',
    description:
      'Google Cloud case-file intelligence products for employment dispute analysis and tribunal preparation. Features rigorous factual grounding against official GOV.UK and Acas guidance, requiring human verification for all extracted statements.',
    architecture: [
      'Grounded document ingestion pipeline with semantic entity extraction',
      'Human-in-the-loop validation stage before facts are locked into the case timeline',
      'Containerized deployment on Google Cloud Run with strict UK/EU data residency',
      'Dual-layer prompt boundary enforcing non-hallucinatory citations against Acas codes',
    ],
    governance: [
      'Strict UK/EU data residency compliance',
      'Zero training on user-submitted dispute materials',
      'Mandatory human verification gates for all extracted claims',
      'Full audit trail of source citations and reasoning trees',
    ],
    technologies: ['Google Cloud Run', 'Gemini API', 'Firebase', 'Python', 'TypeScript', 'Docker'],
    badgeColor: 'border-amber-600/40 text-amber-300',
  },
  {
    id: 'dealtable',
    title: 'DealTable WebMCP',
    category: 'ai-products',
    subtitle: 'Tool-Calling Negotiation Protocol with Walkaway Safeguards',
    period: '2026',
    status: 'Live Production',
    liveUrl: 'https://dealtable-webmcp.vercel.app',
    description:
      'Structured negotiation tools exposed to ChatGPT/LLMs implementing Model Context Protocol (MCP). Enforces hard mandate and walkaway boundaries, an immutable audit log of tool calls, and an automatic human-in-the-loop pause if counters dip below threshold.',
    architecture: [
      'Exposes standardized JSON schema tool definitions for negotiation state machines',
      'Rule-based counterparty simulator testing edge cases and boundary breaches',
      'Asynchronous pause-for-human interrupt when parameter thresholds are tested',
      'Tamper-evident audit log recording every tool invocation and agent decision',
    ],
    governance: [
      'Mandate & walkaway hard constraints (system cannot commit below threshold)',
      'Deterministic rule-based boundary validation independent of LLM reasoning',
      'Verifiable tool invocation logging with parameter snapshots',
    ],
    technologies: ['Model Context Protocol (MCP)', 'TypeScript', 'Next.js', 'ChatGPT API', 'Vercel'],
    badgeColor: 'border-orange-600/40 text-orange-300',
  },
  {
    id: 'complaint-path',
    title: 'ComplaintPath',
    category: 'ai-products',
    subtitle: 'UK Statutory Redress Router with Hard Gates & Human-Approved Packs',
    period: '2026',
    status: 'Live Video Demo & Prototype',
    liveUrl: 'https://youtu.be/d0MdNjfLhvM',
    description:
      'Multi-agent pathway that turns a firm’s written reply (Final Response, deadlock, DPO position, parking rejection, or holding letter) into a gated route and an exportable Gate Pack. Live letter extract via Meterless Nightshift (Nemotron), scheme clocks and portals via Zetaris, portal context via Bright Data, shared run state in a Meterless World Model. Deterministic gates decide Eligible / Premature / Out of Time / Wrong Door; the human must approve pack sections I–IV before download. Never auto-files; not legal advice.',
    architecture: [
      'Agent pipeline: DataRetriever (Zetaris) → Extractor (Nightshift) → Gate + Evidence evaluator → WebRetriever (Bright Data) → PackWriter → human final review',
      'Hard jurisdictional state machine in code — four outcomes only; missing clock dates are blockers (no invented FRL / deadlock dates)',
      'Verified · Missing · Blocker fact tags on extract so citizens see what was read vs what must be fixed',
      'Live badges for Nightshift AI (Nemotron) and Scheme data: Zetaris live so judges can see sponsor paths working',
      'Human-in-the-loop: export (.md + .pdf) stays locked until every pack section is approved',
      'JSONL traces + World Model entities/observations for provenance across the run',
    ],
    governance: [
      'Gate authority over the LLM — eligibility cannot be soft-sold past Premature / Out of Time / Wrong Door',
      'Deterministic scheme clocks (e.g. FOS six-month window) loaded from Zetaris, not improvised in a prompt',
      'No auto-submit to FOS, Energy Ombudsman, ICO, or other portals — citizen files using the Gate Pack',
      'Not a claims management company; independent guidance utility with explicit non-legal-advice framing',
      'Secrets stay in local .env (never in the public README); demo path keeps keys off-camera',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'Zetaris', 'Meterless Nightshift', 'NVIDIA Nemotron', 'Meterless World Model', 'Bright Data', 'Cursor'],
    badgeColor: 'border-amber-600/40 text-amber-300',
  },
  {
    id: 'countermark',
    title: 'Countermark',
    category: 'ai-products',
    subtitle: 'Consumer dispute drafting with confidence-badged routing and self-send handoff',
    period: '2026',
    status: 'Live on Railway',
    liveUrl: 'https://countermark-production.up.railway.app/',
    description:
      'Paste or upload an unfair bill, invoice, or no-reply notice; Countermark extracts key facts, drafts a short dispute email in the user’s own voice, and hands off via mailto: or clipboard. The user always sends. Session is in-memory only — reload clears everything.',
    architecture: [
      'Dual intake: paste text or upload PDF/JPEG; PDF text via unpdf, images via Gemini vision when needed',
      'Structured JSON analysis: merchant, amount, breach summary, subject, draft, category',
      'Escalation ladder: polite / assertive / regulatory tone variants without full rewrite',
      'Evidence checklist with [ATTACHED: ...] placeholders and advice for missing proof',
      'Portal mode: short / full / formal paste chunks for character-limited web forms',
      'Best-effort To routing with high / inferred / none confidence badges; never uses consumer To: as the company inbox',
      'Category-mapped helpful links (ombudsman / Citizens Advice / GOV.UK style routes)',
      'Fast local fallback when Gemini is capacity-limited or times out',
    ],
    governance: [
      'User retains send control — no server-side email, no OAuth inbox access',
      'Explicit disclaimer: negotiation drafting from user input, not legal representation',
      'Honest uncertainty on inferred contacts (amber caution, not false “verified”)',
      'Zero retention: no dispute database; session destroyed on reload',
      'Secrets stay in env vars; keys never committed',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Google Gemini', 'Zod', 'unpdf', 'Railway'],
    badgeColor: 'border-orange-600/40 text-orange-300',
  },
  {
    id: 'undo',
    title: 'UNDO',
    category: 'ai-products',
    subtitle: 'Prove-the-previous-package gate with supervised promote',
    period: '2026',
    status: 'Live Video Demo',
    liveUrl: 'https://www.youtube.com/watch?v=dI7f7ozZu6Y&t=11s',
    description:
      'Supervised rollback-before-promote control plane on GitLab Duo Agent Platform. CI proves the previous packaged build still boots (ROLLBACK_OK), a custom Duo flow opens one Work item with PASS/FAIL, and a human must reply approve before a manual job promotes the same image to Google Cloud Run production.',
    architecture: [
      'Pipeline state machine: test → package → prove_rollback → build_image → deploy_staging → manual promote_production',
      'Previous-package health proof: start last registry artefact, hit /health, emit ROLLBACK_OK or fail closed',
      'Ambient Duo flow Undo on Pipeline events → Passed (no chat prompt); reads prove job and posts Approve Work item with previous/new SHA',
      'Staging auto-deploy via Cloud Build + Artifact Registry; production only after human gate + play on promote',
      'Tiny Python /health service so the lifecycle (not a fake product UI) is what judges inspect',
    ],
    governance: [
      'Hard supervised gate: PASS Work item + explicit approve before production promote',
      'Fail-closed rollback path: missing/unverifiable previous package → FAIL; must not be approved',
      'Immutable CI + job logs (prove_rollback, deploy jobs) and Work item history as the audit trail of agent + human decisions',
      'Secrets kept in GitLab CI variables (GCP key out of repo); MIT-licensed app and deploy config in the public project',
    ],
    technologies: ['GitLab CI/CD', 'Duo Agent Platform', 'Python', 'Docker', 'Cloud Build', 'Artifact Registry', 'Cloud Run', 'Google Cloud'],
    badgeColor: 'border-teal-600/40 text-teal-300',
  },
  {
    id: 'truce',
    title: 'Truce',
    category: 'ai-products',
    subtitle: 'Taste Overlap for Divided Tables — Powered by Qloo',
    period: '2026',
    status: 'Live on Railway',
    liveUrl: 'https://truce-production-8fab.up.railway.app/',
    description:
      'Agentic web app that takes two opposing taste tables (especially media diets) and uses Qloo’s taste graph to find shared culture that isn’t politics. Returns a host-ready bridge card with both-side affinity scores, nostalgic conversation prompts, dinner-table games, a Left / Shared / Right Venn of real entities, and an optional Truce Deck where both sides Love or Hard Pass until common ground is locked.',
    architecture: [
      'Two editable taste profiles (media, movies, artists, podcasts, food, holidays) as structured inputs',
      'Qloo Search resolves names → Insights via signal.interests.entities for cross-domain affinity',
      'Bridge ranked by min(affinity_left, affinity_right) over shared entities',
      'Media-diet signals as the primary differentiator; artists/movies as profile context (not opposing signal noise)',
      'Host layer on top of scores: memory prompts, Blind Pick / Watch Swap games, static Venn, optional flashcard deck',
      'Server-side API key only; serial Qloo request queue with 429 backoff',
    ],
    governance: [
      'API key never exposed to the client',
      'Bridges are entity-backed Qloo affinities, not LLM-invented “middle ground” copy',
      'Honest signal design: cultural media brands drive overlap; unused political audience shortcuts are not claimed as working',
      'Rate-limit handling surfaced as system behaviour, not silent empty taste',
      'Probe findings documented in FEEDBACK.md for reproducible API honesty',
    ],
    technologies: ['Qloo Insights API', 'Qloo Search API', 'Node.js', 'Express', 'Vanilla HTML/CSS/JS', 'Railway', 'GitHub'],
    badgeColor: 'border-emerald-500/40 text-emerald-300',
  },
  {
    id: 'ghost-merchant',
    title: 'GhostMerchant',
    category: 'ai-products',
    subtitle: 'Zero-Trust PayPal Escrow for Autonomous Buyers',
    period: '2026',
    status: 'Live on Railway',
    liveUrl: 'https://ghostmerchant-production.up.railway.app/',
    description:
      'Buyer-side control plane for AI agents that purchase via PayPal. Enforces policy before money moves, holds funds with AUTHORIZE, runs a delivery probe, then CAPTURE or VOID. Optional agent payout splits and a forensic dispute dossier. Merchants remain normal PayPal counterparties — GhostMerchant does not sit in their checkout.',
    architecture: [
      'Policy firewall: max order, velocity circuit breaker, vendor/trust rules',
      'PayPal Orders intent: AUTHORIZE hold before settlement',
      'Pre-capture vendor health probe (“poison pill” → VOID on fail)',
      'Live sandbox card path for fast VOID/CAPTURE; wallet path with human Approve',
      'Auto-resume when PayPal marks a wallet order APPROVED (no fake continue button)',
      'Payouts API micro-splits after successful CAPTURE',
      'Control Room dashboard: live pipeline, sessions, dossier drawer',
      'Webhook intake for authorization/capture/void confirmation',
    ],
    governance: [
      'Hard spend limits and velocity caps before AUTHORIZE',
      'Probe-gated settlement: capture only if delivery check passes',
      'Human-owned PayPal identity on wallet flows (agent never holds a PAN)',
      'Session forensic log: policy decision, probe result, PayPal IDs, step timeline',
      'Structured dispute evidence pack for Customer Disputes when seller response is allowed',
    ],
    technologies: ['PayPal Sandbox', 'PayPal MCP', 'AI Toolkit', 'Node.js', 'Express', 'Cursor', 'Railway', 'ngrok'],
    badgeColor: 'border-purple-500/40 text-purple-300',
  },
  {
    id: 'gridrecord',
    title: 'GridRecord',
    category: 'ai-products',
    subtitle: 'AI-Assisted Energy Operations & Reporting System',
    period: '2026',
    status: 'Live Production',
    liveUrl: 'https://gridrecord.co.uk/',
    description:
      'AI-assisted energy grid operations tool designed for high-density regulatory documentation, anomaly tracking, and incident reporting. Built with modern AI-accelerated workflows (Cursor and Grok).',
    architecture: [
      'High-velocity data ingestion interface with tabular telemetry views',
      'Synthesizes complex utility telemetry into auditable operational handovers',
      'Assisted drafting of regulatory incident logs with human engineer sign-off',
    ],
    governance: [
      'Engineered for NFR and regulatory reporting standards',
      'Transparent verification of automated summary points',
    ],
    technologies: ['Cursor', 'Grok', 'React', 'Node.js', 'Tailwind CSS'],
    badgeColor: 'border-teal-600/40 text-teal-300',
  },
  {
    id: 'agile-apocalypse',
    title: 'The Agile Apocalypse',
    category: 'publications',
    subtitle: 'Speculative Satirical Novel on Modern Tech Culture',
    period: 'Late 2025',
    status: 'Published Book',
    liveUrl: 'https://amzn.eu/d/0jj9PJ5E',
    description:
      'An expanded fictional satire chronicling the hilarious, absurd extremes of modern enterprise agile bureaucracy, consulting jargon, and runaway AI transformation hype.',
    architecture: [
      'Deep exploration of institutional rituals: endless sprint retros, Jira estimation poker, and committee bloat',
      'Satirical contrast between actual human technical craft and performative enterprise process',
    ],
    governance: [
      'Literary work providing piercing industry commentary on enterprise dysfunction',
    ],
    technologies: ['Fiction', 'Satire', 'Enterprise Culture', 'Publishing'],
    badgeColor: 'border-stone-500/40 text-stone-300',
  },
  {
    id: 'practical-scrum',
    title: 'Practical Scrum & Practical Scrum 2',
    category: 'publications',
    subtitle: 'Hands-On Agile Engineering & Delivery Manuals',
    period: '2015 & Expanded Edition',
    status: 'Published & Licensed to RBS',
    liveUrl: 'https://amzn.eu/d/09h67V3T',
    description:
      'Practical, no-nonsense guide to real-world Scrum delivery in high-stakes environments. The first edition was so respected that Royal Bank of Scotland (RBS) acquired rights and adopted it as their internal Agile user manual.',
    architecture: [
      'Pragmatic sprint execution without dogmatic ceremonial waste',
      'Techniques for coordinating cross-functional teams, backlog sizing, and debt reduction',
      'Adopted across financial institutions to bridge technical developers and business stakeholders',
    ],
    governance: [
      'Adopted as official RBS internal training standard',
      'Used as blueprint for Agile transformations across Spark Energy and Clydesdale Bank',
    ],
    technologies: ['Scrum Framework', 'Agile Delivery', 'RBS Enterprise Standard', 'Amazon Publishing'],
    badgeColor: 'border-amber-600/40 text-amber-300',
  },
  {
    id: 'shielyule-blog',
    title: 'shielyule.co.uk',
    category: 'publications',
    subtitle: 'Satirical Commentary on Agile, AI & Modern Work Culture',
    period: 'Ongoing',
    status: 'Live Blog',
    liveUrl: 'https://shielyule.co.uk',
    description:
      'Long-running personal platform publishing thoughtful, sharp, and humorous essays on agile delivery realities, AI governance myths, and the everyday theater of corporate management.',
    architecture: [
      'Minimalist static publishing platform focused on reader engagement and crisp typography',
      'Regular dispatches dissecting emergent trends in AI tooling and tech leadership',
    ],
    governance: [
      'Independent editorial voice grounding technological optimism in operational reality',
    ],
    technologies: ['Markdown', 'Static Site Architecture', 'Satirical Essays', 'Cultural Criticism'],
    badgeColor: 'border-teal-600/40 text-teal-300',
  },
  {
    id: 'national-grid-portal',
    title: 'National Grid - US site migration, Chatbot & Storm Mode',
    category: 'ai-products',
    subtitle: 'High-Resilience Public Utility Estate, AI Chatbot & Enterprise Search',
    period: '2025 - 2026',
    status: 'Live Production',
    liveUrl: 'https://www.nationalgrid.com/',
    description:
      'End-to-end delivery lead for the 3,000+ page migration to Acquia Cloud & Drupal, integrating a customer-facing Copilot Studio chatbot, designing a new search function via the Gemini Enterprise Agent Platform, and architecting high-availability "Storm Mode" components.',
    architecture: [
      'Managed a dedicated delivery team of 10 Developers and QA specialists',
      'Acquia Site Studio & Acquia Cloud multi-market resilient architecture',
      'Design and build of new Search function powered by Gemini Enterprise Agent Platform',
      'Engineered a new comprehensive Data Layer across the site to ensure accurate Google Tag Architecture (GTA) tracking and analytics',
      'High-traffic "Storm Mode" component caching and real-time outage messaging',
      'Cloudflare edge redirects and automated telemetry feeding Looker & Power BI',
      'Copilot Studio customer chatbot with Purview security and PEN-tested guardrails',
    ],
    governance: [
      'Responsible for all Production releases and introducing Copilot code reviews & improved release practices',
      '24/7 operational readiness and emergency incident protocols',
      'Strict change-freeze governance and mandatory personal code review before production merge',
      'Enterprise Purview data categorization over public interaction logs',
    ],
    technologies: [
      'Drupal',
      'Acquia Cloud',
      'Gemini Enterprise Agent Platform',
      'Microsoft Copilot Studio',
      'Azure AI Foundry',
      'Microsoft Purview',
      'GTA',
      'Cloudflare',
      'Looker',
      'Power BI',
    ],
    badgeColor: 'border-orange-600/40 text-orange-300',
  },
  {
    id: 'leith-walk-studios',
    title: 'Leith Walk Studios & Guerrilla Projections',
    category: 'creative',
    subtitle: 'Urban Visual Arts Venue, Fringe 421 & Projection Trike',
    period: '2015 - 2017',
    status: 'Cultural Landmark Archive',
    liveUrl: 'https://shielyule.co.uk/category/edinburgh-guerilla-projections/',
    secondaryUrl: 'https://www.youtube.com/watch?v=RWtItACzQzU',
    secondaryUrlLabel: 'Leith Walk Studios Video Archive',
    description:
      'Founded and directed Leith Walk Studios in Edinburgh — a multi-functional gallery, theater venue, and Edinburgh Festival Fringe Venue 421. Designed and engineered a custom portable projection trike for guerrilla art interventions.',
    architecture: [
      'Built a mobile outdoor projection system mounted on a customized tricycle for urban light graffiti',
      'Curated the Visual Front programme, John Byrne Award showcase, and "Humans of Leith Walk"',
      'Integrated artist residencies with retail agile frameworks at the Scottish Design Exchange',
    ],
    governance: [
      'Community arts non-profit operations, health & safety licensing, and Fringe venue compliance',
    ],
    technologies: ['Audio-Visual Engineering', 'Projection Mapping', 'Venue Production', 'Fine Art'],
    badgeColor: 'border-stone-500/40 text-stone-300',
  },
  {
    id: 'halspan-saas',
    title: 'Halspan - Fire Door Compliance SaaS & Data Officer',
    category: 'ai-products',
    subtitle: 'Greenfield B2B Compliance SaaS, AWS Least Privilege & AI Governance',
    period: '2023 - 2024',
    status: 'Enterprise Case Study',
    liveUrl: 'https://www.halspan.com/tracker',
    description:
      'End-to-end delivery of a greenfield B2B door configuration & fire-safety compliance SaaS platform across 7 core architectural components, central RESTful API, Monday.com AI-enhanced service desk, and AWS infrastructure governed under the Principle of Least Privilege.',
    architecture: [
      'Administered complete AWS infrastructure: architected IAM framework enforcing Principle of Least Privilege and continuous CloudTrail auditing',
      'Supported Python & Node.js RESTful API development with rigorous Postman validation for the React front-end',
      'Designed and deployed new Service Desk & CRM on Monday.com with automated, AI-enhanced support workflows',
      'Spearheaded RFP processes, third-party vendor selection, and QA lifecycle across Jira & TestRail',
      'Engineered automated stakeholder and commercial reporting pipelines into Monday.com and executive dashboards',
    ],
    governance: [
      'Acted as in-house Data Officer: managed AI privacy, cookie compliance, algorithmic bias audits, and GDPR Subject Access Requests (SARs)',
      'Enterprise AWS IAM Least Privilege access control and continuous CloudTrail monitoring',
      'Rigorous QA acceptance gates across two external testing agencies',
    ],
    technologies: [
      'AWS (IAM, CloudTrail, S3, EC2)',
      'Python',
      'Node.js',
      'React',
      'Monday.com AI CRM',
      'Postman',
      'TestRail',
      'Jira',
      'GDPR / Data Officer',
    ],
    badgeColor: 'border-amber-600/40 text-amber-300',
  },
  {
    id: 'mystic-tarot',
    title: 'Mystic Tarot — Interactive Digital Reading App',
    category: 'creative',
    subtitle: 'Modern Web Tarot Engine & Symbolic Archetype Reading Lab',
    period: '2024 - 2025',
    status: 'Live on Railway',
    liveUrl: 'https://mystic-tarot-production-df5a.up.railway.app/',
    description:
      'An interactive, browser-based digital tarot reading application featuring procedural card shuffling mechanics, custom multi-card spread layouts, symbolic archetypal interpretations, and clean responsive UI design.',
    architecture: [
      'Procedural card shuffling, draw randomization, and spread arrangement engines',
      'Rich visual tarot archetypes, card orientation (upright/reversed) logic, and interpretive narrative generation',
      'Deployed on Railway container infrastructure for instant low-latency global delivery',
      'Responsive, tactile UI with intuitive card selection and deck animation feedback',
    ],
    governance: [
      'Privacy-first client-side session state with zero telemetry or personal data harvesting',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Railway', 'Interactive UI', 'Animation'],
    badgeColor: 'border-purple-500/40 text-purple-300',
  },
  {
    id: 'rubiks-cube-3d',
    title: "Interactive 3D Rubik's Cube",
    category: 'creative',
    subtitle: 'Algorithmic 3D Spatial Simulator & Interactive Solver',
    period: '2024 - 2025',
    status: 'Live on Railway',
    liveUrl: 'https://shielrubboxcube-production.up.railway.app/',
    description:
      'A fully interactive 3D Rubik’s Cube simulation rendered in the browser. Supports 3D spatial rotation, facet slice manipulations, scramble generators, and algorithmic state tracking inspired by speedcubing methodologies.',
    architecture: [
      'Real-time 3D matrix math and spatial raycasting for facelet drag and rotation physics',
      'Algorithmic state permutation engine supporting standard Singmaster cube notation (U, D, L, R, F, B)',
      'Procedural scramble algorithms and step-by-step state visualization',
      'Deployed on Railway container platform with optimized WebGL rendering performance',
    ],
    governance: [
      'Zero dependencies overhead, high-framerate WebGL/Canvas rendering performance and responsive touch controls',
    ],
    technologies: [
      '3D WebGL / Canvas',
      'TypeScript',
      'Algorithmic State Machines',
      'Railway',
      'Speedcubing Logic',
    ],
    badgeColor: 'border-emerald-500/40 text-emerald-300',
  },
  {
    id: 'youtube-channels',
    title: 'YouTube Tech, AI & Project Demonstrations',
    category: 'publications',
    subtitle: '@shielyule1223 Video Demonstration Channel',
    period: 'Ongoing',
    status: 'Active Video Channel',
    liveUrl: 'https://www.youtube.com/@shielyule1223',
    description:
      'Video demonstrations, architectural walkthroughs, and creative experiments showcasing live AI negotiation rooms (DealTable WebMCP), agile delivery reflections, speedcubing tutorials, and hands-on tech demos.',
    architecture: [
      'Video demos of WebMCP negotiation agents and autonomous tool-calling protocols',
      'Video archives covering Agile realities, software architecture, and creative visual projects',
      'Direct audiovisual companion to shielyule.co.uk essays and published books',
    ],
    governance: [
      'Transparent live-code and live-agent demonstration without pre-recorded illusions',
    ],
    technologies: [
      'WebMCP Demonstrations',
      'Video Production',
      'AI Agent Walkthroughs',
      'Audio Engineering',
      'YouTube Platform',
    ],
    badgeColor: 'border-red-600/40 text-red-300',
  },
  {
    id: 'ro-yoga',
    title: 'Ro-Yoga Edinburgh & International Retreats',
    category: 'creative',
    subtitle: 'Mindfulness Studio & Wellness Endeavors',
    period: '2006 - 2009',
    status: 'Venture Archive',
    description:
      'Founded and operated a dedicated yoga studio in Forth Street, Edinburgh, leading classes, organizing international mindfulness retreats in Malaga, Spain, and gaining ITEC Masseur qualification.',
    architecture: [
      'Direct studio business management, member community operations, and curriculum design',
      'Trained in Mysore, India under Sri K. Pattabhi Jois in traditional Ashtanga yoga',
    ],
    governance: [
      'Holistic health management, British Red Cross First Responder certification, ITEC Masseur qualification',
    ],
    technologies: ['Studio Management', 'Ashtanga Practice', 'Event Production', 'ITEC Masseur'],
    badgeColor: 'border-amber-600/40 text-amber-300',
  },
  {
    id: 'skateboard-scotland',
    title: 'Skateboard Scotland',
    category: 'creative',
    subtitle: 'Founder & Chairman — Official Governing Body for Skateboarding',
    period: '2002 - 2004',
    status: 'Handed to Next Generation',
    liveUrl: 'https://skateboardscotland.com/',
    description:
      'Founded Skateboard Scotland to promote the sport and secure formal recognition. Self-funded the startup so the organisation could chase sport recognition without membership dues constraining early goals. Within a year Sportscotland recognised it as the official governing body — unlocking proper funding pathways for parks, clubs, and events. Chaired through that first recognition cycle, then handed leadership to younger skaters once the founding goals were met. Still skating and supporting the sport’s growth.',
    architecture: [
      'Built a skater-run membership organisation with national reach across Scotland within the first year',
      'Secured Sportscotland recognition as the official governing body for skateboarding (previously outside formal sport funding criteria)',
      'Helped councils and community groups unlock advice and funding so new skateparks could open nationwide',
      'Supported competitions, events, and international visibility while keeping the org “run by skaters for skaters”',
    ],
    governance: [
      'Founder-funded startup — no early membership levy shaping the mission',
      'Time-boxed chairmanship: delivered recognition goals, then transferred leadership to younger members in 2004',
      'Aligned with Sportscotland pathways so facilities and clubs could access legitimate public funding',
    ],
    technologies: [
      'Sports Governance',
      'Sportscotland Recognition',
      'Community Organising',
      'Facility Advocacy',
      'Event Production',
      'Membership Org',
    ],
    badgeColor: 'border-blue-500/40 text-blue-300',
  },
];

export const WORK_HISTORY: WorkRole[] = [
  {
    id: 'national-grid',
    company: 'National Grid',
    role: 'National Grid - US site migration, Chatbot & Storm Mode',
    period: 'October 2025 to August 2026',
    location: 'United Kingdom (UK & US Markets)',
    category: 'ai',
    isFeatured: true,
    summary:
      'Appointed Development Manager leading the end-to-end development and maintenance strategy for the global website portfolio, directing a 10-person engineering team through the 3,000+ page migration to Acquia Cloud & Drupal, enterprise AI chatbot delivery, and Gemini search integration.',
    highlights: [
      'Managed a team of 10 Developers and QA.',
      'Led the strategic migration and rebranding of major web assets (including the US Customer website) leveraging Acquia Site Studio & Acquia Cloud.',
      'Design and build of new Search function using Gemini Enterprise Agent Platform.',
      'Engineered and implemented a new comprehensive Data Layer across the site to ensure accurate Google Tag Architecture (GTA) tracking and automated reporting into Looker and Power BI.',
      'Managed delivery of customer-facing Microsoft Copilot Studio chatbot through QA and rigorous Penetration Testing gates, governed by Microsoft Purview.',
      'Integrated Azure AI Foundry alongside Copilot Studio on a live UK/US estate with strict data governance standards.',
      'Built high-resilience components including "Storm Mode" for emergency weather spikes and owned Cloudflare URL redirect architecture.',
      'Maintained 24/7 operational readiness and emergency response protocols for critical UK/US infrastructure.',
    ],
    technologies: [
      'Drupal',
      'Acquia Cloud',
      'Gemini Enterprise Agent Platform',
      'Microsoft Copilot Studio',
      'Azure AI Foundry',
      'Microsoft Purview',
      'GTA',
      'Power Platform',
      'Cloudflare',
      'Looker',
      'Power BI',
      'Jira',
    ],
    governanceHighlights: [
      'Responsible for all Production releases and introducing Copilot code reviews and improved release practices',
      'Customer-facing AI PEN testing & Purview data governance',
      'Strict change freezes and test & release gates',
      '24/7 emergency response protocols',
    ],
  },
  {
    id: 'acca',
    company: 'ACCA (Association of Chartered Certified Accountants)',
    role: 'Business Analyst and Project Lead / Interim Delivery Manager',
    period: 'April 2025 to September 2025',
    location: 'United Kingdom',
    category: 'ai',
    isFeatured: true,
    summary:
      'Senior hybrid PM and BA driving critical IT operational processes, a strategic contract renewal with Insight and KPMG, a major Dynamics 365 finance transformation, and containerized AI chatbot delivery.',
    highlights: [
      'Supported delivery of an enterprise AI chatbot utilizing AnythingLLM, PostgreSQL, and ChromaDB containerized on Kubernetes.',
      'Delivered final phase of finance transformation: transitioning legacy Oracle General Ledger to Microsoft Dynamics 365 F&E on Azure.',
      'Ensured migration of core financial statements: Balance Sheet, Income Statement, and Cash Flow with full M365 suite, Adobe, and ServiceNow integrations.',
      'Directed end-to-end contract renewal with strategic supplier Insight, establishing PMO governance and RAID management.',
      'Refined the KPMG Operations Manual, formalizing ITIL-aligned processes (Release Management, ticketing workflows, definitive RACI matrix).',
      'Stepped in as interim Delivery Manager for front-end and back-end engineering teams.',
    ],
    technologies: [
      'AnythingLLM',
      'ChromaDB',
      'PostgreSQL',
      'Kubernetes',
      'Microsoft Dynamics 365 F&E',
      'Azure',
      'Oracle GL',
      'ServiceNow',
      'MS Project',
      'ITIL',
    ],
    governanceHighlights: [
      'SOX & financial reporting audit controls',
      'KPMG Operations Manual ITIL governance & RACI',
      'Continuous service SLA oversight',
    ],
  },
  {
    id: 'flagstone',
    company: 'Flagstone Group Ltd',
    role: 'Project Manager and Business Analyst',
    period: 'October 2024 to January 2025',
    location: 'United Kingdom',
    category: 'fintech',
    summary:
      'Led complete 3-month discovery and design phase for a new React Native mobile fintech application, establishing automated DevOps pipelines and advanced AI prototyping.',
    highlights: [
      'Delivered fully documented mobile app proposal and prioritized backlog within a fixed 3-month timeline.',
      'Built a working prototype using AI Cursor to test login and JWT token exchange with the existing backend.',
      'Scoped and designed Salesforce Cloud integration (Salesforce Marketing Cloud for targeted campaigns, Service Cloud for customer support).',
      'Defined DevOps CI/CD pipelines for automated testing and integrated GitHub Copilot for rapid test coverage.',
      'Implemented AI-driven project management tools to automate ticket quality reviews and end-of-sprint reporting.',
    ],
    technologies: [
      'React Native',
      'Cursor AI',
      'GitHub Copilot',
      'Salesforce Marketing Cloud',
      'Salesforce Service Cloud',
      'Azure DevOps',
      'JWT Authentication',
    ],
    governanceHighlights: [
      'Fintech authentication security & JWT token validation',
      'End-to-end data flow mapping in Azure DevOps',
    ],
  },
  {
    id: 'halspan',
    company: 'Halspan Ltd',
    role: 'SaaS Delivery Manager & In-House Data Officer',
    period: 'October 2023 to November 2024',
    location: 'United Kingdom',
    category: 'saas',
    isFeatured: true,
    summary:
      'Key delivery lead for a greenfield SaaS product lifecycle: requirements gathering, RFPs, contract negotiations, 7 core system components, central RESTful API, and full AWS architecture ownership.',
    highlights: [
      'Administered entire AWS platform: architected IAM framework enforcing Principle of Least Privilege and continuous monitoring via CloudTrail.',
      'Directed cross-functional development agencies, DevOps engineers, and UX/UI consultants.',
      'Supported Python and Node.js RESTful API development with rigorous Postman validation for the React front-end.',
      'Designed and deployed new Service Desk and CRM on Monday.com with automated, AI-enhanced support workflows.',
      'Acted as in-house Data Officer: managed AI data privacy, cookie compliance, algorithmic bias audits, and Subject Access Requests (SARs).',
      'Directed end-to-end QA lifecycle authoring test plans in Jira and TestRail across two external testing vendors.',
    ],
    technologies: [
      'AWS (IAM, CloudTrail, S3, EC2)',
      'Python',
      'Node.js',
      'React',
      'Postman',
      'Monday.com CRM',
      'TestRail',
      'Drupal',
    ],
    governanceHighlights: [
      'In-house Data Officer for algorithmic bias & AI privacy',
      'AWS Least Privilege IAM architecture',
      'GDPR & Subject Access Request compliance',
    ],
  },
  {
    id: 'scottish-government',
    company: 'The Scottish Government',
    role: 'Change Delivery Manager',
    period: 'January 2023 to June 2023',
    location: 'Scotland, United Kingdom',
    category: 'gov',
    summary:
      'Assumed emergency leadership of the critical eRDM GDS platform, securing operational stability, managing Oracle DB upgrades, and drafting an AI-assisted Azure cloud migration blueprint.',
    highlights: [
      'Guaranteed stability of essential government public records service during sudden leadership turnover.',
      'Leveraged OpenAI models to conduct deep system analysis and build the business case for migrating legacy on-premise servers to Azure.',
      'Documented on-premise server estate, categorized ownership, identified security/capacity gaps, and authored transition manuals.',
      'Secured full Cyber Security sign-off and fulfilled all PEN testing requirements for sensitive national data.',
      'Ensured regulatory compliance with National Archives standards, GDPR, and official file plan requirements.',
    ],
    technologies: [
      'Oracle Database',
      'Azure Cloud Transition',
      'OpenAI API',
      'eRDM GDS',
      'PEN Testing',
      'GDPR Compliance',
    ],
    governanceHighlights: [
      'National Archives compliance & official file plan management',
      'Government Cyber Security sign-off and PEN gates',
    ],
  },
  {
    id: 'morgan-stanley',
    company: 'Morgan Stanley',
    role: 'Transformation Scrum Master and Agile Coach',
    period: 'June 2022 to December 2022',
    location: 'United Kingdom',
    category: 'fintech',
    summary:
      'Spearheaded Agile transformation across 3 squads in Operational Risk & Regulatory Control (Firmwide Ops / CTB) supporting critical financial reporting systems.',
    highlights: [
      'Pilot rollout of Microsoft Dynamics 365: led user-centered design workshops and data flow automation.',
      'Built bespoke D365 risk dashboards with automated COREP and FINREP reporting integrations for North American client asset protection.',
      'Leveraged Appian low-code platform for rapid stakeholder prototyping and real-time visualization.',
      'Managed complex ecosystem of regulatory platforms including MSCO, Lexor, and SAFE.',
    ],
    technologies: [
      'Microsoft Dynamics 365',
      'Appian Low-Code',
      'COREP / FINREP Reporting',
      'MSCO',
      'Lexor',
      'SAFE Platform',
      'Agile / SAFe',
    ],
    governanceHighlights: [
      'COREP & FINREP regulatory reporting compliance',
      'Protection and auditability of North American client assets',
    ],
  },
  {
    id: 'hsbc',
    company: 'HSBC',
    role: 'Programme Manager and Agile Coach',
    period: 'January 2022 to June 2022',
    location: 'United Kingdom',
    category: 'fintech',
    summary:
      'Stabilised a high-risk Change the Bank (CTB) portfolio within 2 months, governing 7 major programmes and managing £5M+ IT CAPEX/OPEX budget across core SAP initiatives.',
    highlights: [
      'Successfully navigated a mid-project budget cut through meticulous reconciliation of estimates versus actuals.',
      'Established PMO governance framework from scratch: RAID logs, monthly Steercos, and Agile delivery across SPEN, UKIT, and suppliers.',
      'Orchestrated portfolio transition to Clarity PPM, integrating seamlessly with Workday and SAP.',
      'Enforced rigorous SOX internal controls and financial disclosure audit standards.',
    ],
    technologies: [
      'SAP Initiatives',
      'Clarity PPM',
      'Workday',
      'SOX Compliance',
      'PMO Governance',
      'Agile Coaching',
    ],
    governanceHighlights: [
      'SOX compliance and financial disclosure audits',
      'Full PMO and Steerco governance across 7 programmes',
    ],
  },
  {
    id: 'liberty-global',
    company: 'Liberty Global Netherlands',
    role: 'Scrum Master / Programme Manager PMO',
    period: 'October 2018 to November 2021',
    location: 'Amsterdam, Netherlands',
    category: 'saas',
    summary:
      'Promoted from Scrum Master to Programme Manager PMO, leading large-scale migration to a new Flutter codebase across 80+ distributed developers in the US, UK, and Europe.',
    highlights: [
      'Rescued and redesigned failing Product Review process, clearing a 12-item backlog in a single day and establishing new TOM standard.',
      'Managed company-wide adoption of Scaled Agile (SAFe) and directed full-stack Framework team refactoring core middleware and media watermarking.',
      'Spearheaded development of a custom Visual Regression testing tool that drastically shortened release cycles.',
      'Authored Time & Materials and Fixed Price commercial contracts for international engineering vendors.',
    ],
    technologies: [
      'Flutter Codebase',
      'Scaled Agile (SAFe)',
      'Visual Regression Suite',
      'Media Watermarking',
      'Jira / Confluence',
    ],
    governanceHighlights: [
      'Media DRM & watermarking layer security',
      'International supplier contract frameworks (T&M / Fixed Price)',
    ],
  },
  {
    id: 'standard-life',
    company: 'Standard Life Aberdeen',
    role: 'Programme Manager PMO and Agile Coach',
    period: 'March 2018 to October 2018',
    location: 'United Kingdom',
    category: 'fintech',
    summary:
      'Led Agile transformation for the Digital Robo Advice platform, uniting 6 previously siloed squads under SAFe and managing a £36M project budget.',
    highlights: [
      'Defined the Target Operating Model (TOM) for the new 1825 Digital Advice department during major corporate reorganisation.',
      'Maintained meticulous financial tracking and transparent reporting across £36M capital allocation.',
      'Facilitated Working Groups, Design Authorities, Risk Committees, and Executive Steercos.',
    ],
    technologies: [
      'Robo-Advice Platforms',
      'Scaled Agile (SAFe)',
      'Financial Modeling',
      'Enterprise PMO',
    ],
    governanceHighlights: [
      'Financial Conduct Authority (FCA) robo-advice governance',
      'Executive Risk Committee alignment',
    ],
  },
  {
    id: 'clydesdale-bank',
    company: 'Clydesdale Bank',
    role: 'Feature Team Lead / Scrum Master',
    period: 'May 2017 to February 2018',
    location: 'Scotland, United Kingdom',
    category: 'fintech',
    summary:
      'Guided full-stack squads in delivery of PSD2 Open Banking (PISP, AISP) solutions, third-party Amazon Alexa voice integration, and real-time monitoring dashboards.',
    highlights: [
      'Drove delivery of first third-party voice banking integration with Amazon Alexa.',
      'Built AppDynamics and Elasticsearch Kibana real-time RAG system health status dashboard.',
      'Established second-line triage function and incident management workflows in Jira.',
    ],
    technologies: ['PSD2 Open Banking', 'Amazon Alexa Skills', 'AppDynamics', 'Elasticsearch Kibana', 'Java', 'APIs'],
    governanceHighlights: ['PSD2 Open Banking compliance and Open Data security'],
  },
  {
    id: 'tears-in-rain',
    company: 'Tears in Rain Ltd / Leith Walk Studios',
    role: 'Director, Manager and Artist',
    period: 'January 2015 to December 2017',
    location: 'Scotland, United Kingdom',
    category: 'creative',
    summary:
      'Published Practical Scrum (bought by RBS), managed Mantis World digital operations, founded Leith Walk Studios venue & Fringe Venue 421, and engineered Guerrilla Projections.',
    highlights: [
      'Authored Practical Scrum, adopted by RBS for internal agile enablement.',
      'Established Leith Walk Studios art gallery, live performance space, and Edinburgh Fringe outdoor venue 421.',
      'Engineered portable projection trike for mobile nighttime urban art installations (Guerrilla Projections).',
      'Artist in residence at Scottish Design Exchange and implemented retail scrum operations.',
    ],
    technologies: ['Publishing', 'Projection Mapping', 'Drupal', 'Venue Management', 'Retail Scrum'],
  },
  {
    id: 'earlier-career',
    company: 'Enterprise Track Record (RBS, Spark Energy, Havas, APB)',
    role: 'Senior Project Manager & Technical Leader',
    period: '2008 to 2016',
    location: 'UK & International',
    category: 'fintech',
    summary:
      'Extensive career delivering high-impact regulatory and software milestones across major brands.',
    highlights: [
      'Royal Bank of Scotland: Led critical infrastructure project for Basel III BCBS 239 risk data aggregation; implemented Informatica Metadata Manager connecting over 440 disparate legacy source systems.',
      'Spark Energy UK: Spearheaded Scrum adoption across Edinburgh and Selkirk HQ; built customer self-service portal and central customer API.',
      'Havas Inviqa / i-KOS: Promoted to Programme Manager overseeing Lush EU project (14 European country sites plus Japan & Brazil launches).',
      'Realtime Worlds: Marketing Manager / Producer for Dave Jones flagship title APB (All Points Bulletin).',
      'Heineken UK S&N: Digital Marketing Manager.',
    ],
    technologies: ['Informatica Metadata Manager', 'Basel III BCBS 239', 'SAS Bridges', 'Drupal Multi-Site', 'REST APIs'],
  },
];

export const EDUCATION_CREDENTIALS: CredentialItem[] = [
  {
    institution: 'DeepLearning.AI & Stanford Online (Andrew Ng)',
    title: 'Machine Learning Specialization',
    year: '2026',
    category: 'ai-ml',
    details:
      'Supervised Machine Learning (Regression & Classification), Advanced Learning Algorithms, Unsupervised Learning, Recommenders, Reinforcement Learning.',
  },
  {
    institution: 'DeepLearning.AI / CrewAI',
    title: 'Multi-Agent Workflows Certification',
    year: '2025',
    category: 'ai-ml',
    details: 'Autonomous multi-agent orchestration, agent role prompting, structured tool execution.',
  },
  {
    institution: 'Google Cloud Training',
    title: 'Google Gemini AI with Python API Certificate',
    year: '2025',
    category: 'ai-ml',
    details: 'Multimodal generative AI, function calling, grounding, and enterprise deployment.',
  },
  {
    institution: 'Google Cloud Training',
    title: 'Google BigQuery and Looker Certification',
    year: '2025',
    category: 'cert',
    details: 'Data warehousing, pipeline automation, enterprise SQL analytics, and BI modeling.',
  },
  {
    institution: 'CompTIA',
    title: 'CompTIA Data+ Certification',
    year: '2025',
    category: 'cert',
    details: 'Data analytics, data mining, governance, quality management, and compliance.',
  },
  {
    institution: 'CertNexus',
    title: 'Artificial Intelligence Practitioner (AIP)',
    year: '2025',
    category: 'ai-ml',
    details: 'Applied AI pipelines, model evaluation, safety and compliance in business systems.',
  },
  {
    institution: 'ISC2',
    title: 'CISSP - Information Systems Security Professional (Stages 1 & 2)',
    year: '2023 - 2025',
    category: 'cert',
    details: 'Security and risk management, asset security, identity & access control.',
  },
  {
    institution: 'Scrum Alliance',
    title: 'Certified ScrumMaster (CSM)',
    year: '2025',
    category: 'cert',
    details: 'Enterprise Scrum facilitation, team coaching, and iterative delivery.',
  },
  {
    institution: 'BCS, The Chartered Institute for IT',
    title: 'BCS Business Analysis Qualification',
    year: '2025',
    category: 'cert',
    details: 'Requirements engineering, gap analysis, target operating model development.',
  },
  {
    institution: 'Project Management Institute (PMI)',
    title: 'PMI-ACP (Agile Certified Practitioner)',
    year: 'Certified',
    category: 'cert',
    details: 'Agile methodologies across Scrum, Kanban, Lean, and XP.',
  },
  {
    institution: 'The Open University',
    title: 'BSc Open Degree (Engineering the Future & Business Studies)',
    year: 'Degree',
    category: 'degree',
    details: 'Systems engineering, technology management, and business operations. Includes PRINCE2.',
  },
  {
    institution: 'Edinburgh College',
    title: 'HND in Design and Typography',
    year: 'Higher National Diploma',
    category: 'degree',
    details: 'Classical Swiss typographic grids, visual hierarchy, layout architecture, and print technology.',
  },
];
