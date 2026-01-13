'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Lightbulb,
  CheckCircle2,
  Award,
  Clock,
  Users,
} from 'lucide-react';

const slides = [
  {
    icon: Zap,
    title: 'Optimize',
    subtitle: 'Maximizing efficiency and performance.',
    description: 'Ensure optimal use of cloud resources, reducing costs and enhancing performance through automated processes and intelligent management.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    color: 'from-blue-900/95',
  },
  {
    icon: Shield,
    title: 'Secure',
    subtitle: 'Protecting your digital assets.',
    description: 'Implement robust security measures and governance frameworks to safeguard your infrastructure, ensuring compliance with industry standards and regulatory requirements.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    color: 'from-emerald-900/95',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    subtitle: 'Driving technological advancement.',
    description: 'Leverage cutting-edge technologies and advanced cloud solutions to foster innovation, enabling businesses to stay competitive and ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    color: 'from-purple-900/95',
  },
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA', icon: Award },
  { value: '24/7', label: 'Expert Support', icon: Clock },
  { value: '500+', label: 'Cloud Deployments', icon: Users },
];

const services = [
  {
    title: 'DataOps',
    description: 'Streamline data management with automated pipelines and real-time integration.',
    image: 'https://static.wixstatic.com/media/8cd0b216d6dd4d52bd46d3afbb8cf020.jpg/v1/fill/w_728,h_728,al_c,q_85/8cd0b216d6dd4d52bd46d3afbb8cf020.jpg',
    href: '/services/dataops',
  },
  {
    title: 'DevOps',
    description: 'Accelerate development with CI/CD automation and infrastructure as code.',
    image: 'https://static.wixstatic.com/media/11062b_9aeb82c30e9742bcadc79b3dc8eb9fdb~mv2.jpeg/v1/fill/w_728,h_728,al_c,q_85/Data%20Processing.jpeg',
    href: '/services/devops',
  },
  {
    title: 'AppOps',
    description: 'Comprehensive application lifecycle management and optimization services.',
    image: 'https://static.wixstatic.com/media/11062b_c567795db2214629b5de847016de542f~mv2.jpeg/v1/fill/w_728,h_728,al_c,q_85/11062b_c567795db2214629b5de847016de542f~mv2.jpeg',
    href: '/services/appops',
  },
  {
    title: 'DBOps',
    description: 'Database operations and management for optimal performance and reliability.',
    image: 'https://static.wixstatic.com/media/dce453_ff196d4181c743f9a1880101a64a7fd8~mv2.jpg/v1/fill/w_728,h_728,al_c,q_85/circle-5090539_1920.jpg',
    href: '/services/dbops',
  },
  {
    title: 'CloudOps',
    description: 'Optimize cloud infrastructure for performance, security, and cost efficiency.',
    image: 'https://static.wixstatic.com/media/e77fd1ddd12e4652b471fe86db43b889.jpg/v1/fill/w_728,h_728,al_c,q_85/Data%20Cloud.jpg',
    href: '/services/cloudops',
  },
  {
    title: 'Observability',
    description: 'End-to-end monitoring and observability for complete infrastructure visibility.',
    image: 'https://static.wixstatic.com/media/dce453_f9f0a65c6c1c44daa3b3835ce4b78217~mv2.webp/v1/fill/w_728,h_728,al_c,q_80/dce453_f9f0a65c6c1c44daa3b3835ce4b78217~mv2.webp',
    href: '/services/observability',
  },
];

const commitmentFeatures = [
  {
    title: 'Governance',
    description: 'Strong governance frameworks to ensure compliance and risk management',
    image: 'https://static.wixstatic.com/media/dce453_2f73d625e51c49ad8c300f111f2e6ef9~mv2.jpg/v1/fill/w_720,h_480,al_c,q_80/dce453_2f73d625e51c49ad8c300f111f2e6ef9~mv2.jpg',
  },
  {
    title: 'Compliance',
    description: 'Adhering to the highest standards of security and regulatory compliance',
    image: 'https://static.wixstatic.com/media/dce453_ff196d4181c743f9a1880101a64a7fd8~mv2.jpg/v1/fill/w_930,h_620,al_c,q_85/circle-5090539_1920.jpg',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support from certified experts',
    image: 'https://static.wixstatic.com/media/dce453_070f3c6adb4c4ae390330eca1ad3e153~mv2.jpg/v1/fill/w_930,h_620,al_c,q_85/call-center-1015274_1920.jpg',
  },
];

