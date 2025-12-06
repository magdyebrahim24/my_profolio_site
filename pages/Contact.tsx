import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { profileData } from '../data/profile';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profileData.email);
    // Could add a toast notification here if desired
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        
        // Open default mail client with pre-filled data
        window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="w-full flex justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="layout-container w-full max-w-6xl">
        <AnimatedSection className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight tracking-tighter text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-6">
             Have a question, a project proposal, or just want to say hi? Feel free to reach out using the form below or through my social channels. I'm always open to discussing new projects and opportunities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <div className="flex flex-col gap-6 order-2 lg:order-1">
                <AnimatedSection delay={0.1}>
                    <a 
                      href={`mailto:${profileData.email}`}
                      className="flex items-center gap-5 bg-white dark:bg-white/5 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:border-primary/30 hover:shadow-lg group cursor-pointer"
                    >
                        <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 h-14 w-14 group-hover:scale-110 transition-transform">
                             <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                             </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal truncate">{profileData.email}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Email me directly</p>
                        </div>
                        <button 
                          onClick={handleCopyEmail}
                          aria-label="Copy email address" 
                          className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-primary transition-colors z-10"
                        >
                            <span className="material-symbols-outlined text-xl">content_copy</span>
                        </button>
                    </a>
                </AnimatedSection>

                {profileData.socials.map((social, idx) => (
                    <AnimatedSection key={social.platform} delay={0.2 + (idx * 0.1)}>
                        <a 
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-5 bg-white dark:bg-white/5 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:border-primary/30 hover:shadow-lg group"
                        >
                             <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 h-14 w-14 group-hover:scale-110 transition-transform">
                                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                                    <path d={social.icon} />
                                </svg>
                             </div>
                             <div className="flex-1">
                                <p className="text-gray-900 dark:text-white text-lg font-bold leading-normal truncate">{social.platform}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Professional network</p>
                             </div>
                             <div 
                                className="shrink-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors text-sm font-bold leading-normal px-5 py-2.5 rounded-full"
                             >
                                Connect
                             </div>
                        </a>
                    </AnimatedSection>
                ))}
            </div>

            {/* Form */}
            <AnimatedSection delay={0.3} className="order-1 lg:order-2">
                <div className="bg-white dark:bg-[#152229] p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                      <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
                          <input 
                            className={`block w-full rounded-xl border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary focus:ring-opacity-50'} bg-gray-50 dark:bg-[#0c161b] shadow-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 py-3.5 px-4 transition-colors`}
                            id="name" 
                            name="name" 
                            placeholder="Your Name" 
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                          <input 
                            className={`block w-full rounded-xl border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary focus:ring-opacity-50'} bg-gray-50 dark:bg-[#0c161b] shadow-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 py-3.5 px-4 transition-colors`}
                            id="email" 
                            name="email" 
                            placeholder="yourname@example.com" 
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
                          <textarea 
                            className={`block w-full rounded-xl border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : 'border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary focus:ring-opacity-50'} bg-gray-50 dark:bg-[#0c161b] shadow-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none py-3.5 px-4 transition-colors`}
                            id="message" 
                            name="message" 
                            placeholder="Your message..." 
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                      </div>
                      <button 
                        className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl hover:bg-primary-dark hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-[0.98]" 
                        type="submit"
                      >
                          Send Message
                          <span className="material-symbols-outlined text-xl">send</span>
                      </button>
                  </form>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};