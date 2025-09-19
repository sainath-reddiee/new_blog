import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Newsletter from '@/components/Newsletter';

const NewsletterPage = () => {
  return (
    <>
      <Helmet>
        <title>Newsletter - DataEngineer Hub</title>
        <meta name="description" content="Subscribe to the DataEngineer Hub newsletter for the latest in data engineering." />
      </Helmet>
      <div className="pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Newsletter />
        </motion.div>
      </div>
    </>
  );
};

export default NewsletterPage;