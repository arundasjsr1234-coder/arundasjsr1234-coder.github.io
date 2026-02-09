import { useState, useEffect } from 'react';
import type { ReactNode, ElementType } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Menu, 
  X, 
  ArrowLeft,
  Download,
  Layout,
  Globe,
  Image as ImageIcon
} from 'lucide-react';

// --- Types & Interfaces ---

interface Socials {
  github: string;
  linkedin: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface EducationItem {
  school: string;
  degree: string;
  year: string;
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tech: string;
  description: string; // Short summary for card
  details: string;     // Long description for page
  link: string;        // Live/Repo link
  downloadUrl?: string; // Optional download link
  screenshots: string[]; // Added screenshots array
}

interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  socials: Socials;
  skills: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
}

// --- Data & Configuration ---
const portfolioData: PortfolioData = {
  name: "Arunangshu Das",
  title: "Full Stack Developer",
  tagline: "Building digital experiences, one pixel (and bug) at a time.",
  about: "I am a software engineer  and a game developer with a passion for building scalable solutions. My work ranges from high-performance web applications to experimental interactive tools.",
  email: "arundas.jsr1234@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/arunangshu-das-7a74322b9/",
  },
  skills: [
    "JavaScript (ES6+)", "React", "Node.js", "TypeScript", 
    "Next.js", "PostgreSQL", "Tailwind CSS", "Git",
    "Python",
  ],
  experience: [
    {
      company: "",
      role: "Web Developer",
      period: "",
      description: "Skilled in web Developing."
    },
    {
      company: "",
      role: "Software Developer",
      period: "",
      description: "Developed core architecture for internal tools. Managed cross-platform deployment pipelines for web and mobile applications."
    },
    {
      company: "GauravGo Games pvt",
      role: "Unity Game Developer",
      period: "",
      description: "Worked and developed 2D and 3D games in unity"
    }
  ],
  education: [
    {
      school: "Trident Academy of Technology (BPUT)",
      degree: "B.Tech in Computer Science & Engineering",
      year: "2023-2027"
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Nova Dashboard",
      category: "SaaS Application",
      tech: "React / Node.js",
      description: "A comprehensive analytics dashboard for tracking real-time user metrics.",
      details: "Nova Dashboard is a full-stack analytics solution designed to process over 1 million events per day. It features real-time data visualization using WebSockets, customizable widget layouts, and role-based access control. The backend is built with Node.js microservices handling data aggregation from multiple sources.",
      link: "#",
      downloadUrl: "#",
      screenshots: [
        "https://placehold.co/800x450/1e293b/10b981?text=Dashboard+Main+View",
        "https://placehold.co/800x450/1e293b/10b981?text=Analytics+Graph",
        "https://placehold.co/800x450/1e293b/10b981?text=User+Settings"
      ]
    },
    {
      id: "p2",
      title: "Algo Visualizer",
      category: "Educational Tool",
      tech: "TypeScript / HTML5",
      description: "An interactive tool for visualizing sorting and pathfinding algorithms.",
      details: "This project serves as an educational aid for computer science students. It visualizes complex algorithms like Dijkstra's, A*, QuickSort, and MergeSort in real-time. The application allows users to control speed, input size, and step through execution to understand the underlying logic.",
      link: "#",
      downloadUrl: "#",
      screenshots: [
        "https://placehold.co/800x450/1e293b/3b82f6?text=Sorting+Algorithm",
        "https://placehold.co/800x450/1e293b/3b82f6?text=Pathfinding+Grid",
        "https://placehold.co/800x450/1e293b/3b82f6?text=Code+Explanation"
      ]
    },
    {
      id: "p3",
      title: "Cosmic Drifter",
      category: "Interactive Simulation",
      tech: "Unity / C#",
      description: "A physics-based space simulation with procedural generation.",
      details: "Cosmic Drifter demonstrates advanced physics calculations and procedural content generation. While presented as a simulation, it utilizes a custom rendering pipeline to optimize particle effects on low-end devices. Features include Newtonian physics for flight controls and a seed-based universe generation system.",
      link: "#",
      downloadUrl: "#",
      screenshots: [
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Space+Exploration",
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Ship+Customization",
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Procedural+Planet"
      ]
    },
    {
      id: "p4",
      title: "Cosmic Drifter",
      category: "Interactive Simulation",
      tech: "Unity / C#",
      description: "A physics-based space simulation with procedural generation.",
      details: "Cosmic Drifter demonstrates advanced physics calculations and procedural content generation. While presented as a simulation, it utilizes a custom rendering pipeline to optimize particle effects on low-end devices. Features include Newtonian physics for flight controls and a seed-based universe generation system.",
      link: "#",
      downloadUrl: "#",
      screenshots: [
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Space+Exploration",
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Ship+Customization",
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Procedural+Planet"
      ]
    },
    {
      id: "p5",
      title: "Cosmic Drifter",
      category: "Interactive Simulation",
      tech: "Unity / C#",
      description: "A physics-based space simulation with procedural generation.",
      details: "Cosmic Drifter demonstrates advanced physics calculations and procedural content generation. While presented as a simulation, it utilizes a custom rendering pipeline to optimize particle effects on low-end devices. Features include Newtonian physics for flight controls and a seed-based universe generation system.",
      link: "#",
      downloadUrl: "#",
      screenshots: [
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Space+Exploration",
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Ship+Customization",
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Procedural+Planet"
      ]
    },{
      id: "p6",
      title: "Cosmic Drifter",
      category: "Interactive Simulation",
      tech: "Unity / C#",
      description: "A physics-based space simulation with procedural generation.",
      details: "Cosmic Drifter demonstrates advanced physics calculations and procedural content generation. While presented as a simulation, it utilizes a custom rendering pipeline to optimize particle effects on low-end devices. Features include Newtonian physics for flight controls and a seed-based universe generation system.",
      link: "#",
      downloadUrl: "#",
      screenshots: [
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Space+Exploration",
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Ship+Customization",
        "https://placehold.co/800x450/1e293b/8b5cf6?text=Procedural+Planet"
      ]
    }
  ]
};

