export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Cybersecurity' | 'Graphic Design' | 'Video Editing';
  tagline: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  objectives: string[];
  technologies: string[];
  status: 'Prototype Concept' | 'Security Lab' | 'Active Development' | 'Completed';
  features: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  thumbnail: string;
  accentColor: string;
  demoUrl?: string;
  githubUrl?: string;
  clientType?: string;
}

export interface SkillCategory {
  id: 'cybersecurity' | 'webdev' | 'graphicdesign' | 'videoediting';
  name: string;
  subtitle: string;
  badge: string;
  icon: string;
  skills: {
    name: string;
    description: string;
    level: 'Foundational' | 'Practical Competency' | 'Active Research' | 'Core Tool';
    tags: string[];
  }[];
}

export interface Service {
  id: string;
  title: string;
  category: 'Development' | 'Design' | 'Cybersecurity' | 'Media';
  icon: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  badge?: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  category: 'Cybersecurity' | 'Development' | 'Design' | 'Education';
  description: string;
  highlight: string;
  tools: string[];
}

export interface CreativeItem {
  id: string;
  title: string;
  category: 'Posters' | 'Branding' | 'Thumbnails' | 'Video/Reels';
  image: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  description: string;
  tools: string[];
  videoUrl?: string;
}

export const PERSONAL_INFO = {
  name: "RISHVAN A P",
  monogram: "RAP",
  title: "Ethical Hacker | Web Developer | Graphic Designer | Video Editor",
  roleHeadline: "Building Secure Digital Experiences. Creating Visual Stories.",
  location: "Kerala, India",
  tagline: "Technology meets creativity.",
  bio: "I'm a technology enthusiast and creative professional exploring ethical hacking, web development, graphic design, and video editing. I turn ideas into practical digital experiences through technology, design, and creativity.",
  aboutParagraph: "I'm passionate about technology, cybersecurity, and digital creativity. My interests span web development, ethical hacking, visual design, and video production. I enjoy learning new tools, solving technical problems, and building digital experiences that are both functional and visually appealing.",
  profileImage: "/rishvan-profile.jpg",
  availability: "Available for Select Projects & Collaborations",
  email: "risvanap28@gmail.com",
  phone: "+91 8086380373",
  whatsappUrl: "https://wa.me/918086380373?text=Hi%20Rishvan,%20I%20would%20like%20to%20discuss%20a%20project",
  githubUrl: "https://github.com/risvanap",
  linkedinUrl: "https://www.linkedin.com/in/rishvanap",
  instagramUrl: "https://www.instagram.com/risvan_ap",
  socialProfiles: [
    {
      name: "LinkedIn",
      handle: "in/rishvanap",
      url: "https://www.linkedin.com/in/rishvanap",
      fullUrlDisplay: "www.linkedin.com/in/rishvanap",
      description: "Professional networking & security research"
    },
    {
      name: "Instagram",
      handle: "@risvan_ap",
      url: "https://www.instagram.com/risvan_ap",
      fullUrlDisplay: "instagram.com/risvan_ap",
      description: "Visual creatives, posters & cinematic video reels"
    },
    {
      name: "GitHub",
      handle: "risvanap",
      url: "https://github.com/risvanap",
      fullUrlDisplay: "github.com/risvanap",
      description: "Source code & cybersecurity projects"
    }
  ],
  stats: [
    { label: "Core Disciplines", value: "4 Pillars" },
    { label: "Security & Dev Labs", value: "15+ Modules" },
    { label: "Creative Assets", value: "30+ Works" },
    { label: "Commitment", value: "100% Quality" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Ethical Hacking',
    subtitle: 'Defensive mindsets, vulnerability assessments & authorized research',
    badge: 'Security Mindset',
    icon: 'ShieldCheck',
    skills: [
      {
        name: 'Networking Fundamentals',
        description: 'TCP/IP architecture, subnetting, DNS, packet inspection, and firewall behavior analysis.',
        level: 'Practical Competency',
        tags: ['TCP/IP', 'Wireshark', 'DNS', 'Routing']
      },
      {
        name: 'Linux Fundamentals & SysAdmin',
        description: 'CLI mastery, permissions auditing, process automation, bash scripting, and server hardening.',
        level: 'Core Tool',
        tags: ['Debian/Ubuntu', 'Bash', 'Kali Linux', 'CLI']
      },
      {
        name: 'Web Application Security',
        description: 'Analysis of HTTP security headers, CORS policies, authentication flows, and session management.',
        level: 'Active Research',
        tags: ['Headers', 'Cookies', 'JWT', 'Burp Suite']
      },
      {
        name: 'Vulnerability Assessment',
        description: 'Systematic reconnaissance, scanning, and identifying security exposures in controlled environments.',
        level: 'Practical Competency',
        tags: ['Nmap', 'Recon', 'Nikto', 'Vuln Analysis']
      },
      {
        name: 'OWASP Top 10 Methodologies',
        description: 'Hands-on understanding of SQLi, XSS, CSRF, Broken Access Control, and SSRF remediation.',
        level: 'Practical Competency',
        tags: ['OWASP', 'Injection', 'XSS', 'IDOR']
      },
      {
        name: 'Authorized Environment Testing',
        description: 'Strict adherence to legal, ethical boundaries in isolated labs (TryHackMe, PortSwigger, CTFs).',
        level: 'Active Research',
        tags: ['Legal Testing', 'Lab CTFs', 'Documentation']
      }
    ]
  },
  {
    id: 'webdev',
    name: 'Full-Stack Web Development',
    subtitle: 'Modern responsive interfaces, robust APIs & scalable architectures',
    badge: 'Clean Code',
    icon: 'Code2',
    skills: [
      {
        name: 'HTML5 & Modern CSS3',
        description: 'Semantic markup, accessible tree structures, responsive Flexbox/Grid, and Tailwind CSS.',
        level: 'Core Tool',
        tags: ['HTML5', 'CSS3', 'Tailwind CSS', 'Semantics']
      },
      {
        name: 'JavaScript & TypeScript',
        description: 'ES6+ standards, asynchronous paradigms, strict typing, DOM operations, and clean modular code.',
        level: 'Practical Competency',
        tags: ['ES6+', 'TypeScript', 'Async/Await', 'Type Safety']
      },
      {
        name: 'Angular & Ionic Framework',
        description: 'Component architecture, dependency injection, reactive services, and mobile cross-platform UI.',
        level: 'Practical Competency',
        tags: ['Angular', 'Ionic', 'RxJS', 'Cross-Platform']
      },
      {
        name: 'Python & Django REST Framework',
        description: 'Backend API design, ORM modeling, serialization, authentication, and endpoint security.',
        level: 'Practical Competency',
        tags: ['Python 3', 'Django', 'DRF', 'Endpoints']
      },
      {
        name: 'Node.js & Express / REST APIs',
        description: 'Server runtime logic, RESTful resource design, middleware pipelines, and JSON web tokens.',
        level: 'Practical Competency',
        tags: ['Node.js', 'Express', 'JSON APIs', 'Middleware']
      },
      {
        name: 'PostgreSQL & Database Design',
        description: 'Relational data schemas, normalization, constraints, indexing, and query optimization.',
        level: 'Foundational',
        tags: ['SQL', 'PostgreSQL', 'Schema Design', 'Foreign Keys']
      },
      {
        name: 'Git & GitHub Version Control',
        description: 'Branching workflows, atomic commits, pull requests, and collaborative code management.',
        level: 'Core Tool',
        tags: ['Git', 'GitHub', 'CI/CD Basics', 'Repo Hygiene']
      }
    ]
  },
  {
    id: 'graphicdesign',
    name: 'Graphic Design & Brand Identity',
    subtitle: 'High-impact visuals, balanced layouts & visual communication',
    badge: 'Visual Craft',
    icon: 'Palette',
    skills: [
      {
        name: 'Adobe Photoshop',
        description: 'Advanced photo manipulation, raster graphics composition, color correction, and mockups.',
        level: 'Core Tool',
        tags: ['Photoshop', 'Retouching', 'Compositing', 'Masking']
      },
      {
        name: 'Canva Pro & Rapid Prototyping',
        description: 'Rapid asset production, template architecture, brand kits, and multi-format graphics.',
        level: 'Core Tool',
        tags: ['Canva', 'Speed', 'Layouts', 'Collateral']
      },
      {
        name: 'Poster & Event Key Visual Design',
        description: 'High-impact typography pairing, visual hierarchy, focal points, and event identity.',
        level: 'Practical Competency',
        tags: ['Typography', 'Key Visuals', 'Posters', 'Hierarchy']
      },
      {
        name: 'Social Media Creatives & Ads',
        description: 'Optimized aspect ratios, high-CTR thumbnail compositions, carousels, and promotional graphics.',
        level: 'Practical Competency',
        tags: ['Instagram', 'Carousels', 'Ad Creative', 'Thumbnails']
      },
      {
        name: 'Brand Identity & Logo Styling',
        description: 'Color theory, geometric balance, vector symbol styling, and consistent branding guidelines.',
        level: 'Practical Competency',
        tags: ['Color Theory', 'Identity', 'Logos', 'Guidelines']
      },
      {
        name: 'Photo Editing & Digital Finishing',
        description: 'Tone curves, selective color grading, sharpening, and aesthetic mood enhancement.',
        level: 'Practical Competency',
        tags: ['Grading', 'Mood', 'Sharpening', 'Finishing']
      }
    ]
  },
  {
    id: 'videoediting',
    name: 'Video Editing & Motion Media',
    subtitle: 'Rhythmic pacing, cinematic color science & short-form storytelling',
    badge: 'Motion & Flow',
    icon: 'Film',
    skills: [
      {
        name: 'DaVinci Resolve',
        description: 'Non-linear timeline editing, color grading nodes, audio normalization, and delivery presets.',
        level: 'Practical Competency',
        tags: ['Resolve', 'Color Nodes', 'Fairlight Audio', 'Color Space']
      },
      {
        name: 'CapCut Pro Desktop & Mobile',
        description: 'High-energy pacing, keyframing, trending transitions, auto-captions, and beat sync.',
        level: 'Core Tool',
        tags: ['CapCut', 'Speed Ramping', 'Beat Sync', 'Captions']
      },
      {
        name: 'Cinematic Editing & Pacing',
        description: 'Visual storytelling, rhythm, narrative arcs, J-cuts/L-cuts, and emotional sound design.',
        level: 'Practical Competency',
        tags: ['Pacing', 'Story Arc', 'Sound Design', 'Transitions']
      },
      {
        name: 'Color Grading & LUT Styling',
        description: 'Skin tone correction, contrast management, cinematic looks, and atmosphere creation.',
        level: 'Practical Competency',
        tags: ['Color Grading', 'LUTs', 'Skin Tones', 'Contrast']
      },
      {
        name: 'Motion Graphics & Typography',
        description: 'Kinetic title animations, lower thirds, UI callouts, and tracking elements.',
        level: 'Practical Competency',
        tags: ['Motion Titles', 'Keyframes', 'Lower Thirds', 'VFX']
      },
      {
        name: 'Social Media Reels & Shorts',
        description: 'Vertical 9:16 retention strategies, hook editing within the first 3 seconds, and audio trending.',
        level: 'Core Tool',
        tags: ['9:16 Format', 'Hooks', 'Shorts', 'Reels']
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'lifedrop',
    title: 'LifeDrop: Blood Donor Finder',
    category: 'Web Development',
    tagline: 'Life-saving donor matching platform connecting recipients by blood group & district',
    shortDescription: 'A platform concept engineered to accelerate emergency blood donor discovery by blood group, geographic location, and verified availability status.',
    overview: 'LifeDrop is a dedicated healthcare assistance concept designed to solve critical delay times during emergency blood donation requirements. The application empowers patients, hospitals, and volunteers to quickly find matched blood donors across Kerala districts, eliminating chaotic social media forwarding during medical crises.',
    problemStatement: 'In emergency medical situations, patients and families often struggle with scattered phone chains and outdated WhatsApp donor lists, causing life-threatening delays in securing required blood units.',
    objectives: [
      'Create an instant geographic filter for donors by district and blood group (A+, B+, O+, AB+, rare phenotypes).',
      'Provide rapid one-tap direct contact options (WhatsApp / Call) with privacy safeguards.',
      'Maintain an active donor readiness toggle so unavailable donors are not disturbed unnecessarily.',
      'Ensure a clean, high-contrast, accessible interface usable during high-stress medical emergencies.'
    ],
    technologies: ['TypeScript', 'Angular', 'REST APIs', 'PostgreSQL', 'Tailwind CSS', 'Leaflet Maps'],
    status: 'Prototype Concept',
    features: [
      'Fast Blood Group filter matrix with instant matching algorithm',
      'District and pin-code location grouping',
      'Donor eligibility questionnaire (last donation date, health checklist)',
      'Emergency SOS Broadcast button with pre-formatted WhatsApp share',
      'Responsive mobile-first layout optimized for slow 3G network conditions'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Protecting volunteer donor phone numbers from spam and scraping.',
        solution: 'Implemented contact obfuscation and one-time verification tokens before revealing direct call channels.'
      },
      {
        challenge: 'Speed of finding nearby donors in remote rural areas.',
        solution: 'Built client-side indexed search caching to deliver sub-50ms query results even on high-latency mobile networks.'
      }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#EF4444',
    demoUrl: '#',
    githubUrl: 'https://github.com/rishvan-ap'
  },
  {
    id: 'lyndra-garden',
    title: 'Lyndra Garden: E-Commerce Storefront',
    category: 'Web Development',
    tagline: 'Contemporary indoor plant & botanical lifestyle shopping experience',
    shortDescription: 'An elegant indoor plant e-commerce concept featuring curated botanical collections, care difficulty indicators, responsive cart, and checkout flow.',
    overview: 'Lyndra Garden is a modern e-commerce storefront crafted for plant enthusiasts and interior botanical styling. It bridges organic natural aesthetics with ultra-clean digital shopping experiences, featuring care guides, watering schedules, and light level recommendations for each species.',
    problemStatement: 'Most plant shopping websites lack intuitive care classification, leaving novice indoor gardeners unsure of whether a plant will thrive in their living space light conditions.',
    objectives: [
      'Design an organic, calming visual aesthetic that showcases botanical photography.',
      'Integrate interactive care difficulty tags (Low Light, Pet Safe, Air Purifying).',
      'Implement an efficient cart management state with real-time price recalculation.',
      'Build a frictionless mobile-responsive shopping experience.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'REST API', 'Framer Motion'],
    status: 'Prototype Concept',
    features: [
      'Visual catalog with interactive light & water requirement badges',
      'Slide-over shopping cart drawer with instant subtotal and tax calculation',
      'Plant care filter matrix (Pet-friendly, Beginner-friendly, Air-purifying)',
      'Botanical care guide modal with seasonal maintenance tips',
      'Optimized image lazy-loading for fast page load speeds'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Balancing image-heavy plant photography with lightning-fast load times.',
        solution: 'Implemented responsive WebP picture sources and progressive blurred placeholder rendering.'
      },
      {
        challenge: 'State persistence across page reloads without requiring immediate login.',
        solution: 'Used localStorage state synchronization for cart items with validation against catalog stock.'
      }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#10B981',
    demoUrl: '#',
    githubUrl: 'https://github.com/rishvan-ap'
  },
  {
    id: 'cybersecurity-lab',
    title: 'Authorized Cybersecurity Lab & Vuln Assessments',
    category: 'Cybersecurity',
    tagline: 'Defensive security testing, OWASP Top 10 analysis & ethical research in controlled sandboxes',
    shortDescription: 'A structured collection of authorized security testing notes, web application vulnerability demonstrations, and mitigation write-ups.',
    overview: 'This project documents practical security testing conducted in strictly legal, isolated lab environments (PortSwigger Web Security Academy, TryHackMe, and self-hosted vulnerable VMs). It highlights hands-on methodology for identifying common security misconfigurations, inspecting HTTP traffic, and validating remediation code.',
    problemStatement: 'Modern web applications frequently suffer from common oversights like broken object level authorization, insecure deserialization, and missing security headers due to lack of security-first development practices.',
    objectives: [
      'Document systematic vulnerability discovery methodology following the OWASP testing guide.',
      'Demonstrate clear proof-of-concept exploits exclusively within authorized lab environments.',
      'Provide developer-ready remediation guidelines to write secure, hardened code.',
      'Analyze network traffic and defensive firewall/log detection signatures.'
    ],
    technologies: ['Kali Linux', 'Burp Suite', 'Nmap', 'OWASP ZAP', 'Wireshark', 'Python Scripting'],
    status: 'Security Lab',
    features: [
      'SQL Injection prevention case studies (Parameterized queries vs string interpolation)',
      'Cross-Site Scripting (XSS) defense demos with Content Security Policy (CSP) implementation',
      'Broken Access Control (IDOR) demonstration and JWT signature verification testing',
      'Automated reconnaissance scripts written in Python for legal asset scoping',
      'Hardening checklist for Linux server deployments and SSH configuration'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Safely simulating vulnerabilities without risk of cross-system pollution.',
        solution: 'Constructed isolated containerized Docker testbeds with disconnected bridge networking for each lab scenario.'
      },
      {
        challenge: 'Translating raw vulnerability findings into actionable developer advice.',
        solution: 'Created concise remediation diff templates highlighting vulnerable vs secure code blocks.'
      }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3B82F6',
    demoUrl: '#',
    githubUrl: 'https://github.com/rishvan-ap'
  },
  {
    id: 'digital-service-centre',
    title: 'Digital Service Centre: Citizen Portal',
    category: 'Web Development',
    tagline: 'Streamlined online public services & WhatsApp citizen inquiry portal',
    shortDescription: 'A modern web interface designed for a local digital service center, organizing citizen documentation services, fee schedules, and direct WhatsApp consultations.',
    overview: 'Digital Service Centre is a customer-facing service portal built to bridge government documentation assistance, utility services, and certificates with citizens. It organizes complex paperwork requirements into simple checklists, allowing users to initiate queries directly via automated WhatsApp links.',
    problemStatement: 'Citizens frequently visit service centres without required prerequisite paperwork, leading to wasted hours and repeated visits.',
    objectives: [
      'Provide crystal-clear required document checklists for certificates, IDs, and utility registrations.',
      'Enable instant one-tap WhatsApp service requests with pre-filled application details.',
      'Deliver bilingual accessibility (English & Malayalam friendly formatting).',
      'Ensure zero clutter with quick-search category navigation.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WhatsApp Business API format', 'Vite'],
    status: 'Prototype Concept',
    features: [
      'Comprehensive service directory (Passport, PAN, Certificates, Banking, Bill Payments)',
      'Prerequisite Document Checker with printable checklist generator',
      'Smart WhatsApp link generator that pre-fills selected service and customer query',
      'Working hours, location map integration, and emergency contact details',
      'Ultra-fast load time (< 0.8s) optimized for low-end mobile hardware'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Large variety of government services with varying document prerequisites.',
        solution: 'Designed a searchable JSON configuration schema allowing instant addition and filtering of services.'
      },
      {
        challenge: 'Ensuring non-tech-savvy users can easily request assistance.',
        solution: 'Replaced multi-step forms with a clear 2-tap WhatsApp flow that people of all ages already know how to use.'
      }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#06B6D4',
    demoUrl: '#',
    githubUrl: 'https://github.com/rishvan-ap'
  },
  {
    id: 'creative-design-portfolio',
    title: 'Visual Identity & High-Impact Poster Series',
    category: 'Graphic Design',
    tagline: 'Bold typography, geometric compositions & promotional branding assets',
    shortDescription: 'A curated collection of poster designs, brand identity concepts, event banners, and high-CTR social media promotional creatives.',
    overview: 'This creative portfolio showcases visual design systems, typographic experiments, and marketing collateral. Spanning technology summits, cultural events, and commercial product promotions, each piece explores deliberate contrast, visual weight, and modern color harmonies.',
    problemStatement: 'Standard promotional graphics often blend into crowded social feeds due to generic template usage, lacking distinct brand character and visual punch.',
    objectives: [
      'Explore innovative typography combinations and asymmetric layout balances.',
      'Establish cohesive visual identities with memorable color palettes and vector marks.',
      'Craft high-retention social media banners optimized for mobile feed consumption.',
      'Maintain production-ready export quality across both print and digital mediums.'
    ],
    technologies: ['Adobe Photoshop', 'Canva Pro', 'Typography Design', 'Vector Illustration', 'Color Theory'],
    status: 'Completed',
    features: [
      'Tech Fest & Cyber Workshop promotional posters with futuristic dark neon aesthetics',
      'Minimalist corporate identity package (Business cards, letterheads, social kit)',
      'High-CTR YouTube thumbnail templates designed with focal contrast principles',
      'Instagram carousel templates for tech tutorials and security awareness tips',
      'Custom vector badge and monogram icon designs'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Achieving consistent color fidelity across OLED mobile screens and standard monitors.',
        solution: 'Standardized sRGB color profiles and conducted calibrated cross-device testing before export.'
      },
      {
        challenge: 'Balancing text readability with artistic visual texture.',
        solution: 'Employed selective contrast masks and subtle dark back-glows behind headline typography.'
      }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#8B5CF6',
    demoUrl: '#',
    githubUrl: 'https://github.com/rishvan-ap'
  },
  {
    id: 'cinematic-video-editing',
    title: 'Cinematic Reel Production & Visual Storytelling',
    category: 'Video Editing',
    tagline: 'Dynamic timeline pacing, professional color grading & high-retention motion cuts',
    shortDescription: 'A showcase of short-form video edits, event highlight reels, cinematic color grading, and motion graphics tailored for maximum audience engagement.',
    overview: 'This video production showcase highlights editing workflows using DaVinci Resolve and CapCut Pro. Focusing on rhythmic pacing, audio-visual synergy, and atmospheric color timing, the edits transform raw footage into compelling visual stories that captivate viewers within seconds.',
    problemStatement: 'Viewer retention drops within the first 3 seconds if videos lack immediate visual hooks, dynamic pacing, and clean sound balance.',
    objectives: [
      'Master rapid retention hooks and seamless transitions without visual clutter.',
      'Apply professional color grading nodes for mood enhancement and skin-tone accuracy.',
      'Design immersive audio landscapes with sound effects (risers, whooshes, impacts).',
      'Produce vertical 9:16 content optimized for Instagram Reels and YouTube Shorts algorithms.'
    ],
    technologies: ['DaVinci Resolve', 'CapCut Pro', 'Color Grading Nodes', 'Sound Design', 'Motion Graphics'],
    status: 'Completed',
    features: [
      'High-energy travel and event recap reel with precision beat-synced cuts',
      'Cinematic documentary-style color grading showcase with before/after LUT breakdown',
      'Kinetic typography motion titles with smooth easing and camera shake accents',
      'Multi-track sound design with normalized dialogue, atmospheric beds, and foley SFX',
      'Vertical short-form edits maintaining 80%+ 10-second retention marks'
    ],
    challengesAndSolutions: [
      {
        challenge: 'Inconsistent lighting in multi-camera event footage.',
        solution: 'Used DaVinci Resolve color wheels and node masks to balance exposure and align white balances across clips.'
      },
      {
        challenge: 'Maintaining high video clarity after harsh social media compression.',
        solution: 'Optimized H.264/H.265 bitrates, keyframe intervals, and custom sharpening passes tailored to Instagram upload limits.'
      }
    ],
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#EC4899',
    demoUrl: '#',
    githubUrl: 'https://github.com/rishvan-ap'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    category: 'Development',
    icon: 'Globe',
    description: 'Custom, high-performance web applications built with modern frontend frameworks, responsive architecture, and clean maintainable code.',
    deliverables: [
      'Modern Single Page Applications (React / TypeScript / Angular)',
      '100% mobile, tablet & desktop responsive layouts',
      'Clean modular architecture and API integrations',
      'Fast loading speed & SEO best practices'
    ],
    idealFor: 'Businesses, startups, and personal brands needing a standout online presence.'
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Development',
    category: 'Development',
    icon: 'Layout',
    description: 'Conversion-focused, visually captivating landing pages designed to turn visitors into leads, subscribers, or paying customers.',
    deliverables: [
      'High-impact hero sections with dynamic interactive elements',
      'Clear value propositions and conversion CTAs',
      'Optimized lightweight asset delivery',
      'Contact forms with validation & feedback'
    ],
    idealFor: 'Product launches, marketing campaigns, and service promotions.'
  },
  {
    id: 'ui-ux-design',
    title: 'Website UI/UX Design',
    category: 'Design',
    icon: 'Sparkles',
    description: 'Thoughtfully structured user interfaces that prioritize intuitive navigation, visual hierarchy, aesthetic delight, and user flow.',
    deliverables: [
      'Interactive wireframes and high-fidelity mockups',
      'Custom design systems with color palettes & typography tokens',
      'Mobile-first UX workflows and user journey mapping',
      'Interactive prototype demonstrations'
    ],
    idealFor: 'Founders planning new web products or redesigning clunky interfaces.'
  },
  {
    id: 'posters-graphic',
    title: 'Graphic Design & Posters',
    category: 'Design',
    icon: 'Palette',
    description: 'Bold, visually arresting key visuals, event posters, and promotional graphics that command attention and communicate messages instantly.',
    deliverables: [
      'Print-ready high-resolution event & workshop posters',
      'Creative typography and composited visuals',
      'Digital banner formats for online distribution',
      'Editable source files upon request'
    ],
    idealFor: 'College events, tech summits, club announcements, and brand campaigns.'
  },
  {
    id: 'social-media',
    title: 'Social Media Creative Design',
    category: 'Design',
    icon: 'Share2',
    description: 'Scroll-stopping social media assets including carousels, ad creatives, promotional flyers, and high-CTR thumbnail templates.',
    deliverables: [
      'Multi-slide educational or promotional Instagram carousels',
      'High-contrast YouTube & video thumbnail designs',
      'Stories & status banner series',
      'Consistent brand aesthetic kits'
    ],
    idealFor: 'Content creators, brands, and agencies seeking to increase audience engagement.'
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Reels',
    category: 'Media',
    icon: 'Video',
    description: 'Cinematic video production for short-form social reels, YouTube shorts, promotional teasers, and event recaps.',
    deliverables: [
      'Dynamic beat-synced cuts with retention-optimized pacing',
      'Atmospheric color grading and tone enhancement',
      'Custom kinetic subtitles & sound design accents',
      'Multi-platform aspect ratios (9:16 vertical & 16:9 widescreen)'
    ],
    idealFor: 'Creators, businesses, and event organizers wanting punchy video content.'
  },
  {
    id: 'security-review',
    title: 'Website Security Review (Authorized)',
    category: 'Cybersecurity',
    icon: 'ShieldAlert',
    description: 'Authorized, ethical evaluation of web applications to identify common misconfigurations, missing security headers, and basic exposures.',
    deliverables: [
      'HTTP security headers analysis (CSP, HSTS, X-Frame-Options)',
      'Basic input validation & authentication flow sanity checks',
      'Vulnerability assessment in client-approved environments',
      'Practical developer remediation checklist (OWASP-aligned)'
    ],
    idealFor: 'Website owners seeking an ethical sanity check prior to public deployment.',
    badge: 'Authorized & Legal Only'
  },
  {
    id: 'tech-support',
    title: 'Basic Technical Support',
    category: 'Development',
    icon: 'Wrench',
    description: 'Practical troubleshooting for web hosting, domain DNS setup, SSL certificates, Git repository management, and environment setup.',
    deliverables: [
      'Domain configuration and DNS record propagation (A, CNAME, TXT)',
      'SSL/TLS certificate setup and HTTPS redirection',
      'Static site deployment assistance (Vercel, Netlify, GitHub Pages)',
      'Linux server CLI navigation and basic environment guidance'
    ],
    idealFor: 'Individuals needing hands-on help getting technical assets online smoothly.'
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2026',
    title: 'Advanced Full-Stack & Security Integration',
    category: 'Cybersecurity',
    description: 'Combining secure development principles with full-stack TypeScript and Python architectures. Actively testing in authorized web security labs.',
    highlight: 'Exploring OWASP Top 10 remediation & containerized security sandboxes',
    tools: ['React', 'TypeScript', 'Burp Suite', 'Kali Linux', 'Docker']
  },
  {
    year: '2025',
    title: 'Web Application Development & Frameworks',
    category: 'Development',
    description: 'Engineered web applications and concepts like LifeDrop and Lyndra Garden. Deepened proficiency in Angular, Ionic, and Django REST APIs.',
    highlight: 'Building data-driven frontend interfaces and RESTful services',
    tools: ['Angular', 'Ionic', 'Python/Django', 'PostgreSQL', 'Tailwind']
  },
  {
    year: '2024',
    title: 'Creative Direction: Video & Graphic Design',
    category: 'Design',
    description: 'Expanded into professional video editing and visual branding. Mastered DaVinci Resolve color workflows, CapCut speed ramping, and Photoshop compositions.',
    highlight: 'Produced 30+ visual assets and cinematic short-form video reels',
    tools: ['DaVinci Resolve', 'CapCut Pro', 'Adobe Photoshop', 'Canva']
  },
  {
    year: '2023',
    title: 'Foundations of Ethical Hacking & Linux Systems',
    category: 'Cybersecurity',
    description: 'Initiated systematic study into computer networking, TCP/IP protocols, Linux system administration, and legal cybersecurity fundamentals.',
    highlight: 'CLI mastery, bash scripting, and networking fundamentals',
    tools: ['Linux', 'Wireshark', 'Bash', 'Networking Concepts']
  }
];

export const CREATIVE_GALLERY_ITEMS: CreativeItem[] = [
  {
    id: 'c1',
    title: 'Cyber Pulse: Tech Summit Key Visual',
    category: 'Posters',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait',
    description: 'Futuristic poster artwork created for a simulated cybersecurity symposium, featuring glowing wireframe grids and bold geometric typography.',
    tools: ['Photoshop', 'Typography', 'Color Nodes']
  },
  {
    id: 'c2',
    title: 'Kinetic Neon: Sound & Light Festival',
    category: 'Posters',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait',
    description: 'High-energy event poster with vibrant neon magenta and cyan contrast, tailored for print flyers and digital social stories.',
    tools: ['Photoshop', 'Canva', 'Layout']
  },
  {
    id: 'c3',
    title: 'Minimalist Monogram & Identity Kit',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square',
    description: 'Brand identity system featuring clean geometric marks, high-contrast stationery mockups, and cohesive color palette cards.',
    tools: ['Vector Design', 'Photoshop', 'Brand Guide']
  },
  {
    id: 'c4',
    title: 'Cinematic Reel: Kerala Monsoon Journey',
    category: 'Video/Reels',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'landscape',
    description: 'Atmospheric color-graded video project capturing the lush tones and misty horizons of Kerala with acoustic sound design.',
    tools: ['DaVinci Resolve', 'Color Grading', 'Sound Design']
  },
  {
    id: 'c5',
    title: 'High-CTR Tech Concept Thumbnail',
    category: 'Thumbnails',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'landscape',
    description: 'High-retention thumbnail design utilizing focal glow techniques and bold readable typography optimized for small mobile feeds.',
    tools: ['Photoshop', 'Focal Lighting', 'Typography']
  },
  {
    id: 'c6',
    title: 'Dark Mode Workspace Visual',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square',
    description: 'Aesthetic composition celebrating clean code, minimalist hardware setups, and ambient night lighting.',
    tools: ['Photo Retouching', 'Color Grading']
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: 'cert1',
    title: 'Web Application Security Fundamentals',
    issuer: 'Authorized Security Lab / Self-Paced Training',
    date: '2025',
    category: 'Cybersecurity',
    description: 'Comprehensive study of OWASP Top 10 vulnerabilities, authentication security, and authorized vulnerability assessment techniques.',
    verified: true
  },
  {
    id: 'cert2',
    title: 'Full-Stack Web Development & Modern JavaScript',
    issuer: 'Hands-on Project Portfolio & Open Source Practice',
    date: '2025',
    category: 'Development',
    description: 'Demonstrated mastery in building responsive TypeScript/React web apps, RESTful endpoints, and relational databases.',
    verified: true
  },
  {
    id: 'cert3',
    title: 'Digital Graphic Design & Brand Identity',
    issuer: 'Creative Visual Lab & Design Practice',
    date: '2024',
    category: 'Design',
    description: 'Practical training in Adobe Photoshop, layout typography, visual hierarchy, and multi-format promotional collateral.',
    verified: true
  },
  {
    id: 'cert4',
    title: 'Video Editing & Color Grading Masterclass',
    issuer: 'NLE Video Production & Color Science Study',
    date: '2024',
    category: 'Media',
    description: 'Hands-on practice in DaVinci Resolve color wheels, CapCut rhythm pacing, audio mastering, and 9:16 short-form media retention.',
    verified: true
  }
];
