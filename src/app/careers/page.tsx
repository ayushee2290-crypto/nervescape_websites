'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const deiValues = [
  { title: 'Diversity' },
  { title: 'Equity' },
  { title: 'Inclusion' },
];

const deiPoints = [
  {
    title: 'Inclusive Culture',
    description: 'We foster a culture of inclusivity where every voice is heard and valued. Diversity is celebrated, and equity is at the heart of our hiring and operational practices.',
  },
  {
    title: 'Equal Opportunities',
    description: 'We are committed to providing equal opportunities for all employees, ensuring that everyone has the chance to succeed and grow within the company.',
  },
  {
    title: 'Continuous Learning',
    description: 'We offer regular DEI training and encourage ongoing education to promote understanding and empathy among our team members.',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
            alt="Team Success"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/85 to-indigo-900/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Become part of a dynamic team at Nervescape,<br />
              driving the future of data excellence.
            </h1>
            <Link
              href="https://www.linkedin.com/company/nervescape/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 group mt-6"
            >
              Join Now!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Nervescape Analytics, we believe that our greatest asset is our people. We are committed to creating a diverse, equitable, and inclusive workplace where everyone can thrive. Our culture prioritizes health, family, and work-life balance, recognizing that when our employees are happy and healthy, they can deliver their best work.
            </p>
          </motion.div>

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Team Unity - Hands Together"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* DEI Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden mb-16 py-12"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Diverse Team Collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-slate-50/88 to-white/92" />
            </div>
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              {deiValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100"
                >
                  <span className="text-xl font-display font-bold text-gray-900">{value.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DEI Points */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {deiPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-start gap-4"
              >
                <span className="text-gray-400 text-2xl mt-1">•</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}:</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Modern Workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/92 to-blue-50/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">IMPORTANT NOTE:</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beware of fraudulent job recruiting schemes! Our open jobs are posted exclusively on{' '}
              <Link 
                href="https://www.linkedin.com/company/nervescape/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </Link>
              . If you find a job posted on a different website or job board, or if a role is sent to you directly, please verify its authenticity by checking whether it leads back to one of these official channels.
            </p>
            <p className="text-gray-600 mb-8">
              For any questions or checking open position you can reach us out at{' '}
              <Link 
                href="mailto:careers@nervescape.com"
                className="text-blue-600 hover:underline"
              >
                careers@nervescape.com
              </Link>
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Join us in our mission to deliver premium managed services and make a difference in the cloud industry.
            </p>
            <Link
              href="https://www.linkedin.com/company/nervescape/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 group"
            >
              Join Now!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
