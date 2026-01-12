'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const coreValues = [
  {
    title: 'Ownership',
    description: 'Take responsibility for delivering quality outcomes and driving client success.',
  },
  {
    title: 'Integrity',
    description: 'Maintain the highest standards of ethical behavior and transparency in all interactions.',
  },
  {
    title: 'Collaboration',
    description: 'Foster a culture of teamwork and open communication to achieve shared goals.',
  },
  {
    title: 'Excellence',
    description: 'Strive for excellence in service delivery and continuous improvement.',
  },
];

const pillars = [
  {
    title: 'Optimize',
    description: 'Ensure optimal use of cloud resources, reducing costs and enhancing performance through automated processes and intelligent management.',
  },
  {
    title: 'Secure',
    description: 'Implement robust security measures and governance frameworks to safeguard your infrastructure, ensuring compliance with industry standards and regulatory requirements.',
  },
  {
    title: 'Innovate',
    description: 'Leverage cutting-edge technologies and advanced cloud solutions to foster innovation, enabling businesses to stay competitive and ahead of the curve.',
  },
];

const teamMembers = [
  {
    name: 'Neeraj Vishen',
    role: 'Founder & CEO',
    description: 'Visionary leader with 15+ years in cloud and enterprise technology.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Ayushee P',
    role: 'Co-Founder & COO',
    description: 'Operations expert specializing in digital transformation and AI.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Technical Team',
    role: 'Expert Engineers',
    description: 'A team of certified cloud architects, DevOps engineers, and AI specialists.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
];

const caseStudies = [
  {
    title: 'Blind Spots Be Gone: How Nervescape Analytics Gave an E-Commerce Giant X-Ray Vision into Their IT Infrastructure',
    image: 'https://static.wixstatic.com/media/309d105833834f94a863c3c88cb6e00e.jpg/v1/fill/w_630,h_414,al_c,q_80/TV%20Screens.jpg',
    href: '/blog',
  },
  {
    title: 'Streamlining Data Operations for Agile Decision-Making: A Case Study with Nervescape Analytics LLP',
    image: 'https://static.wixstatic.com/media/dce453_e59dc0822b4d4a2384551347ae0449b7~mv2.jpg/v1/fill/w_630,h_414,al_c,q_80/pexels-goumbik-590022.jpg',
    href: '/blog',
  },
  {
    title: "E-commerce Agility: How Nervescape's DevOps Solutions Fueled Growth for a Rising Star",
    image: 'https://static.wixstatic.com/media/dce453_f9f0a65c6c1c44daa3b3835ce4b78217~mv2.webp/v1/fill/w_630,h_414,al_c,q_80/dce453_ff23b7c49ec94114972c1ef11f11a98b~mv2.webp',
    href: '/blog',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Building Image */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src="https://static.wixstatic.com/media/f715c7cf8d6c4f4a8d719a58c9562aca.jpg/v1/fill/w_1920,h_417,al_c,q_85/f715c7cf8d6c4f4a8d719a58c9562aca.jpg"
            alt="Building Exterior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              About
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Ownership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Nervescape, we don't just take responsibility; we take ownership. Our comprehensive managed services ensure your cloud infrastructure is optimized, secure, and compliant, giving you the peace of mind to focus on what truly matters – driving your business forward.
            </p>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Business Team Meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-indigo-900/80" />
              </div>
              <div className="relative z-10 p-8 md:p-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  Ready to Elevate Your Business?
                </h2>
                <p className="text-gray-300 mb-6">
                  Book Your Consultation Call Today!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 group"
                >
                  Try Our Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Modern Office Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-white/50"
              >
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimize. Secure. Innovate. */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Digital Globe Technology"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-800/80 to-purple-900/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Optimize. Secure. Innovate.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl"
              >
                <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Global Technology Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading global provider of premium managed services, setting the standard for excellence in cloud operations, security, and innovation. Our vision is to transform the way businesses manage and secure their digital landscapes, ensuring they thrive in an ever-evolving technological world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* We're on a Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                We're on a mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To deliver unparalleled managed services that optimize, secure, and innovate cloud infrastructure, empowering businesses to achieve excellence and secure their future. We are committed to providing premium solutions through our ownership, integrity, collaboration, and a relentless pursuit of excellence.
              </p>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                OPTIMIZE. SECURE. INNOVATE.
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 group"
              >
                Try Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden order-1 lg:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
                alt="Modern Office Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Technology Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
              OUR TEAM
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Meet the Experts Behind Nervescape
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Related Topics
            </h2>
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
                  <div className="relative h-52 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-3 leading-tight">
                    {study.title}
                  </h3>
                  <span className="inline-flex items-center px-6 py-2 text-sm font-semibold text-white bg-gray-900 rounded hover:bg-gray-800 transition-colors">
                    Learn More
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
