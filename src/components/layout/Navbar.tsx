'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Cloud, Database, BarChart3, Rocket, Settings, Activity, ArrowRight } from 'lucide-react';

const services = [
  { name: 'CloudOps', description: 'Cloud infrastructure management', icon: Cloud, href: '/services/cloudops' },
  { name: 'DevOps', description: 'CI/CD and automation', icon: Rocket, href: '/services/devops' },
  { name: 'DataOps', description: 'Data pipeline management', icon: BarChart3, href: '/services/dataops' },
  { name: 'DBOps', description: 'Database operations', icon: Database, href: '/services/dbops' },
  { name: 'AppOps', description: 'Application lifecycle management', icon: Settings, href: '/services/appops' },
  { name: 'Observability', description: 'Monitoring & insights', icon: Activity, href: '/services/observability' },
];

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Offerings', href: '/services', hasDropdown: true },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="bg-white rounded-sm p-0.5">
                  <Image
                    src="/logo-icon.png"
                    alt="Nervescape Logo"
                    width={40}
                    height={52}
                    className="object-contain mix-blend-multiply"
                    priority
                  />
                </div>
                <div className="ml-2 flex flex-col">
                  <span className="text-xl font-bold text-gray-900 leading-tight">Nervescape</span>
                  <span className="text-[10px] font-medium text-gray-500 tracking-[0.2em] uppercase">Analytics</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Try Our Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Services Dropdown */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <service.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-700"
                  >
                    View All Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-xl">
              <div className="p-6 pt-24">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <>
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            {item.name}
                          </Link>
                          <div className="ml-4 mt-2 space-y-1">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
                              >
                                <service.icon className="w-4 h-4 mr-3 text-gray-400" />
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Try Our Solutions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
