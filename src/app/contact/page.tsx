'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const benefits = [
  'Free initial consultation',
  '24/7 dedicated support',
  'Custom tailored solutions',
  'Industry-leading expertise',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Premium Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-indigo-900/95" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Let us Build Something Great Together</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Get in Touch with
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Our Expert Team
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Transform your cloud infrastructure with our premium managed services. Our experts are ready to help you optimize, secure, and innovate.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-white/80 text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">Send Us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we will get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 text-center">Your message has been sent successfully.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Work Email *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="Your Company" />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none">
                          <option value="">Select a service</option>
                          <option value="cloudops">CloudOps</option>
                          <option value="devops">DevOps</option>
                          <option value="dataops">DataOps</option>
                          <option value="dbops">DBOps</option>
                          <option value="appops">AppOps</option>
                          <option value="observability">Observability</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">How Can We Help? *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none" placeholder="Tell us about your project..." />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 transition-all group shadow-lg disabled:opacity-70">
                      {isSubmitting ? 'Sending...' : (<>Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>)}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
              <div className="sticky top-32">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6 mb-10">
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-transparent hover:from-blue-50 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                      <a href="mailto:support@nervescape.com" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">support@nervescape.com</a>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-transparent hover:from-emerald-50 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                      <a href="tel:+918707565776" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">+91 8707565776</a>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm IST</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-transparent hover:from-purple-50 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600 font-medium">Global Services</p>
                      <p className="text-sm text-gray-500 mt-1">Remote First Company</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-transparent hover:from-amber-50 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/25">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Support Hours</h3>
                      <p className="text-gray-600 font-medium">24/7 Available</p>
                      <p className="text-sm text-gray-500 mt-1">Round the clock support</p>
                    </div>
                  </motion.div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0077B5] to-[#005885] p-6 shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <Linkedin className="w-10 h-10 text-white mb-4" />
                    <h3 className="text-xl font-display font-bold text-white mb-2">Connect on LinkedIn</h3>
                    <p className="text-white/80 text-sm mb-4">Follow us for industry insights and career opportunities.</p>
                    <a href="https://www.linkedin.com/company/nervescape-analytics/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 text-[#0077B5] bg-white rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm">
                      Follow Us <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" alt="CTA Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">Ready to get started?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Premium Cloud Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">Join leading enterprises who trust Nervescape to optimize, secure, and innovate their cloud infrastructure.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:support@nervescape.com" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition-all group shadow-xl">
                Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+918707565776" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all">
                <Phone className="mr-2 w-5 h-5" /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
