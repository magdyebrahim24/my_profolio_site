import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { profileData } from '../data/profile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="layout-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
             {/* Custom Logo: Black square with Blue M */}
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <rect width="40" height="40" rx="8" fill="#101c22" className="fill-black dark:fill-white/10" />
                <path d="M10 12V28H14V18L18 28H22L26 18V28H30V12H24L20 22L16 12H10Z" fill="#0DA6F2" />
             </svg>
             <h1 className="text-lg md:text-xl font-display font-bold text-gray-900 dark:text-white tracking-tight">
               Megs
             </h1>
          </NavLink>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-bold py-3 px-4 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer className="w-full bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center sm:text-left">
        © {new Date().getFullYear()} Megs. All rights reserved.
      </p>
      <div className="flex gap-6 items-center">
        {profileData.socials.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.platform}
            className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d={item.icon} />
            </svg>
          </a>
        ))}
        <a
            href={`mailto:${profileData.email}`}
            aria-label="Email"
            className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
        >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        </a>
      </div>
    </div>
  </footer>
);

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-200">
      <Navigation />
      <main className="flex-grow flex flex-col w-full relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};