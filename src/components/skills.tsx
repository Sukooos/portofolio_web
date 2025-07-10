"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Settings, Shield, Zap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Python", level: 90 },
        { name: "Node.js", level: 95 },
        { name: "Java", level: 75 },
        { name: "Go", level: 70 },
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Elasticsearch", level: 75 },
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 75 },
        { name: "Azure", level: 70 },
        { name: "Google Cloud", level: 70 },
      ]
    },
    {
      icon: Settings,
      title: "Frameworks & Tools",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Express.js", level: 95 },
        { name: "Fastify", level: 85 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 85 },
        { name: "GraphQL", level: 80 },
      ]
    },
    {
      icon: Shield,
      title: "Security & Auth",
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "JWT", level: 90 },
        { name: "OAuth", level: 85 },
        { name: "SSL/TLS", level: 80 },
        { name: "API Security", level: 85 },
        { name: "OWASP", level: 75 },
      ]
    },
    {
      icon: Zap,
      title: "Performance & Monitoring",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Load Balancing", level: 80 },
        { name: "Caching", level: 85 },
        { name: "APM Tools", level: 75 },
        { name: "New Relic", level: 70 },
        { name: "Prometheus", level: 75 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building robust backend systems and scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "GitHub Actions", "Jenkins", "Terraform", "Nginx", "Apache",
              "RabbitMQ", "Apache Kafka", "Microservices", "RESTful APIs", "WebSockets",
              "Unit Testing", "Integration Testing", "Agile", "Scrum"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 