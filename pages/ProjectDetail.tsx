
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { AnimatedSection } from '../components/AnimatedSection';

// Gallery Image Component with Error Handling
const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative flex justify-center h-48 sm:h-64 md:h-80 w-auto min-w-[12rem] shrink-0 rounded-xl shadow-md snap-center border border-gray-100 dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-white/5">
      {!hasError ? (
        <img 
          src={src} 
          alt={alt} 
          className={`h-full w-auto object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        //   referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      ) : (
        <div className="h-full w-48 sm:w-64 flex flex-col items-center justify-center text-gray-400 gap-2 bg-gray-100 dark:bg-gray-800">
           <span className="material-symbols-outlined text-3xl">broken_image</span>
           <span className="text-xs">Image unavailable</span>
        </div>
      )}
      
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

const StoreButton: React.FC<{ url: string; type: 'google' | 'apple' }> = ({ url, type }) => {
    if (!url || url === '#') return null;

    const isGoogle = type === 'google';
    const bgColor = isGoogle ? 'bg-[#01875F] hover:bg-[#017a56]' : 'bg-[#007AFF] hover:bg-[#006be0]';
    const textColor = isGoogle ? 'text-green-100/90' : 'text-blue-100/90';
    const title = isGoogle ? 'Google Play' : 'App Store';
    const subtitle = isGoogle ? 'Get it on' : 'Download on the';
    const iconPath = isGoogle 
        ? "M5 3.7c0-.28.16-.54.41-.67.26-.13.56-.12.81.02l14.22 8.16c.24.13.38.38.38.65s-.15.52-.38.65L6.22 20.66c-.25.14-.56.15-.81.02-.25-.13-.41-.39-.41-.67V3.7z"
        : "M16.14 17.78c-1.04 0-1.78-.49-2.88-.49-1.12 0-1.85.51-2.92.51-2.94 0-4.83-4.9-4.83-7.53 0-2.88 2.07-4.41 3.96-4.41 1.05 0 1.95.73 2.58.73.61 0 1.76-.75 2.97-.75 1.05 0 2.29.62 3.03 1.5-2.65 1.43-2.22 5.17.44 6.24-.62 1.63-1.46 3.08-2.35 4.2zm-2.07-13c.48-.99 1.25-1.57 2.15-1.63.14 1.22-.38 2.45-1.14 3.23-.74.77-1.83 1.34-2.8.94.13-1.08.77-2.04 1.79-2.54z";

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg ${bgColor} text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 min-w-[140px]`}
            aria-label={subtitle + " " + title}
        >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                <path d={iconPath} />
            </svg>
            <div className="flex flex-col items-start leading-none">
                <span className={`text-[9px] uppercase font-medium ${textColor}`}>{subtitle}</span>
                <span className="text-sm font-bold">{title}</span>
            </div>
        </a>
    );
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  
  const [activeTab, setActiveTab] = useState<'overview' | 'tech'>('overview');
  
  const overviewRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const scrollToSection = (section: 'overview' | 'tech') => {
    setActiveTab(section);
    const ref = section === 'overview' ? overviewRef : techRef;
    
    if (ref.current) {
        // Offset for sticky header (approx 80px + tab header height)
        const offset = 180; 
        const elementPosition = ref.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  if (!project) {
    return (
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold dark:text-white">Project not found</h2>
            <button onClick={() => navigate('/projects')} className="text-primary hover:underline">Back to Projects</button>
        </div>
    )
  }

  return (
    <div className="layout-container w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
      {/* Breadcrumb */}
      <AnimatedSection className="flex items-center gap-2 mb-6 md:mb-8 text-sm">
        <Link to="/projects" className="text-gray-500 hover:text-primary flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Portfolio
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 dark:text-white font-medium truncate">{project.title}</span>
      </AnimatedSection>

      {/* Header */}
      <AnimatedSection delay={0.1} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8 md:mb-12">
        <div className="flex items-center gap-4 w-full md:w-auto md:block">
            <img 
                src={project.thumbnail} 
                alt="Logo" 
                // referrerPolicy="no-referrer"
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg object-cover bg-white dark:bg-white/10"
            />
            {/* Mobile Title - visible only on small screens next to logo */}
            <div className="md:hidden flex-1">
                <h1 className="text-2xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                    {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {project.category}
                    </span>
                    {project.company && (
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
                            <span>at</span>
                            {project.companyUrl ? (
                                <a href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline flex items-center gap-0.5">
                                    {project.company}
                                    <span className="material-symbols-outlined text-[10px]">open_in_new</span>
                                </a>
                            ) : (
                                <span>{project.company}</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
        
        <div className="flex-1 w-full">
            {/* Desktop Title */}
            <div className="hidden md:block mb-2">
                 <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
                    {project.title}
                </h1>
                {project.company && (
                    <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                        <span className="material-symbols-outlined text-lg">business_center</span>
                        <span>Developed at</span>
                        {project.companyUrl ? (
                            <a href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 font-bold">
                                {project.company}
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        ) : (
                            <span className="font-bold">{project.company}</span>
                        )}
                    </div>
                )}
            </div>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 md:mb-0">
                {project.shortDescription}
            </p>
        </div>
        
        {/* Buttons Section */}
        <div className="flex flex-col gap-4 w-full md:w-auto justify-start md:justify-end min-w-[200px]">
             
             {/* GitHub Button if available */}
             {project.links.github && (
                 <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 rounded-xl bg-gray-100 dark:bg-surface text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-transparent hover:border-gray-300 dark:hover:border-gray-600 mb-2"
                    aria-label="GitHub"
                 >
                    <span className="material-symbols-outlined">code</span>
                    <span className="ml-2 font-medium">View Source</span>
                 </a>
             )}

             {/* Single App Logic */}
             {!project.apps && (
               <div className="flex flex-col gap-2">
                   <StoreButton url={project.links.playStore || '#'} type="google" />
                   <StoreButton url={project.links.appStore || '#'} type="apple" />
               </div>
             )}

             {/* Multi App Logic (User, Provider, etc) */}
             {project.apps && (
               <div className="flex flex-col gap-3">
                 {project.apps.map((app) => (
                   <div key={app.name} className="flex flex-col gap-1.5 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800">
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">{app.name}</span>
                      <div className="flex gap-2">
                        {app.links.playStore && <StoreButton url={app.links.playStore} type="google" />}
                        {app.links.appStore && <StoreButton url={app.links.appStore} type="apple" />}
                      </div>
                   </div>
                 ))}
               </div>
             )}

             {project.links.website && project.links.website !== "#" && (
                <a 
                    href={project.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 mt-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
                    aria-label="Visit Website"
                >
                    <span className="material-symbols-outlined text-lg">language</span>
                    <span className="whitespace-nowrap text-sm">Website</span>
                </a>
             )}
        </div>
      </AnimatedSection>

      {/* Gallery */}
      {project.images && (
          <AnimatedSection delay={0.2} className="mb-8 md:mb-12">
            <div className="flex gap-4 overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] snap-x">
                {project.images.map((img, idx) => (
                    <GalleryImage key={idx} src={img} alt={`Screenshot ${idx + 1}`} />
                ))}
            </div>
          </AnimatedSection>
      )}

      {/* Sticky Tabs */}
      <div className="sticky top-16 md:top-20 z-30 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 mb-6 md:mb-8 flex gap-8">
        <button 
            onClick={() => scrollToSection('overview')}
            className={`py-3 md:py-4 border-b-[3px] text-sm md:text-base font-bold transition-all ${
                activeTab === 'overview' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-white'
            }`}
        >
            Overview
        </button>
        <button 
            onClick={() => scrollToSection('tech')}
            className={`py-3 md:py-4 border-b-[3px] text-sm md:text-base font-bold transition-all ${
                activeTab === 'tech' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-white'
            }`}
        >
            Tech Stack
        </button>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col gap-12 pb-20">
        
        {/* Overview Section */}
        <div ref={overviewRef} className="flex flex-col gap-8 md:gap-12 scroll-mt-48">
             {project.fullDescription && (
                <AnimatedSection delay={0}>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                        {project.fullDescription}
                    </p>
                </AnimatedSection>
            )}

            {project.features && (
                <AnimatedSection delay={0.1}>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">{feature.icon}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm md:text-base">{feature.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            )}

            {project.role && (
                <AnimatedSection delay={0.2}>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">My Role & Contribution</h2>
                    <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30">
                        <p className="text-gray-700 dark:text-blue-100 leading-relaxed font-medium">
                            {project.role}
                        </p>
                    </div>
                </AnimatedSection>
            )}
        </div>

        {/* Tech Stack Section */}
        <div ref={techRef} className="scroll-mt-48">
            <AnimatedSection delay={0.3}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                    Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3 md:gap-4">
                    {project.techStack.map((tech, idx) => (
                        <div 
                            key={tech}
                            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-surface border border-gray-200 dark:border-gray-700 shadow-sm hover:border-primary/50 transition-colors"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="font-bold text-gray-800 dark:text-white">{tech}</span>
                        </div>
                    ))}
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};