// --- Components ---

interface SectionProps {
  id: string;
  title: string;
  icon?: ElementType; 
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, icon: Icon, children, className = "" }: SectionProps) => (
  <section id={id} className={`py-20 px-6 md:px-12 max-w-6xl mx-auto ${className}`}>
    <div className="flex items-center gap-3 mb-10 border-b border-slate-700 pb-4">
      {Icon && <Icon className="text-emerald-400 w-6 h-6" />}
      <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
    </div>
    {children}
  </section>
);

const TerminalHero = () => {
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-700 shadow-2xl overflow-hidden max-w-2xl w-full mx-auto md:mx-0 mt-8">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-slate-400 font-mono">bash — 80x24</span>
      </div>
      <div className="p-6 font-mono text-sm md:text-base space-y-4">
        <div>
          <span className="text-emerald-400">user@portfolio:~$</span>
          <span className="text-slate-200 ml-2">whoami</span>
        </div>
        <div className="text-slate-300">
          {'>'} <span className="font-bold text-white">{portfolioData.name}</span>
          <br />
          {'>'} {portfolioData.title}
        </div>
        
        <div>
          <span className="text-emerald-400">user@portfolio:~$</span>
          <span className="text-slate-200 ml-2">cat about.txt</span>
        </div>
        <div className="text-slate-400 leading-relaxed">
          {portfolioData.about}
        </div>

        <div className="animate-pulse">
          <span className="text-emerald-400">user@portfolio:~$</span>
          <span className="w-2 h-4 bg-emerald-400 inline-block ml-2 align-middle" />
        </div>
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  item: ExperienceItem;
}

const ExperienceCard = ({ item }: ExperienceCardProps) => (
  <div className="relative pl-8 pb-12 border-l border-slate-700 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
      <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
      <span className="text-sm font-mono text-emerald-400">{item.period}</span>
    </div>
    <div className="text-slate-300 font-medium mb-2">{item.company}</div>
    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
  </div>
);

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <div 
    onClick={() => onClick(project)}
    className="group bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-all hover:-translate-y-1 hover:shadow-xl border border-slate-700 hover:border-emerald-500/50 cursor-pointer flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-900 rounded-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
        <Code2 size={24} />
      </div>
      <div className="text-slate-500 group-hover:text-emerald-400 transition-colors">
        <Globe size={20} />
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
    <div className="text-xs font-mono text-emerald-400 mb-3">{project.category}</div>
    <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mt-auto">
      <Terminal size={14} />
      {project.tech}
    </div>
  </div>
);

