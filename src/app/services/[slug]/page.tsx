'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cloud, Database, BarChart3, Rocket, Settings, Activity, ArrowRight, ArrowLeft, CheckCircle2, Quote, Zap, Shield, TrendingUp, Award } from 'lucide-react';

const servicesData: Record<string, {
  icon: typeof Cloud;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  featureImage: string;
  processImage: string;
  ctaImage: string;
  features: { title: string; description: string }[];
  benefits: string[];
  stats: { value: string; label: string }[];
  process: { step: string; title: string; description: string }[];
  quote: { text: string; author: string; role: string };
}> = {
  dataops: {
    icon: BarChart3,
    title: 'DataOps',
    tagline: 'Streamline Your Data Operations for Maximum Impact',
    description: 'Short for Data Operations, DataOps streamlines data management by automating and integrating data flows between data providers and consumers throughout the organization. It achieves this by leveraging agile principles, DevOps practices, and statistical process controls to deliver high-quality data at speed.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    featureImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    processImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    ctaImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
    features: [
      { title: 'Automated Data Pipelines', description: 'Build and manage automated data pipelines that ensure consistent, reliable data flow across your organization.' },
      { title: 'Real-time Integration', description: 'Connect disparate data sources in real-time for unified insights and faster decision-making.' },
      { title: 'Data Quality Monitoring', description: 'Implement comprehensive data quality checks and monitoring to ensure data accuracy and reliability.' },
      { title: 'Version Control', description: 'Track changes and maintain version control for all your data assets and transformations.' },
    ],
    benefits: ['60% faster time-to-insight', 'Improved data quality and reliability', 'Reduced operational overhead', 'Enhanced team collaboration', 'Scalable data infrastructure'],
    stats: [{ value: '60%', label: 'Faster Insights' }, { value: '99.9%', label: 'Data Accuracy' }, { value: '40%', label: 'Cost Reduction' }],
    process: [
      { step: '01', title: 'Assessment', description: 'We analyze your current data landscape and identify optimization opportunities.' },
      { step: '02', title: 'Design', description: 'Our experts design a tailored DataOps strategy aligned with your business goals.' },
      { step: '03', title: 'Implementation', description: 'We implement automated pipelines and integration frameworks.' },
      { step: '04', title: 'Optimization', description: 'Continuous monitoring and optimization for peak performance.' },
    ],
    quote: { text: 'Data is the new oil. It is valuable, but if unrefined it cannot really be used.', author: 'Clive Humby', role: 'Data Science Pioneer' },
  },
  devops: {
    icon: Rocket,
    title: 'DevOps',
    tagline: 'Accelerate Your Development Lifecycle with Modern Practices',
    description: 'DevOps is an approach that integrates practices, tools, and a cultural philosophy to automate and optimize the processes between software development and IT operations teams. It emphasizes team empowerment, promotes cross-functional communication and collaboration, and utilizes technology for automation.',
    heroImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop',
    featureImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop',
    processImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
    ctaImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    features: [
      { title: 'CI/CD Pipeline Automation', description: 'Implement robust continuous integration and delivery pipelines for faster, reliable releases.' },
      { title: 'Infrastructure as Code', description: 'Manage and provision infrastructure through code for consistency and repeatability.' },
      { title: 'Container Orchestration', description: 'Deploy and manage containerized applications with Kubernetes and Docker.' },
      { title: 'Automated Testing', description: 'Integrate automated testing at every stage for quality assurance.' },
    ],
    benefits: ['10x faster deployment frequency', 'Improved deployment reliability', 'Enhanced team collaboration', 'Reduced time-to-market', 'Continuous improvement culture'],
    stats: [{ value: '10x', label: 'Faster Deployments' }, { value: '95%', label: 'Success Rate' }, { value: '50%', label: 'Less Downtime' }],
    process: [
      { step: '01', title: 'Evaluate', description: 'Assess your current development and operations workflows.' },
      { step: '02', title: 'Architect', description: 'Design a DevOps roadmap tailored to your needs.' },
      { step: '03', title: 'Automate', description: 'Implement CI/CD pipelines and automation frameworks.' },
      { step: '04', title: 'Iterate', description: 'Continuously improve processes based on metrics and feedback.' },
    ],
    quote: { text: 'DevOps is not a goal, but a never-ending process of continual improvement.', author: 'Jez Humble', role: 'DevOps Thought Leader' },
  },
  dbops: {
    icon: Database,
    title: 'DBOps',
    tagline: 'Optimize Your Database Operations for Peak Performance',
    description: 'DBOps, short for Database Operations, goes beyond traditional database management by optimizing the entire lifecycle of cloud-based data. It ensures the efficiency, security, and scalability for your critical data to achieve a symphony of success in your data-driven organization.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    featureImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop',
    processImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop',
    ctaImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    features: [
      { title: 'Performance Optimization', description: 'Fine-tune your databases for optimal query performance and response times.' },
      { title: 'Automated Backup & Recovery', description: 'Implement robust backup strategies with automated recovery procedures.' },
      { title: 'Database Migration', description: 'Seamlessly migrate databases across platforms with zero downtime.' },
      { title: 'Security & Compliance', description: 'Ensure your data meets industry security standards and compliance requirements.' },
    ],
    benefits: ['99.99% database uptime', 'Reduced data loss risk', 'Enhanced data security', 'Seamless scalability', 'Optimized storage costs'],
    stats: [{ value: '99.99%', label: 'Uptime SLA' }, { value: '3x', label: 'Faster Queries' }, { value: '45%', label: 'Cost Savings' }],
    process: [
      { step: '01', title: 'Audit', description: 'Comprehensive audit of your database infrastructure.' },
      { step: '02', title: 'Optimize', description: 'Performance tuning and query optimization.' },
      { step: '03', title: 'Secure', description: 'Implement security best practices and compliance.' },
      { step: '04', title: 'Monitor', description: '24/7 monitoring and proactive maintenance.' },
    ],
    quote: { text: 'The goal is to turn data into information, and information into insight.', author: 'Carly Fiorina', role: 'Former HP CEO' },
  },
  observability: {
    icon: Activity,
    title: 'Observability',
    tagline: 'Gain Complete Visibility Into Your Systems',
    description: 'Monitoring and Observability are essential practices in modern IT operations, crucial for maintaining the health, performance, and reliability of complex systems. Our comprehensive observability solutions provide deep insights into your entire technology stack.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    featureImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
    processImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    ctaImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
    features: [
      { title: 'Real-time Metrics', description: 'Collect and visualize metrics in real-time across your entire infrastructure.' },
      { title: 'Distributed Tracing', description: 'Track requests across microservices for complete transaction visibility.' },
      { title: 'Intelligent Alerting', description: 'AI-powered alerting that reduces noise and highlights critical issues.' },
      { title: 'Custom Dashboards', description: 'Build powerful dashboards tailored to your team needs.' },
    ],
    benefits: ['70% faster incident resolution', 'Proactive issue detection', 'Improved system reliability', 'Data-driven decisions', 'Enhanced user experience'],
    stats: [{ value: '70%', label: 'Faster Resolution' }, { value: '24/7', label: 'Monitoring' }, { value: '99.9%', label: 'Accuracy' }],
    process: [
      { step: '01', title: 'Instrument', description: 'Deploy monitoring agents and instrumentation across your stack.' },
      { step: '02', title: 'Collect', description: 'Aggregate logs, metrics, and traces in a centralized platform.' },
      { step: '03', title: 'Analyze', description: 'Use AI-powered analytics to identify patterns and anomalies.' },
      { step: '04', title: 'Act', description: 'Automated responses and intelligent alerting for fast resolution.' },
    ],
    quote: { text: 'You cannot improve what you do not measure.', author: 'Peter Drucker', role: 'Management Consultant' },
  },
  appops: {
    icon: Settings,
    title: 'AppOps',
    tagline: 'Manage Applications With Excellence & Precision',
    description: 'Application Management, known as AppOPS, is a strategic approach to managing the entire lifecycle of business applications. It involves deploying, monitoring, optimizing, and scaling applications to ensure they meet performance and business objectives.',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    featureImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    processImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    ctaImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    features: [
      { title: 'Lifecycle Management', description: 'End-to-end management from deployment to retirement.' },
      { title: 'Performance Optimization', description: 'Continuous performance tuning for optimal user experience.' },
      { title: 'Auto-scaling', description: 'Intelligent scaling that responds to demand in real-time.' },
      { title: 'Security Management', description: 'Comprehensive application security and vulnerability management.' },
    ],
    benefits: ['99.9% application uptime', 'Reduced operational complexity', 'Enhanced security posture', 'Improved scalability', 'Lower total cost of ownership'],
    stats: [{ value: '99.9%', label: 'Uptime' }, { value: '35%', label: 'Cost Reduction' }, { value: '2x', label: 'Performance' }],
    process: [
      { step: '01', title: 'Discover', description: 'Map your application portfolio and dependencies.' },
      { step: '02', title: 'Modernize', description: 'Update and optimize applications for cloud-native architectures.' },
      { step: '03', title: 'Manage', description: 'Implement comprehensive lifecycle management.' },
      { step: '04', title: 'Evolve', description: 'Continuous improvement and innovation.' },
    ],
    quote: { text: 'Software is eating the world, but only if it is well-managed.', author: 'Marc Andreessen', role: 'Tech Entrepreneur' },
  },
  cloudops: {
    icon: Cloud,
    title: 'CloudOps',
    tagline: 'Master Your Cloud Infrastructure with Confidence',
    description: 'Cloud Operations (CloudOPS) is the practice of managing and optimizing cloud-based infrastructure and applications to ensure they operate smoothly, securely, and efficiently. It encompasses the continuous monitoring, maintenance, and improvement of cloud-based infrastructure, applications, and services.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    featureImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
    processImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2070&auto=format&fit=crop',
    ctaImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    features: [
      { title: 'Multi-cloud Management', description: 'Unified management across AWS, Azure, GCP, and private clouds.' },
      { title: 'Cost Optimization', description: 'Intelligent cost management and resource optimization strategies.' },
      { title: 'Security & Compliance', description: 'Enterprise-grade security with continuous compliance monitoring.' },
      { title: 'Infrastructure Automation', description: 'Automated provisioning and configuration management.' },
    ],
    benefits: ['40% cloud cost reduction', 'Enhanced security posture', 'Improved operational efficiency', 'Seamless scalability', 'Business continuity assurance'],
    stats: [{ value: '40%', label: 'Cost Savings' }, { value: '99.99%', label: 'Availability' }, { value: '24/7', label: 'Support' }],
    process: [
      { step: '01', title: 'Assess', description: 'Evaluate your current cloud infrastructure and spending.' },
      { step: '02', title: 'Architect', description: 'Design an optimized multi-cloud strategy.' },
      { step: '03', title: 'Migrate', description: 'Seamless migration and modernization.' },
      { step: '04', title: 'Operate', description: 'Continuous management and optimization.' },
    ],
    quote: { text: 'The cloud is not just about technology, it is about business transformation.', author: 'Satya Nadella', role: 'Microsoft CEO' },
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
      {/* Hero Section with Full Background */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <ServiceIcon className="w-8 h-8 text-white" />
              </div>
              <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
                Premium Service
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 max-w-4xl">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
              {service.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 group shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#overview"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              {service.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Transform Your Operations with {service.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-4">
                {service.benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.featureImage}
                  alt={service.title + ' Overview'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-900 rounded-2xl flex items-center justify-center shadow-xl">
                <ServiceIcon className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-600 text-sm font-medium mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Powerful Features for Modern Enterprises
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our {service.title} solutions are designed to meet the demands of today&apos;s fast-paced business environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && <Zap className="w-7 h-7 text-white" />}
                  {index === 1 && <Shield className="w-7 h-7 text-white" />}
                  {index === 2 && <TrendingUp className="w-7 h-7 text-white" />}
                  {index === 3 && <Award className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={service.processImage}
                alt="Our Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10">
                A Proven Process for Success
              </h2>
              
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.ctaImage}
            alt="Quote Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-white/20 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-4xl font-display font-medium text-white italic mb-8 leading-relaxed">
              &quot;{service.quote.text}&quot;
            </blockquote>
            <div>
              <cite className="text-white not-italic text-lg font-semibold">{service.quote.author}</cite>
              <p className="text-gray-400 text-sm mt-1">{service.quote.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-600 text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              The Benefits of Our {service.title} Solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0 opacity-30">
          <Image
            src={service.heroImage}
            alt="CTA Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your {service.title} Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let our experts help you implement and optimize your {service.title.toLowerCase()} operations for maximum business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 group shadow-lg"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Explore Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
