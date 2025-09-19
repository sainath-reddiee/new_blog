import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Database, 
  Workflow, 
  BarChart3, 
  Zap,
  Code2,
  GitBranch
} from 'lucide-react';

const TechCategories = () => {
  const categories = [
    {
      name: 'AWS',
      icon: Cloud,
      description: 'Cloud data services, S3, Redshift, Glue, and more',
      color: 'from-orange-500 to-red-500',
      posts: 15,
      path: '/category/aws'
    },
    {
      name: 'Snowflake',
      icon: Database,
      description: 'Modern cloud data warehouse and analytics',
      color: 'from-blue-500 to-cyan-500',
      posts: 12,
      path: '/category/snowflake'
    },
    {
      name: 'Azure',
      icon: Cloud,
      description: 'Microsoft cloud data platform and services',
      color: 'from-blue-600 to-indigo-600',
      posts: 10,
      path: '/category/azure'
    },
    {
      name: 'SQL',
      icon: Database,
      description: 'Advanced queries, optimization, and best practices',
      color: 'from-green-500 to-emerald-500',
      posts: 20,
      path: '/category/sql'
    },
    {
      name: 'Airflow',
      icon: Workflow,
      description: 'Workflow orchestration and data pipeline automation',
      color: 'from-purple-500 to-violet-500',
      posts: 8,
      path: '/category/airflow'
    },
    {
      name: 'dbt',
      icon: GitBranch,
      description: 'Data transformation and analytics engineering',
      color: 'from-pink-500 to-rose-500',
      posts: 14,
      path: '/category/dbt'
    },
    {
      name: 'Python',
      icon: Code2,
      description: 'Data engineering with Python libraries and frameworks',
      color: 'from-yellow-500 to-orange-500',
      posts: 18,
      path: '/category/python'
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      description: 'Data visualization, BI tools, and reporting',
      color: 'from-teal-500 to-cyan-500',
      posts: 11,
      path: '/category/analytics'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deep dive into the tools and platforms that power modern data engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link to={category.path} className="block tech-card rounded-2xl p-6 group relative overflow-hidden h-full">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img 
                      className="w-full h-full object-cover"
                      alt={`${category.name} technology background`}
                      src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300 self-start`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-500">
                        {category.posts} articles
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Zap className="h-4 w-4 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechCategories;