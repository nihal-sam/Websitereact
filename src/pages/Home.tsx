import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Code, Cpu, Database, CheckCircle2, ArrowUpRight, MessagesSquare, 
  Users, Rocket, Award, Shield, Clock, Zap, Globe, Server, Laptop,
  HeartHandshake, Trophy, Headphones, Timer, Star, Calendar
} from 'lucide-react';

const Home = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics platform using machine learning for business intelligence and predictive modeling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      link: '/projects/ai-analytics',
    },
    {
      title: 'Smart Agriculture System',
      description: 'IoT-based farming solution for monitoring and automating agricultural processes.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['IoT', 'Node.js', 'MongoDB', 'React'],
      link: '/projects/smart-agriculture',
    },
    {
      title: 'Healthcare Management Platform',
      description: 'Comprehensive healthcare solution for patient management and telemedicine services.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      link: '/projects/healthcare',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin by understanding your business challenges, objectives, and vision to ensure perfect alignment.',
      icon: <MessagesSquare className="h-6 w-6 text-blue-400" />,
    },
    {
      number: '02',
      title: 'Custom Design',
      description: 'Our expert team creates tailored solutions that perfectly match your specific requirements and goals.',
      icon: <Code className="h-6 w-6 text-blue-400" />,
    },
    {
      number: '03',
      title: 'Development Process',
      description: 'We follow agile methodologies to ensure transparent, efficient, and high-quality development.',
      icon: <Cpu className="h-6 w-6 text-blue-400" />,
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We ensure smooth deployment and provide ongoing support to maintain optimal performance.',
      icon: <Database className="h-6 w-6 text-blue-400" />,
    },
  ];

  const features = [
    {
      icon: <Rocket className="h-12 w-12 text-blue-400" />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology solutions tailored to your business needs',
    },
    {
      icon: <Users className="h-12 w-12 text-blue-400" />,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience',
    },
    {
      icon: <Award className="h-12 w-12 text-blue-400" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-12 w-12 text-blue-400" />,
      title: "Cutting-Edge Technology",
      description: "Leveraging the latest technologies to deliver innovative solutions"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-400" />,
      title: "Seamless Integration",
      description: "Ensuring smooth integration and scalability for your business"
    },
    {
      icon: <Trophy className="h-12 w-12 text-blue-400" />,
      title: "Certified Professionals",
      description: "Expert team with years of industry experience"
    },
    {
      icon: <Headphones className="h-12 w-12 text-blue-400" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for your peace of mind"
    }
  ];

  const techStack = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "Next.js"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend",
      technologies: ["Node.js", "Python", "Java", "Go"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Mobile",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    }
  ];

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Software Development",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      excerpt: "Discover how artificial intelligence is transforming the software development landscape, from code generation to testing and deployment.",
      slug: "future-of-ai"
    },
    {
      title: "The Future of Cybersecurity in the Digital Age",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      excerpt: "Explore emerging cybersecurity trends and strategies to protect your digital assets in an increasingly connected world.",
      slug: "cloud-security"
    },
    {
      title: "The Importance of Data Privacy in Software Solutions",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      excerpt: "Learn why data privacy is crucial in modern software development and how to implement effective privacy measures.",
      slug: "data-privacy"
    }
  ];

  return (
    <div className="min-h-screen section-bg text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)'
      }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Innovative Software Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto drop-shadow-lg">
              Your partner for reliable digital solutions since 1998
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              Why Choose Us
            </motion.h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Your partner for reliable digital solutions. Committed to delivering dependable, innovative, and tailored digital solutions that drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bg p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 tech-stack-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust and scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bg p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-900 rounded-lg mr-3">
                    {stack.icon}
                  </div>
                  <h3 className="text-xl font-bold">{stack.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F2744] p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">HOW IT WORKS</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Understand our process for seamless results. Our process is designed to ensure smooth project execution, from initial consultation to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F2744] p-6 rounded-lg relative group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">{step.number}</div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our latest work and see how we've helped businesses achieve their goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F2744] rounded-lg overflow-hidden shadow-xl"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Learn More
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Latest Blog</h2>
            <p className="text-gray-400">Stay updated with our latest insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F2744] rounded-lg overflow-hidden shadow-xl"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F2744] rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life. Our team is ready to create the perfect solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;