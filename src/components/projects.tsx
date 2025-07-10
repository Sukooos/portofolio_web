"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Server, Cloud, Lock } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce API Platform",
      description: "Scalable microservices architecture for e-commerce platform handling 10k+ concurrent users. Built with Node.js, PostgreSQL, Redis, and deployed on AWS with Docker.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Microservices"],
      features: ["User Authentication", "Payment Processing", "Inventory Management", "Order Tracking"],
      icon: Server,
      github: "#",
      demo: "#",
      category: "Backend API"
    },
    {
      title: "Real-time Chat System",
      description: "High-performance chat application with WebSocket connections, message queuing, and real-time notifications. Supports group chats, file sharing, and message encryption.",
      image: "/api/placeholder/600/400",
      technologies: ["Socket.io", "Express.js", "MongoDB", "Redis", "JWT"],
      features: ["Real-time Messaging", "File Upload", "Group Chats", "Message Encryption"],
      icon: Database,
      github: "#",
      demo: "#",
      category: "Real-time Application"
    },
    {
      title: "Cloud Analytics Dashboard",
      description: "Data processing pipeline and analytics API for handling large datasets. Implements ETL processes, data visualization endpoints, and automated reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "Elasticsearch", "Docker", "Kubernetes"],
      features: ["Data Processing", "REST API", "Analytics Engine", "Automated Reports"],
      icon: Cloud,
      github: "#",
      demo: "#",
      category: "Data Processing"
    },
    {
      title: "Security Authentication Service",
      description: "Centralized authentication and authorization service with OAuth2, JWT tokens, and multi-factor authentication. Supports SSO and role-based access control.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "PostgreSQL", "OAuth2", "JWT", "2FA"],
      features: ["OAuth2 Integration", "Multi-factor Auth", "SSO Support", "Role Management"],
      icon: Lock,
      github: "#",
      demo: "#",
      category: "Security Service"
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with advanced filtering, real-time updates, and team collaboration features. Includes comprehensive API documentation.",
      image: "/api/placeholder/600/400",
      technologies: ["Express.js", "MongoDB", "WebSockets", "Swagger", "Jest"],
      features: ["RESTful API", "Real-time Updates", "Team Collaboration", "API Documentation"],
      icon: Server,
      github: "#",
      demo: "#",
      category: "Project Management"
    },
    {
      title: "IoT Data Collection Platform",
      description: "Scalable platform for collecting and processing IoT sensor data. Handles millions of data points with real-time analytics and alerting systems.",
      image: "/api/placeholder/600/400",
      technologies: ["Go", "InfluxDB", "Apache Kafka", "Grafana", "Docker"],
      features: ["Real-time Processing", "Data Visualization", "Alert System", "High Throughput"],
      icon: Database,
      github: "#",
      demo: "#",
      category: "IoT Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of backend systems and APIs I&apos;ve built to solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={64} className="text-white/20" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-sm font-medium text-gray-800 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors"
                    aria-label="View Demo"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature) => (
                      <span key={feature} className="text-xs text-gray-600 dark:text-gray-400">
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View More Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 