'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cloud, Database, BarChart3, Rocket, Settings, Activity, ArrowRight, ArrowLeft, CheckCircle2, Quote } from 'lucide-react';

const servicesData: Record<string, {
  icon: typeof Cloud;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}> = {
  dataops: {
    icon: BarChart3,
    title: 'DataOps',
    tagline: 'Streamline Your Data Operations',
    description: 'Short for Data Operations, DataOps streamlines data management by automating and integrating data flows between data providers and consumers throughout the organization. It achieves this by leveraging agile principles, DevOps practices, and statistical process controls.',
    image: 'https://static.wixstatic.com/media/8cd0b216d6dd4d52bd46d3afbb8cf020.jpg/v1/crop/x_493,y_0,w_1280,h_1280/fill/w_728,h_728,al_c,q_85/8cd0b216d6dd4d52bd46d3afbb8cf020.jpg',
    features: [
      'Automated data pipeline management',
      'Real-time data integration',
      'Data quality monitoring',
      'Version control for data',
      'Collaborative data workflows',
    ],
    benefits: [
      'Faster time-to-insight',
      'Improved data quality and reliability',
      'Reduced operational overhead',
      'Enhanced collaboration between teams',
      'Scalable data infrastructure',
    ],
  },
  devops: {
    icon: Rocket,
    title: 'DevOps',
    tagline: 'Accelerate Your Development Lifecycle',
    description: 'DevOps is an approach that integrates practices, tools, and a cultural philosophy to automate and optimize the processes between software development and IT operations teams. It emphasizes team empowerment, promotes cross-functional communication and collaboration, and utilizes technology for automation.',
    image: 'https://static.wixstatic.com/media/11062b_9aeb82c30e9742bcadc79b3dc8eb9fdb~mv2.jpeg/v1/crop/x_1313,y_0,w_3375,h_3375/fill/w_728,h_728,al_c,q_85/Data%20Processing.jpeg',
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as Code (IaC)',
      'Containerization and orchestration',
      'Automated testing and deployment',
      'Configuration management',
    ],
    benefits: [
      'Faster release cycles',
      'Improved deployment reliability',
      'Enhanced team collaboration',
      'Reduced time-to-market',
      'Continuous improvement culture',
    ],
  },
  dbops: {
    icon: Database,
    title: 'DBOps',
    tagline: 'Optimize Your Database Operations',
    description: 'DBOps, short for Database Operations, goes beyond traditional database management by optimizing the entire lifecycle of cloud-based data. It ensures the efficiency, security, and scalability for your critical data to achieve a symphony of success.',
    image: 'https://static.wixstatic.com/media/dce453_fd1096f402664093b5cf9107ec37851e~mv2.jpg/v1/crop/x_0,y_324,w_1272,h_1272/fill/w_728,h_728,al_c,q_85/list-428312_1920.jpg',
    features: [
      'Database performance optimization',
      'Automated backup and recovery',
      'Database migration services',
      'Security and compliance management',
      'High availability configuration',
    ],
    benefits: [
      'Improved database performance',
      'Reduced downtime and data loss',
      'Enhanced data security',
      'Seamless scalability',
      'Cost optimization',
    ],
  },
  observability: {
    icon: Activity,
    title: 'Monitoring & Observability',
    tagline: 'Gain Complete Visibility Into Your Systems',
    description: 'Monitoring and Observability are essential practices in modern IT operations, crucial for maintaining the health, performance, and reliability of complex systems.',
    image: 'https://static.wixstatic.com/media/a3cb7bfa753c4b8cb7b06cf26783cef2.jpg/v1/crop/x_1260,y_0,w_3240,h_3240/fill/w_728,h_728,al_c,q_85/Monitoring%20Room.jpg',
    features: [
      'Real-time metrics and logging',
      'Distributed tracing',
      'Alerting and notification systems',
      'Custom dashboards and reporting',
      'APM and infrastructure monitoring',
    ],
    benefits: [
      'Proactive issue detection',
      'Faster incident resolution',
      'Improved system reliability',
      'Data-driven decision making',
      'Enhanced user experience',
    ],
  },
  appops: {
    icon: Settings,
    title: 'AppOps',
    tagline: 'Manage Applications With Excellence',
    description: 'Application Management, known as AppOPS, is a strategic approach to managing the entire lifecycle of business applications. It involves deploying, monitoring, optimizing, and scaling applications to ensure they meet performance and business objectives.',
    image: 'https://static.wixstatic.com/media/dce453_59e41aa66fcb43d0b88296c3a353c06d~mv2.jpg/v1/crop/x_762,y_0,w_3385,h_3384/fill/w_728,h_728,al_c,q_85/pexels-pixabay-209726.jpg',
    features: [
      'Application lifecycle management',
      'Performance optimization',
      'Auto-scaling configuration',
      'Application security management',
      'Cost optimization strategies',
    ],
    benefits: [
      'Optimal application performance',
      'Reduced operational complexity',
      'Enhanced application security',
      'Improved scalability',
      'Lower total cost of ownership',
    ],
  },
  'ai-automation': {
    icon: Rocket,
    title: 'AI Automation',
    tagline: 'Automate Smarter with AI-driven Workflows',
    description: 'AI Automation brings intelligent automation to your operations by combining machine learning, RPA, and intelligent orchestration to automate repetitive tasks and derive insights at scale.',
    image: 'https://images.unsplash.com/photo-1558888400-8b28f0d9d5a3?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Intelligent process automation',
      'RPA + ML integration',
      'Automated decisioning',
      'Model monitoring and drift detection',
      'Scalable orchestration',
    ],
    benefits: [
      'Reduced manual effort',
      'Faster decision making',
      'Improved operational accuracy',
      'Scalable intelligent workflows',
      'Measurable ROI from automation',
    ],
  },
  'digital-transformation': {
    icon: Cloud,
    title: 'Digital Transformation',
    tagline: 'Reimagine Your Business for the Digital Age',
    description: 'Digital Transformation helps organizations modernize technology, processes, and culture to deliver better customer experiences, innovate faster, and operate with greater agility.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Cloud migration & modernization',
      'Process re-engineering',
      'Customer experience design',
      'Platform modernization',
      'Change management & training',
    ],
    benefits: [
      'Accelerated innovation',
      'Improved customer satisfaction',
      'Operational agility',
      'Cost efficiencies',
      'Future-ready technology stack',
    ],
  },
  cloudops: {
    icon: Cloud,
    title: 'CloudOps',
    tagline: 'Master Your Cloud Infrastructure',
    description: 'Cloud Operations (CloudOPS) is the practice of managing and optimizing cloud-based infrastructure and applications to ensure they operate smoothly, securely, and efficiently. It encompasses the continuous monitoring, maintenance, and improvement of cloud-based infrastructure, applications, and services.',
    image: 'https://static.wixstatic.com/media/e77fd1ddd12e4652b471fe86db43b889.jpg/v1/crop/x_983,y_0,w_1310,h_1310/fill/w_728,h_728,al_c,q_85/Data%20Cloud.jpg',
    features: [
      'Multi-cloud management',
      'Cloud cost optimization',
      'Security and compliance',
      'Infrastructure automation',
      'Disaster recovery planning',
    ],
    benefits: [
      'Optimized cloud spending',
      'Enhanced security posture',
      'Improved operational efficiency',
      'Seamless scalability',
      'Business continuity assurance',
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services" className="text-gray-900 hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center">
                    <ServiceIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">{service.tagline}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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
            <blockquote className="text-2xl md:text-3xl font-display font-medium text-white italic mb-8">
              &quot;Data is a precious thing and will last longer than the systems themselves.&quot;
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our experts help you implement and optimize your {service.title.toLowerCase()} strategy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
