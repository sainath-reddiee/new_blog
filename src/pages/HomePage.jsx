import React from 'react';
import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import TechCategories from '@/components/TechCategories';
import RecentPosts from '@/components/RecentPosts';
import Newsletter from '@/components/Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <TechCategories />
      <RecentPosts initialLimit={3} />
      <Newsletter />
    </>
  );
};

export default HomePage;