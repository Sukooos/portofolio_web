"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Cloud, Users, Lightbulb } from "lucide-react";

export default function About() {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Technologies" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for performance."
    },
    {
      icon: Server,
      title: "API Development",
      description: "Building robust RESTful and GraphQL APIs with proper authentication and validation."
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Deploying and managing applications on AWS, Azure, and Google Cloud platforms."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively in agile teams and mentoring junior developers."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analyzing complex problems and implementing efficient solutions."
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate backend developer with expertise in building scalable web applications and robust APIs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Foundation of Modern Web Applications
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                With over 3 years of experience in backend development, I specialize in creating robust, 
                scalable server-side solutions that power modern web applications. My journey began with 
                a passion for understanding how things work behind the scenes.
              </p>
              <p>
                I excel at designing and implementing RESTful APIs, managing databases, and ensuring 
                optimal performance and security. My expertise spans across multiple programming languages 
                and frameworks, with a strong focus on Node.js, Python, and cloud technologies.
              </p>
                             <p>
                 I believe in writing clean, maintainable code and following best practices in software 
                 development. I&apos;m always eager to learn new technologies and tackle challenging problems 
                 that push the boundaries of what&apos;s possible.
               </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 