'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Database, BarChart3, Rocket, Settings, Activity, ArrowRight, Quote } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    slug: 'dataops',
    title: 'DataOps',
    description: 'Short for Data Operations, streamlines data management by automating and integrating data flows between data providers and consumers throughout the organization. It achieves this by leveraging agile principles, DevOps practices, and statistical process controls.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  },
  {
    icon: Rocket,
    slug: 'devops',
    title: 'DevOps',
    description: 'DevOps is an approach that integrates practices, tools, and a cultural philosophy to automate and optimize the processes between software development and IT operations teams. It emphasizes team empowerment, promotes cross-functional communication and collaboration, and utilizes technology for automation.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1000&auto=format&fit=crop',
  },
  {
    icon: Database,
    slug: 'dbops',
    title: 'DBOps',
    description: 'DBOps, short for Database Operations, goes beyond traditional database management by optimizing the entire lifecycle of cloud-based data. It ensures the efficiency, security, and scalability for your critical data to achieve a symphony of success.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    icon: Activity,
    slug: 'observability',
    title: 'Monitoring & Observability',
    description: 'Monitoring and Observability are essential practices in modern IT operations, crucial for maintaining the health, performance, and reliability of complex systems.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    icon: Settings,
    slug: 'appops',
    title: 'AppOps',
    description: 'Application Management, known as AppOPS, is a strategic approach to managing the entire lifecycle of business applications. It involves deploying, monitoring, optimizing, and scaling applications to ensure they meet performance and business objectives.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    icon: Cloud,
    slug: 'cloudops',
    title: 'CloudOps',
    description: 'Cloud Operations (CloudOPS) is the practice of managing and optimizing cloud-based infrastructure and applications to ensure they operate smoothly, securely, and efficiently. It encompasses the continuous monitoring, maintenance, and improvement of cloud-based infrastructure, applications, and services.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    icon: Rocket,
    slug: 'ai-automation',
    title: 'AI Automation',
    description: 'AI Automation brings intelligent automation to your operations by combining machine learning, RPA, and intelligent orchestration to automate repetitive tasks and derive insights at scale.',
    image: 'https://images.unsplash.com/photo-1558888400-8b28f0d9d5a3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: Cloud,
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Digital Transformation helps organizations modernize technology, processes, and culture to deliver better customer experiences, innovate faster, and operate with greater agility.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Transform Your Digital<br />
              Landscape with<br />
              Nervescape Analytics
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-gray-700" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                  >
                    Know More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="w-12 h-12 text-gray-700 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white italic mb-8">
              "Data is a precious thing and will last longer than the systems themselves."
            </blockquote>
            <cite className="text-gray-400 not-italic text-lg">— Tim Berners-Lee</cite>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
              Ready to Transform Your Digital Landscape?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
