import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Rocket, LineChart } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = {
    'ai-analytics': {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics platform using machine learning for business intelligence and predictive modeling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      fullDescription: `Our AI-powered analytics platform represents the cutting edge of business intelligence and predictive modeling. Built with advanced machine learning algorithms and real-time processing capabilities, this platform transforms raw data into actionable insights that drive informed decision-making.

The platform features a sophisticated architecture that combines the power of TensorFlow for machine learning with AWS's scalable cloud infrastructure. The React-based frontend provides an intuitive interface for data visualization and analysis, making complex analytics accessible to users across all technical levels.

Our solution enables businesses to:
• Process and analyze large datasets in real-time
• Generate predictive models with high accuracy
• Visualize complex data patterns through interactive dashboards
• Automate decision-making processes
• Integrate with existing business systems

The platform's machine learning capabilities include:
• Advanced pattern recognition
• Anomaly detection
• Trend analysis
• Customer behavior modeling
• Risk assessment and management
• Predictive maintenance

Key benefits:
• Reduced analysis time by 75%
• Improved prediction accuracy by 40%
• Cost savings through optimized operations
• Enhanced decision-making capabilities
• Scalable and secure infrastructure`,
      features: [
        'Real-time data processing and analysis',
        'Custom ML model training interface',
        'Interactive dashboards and reports',
        'Automated anomaly detection',
        'Predictive analytics capabilities',
        'API integration support'
      ],
      impact: 'Implemented across 50+ enterprises, reducing analysis time by 75% and improving prediction accuracy by 40%. Helped clients achieve $2M+ in cost savings through optimized decision-making.'
    },
    'smart-agriculture': {
      title: 'Smart Agriculture System',
      description: 'IoT-based farming solution for monitoring and automating agricultural processes.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      technologies: ['IoT', 'Node.js', 'MongoDB', 'React'],
      fullDescription: `Our Smart Agriculture System revolutionizes traditional farming practices through the integration of IoT technology and intelligent automation. This comprehensive solution enables farmers to monitor and control their agricultural operations with unprecedented precision and efficiency.

The system incorporates a network of advanced sensors that continuously monitor crucial parameters such as:
- Soil moisture and composition
- Temperature and humidity
- Light intensity
- Crop health indicators
- Weather conditions
- Water quality

The IoT infrastructure connects these sensors to a central management platform, providing real-time data and automated control capabilities. The system's intelligent algorithms analyze this data to optimize:
- Irrigation scheduling
- Fertilizer application
- Pest control measures
- Harvest timing
- Resource allocation

The mobile-first interface allows farmers to:
- Monitor farm conditions remotely
- Receive automated alerts and notifications
- Control irrigation systems
- Track crop growth and health
- Access detailed analytics and reports`,
      features: [
        'Automated irrigation management',
        'Real-time soil and climate monitoring',
        'Pest and disease detection',
        'Yield prediction and optimization',
        'Mobile app control interface',
        'Weather integration and alerts'
      ],
      impact: 'Deployed across 1000+ acres, resulting in 30% water savings and 25% increase in crop yield. Reduced manual monitoring needs by 80% while improving crop quality and sustainability.'
    },
    'healthcare': {
      title: 'Healthcare Management Platform',
      description: 'Comprehensive healthcare solution for patient management and telemedicine services.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      fullDescription: `Our Healthcare Management Platform is a comprehensive solution designed to streamline medical practice operations while enhancing patient care quality. This HIPAA-compliant system integrates electronic health records, telemedicine capabilities, and practice management tools into a unified platform.

The platform's architecture ensures:
- Secure data handling and storage
- Real-time communication capabilities
- Seamless integration with existing systems
- Scalability for growing practices
- Compliance with healthcare regulations

Key features include:
- Electronic Health Records (EHR)
- Telemedicine video consultations
- Appointment scheduling system
- Prescription management
- Billing and insurance processing
- Patient portal access

The telemedicine module provides:
- HD video consultations
- Secure messaging
- File sharing capabilities
- Digital prescription services
- Remote monitoring integration`,
      features: [
        'Secure electronic health records',
        'Real-time video consultations',
        'Automated appointment scheduling',
        'Prescription management system',
        'Integrated billing and insurance',
        'Patient portal access'
      ],
      impact: 'Serving 200+ healthcare providers and 50,000+ patients. Reduced administrative time by 60% and increased patient satisfaction scores by 45%. Enabled 24/7 access to healthcare services.'
    },
    'e-learning': {
      title: 'E-Learning Platform',
      description: 'Interactive learning platform with real-time collaboration and progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Socket.io'],
      fullDescription: `Our E-Learning Platform transforms online education through interactive content delivery and real-time collaboration features. Built with modern web technologies, the platform provides an engaging learning experience for students while offering powerful tools for educators.

The platform supports:
- Multiple content formats (video, text, interactive)
- Live virtual classrooms
- Real-time collaboration tools
- Progress tracking and analytics
- Personalized learning paths
- Assessment and certification

Key features for educators:
- Course creation tools
- Content management system
- Student progress monitoring
- Assessment creation
- Analytics dashboard
- Communication tools

Student features include:
- Interactive learning materials
- Progress tracking
- Peer collaboration
- Mobile learning support
- Achievement certificates
- Personal learning dashboard`,
      features: [
        'Live virtual classrooms',
        'Interactive course content',
        'Progress tracking and analytics',
        'Peer collaboration tools',
        'Adaptive learning paths',
        'Mobile-friendly interface'
      ],
      impact: 'Serving 100,000+ students across 500+ courses. Achieved 85% course completion rate and 92% student satisfaction. Enabled seamless transition to remote learning for 50+ educational institutions.'
    },
    'supply-chain': {
      title: 'Supply Chain Management',
      description: 'Blockchain-based supply chain tracking and management system.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      technologies: ['Ethereum', 'React', 'Node.js', 'Web3'],
      fullDescription: `Our Supply Chain Management system leverages blockchain technology to ensure transparency and traceability in supply chain operations. This innovative solution provides end-to-end visibility and automated contract execution across the entire supply chain network.

The blockchain infrastructure enables:
- Immutable transaction records
- Smart contract automation
- Real-time tracking
- Supplier verification
- Quality assurance
- Automated payments

Key features include:
- Product tracking and tracing
- Smart contract management
- Inventory optimization
- Supplier management
- Quality control
- Analytics and reporting

The system provides:
- Real-time visibility
- Automated compliance
- Risk management
- Cost optimization
- Sustainability tracking
- Performance analytics`,
      features: [
        'Blockchain-based tracking',
        'Smart contract automation',
        'Real-time inventory management',
        'Supplier verification system',
        'Quality assurance tracking',
        'Analytics dashboard'
      ],
      impact: 'Implemented by 20+ global enterprises, reducing supply chain costs by 35% and improving transparency by 100%. Decreased product verification time by 90% while ensuring authenticity.'
    },
    'smart-city': {
      title: 'Smart City Dashboard',
      description: 'Real-time monitoring and analytics for urban infrastructure and services.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      technologies: ['React', 'D3.js', 'Python', 'TimescaleDB'],
      fullDescription: `Our Smart City Dashboard provides comprehensive monitoring and management of urban infrastructure and services. This innovative platform integrates data from various city systems to provide real-time insights and control capabilities for city managers.

The system monitors:
- Traffic flow and management
- Public transportation
- Utility consumption
- Emergency services
- Environmental conditions
- Public safety systems

Key features include:
- Real-time monitoring
- Predictive analytics
- Automated alerts
- Resource optimization
- Emergency response
- Environmental tracking

The dashboard provides:
- Interactive visualizations
- Real-time updates
- Trend analysis
- Resource management
- Incident tracking
- Performance metrics`,
      features: [
        'Real-time infrastructure monitoring',
        'Traffic management system',
        'Utility usage tracking',
        'Emergency response coordination',
        'Environmental monitoring',
        'Predictive maintenance alerts'
      ],
      impact: 'Deployed in 5 major cities, improving emergency response times by 40% and reducing utility costs by 25%. Enhanced urban service efficiency and citizen satisfaction by 60%.'
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A1A2F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Return to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1A2F] text-white">
      <div className="relative h-[40vh] bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1A2F]" />
        <Link
          to="/projects"
          className="absolute top-8 left-8 flex items-center text-white hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-20 relative">
        <div className="bg-[#0F2744] rounded-lg shadow-xl p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <Rocket className="h-5 w-5 mr-2 text-indigo-400" />
              Overview
            </h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2 text-indigo-400" />
              Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="h-2 w-2 mt-2 mr-2 bg-indigo-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <LineChart className="h-5 w-5 mr-2 text-indigo-400" />
              Impact & Results
            </h3>
            <p className="text-gray-300 leading-relaxed">{project.impact}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;