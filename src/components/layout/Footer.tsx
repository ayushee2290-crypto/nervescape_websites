'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Footer Content Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Us & Connect & Company */}
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Contact Us</h3>
                <a 
                  href="mailto:sales@nervescape.com" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline"
                >
                  sales@nervescape.com
                </a>
              </div>
              
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Connect</h3>
                <a
                  href="https://www.linkedin.com/company/nervescape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Offerings */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-3">Offerings</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/dataops" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    DataOps
                  </Link>
                </li>
                <li>
                  <Link href="/services/devops" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    DevOps
                  </Link>
                </li>
                <li>
                  <Link href="/services/appops" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    AppOps
                  </Link>
                </li>
                <li>
                  <Link href="/services/dbops" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    DBOps
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloudops" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    CloudOps
                  </Link>
                </li>
                <li>
                  <Link href="/services/observability" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Observability
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources & Legal */}
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      Terms and Condition
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logo & Description - spans 2 columns on larger screens */}
            <div className="col-span-2">
              {/* Logo with Text */}
              <div className="mb-4">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded-sm p-0.5">
                    <Image
                      src="/logo-icon.png"
                      alt="Nervescape Logo"
                      width={48}
                      height={62}
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="ml-3 flex flex-col">
                    <span className="text-2xl font-bold text-gray-900 leading-tight">Nervescape</span>
                    <span className="text-xs font-medium text-gray-500 tracking-[0.2em] uppercase">Analytics</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-3 ml-1">Optimize. Secure. Innovate.</p>
              </div>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Nervescape Analytics is a multicloud managed service provider offering top-tier, custom-tailored solutions. Our unparalleled expertise ensures your multicloud environment receives the premier care it deserves. We go beyond basic management, offering a comprehensive suite designed to optimize performance, security, and innovation. Let Nervescape orchestrate your cloud journey – discover a managed service experience unlike any other.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-left text-sm text-gray-500">
            © 2023 by Nervescape Analytics LLP. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
