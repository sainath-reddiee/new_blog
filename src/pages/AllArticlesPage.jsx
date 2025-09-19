import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import RecentPosts from '@/components/RecentPosts';
import FeaturedPosts from '@/components/FeaturedPosts';

const AllArticlesPage = () => {
  return (
    <>
      <Helmet>
        <title>All Articles - DataEngineer Hub</title>
        <meta name="description" content="Browse all articles and tutorials on DataEngineer Hub." />
      </Helmet>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-black mb-4 text-center"
          >
            All <span className="gradient-text">Articles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          >
            Explore our full library of content, from beginner tutorials to advanced deep dives into data engineering.
          </motion.p>
          
          <FeaturedPosts />
          <RecentPosts />
        </div>
      </div>
    </>
  );
};

export default AllArticlesPage;