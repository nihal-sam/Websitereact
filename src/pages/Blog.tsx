import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const blogPosts = {
  'future-of-ai': {
    title: "The Future of AI in Software Development",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    content: `
      Artificial Intelligence is revolutionizing the software development landscape, transforming how we build, test, and deploy applications. In this comprehensive guide, we'll explore the current state of AI in software development and what the future holds.

      ## Current Impact of AI in Software Development

      AI is already making significant contributions to various aspects of software development:

      1. **Code Generation and Completion**
         - AI-powered tools can suggest code completions
         - Automated code generation for repetitive tasks
         - Smart refactoring suggestions

      2. **Testing and Quality Assurance**
         - Automated test generation
         - Intelligent bug detection
         - Performance optimization recommendations

      3. **Project Management**
         - Predictive analytics for project timelines
         - Resource allocation optimization
         - Risk assessment and mitigation

      ## Future Trends

      ### 1. Natural Language Programming
      The future of programming might involve more natural language interactions, where developers can describe functionality in plain English, and AI translates it into code.

      ### 2. Autonomous Development
      AI systems will become capable of handling entire development cycles with minimal human intervention, particularly for standard applications and features.

      ### 3. Intelligent Debugging
      Advanced AI systems will not only detect bugs but also understand their root causes and suggest or implement fixes automatically.

      ## Preparing for the AI-Driven Future

      To stay ahead in this evolving landscape, developers should:

      1. **Embrace AI Tools**
         - Learn to work alongside AI assistants
         - Understand AI capabilities and limitations
         - Stay updated with new AI development tools

      2. **Focus on High-Level Skills**
         - System architecture and design
         - Problem-solving and algorithmic thinking
         - Business logic and domain expertise

      3. **Adapt Learning Approaches**
         - Continuous learning and adaptation
         - Focus on AI integration patterns
         - Understanding AI ethics and implications

      ## Conclusion

      The integration of AI in software development is not just a trend but a fundamental shift in how we approach building software. While AI will automate many aspects of development, the role of human developers will evolve to focus more on creative problem-solving and strategic decision-making.
    `
  },
  'cloud-security': {
    title: "The Future of Cybersecurity in the Digital Age",
    date: "March 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    content: `
      As our world becomes increasingly digital, cybersecurity has become more critical than ever. Let's explore the emerging trends and challenges in cybersecurity.

      ## The Evolving Threat Landscape

      The cybersecurity landscape is constantly changing with new threats emerging:

      1. **Advanced Persistent Threats (APTs)**
         - State-sponsored attacks
         - Long-term data exfiltration
         - Sophisticated evasion techniques

      2. **Ransomware Evolution**
         - Double extortion tactics
         - Supply chain attacks
         - Ransomware-as-a-Service (RaaS)

      3. **IoT Security Challenges**
         - Device proliferation
         - Firmware vulnerabilities
         - Network security concerns

      ## Emerging Security Technologies

      ### 1. Artificial Intelligence and Machine Learning
      AI/ML systems are becoming crucial for:
      - Threat detection and response
      - Behavioral analysis
      - Automated security operations

      ### 2. Zero Trust Architecture
      Moving beyond traditional perimeter security:
      - Identity-based access control
      - Micro-segmentation
      - Continuous verification

      ### 3. Quantum-Safe Cryptography
      Preparing for the quantum computing era:
      - Post-quantum algorithms
      - Quantum key distribution
      - Hybrid cryptographic solutions

      ## Best Practices for Organizations

      1. **Security Framework Implementation**
         - Risk assessment and management
         - Security policies and procedures
         - Regular security audits

      2. **Employee Training and Awareness**
         - Security awareness programs
         - Phishing simulation exercises
         - Incident response training

      3. **Technical Controls**
         - Multi-factor authentication
         - Endpoint protection
         - Network segmentation

      ## Future Outlook

      The future of cybersecurity will require:
      - Adaptive security architectures
      - Automated response capabilities
      - Enhanced privacy protection
      - Collaborative threat intelligence

      ## Conclusion

      Organizations must stay proactive in their cybersecurity approach, adopting new technologies and practices while maintaining strong security fundamentals.
    `
  },
  'data-privacy': {
    title: "The Importance of Data Privacy in Software Solutions",
    date: "March 5, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    content: `
      Data privacy has become a crucial aspect of software development and business operations. Understanding its importance and implementing effective measures is essential for modern organizations.

      ## The Significance of Data Privacy

      Data privacy matters for several reasons:

      1. **Regulatory Compliance**
         - GDPR requirements
         - CCPA compliance
         - Industry-specific regulations

      2. **Customer Trust**
         - Brand reputation
         - Customer loyalty
         - Competitive advantage

      3. **Risk Mitigation**
         - Data breach prevention
         - Financial loss protection
         - Legal liability reduction

      ## Key Privacy Considerations

      ### 1. Data Collection and Storage
      Best practices for handling personal data:
      - Data minimization
      - Purpose limitation
      - Storage limitation

      ### 2. Data Processing
      Ensuring lawful and fair processing:
      - Consent management
      - Processing transparency
      - Data subject rights

      ### 3. Security Measures
      Technical and organizational measures:
      - Encryption
      - Access controls
      - Audit trails

      ## Implementation Strategies

      1. **Privacy by Design**
         - Built-in privacy features
         - Default privacy settings
         - Regular privacy assessments

      2. **Technical Solutions**
         - Data anonymization
         - Pseudonymization
         - Encryption methods

      3. **Organizational Measures**
         - Privacy policies
         - Staff training
         - Incident response plans

      ## Future Trends

      The future of data privacy includes:
      - Enhanced privacy technologies
      - Stricter regulations
      - Greater transparency requirements
      - Automated compliance tools

      ## Conclusion

      Data privacy is not just a legal requirement but a fundamental aspect of modern software development. Organizations must prioritize privacy protection to maintain trust and comply with evolving regulations.
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A1A2F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1A2F] text-white">
      <div className="relative h-[40vh] bg-black">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1A2F]" />
        <Link
          to="/"
          className="absolute top-8 left-8 flex items-center text-white hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0F2744] rounded-lg shadow-xl p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-400 mb-8">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="mr-4">{post.date}</span>
            <Clock className="h-5 w-5 mr-2" />
            <span>{post.readTime}</span>
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('###')) {
                return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={index} className="list-disc pl-6 mb-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="text-gray-300">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index} className="text-gray-300 mb-4 leading-relaxed">{paragraph}</p>;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;