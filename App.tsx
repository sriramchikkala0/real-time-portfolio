import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  Brain, 
  Terminal, 
  Award,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, CERTIFICATIONS } from './constants';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on system preference or default
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="#" className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              CSR
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Hi, I'm <br />
              <span className="text-blue-600 dark:text-blue-400">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl font-light">
              {PERSONAL_INFO.role}. Transforming raw data into intelligent solutions through Machine Learning and Full Stack Development.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
              >
                Contact Me
              </a>
              <a 
                href="#" 
                className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                onClick={(e) => { e.preventDefault(); alert("Resume download simulation started."); }}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start gap-6 text-slate-500 dark:text-slate-400">
              <a href={PERSONAL_INFO.linkedin} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href={PERSONAL_INFO.github} className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={24} /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-red-500 dark:hover:text-red-400 transition-colors"><Mail size={24} /></a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl mx-auto relative z-10 bg-slate-200 dark:bg-slate-700">
               {/* Placeholder for Profile Pic */}
              <img 
                src="https://picsum.photos/400/400?grayscale" 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-10 w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-full blur-2xl opacity-60 z-0"></div>
            <div className="absolute bottom-0 left-10 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/40 rounded-full blur-2xl opacity-60 z-0"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Machine Learning</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Building intelligent models with TensorFlow & PyTorch</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Data Science</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">ETL pipelines, Analytics & Visualization with Python</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Full Stack</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Developing scalable web apps with React & Python</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <Terminal size={18} className="text-blue-600 dark:text-blue-400" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Grid */}
      <section id="experience" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Code2 size={16} className="text-blue-600 dark:text-blue-400" />
                </div>
                Experience
              </h2>
              <div className="space-y-8 border-l-2 border-slate-100 dark:border-slate-800 ml-4 pl-8 relative">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"></div>
                    <div className="mb-1">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">{exp.company}</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <Award size={16} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                Education
              </h2>
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                      <span className="text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{edu.score}</p>
                  </div>
                ))}
              </div>

              {/* Certifications Preview */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.slice(0, 3).map((cert, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                      <Award size={12} className="text-yellow-500" />
                      {cert.name}
                    </span>
                  ))}
                  <span className="text-xs text-slate-400 self-center">+{CERTIFICATIONS.length - 3} more</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A showcase of my technical projects involving Machine Learning, Data Analytics, and Full Stack deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow text-slate-800 dark:text-slate-200">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span key={tool} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link || "#"} 
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-slate-300 mb-12 text-lg max-w-xl mx-auto">
            I'm currently looking for internship opportunities and freelance projects in AI/ML and Full Stack Development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors group">
              <Mail className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold mb-1">Email Me</h3>
              <p className="text-sm text-slate-400 break-words">{PERSONAL_INFO.email}</p>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors group">
              <Phone className="mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold mb-1">Call Me</h3>
              <p className="text-sm text-slate-400">{PERSONAL_INFO.phone}</p>
            </a>
            <a href={PERSONAL_INFO.linkedin} className="p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors group">
              <Linkedin className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-slate-400">Connect Professionally</p>
            </a>
            <a href={PERSONAL_INFO.github} className="p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors group">
              <Github className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-sm text-slate-400">View My Code</p>
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </section>

      {/* Chat Bot Widget */}
      <ChatBot />

    </div>
  );
};

export default App;