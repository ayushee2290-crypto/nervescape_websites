'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6" />
            <p className="text-gray-500">Last updated: January 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600"
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Nervescape Analytics (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
              you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
              please do not use our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Nervescape Analytics provides premium cloud managed services including but not limited to:
            </p>
            <ul>
              <li>DataOps - Data operations and management</li>
              <li>DevOps - Development and operations integration</li>
              <li>DBOps - Database operations and optimization</li>
              <li>CloudOps - Cloud infrastructure management</li>
              <li>AppOps - Application lifecycle management</li>
              <li>Monitoring & Observability - System monitoring solutions</li>
            </ul>

            <h2>3. User Obligations</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services in compliance with applicable laws and regulations</li>
              <li>Not engage in any activity that could harm our systems or other users</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on our website and services are owned by 
              Nervescape Analytics or our licensors. You may not reproduce, distribute, or create derivative 
              works without our express written permission.
            </p>

            <h2>5. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client data and information. Any proprietary 
              information shared during the course of our engagement will be protected and not disclosed to 
              third parties without your consent.
            </p>

            <h2>6. Service Level Agreements</h2>
            <p>
              Specific service level agreements (SLAs) will be defined in individual service contracts. 
              These SLAs outline performance metrics, uptime guarantees, and support response times 
              applicable to your specific engagement.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Nervescape Analytics shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your use of 
              our services.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate the service agreement with appropriate notice as specified in 
              individual contracts. Upon termination, all rights granted to you will cease, and you must 
              discontinue use of our services.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with applicable 
              laws. Any disputes arising under these terms shall be resolved through appropriate legal channels.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be 
              effective upon posting to our website. Your continued use of our services constitutes 
              acceptance of any modifications.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@nervescape.com
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
