


"use client"

import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resume', href: '#resume' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Abrar-Rizvi?tab=repositories', color: 'hover:text-sky-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/abrar-rizvi/', color: 'hover:text-sky-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/abrar8949', color: 'hover:text-sky-400' },
    { name: 'Email', icon: Mail, href: 'mailto:abrar@example.com', color: 'hover:text-sky-400' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo */}
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="text-white">MUHAMMAD</span>
                <br />
                <span className="text-sky-500">ABRAR</span>
              </h2>
              <div className="w-16 h-1 bg-sky-500 rounded-full mb-4"></div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Full Stack Developer & AI Engineer crafting intelligent web applications 
              with modern technologies and clean code.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 bg-slate-800 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700`}
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-sky-400 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-sky-400 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get updates on my latest projects and articles.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                suppressHydrationWarning
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                suppressHydrationWarning
                className="w-full px-4 py-2.5 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-1">
                © {currentYear} Muhammad Abrar. Made with 
                <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                All rights reserved.
              </p>
            </div>

            {/* Bottom Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-sky-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}