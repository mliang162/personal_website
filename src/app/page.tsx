'use client'
import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    const sections = ['about', 'experience', 'projects', 'gallery'];
    const scrollY = window.scrollY;
    
    let currentSection = 'about'; // Default
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop } = element;
        if (scrollY >= offsetTop - 300) {
          currentSection = section;
        }
      }
    }
    
    setActiveSection(currentSection);
  };

  handleScroll(); // Run once on mount
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOverlayClick = () => {
    setSidebarOpen(false);
  };

  // Experience data
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Amazon",
      period: "2025",
      description: "Streamlined catalog data corrections with a centralized dashboard",
      icon: (
        <img 
          src="/logos/amazon_fresh.png" 
          alt="Amazon Fresh" 
          className="w-6 h-6 object-contain"
        />
      ),
      achievements: []
    },
    {
      title: "Software Engineering Intern", 
      company: "NYC DOT",
      period: "2024",
      description: "Developed green wave traffic optimization algorithms for Bx10, M10, and Si74 routes",
      icon: (
        <img 
          src="/logos/NYCDOT.svg.png" 
          alt="NYC DOT" 
          className="w-6 h-6 object-contain"
        />
      ),
      achievements: []
    },
  ];

  // Projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured platform with user authentication, payment processing, and admin dashboard. Built for scalability and performance.",
      tech: "React, Node.js, MongoDB, Stripe API",
      links: [
        { label: "View Live", href: "#" },
        { label: "GitHub", href: "#" }
      ]
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex datasets with real-time updates. Features multiple chart types and customizable filters.",
      tech: "Vue.js, D3.js, Python, FastAPI",
      links: [
        { label: "View Live", href: "#" },
        { label: "GitHub", href: "#" }
      ]
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with file sharing and group conversations. Includes message encryption and presence indicators.",
      tech: "React, Socket.io, Express, PostgreSQL",
      links: [
        { label: "View Live", href: "#" },
        { label: "GitHub", href: "#" }
      ]
    }
  ];
  const gallery = [
  {
    src: "/images/nature1.jpeg",
    alt: "Mountain landscape",
    caption: "Snoqualmie Pass"
  },
  {
    src: "/images/nature2.jpeg",
    alt: "Another nature photo",
    caption: "Lake Serene"
  },
  {
    src: "/images/nature3.jpeg",
    alt: "Another nature photo",
    caption: "Mount Rainier"
  },
  {
    src: "/images/mount_si.jpeg",
    alt: "Another nature photo",
    caption: "Mount Si Trail"
  },
  {
    src: "/images/penn.jpeg",
    alt: "Another nature photo",
    caption: "Bushkill Falls"
  },
  {
    src: "/images/cascades_1.jpeg",
    alt: "Another nature photo",
    caption: "North Cascades"
  }

]
  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery'}
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-7 left-7 z-50 bg-black text-white px-3 py-2 text-sm cursor-pointer md:hidden hover:bg-gray-800 transition-colors"
        aria-label="Toggle menu"
      >
        Menu
      </button>

      {/* Sidebar */}
      <nav 
        className={`fixed left-0 top-0 h-full w-60 bg-gray-50 border-r border-gray-200 z-40 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Profile Section */}
        <div className="p-8 pb-6 border-b border-gray-200">
          <h1 className="text-lg font-medium text-black mb-1">Matthew Liang</h1>
          <p className="text-sm text-gray-600 mb-6">Student, Developer</p>
          <div className="text-xs text-gray-600 space-y-1 leading-relaxed">
            <p>
              <a 
                href="mailto:ml2483@cornell.edu" 
                className="text-gray-800 hover:text-black transition-colors duration-200"
              >
                ml2483@cornell.edu
              </a>
            </p>
            <p>Brooklyn, New York</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="py-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-8 py-3 text-sm transition-colors duration-200 border-l-2 ${
                activeSection === item.id
                  ? 'text-black border-black'
                  : 'text-gray-600 border-transparent hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-60">
        {/* About Section */}
        <section id="about" className="px-8 md:px-16 py-24 max-w-4xl">
          <h2 className="text-3xl font-light text-black mb-16 tracking-tight">About</h2>
          
          {/* Profile Picture */}
<div className="flex-shrink-0">
  <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
    <img
      src="/images/profile.jpeg"
      alt="Matthew Liang"
      className="w-full h-full object-cover"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const nextElement = target.nextElementSibling as HTMLElement;
        if (nextElement) {
          nextElement.style.display = 'flex';
        }
      }}
    />
        <div 
          className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-medium"
          style={{ display: 'none' }}
        >
          ML
        </div>
      </div>
    </div>

          <div className="space-y-6 text-gray-800 mb-16 leading-relaxed">
            <p className="text-base">
              I&apos;m a developer passionate about creating simple, effective solutions. I believe in clean code, 
              thoughtful design, and building products that make a difference.
            </p>
            <p className="text-base">
              When I&apos;m not coding, I enjoy exploring new technologies, reading, and spending time outdoors. 
              I&apos;m always looking for opportunities to learn and grow.
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-black mb-5">Skills</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Java, Python, React, Node.js, TypeScript, C++
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-8 md:px-16 py-24 max-w-4xl">
          <h2 className="text-3xl font-light text-black mb-16 tracking-tight">Experience</h2>
          
          <div className="space-y-16">
            {experiences.map((job, index) => (
              <div key={index} className="pb-10 border-b border-gray-100 last:border-b-0">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {job.icon && (
                      <div className="text-gray-600">
                        {job.icon}
                      </div>
                    )}
                    <h3 className="text-lg font-medium text-black">{job.title}</h3>
                  </div>
                  <div className="text-sm text-gray-600 mb-5">
                    {job.company} • {job.period}
                  </div>
                </div>
                <div className="text-gray-800">
                  <p className="text-sm leading-relaxed mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm leading-relaxed pl-4 relative">
                        <span className="absolute left-0 text-gray-400">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-8 md:px-16 py-24 max-w-4xl">
          <h2 className="text-3xl font-light text-black mb-16 tracking-tight">Projects</h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="pb-10 border-b border-gray-100 last:border-b-0">
                <h3 className="text-lg font-medium text-black mb-2">{project.title}</h3>
                <p className="text-sm text-gray-800 leading-relaxed mb-4">{project.description}</p>
                <p className="text-xs text-gray-600 mb-4">{project.tech}</p>
                <div className="flex gap-5">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="text-sm text-black border-b border-gray-200 hover:border-black transition-colors duration-200 pb-0.5"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
    

      {/* Gallery Section */}
        <section id="gallery" className="px-8 md:px-16 py-24 max-w-6xl">
          <h2 className="text-3xl font-light text-black mb-16 tracking-tight">Gallery</h2>
          
          {gallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((photo, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden bg-gray-100 aspect-square cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
                    style={{ display: 'none' }}
                  >
                    Image not found
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-gray-100 rounded-lg p-12 max-w-md mx-auto">
                <p className="text-gray-500 text-sm mb-4">No photos in gallery yet</p>
                <p className="text-gray-400 text-xs">Add your nature photos to the gallery array to display them here.</p>
              </div>
            </div>
          )}
        </section>
        </main>
        
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={handleOverlayClick}
        />
      )}
    </div>
  );
};

export default Portfolio;