const caseStudies = [
  {
    title: 'Streamlining Data Operations for Agile Decision-Making',
    excerpt: 'How we helped a Fortune 500 company reduce data processing time by 60%',
    image: 'https://static.wixstatic.com/media/dce453_e59dc0822b4d4a2384551347ae0449b7~mv2.jpg/v1/fill/w_630,h_414,al_c,q_80/pexels-goumbik-590022.jpg',
    href: '/blog',
  },
  {
    title: 'Orchestrating Your Cloud Journey to Excellence',
    excerpt: 'A comprehensive guide to multicloud strategy implementation',
    image: 'https://static.wixstatic.com/media/a4dc102389e14b338563ee9c1b9c8c5f.jpg/v1/fill/w_630,h_414,al_c,q_80/Office%20Building.jpg',
    href: '/blog',
  },
  {
    title: "E-commerce Agility with DevOps Solutions",
    excerpt: 'How DevOps practices fueled 300% growth for a rising e-commerce star',
    image: 'https://static.wixstatic.com/media/dce453_f9f0a65c6c1c44daa3b3835ce4b78217~mv2.webp/v1/fill/w_630,h_414,al_c,q_80/dce453_ff23b7c49ec94114972c1ef11f11a98b~mv2.webp',
    href: '/blog',
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} via-gray-900/80 to-gray-900/60`} />
          </motion.div>
        </AnimatePresence>

        {/* Slide Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-3xl"
              >
                {/* Icon Badge */}
                <motion.div 
                  custom={0}
                  variants={textVariants}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                >
                  {(() => {
                    const IconComponent = slides[currentSlide].icon;
                    return <IconComponent className="w-5 h-5 text-white" />;
                  })()}
                  <span className="text-white/90 font-medium">Premium Cloud Services</span>
                </motion.div>

                <motion.h1
                  custom={0.1}
                  variants={textVariants}
                  className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.h2
                  custom={0.3}
                  variants={textVariants}
                  className="text-2xl md:text-3xl font-display font-medium text-white/90 mb-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                <motion.p
                  custom={0.5}
                  variants={textVariants}
                  className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div custom={0.7} variants={textVariants} className="flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 group shadow-lg shadow-white/25"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white text-gray-900'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-label={`Go to ${slide.title}`}
            >
              <span className="font-semibold">{index + 1}</span>
              {currentSlide === index && (
                <span className="text-sm font-medium">{slide.title}</span>
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            key={currentSlide}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3">
                  <stat.icon className="w-6 h-6 text-gray-400" />
                  <span className="text-3xl md:text-4xl font-display font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Experience Unmatched Premium<br />Cloud Managed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where Ownership Meets Excellence, Backed by Robust Governance and Compliance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                alt="Cloud Infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80" />
            </div>
            <div className="relative z-10 p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                    We Take Ownership, Not Just Responsibility
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Our comprehensive managed services ensure your cloud infrastructure is optimized, secure, and compliant, giving you the peace of mind to focus on what truly matters – driving your business forward.
                  </p>
                  <ul className="space-y-4">
                    {['Enterprise-grade security', 'Cost optimization strategies', 'Continuous monitoring & alerts', 'Dedicated support team'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group relative rounded-2xl overflow-hidden aspect-square"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-lg font-display font-bold text-white">{service.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment to Excellence Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-600 text-sm font-medium mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Excellence & Integrity in Every Step
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {commitmentFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-wide"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block"
              >
                OPTIMIZE.
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block"
              >
                SECURE.
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block"
              >
                INNOVATE.
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-base text-gray-400 mb-6 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Transform your cloud infrastructure with our premium managed services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 text-base font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 group"
              >
                Try Our Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Topics / Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                Insights
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Related Topics
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-600 transition-colors group"
            >
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Link href={study.href} className="block">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.excerpt}</p>
                  <span className="inline-flex items-center text-gray-900 font-semibold group-hover:text-gray-600 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
            alt="Technology Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-100/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Ready to Transform Your Cloud?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Discover how Nervescape can elevate your infrastructure
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
