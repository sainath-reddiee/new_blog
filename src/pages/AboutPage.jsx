import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, Target, Code, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - DataTech Hub</title>
        <meta name="description" content="Learn about DataTech Hub's mission to provide the best data engineering content." />
      </Helmet>
      <div className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              About <span className="gradient-text">DataTech Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Your ultimate resource for mastering data engineering technologies. From AWS to dbt, we cover it all with practical insights and expert guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="blog-card p-8 rounded-2xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-300">
                To empower the next generation of data professionals by providing high-quality, practical, and accessible content on the latest data engineering tools and techniques. We believe in learning by doing and aim to provide tutorials that are both informative and immediately applicable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="blog-card p-8 rounded-2xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Who We Are</h2>
              </div>
              <p className="text-gray-300">
                We are a passionate group of data engineers, architects, and analysts with years of experience in the industry. We've worked with a wide range of technologies and are excited to share our knowledge with the community. Our goal is to demystify complex topics and make data engineering accessible to everyone.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto mt-20"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-6 py-3 mb-6">
              <Heart className="h-5 w-5 text-pink-400" />
              <span className="text-sm font-medium text-pink-200">Built with Passion</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Powered by Modern Tech</h2>
            <p className="text-lg text-gray-300">
              This blog is built using a modern tech stack including React, Vite, TailwindCSS, and Framer Motion to provide a fast, responsive, and beautiful reading experience.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;