import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>DataEngineer Hub - Your Data Engineering Blog</title>
        <meta name="description" content="Explore the latest in data engineering with insights on AWS, Snowflake, Azure, SQL, Airflow, dbt and more. Your go-to resource for data technology." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default Layout;