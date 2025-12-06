import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { educationData, certificationsData } from '../data/education';

export const Education = () => {
  return (
    <div className="layout-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <AnimatedSection className="mb-16">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Education & Certifications
        </h1>
      </AnimatedSection>

      <section className="mb-20">
        <AnimatedSection delay={0.1}>
            <div className="relative flex flex-col gap-12">
                 {/* Vertical line: Centered on the w-10 icon (2.5rem/40px). Center is 1.25rem/20px (left-5) */}
                <div className="absolute left-5 top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />
                
                {educationData.map((edu, idx) => (
                    <div key={edu.id} className="relative flex items-start gap-6 group">
                         <div className="relative z-10 w-10 h-10 rounded-full bg-gray-100 dark:bg-surface border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-lg">school</span>
                         </div>
                         <div className="flex-1 pt-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">
                                {edu.institution}, <span className="text-sm text-gray-400">{edu.period}</span>
                            </p>
                         </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
      </section>

      <section>
        <AnimatedSection delay={0.2} className="mb-8">
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Certifications</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, idx) => (
                <AnimatedSection key={cert.id} delay={0.3 + (idx * 0.1)}>
                    <div className="h-full flex flex-col bg-white dark:bg-surface rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                        <div className="h-32 bg-gray-100 dark:bg-black/20 overflow-hidden relative">
                             <img src={cert.logo} alt={cert.degree} className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">{cert.degree}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{cert.institution}</p>
                            <a 
                                href={cert.verifyLink || "#"} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-auto text-sm font-medium text-primary hover:underline flex items-center gap-1"
                            >
                                Verify Credential 
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </section>
    </div>
  );
};
