import React from 'react';
import { motion, Variants } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { specializations, languages, frameworks, tools, experiences } from '../data/skills';
import { Skill, Experience } from '../types';

// Animation variants for staggered lists
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

const SpecializationCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ scale: 1.03, y: -5 }}
    className="flex items-start sm:items-center gap-4 p-5 rounded-2xl bg-white dark:bg-surface border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full"
  >
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-3xl">{skill.icon}</span>
    </div>
    <div>
      <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{skill.name}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-snug">{skill.description}</p>
    </div>
  </motion.div>
);

const Pill: React.FC<{ text: string }> = ({ text }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-surface px-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 cursor-default transition-colors"
  >
    <p className="text-gray-700 dark:text-gray-300 text-sm font-bold leading-normal">{text}</p>
  </motion.div>
);

const ExperienceItem: React.FC<{ exp: Experience }> = ({ exp }) => (
  <motion.div 
    variants={itemVariants}
    className="flex gap-6 relative group"
  >
    {/* Timeline Dot & Line */}
    <div className="flex-shrink-0 relative z-10 pt-2">
      <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-white dark:ring-background-dark shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
    </div>
    <div className="flex-grow pb-12 group-last:pb-0 border-l-2 border-gray-100 dark:border-gray-800 absolute left-2 top-2 h-full -z-0"></div>
    
    <div className="flex-grow pl-4 md:pl-8 relative pb-4">
      <motion.div 
        whileHover={{ x: 5 }}
        className="p-6 rounded-2xl bg-white dark:bg-surface border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
      >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
            <span className="w-fit text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">{exp.period}</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-5 text-sm">
            <div className="flex items-center gap-1.5 text-gray-900 dark:text-white font-bold">
               <span className="material-symbols-outlined text-lg text-gray-400">business</span>
               {exp.companyUrl ? (
                 <a 
                   href={exp.companyUrl} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-primary transition-colors flex items-center gap-1 hover:underline decoration-primary decoration-2 underline-offset-2"
                 >
                   {exp.company}
                   <span className="material-symbols-outlined text-sm">open_in_new</span>
                 </a>
               ) : (
                 <span>{exp.company}</span>
               )}
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
               <span className="material-symbols-outlined text-lg">location_on</span>
               {exp.location}
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
               <span className="material-symbols-outlined text-lg">work</span>
               {exp.type}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed font-medium">
            {exp.description}
          </p>
          
          <ul className="grid grid-cols-1 gap-2">
            {exp.achievements.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                 <span className="text-primary mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                 <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
      </motion.div>
    </div>
  </motion.div>
);

export const Skills = () => {
  return (
    <div className="w-full flex justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="layout-container w-full max-w-5xl flex flex-col gap-16 md:gap-24">
        
        <AnimatedSection>
          <header className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tighter">
              Skills & Experience
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
              A timeline of my professional journey and the technical toolkit I use to build world-class mobile applications.
            </p>
          </header>
        </AnimatedSection>

        {/* Section 1: Professional Experience (Moved to Top) */}
        <section>
          <AnimatedSection className="mb-8 md:mb-10 flex items-center gap-4">
             <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">history_edu</span>
             </div>
             <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Professional Experience
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">My career path and key roles</p>
             </div>
          </AnimatedSection>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative flex flex-col pl-2"
          >
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </motion.div>
        </section>

        {/* Section 2: Specializations (Grid) */}
        <section>
          <AnimatedSection className="mb-8 md:mb-10 flex items-center gap-4">
             <div className="h-12 w-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">verified</span>
             </div>
             <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Core Specializations
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Areas of deep technical expertise</p>
             </div>
          </AnimatedSection>

          <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {specializations.map((spec) => (
              <SpecializationCard key={spec.name} skill={spec} />
            ))}
          </motion.div>
        </section>

        {/* Section 3: Technical Skills */}
        <section>
          <AnimatedSection className="mb-8 md:mb-10 flex items-center gap-4">
             <div className="h-12 w-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">code_blocks</span>
             </div>
             <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Technical Stack
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Languages, frameworks, and tools</p>
             </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Languages */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">Languages</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {languages.map(lang => <Pill key={lang.name} text={lang.name} />)}
              </motion.div>
            </div>

            {/* Frameworks */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">Frameworks</h3>
               <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {frameworks.map(fw => <Pill key={fw.name} text={fw.name} />)}
              </motion.div>
            </div>

            {/* Tools */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">Tools & DevOps</h3>
               <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {tools.map(tool => <Pill key={tool.name} text={tool.name} />)}
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};