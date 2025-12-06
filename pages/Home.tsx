import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { AnimatedSection } from '../components/AnimatedSection';

export const Home = () => {
  return (
    <div className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-8 py-20 sm:py-32">
        <AnimatedSection>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
             {/* Logo or Avatar could go here */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter text-gray-900 dark:text-white">
              {profileData.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-primary">
              {profileData.title}
            </h2>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-2xl">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {profileData.bio}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="flex flex-wrap justify-center gap-4 mt-4">
          <Link
            to="/projects"
            className="h-12 px-8 flex items-center justify-center rounded-lg bg-primary text-white text-base font-bold tracking-wide hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
          >
            View My Work
          </Link>
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-8 flex items-center justify-center gap-2 rounded-lg bg-white dark:bg-surface border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-base font-bold tracking-wide hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all transform hover:scale-105 shadow-sm"
          >
            <span className="material-symbols-outlined text-xl">download</span>
            Download CV
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
};