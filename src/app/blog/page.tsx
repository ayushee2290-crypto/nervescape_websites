'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Cloud Operations: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping cloud operations, from AI-driven automation to sustainable computing practices.',
    image: 'https://static.wixstatic.com/media/e77fd1ddd12e4652b471fe86db43b889.jpg/v1/crop/x_983,y_0,w_1310,h_1310/fill/w_728,h_728,al_c,q_85/Data%20Cloud.jpg',
    author: 'Nervescape Team',
    date: 'January 15, 2024',
    readTime: '5 min read',
    category: 'CloudOps',
  },
  {
    title: 'Best Practices for Implementing DataOps in Your Organization',
    excerpt: 'Learn how to successfully implement DataOps practices to streamline your data management workflows.',
    image: 'https://static.wixstatic.com/media/8cd0b216d6dd4d52bd46d3afbb8cf020.jpg/v1/crop/x_493,y_0,w_1280,h_1280/fill/w_728,h_728,al_c,q_85/8cd0b216d6dd4d52bd46d3afbb8cf020.jpg',
    author: 'Nervescape Team',
    date: 'January 10, 2024',
    readTime: '7 min read',
    category: 'DataOps',
  },
  {
    title: 'DevOps vs. Traditional IT: Why the Shift Matters',
    excerpt: 'Understanding the key differences between DevOps and traditional IT operations and why businesses are making the switch.',
    image: 'https://static.wixstatic.com/media/11062b_9aeb82c30e9742bcadc79b3dc8eb9fdb~mv2.jpeg/v1/crop/x_1313,y_0,w_3375,h_3375/fill/w_728,h_728,al_c,q_85/Data%20Processing.jpeg',
    author: 'Nervescape Team',
    date: 'January 5, 2024',
    readTime: '6 min read',
    category: 'DevOps',
  },
  {
    title: 'Monitoring and Observability: A Complete Guide',
    excerpt: 'Everything you need to know about implementing effective monitoring and observability in modern IT systems.',
    image: 'https://static.wixstatic.com/media/a3cb7bfa753c4b8cb7b06cf26783cef2.jpg/v1/crop/x_1260,y_0,w_3240,h_3240/fill/w_728,h_728,al_c,q_85/Monitoring%20Room.jpg',
    author: 'Nervescape Team',
    date: 'December 28, 2023',
    readTime: '8 min read',
    category: 'Observability',
  },
  {
    title: 'Database Operations: Ensuring High Availability',
    excerpt: 'Strategies and best practices for maintaining high availability in your database infrastructure.',
    image: 'https://static.wixstatic.com/media/dce453_fd1096f402664093b5cf9107ec37851e~mv2.jpg/v1/crop/x_0,y_324,w_1272,h_1272/fill/w_728,h_728,al_c,q_85/list-428312_1920.jpg',
    author: 'Nervescape Team',
    date: 'December 20, 2023',
    readTime: '6 min read',
    category: 'DBOps',
  },
  {
    title: 'Application Management in the Age of Microservices',
    excerpt: 'How AppOps practices are evolving to meet the challenges of microservices architecture.',
    image: 'https://static.wixstatic.com/media/dce453_59e41aa66fcb43d0b88296c3a353c06d~mv2.jpg/v1/crop/x_762,y_0,w_3385,h_3384/fill/w_728,h_728,al_c,q_85/pexels-pixabay-209726.jpg',
    author: 'Nervescape Team',
    date: 'December 15, 2023',
    readTime: '5 min read',
    category: 'AppOps',
  },
];

export default function BlogPage() {
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
              Blog & Insights
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights in cloud operations and data management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center text-gray-900 font-semibold hover:underline">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get the latest insights and updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
