
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { projectsData } from '../data/projects';
import { Project } from '../types';

const categories = ["All", "Services", "Game", "Healthcare", "Education", "Media"];

const categoryStyles: Record<string, { bg: string; text: string; darkBg: string; tagBg: string; darkTagBg: string; icon: string }> = {
  "Services": { 
    bg: "bg-blue-50", 
    text: "text-blue-600", 
    darkBg: "dark:bg-blue-900/10",
    tagBg: "bg-blue-100",
    darkTagBg: "dark:bg-blue-800/30",
    icon: "miscellaneous_services"
  },
  "Game": { 
    bg: "bg-purple-50", 
    text: "text-purple-600", 
    darkBg: "dark:bg-purple-900/10",
    tagBg: "bg-purple-100",
    darkTagBg: "dark:bg-purple-800/30",
    icon: "sports_esports"
  },
  "Healthcare": { 
    bg: "bg-teal-50", 
    text: "text-teal-600", 
    darkBg: "dark:bg-teal-900/10",
    tagBg: "bg-teal-100",
    darkTagBg: "dark:bg-teal-800/30",
    icon: "medical_services"
  },
  "Education": { 
    bg: "bg-amber-50", 
    text: "text-amber-600", 
    darkBg: "dark:bg-amber-900/10",
    tagBg: "bg-amber-100",
    darkTagBg: "dark:bg-amber-800/30",
    icon: "school"
  },
  "Media": { 
    bg: "bg-rose-50", 
    text: "text-rose-600", 
    darkBg: "dark:bg-rose-900/10",
    tagBg: "bg-rose-100",
    darkTagBg: "dark:bg-rose-800/30",
    icon: "movie"
  },
  "default": { 
    bg: "bg-gray-50", 
    text: "text-gray-500", 
    darkBg: "dark:bg-surface",
    tagBg: "bg-gray-200",
    darkTagBg: "dark:bg-gray-800",
    icon: "smartphone"
  }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const style = categoryStyles[project.category] || categoryStyles["default"];
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      className={`flex flex-col sm:flex-row items-start gap-6 rounded-2xl p-6 transition-all hover:shadow-xl ${style.bg} ${style.darkBg} group border border-transparent hover:border-gray-100 dark:hover:border-gray-700/30`}
    >
      <div className={`w-24 h-24 shrink-0 overflow-hidden rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center relative 
        ${project.thumbnail && !imgError ? 'bg-white dark:bg-black/20' : `${style.tagBg} ${style.darkTagBg} ring-1 ring-inset ring-black/5 dark:ring-white/5`}`}
      >
        {project.thumbnail && !imgError ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            // referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className={`material-symbols-outlined text-4xl ${style.text} drop-shadow-sm`}>
             {style.icon}
          </span>
        )}
      </div>
      
      <div className="flex flex-col gap-3 w-full">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-bold uppercase tracking-wider ${style.text}`}>
                {project.category}
            </span>
            {project.company && (
                <>
                 <span className="text-gray-300 dark:text-gray-600 text-xs">•</span>
                 <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {project.company}
                 </span>
                </>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-2 leading-relaxed font-medium line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 my-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className={`px-3 py-1 text-xs font-bold rounded-full ${style.tagBg} ${style.darkTagBg} text-gray-800 dark:text-gray-200 backdrop-blur-sm`}>
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
             <span className={`px-3 py-1 text-xs font-bold rounded-full ${style.tagBg} ${style.darkTagBg} text-gray-800 dark:text-gray-200 backdrop-blur-sm`}>
               +{project.techStack.length - 3}
             </span>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mt-2">
           <Link 
            to={`/projects/${project.id}`}
             className="flex items-center justify-center h-10 px-5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:opacity-90 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
           >
             Details
           </Link>
           {project.links.appStore && project.links.appStore !== "#" && (
            <a href={project.links.appStore} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:opacity-90 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                    <path d="M16.14 17.78c-1.04 0-1.78-.49-2.88-.49-1.12 0-1.85.51-2.92.51-2.94 0-4.83-4.9-4.83-7.53 0-2.88 2.07-4.41 3.96-4.41 1.05 0 1.95.73 2.58.73.61 0 1.76-.75 2.97-.75 1.05 0 2.29.62 3.03 1.5-2.65 1.43-2.22 5.17.44 6.24-.62 1.63-1.46 3.08-2.35 4.2zm-2.07-13c.48-.99 1.25-1.57 2.15-1.63.14 1.22-.38 2.45-1.14 3.23-.74.77-1.83 1.34-2.8.94.13-1.08.77-2.04 1.79-2.54z"/>
                </svg>
                <span className="truncate">App Store</span>
            </a>
           )}
           {project.links.playStore && project.links.playStore !== "#" && (
             <a href={project.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:opacity-90 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0">
                    <path d="M5 3.7c0-.28.16-.54.41-.67.26-.13.56-.12.81.02l14.22 8.16c.24.13.38.38.38.65s-.15.52-.38.65L6.22 20.66c-.25.14-.56.15-.81.02-.25-.13-.41-.39-.41-.67V3.7z" />
                </svg>
                <span className="truncate">Play Store</span>
             </a>
           )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="w-full flex justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="layout-container w-full max-w-6xl flex flex-col gap-8">
        <AnimatedSection>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-display font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
              My Work
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-normal leading-relaxed max-w-2xl">
              A selection of mobile applications I've designed and developed using Flutter.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-3 pb-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-5 transition-colors duration-300 shadow-sm ${
                  activeCategory === cat
                    ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary font-bold ring-1 ring-primary/20"
                    : "bg-gray-100 dark:bg-[#182b34] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
                }`}
              >
                <span className="text-sm leading-normal">{cat}</span>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div 
          layout
          className="flex flex-col gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