interface ProjectDetailsPageProps {
  project: ProjectItem;
  onBack: () => void;
}

const ProjectDetailsPage = ({ project, onBack }: ProjectDetailsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 relative z-50 animate-in fade-in duration-300">
      
      {/* Top Nav */}
      <div className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm px-4 py-2 rounded-lg hover:bg-emerald-500/10"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        
        {/* Project Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono rounded-full uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Gallery & Details (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Screenshots Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <ImageIcon size={24} className="text-emerald-400" />
                Project Gallery
              </h3>
              
              <div className="grid gap-6">
                {/* Main large image */}
                {project.screenshots[0] && (
                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
                    <img 
                      src={project.screenshots[0]} 
                      alt={`${project.title} Screenshot 1`} 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]" 
                    />
                  </div>
                )}
                
                {/* Secondary grid images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.screenshots.slice(1).map((src, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
                      <img 
                        src={src} 
                        alt={`${project.title} Screenshot ${idx + 2}`} 
                        className="w-full h-48 md:h-56 object-cover transform transition-transform duration-700 group-hover:scale-[1.02]" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Layout size={24} className="text-emerald-400" />
                About the Project
              </h3>
              <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed p-6 bg-slate-900/30 rounded-xl border border-slate-800/50">
                <p>{project.details}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 sticky top-28 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-4">
                Project Info
              </h3>
              
              <div className="space-y-8">
                {/* Download Action */}
                {project.downloadUrl && (
                  <div>
                    <a 
                      href={project.downloadUrl}
                      className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-4 px-6 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-500/20 w-full group"
                    >
                      <Download size={20} className="group-hover:animate-bounce" />
                      Download Build
                    </a>
                    <p className="text-center text-xs text-slate-500 mt-2 font-mono">
                      Latest version: v1.0.0
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Terminal size={16} /> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(' / ').map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-800 text-emerald-400 font-mono text-sm rounded-md border border-slate-700 hover:border-emerald-500/50 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Category</h4>
                  <p className="text-slate-200 font-medium">{project.category}</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Handle scroll spy
  useEffect(() => {
    if (selectedProject) return; // Disable scroll spy on detail page

    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setSelectedProject(null); // Return to home view if navigating
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Condition to render Project Detail Page
  if (selectedProject) {
    return (
      <ProjectDetailsPage 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="font-mono font-bold text-xl text-emerald-400 tracking-tighter"
          >
            &lt;{portfolioData.name.split(' ')[0]} /&gt;
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  activeSection === link.href.substring(1) ? 'text-emerald-400' : 'text-slate-400'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-6 py-4 text-slate-300 hover:bg-slate-700 hover:text-emerald-400 border-l-4 border-transparent hover:border-emerald-400"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen md:min-h-[80vh] flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-mono font-medium border border-emerald-500/20">
            Available for hire
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Arunangshu Das <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Software Engineer
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg">
            {portfolioData.tagline}
          </p>
          
          <div className="flex gap-4 pt-4">
            <a href={portfolioData.socials.github} className="p-3 bg-slate-800 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-all border border-slate-700">
              <Github size={20} />
            </a>
            <a href={portfolioData.socials.linkedin} className="p-3 bg-slate-800 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-all border border-slate-700">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-colors">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        <div className="flex-1 w-full">
          <TerminalHero />
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience" icon={Briefcase}>
        <div className="mt-8">
          {portfolioData.experience.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Selected Projects" icon={Layout}>
        <p className="text-slate-400 mb-8 max-w-2xl">
          A collection of my work ranging from web applications to interactive tools. Click on any project to see detailed specs and download options.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </Section>

      {/* Skills & Education Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="text-emerald-400 w-6 h-6" />
              <h2 className="text-3xl font-bold text-slate-100">Technical Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded hover:bg-slate-700 hover:text-emerald-400 transition-colors cursor-default border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-emerald-400 w-6 h-6" />
              <h2 className="text-3xl font-bold text-slate-100">Education</h2>
            </div>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-800">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                    <div className="text-emerald-400 text-sm font-mono">{edu.degree}</div>
                    <div className="text-slate-500 text-sm mt-1">{edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p className="mt-2 flex items-center justify-center gap-2">
          {/* Built with <Code2 size={14} /> and React + Tailwind */}
        </p>
      </footer>

    </div>
  );
}