import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - DataEngineer Hub</title>
        <meta name="description" content="Read the Terms of Service for DataEngineer Hub." />
      </Helmet>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-center">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 text-center">Last updated: September 19, 2025</p>
            
            <div className="prose prose-invert max-w-none text-lg text-gray-300 leading-relaxed space-y-6">
              <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the DataEngineer Hub website (the "Service") operated by us.</p>
              
              <h2 className="text-3xl font-bold mt-12 mb-4 gradient-text">1. Acceptance of Terms</h2>
              <p>By accessing and using our Service, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
              
              <h2 className="text-3xl font-bold mt-12 mb-4 gradient-text">2. Content</h2>
              <p>All content provided on this blog is for informational purposes only. The owner of this blog makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site. The owner will not be liable for any errors or omissions in this information nor for the availability of this information.</p>

              <h2 className="text-3xl font-bold mt-12 mb-4 gradient-text">3. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of DataEngineer Hub and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

              <h2 className="text-3xl font-bold mt-12 mb-4 gradient-text">4. User Conduct</h2>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Post or transmit any unlawful, threatening, abusive, libelous, defamatory, obscene, vulgar, pornographic, profane, or indecent information.</li>
                <li>Violate any applicable local, state, national, or international law.</li>
                <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4 gradient-text">5. Termination</h2>
              <p>We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;