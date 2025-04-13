import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Puzzle, Trophy, Target } from 'lucide-react';

const About = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const coreValues = [
    {
      icon: <Heart className="h-6 w-6 text-indigo-400" />,
      title: 'Integrity',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      description: `Integrity is the cornerstone of our business philosophy at SoftSolve. We believe that trust is earned through consistent ethical behavior and transparent business practices. Our commitment to integrity manifests in several key ways:

1. Honest Communication
We maintain open and honest communication with our clients, partners, and team members. Every project begins with clear expectations and continues with regular updates and transparent reporting.

2. Ethical Business Practices
Our business decisions are guided by strong ethical principles. We never compromise on quality or cut corners, ensuring that every solution we deliver meets the highest standards of excellence.

3. Data Security
We handle sensitive information with utmost care and implement robust security measures to protect our clients' data. Our security protocols exceed industry standards and are regularly updated.

4. Client Trust
We build lasting relationships with our clients based on mutual trust and respect. Our team takes pride in being reliable partners who always deliver on their promises.

5. Quality Assurance
Every piece of code, every design element, and every solution undergoes rigorous quality checks to ensure it meets our high standards of integrity and excellence.

6. Transparent Pricing
We believe in clear, upfront pricing with no hidden costs. Our clients always know exactly what they're paying for and receive detailed breakdowns of all services provided.

7. Accountability
We take full responsibility for our work and decisions. If issues arise, we address them promptly and transparently, ensuring our clients are never left in the dark.

8. Environmental Responsibility
Our commitment to integrity extends to environmental stewardship. We implement eco-friendly practices and promote sustainable solutions in our development processes.

9. Social Responsibility
We actively contribute to our community through various initiatives and maintain ethical labor practices that prioritize employee well-being and professional growth.

10. Innovation with Ethics
While we push the boundaries of technology, we ensure our innovations align with ethical guidelines and promote positive social impact.`
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-indigo-400" />,
      title: 'Creativity',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      description: `At SoftSolve, creativity is not just about innovative design – it's about finding unique solutions to complex challenges. Our creative approach encompasses:

1. Innovative Problem-Solving
We approach each challenge with fresh perspectives, thinking outside conventional boundaries to develop innovative solutions that address our clients' unique needs.

2. Design Thinking
Our creative process follows design thinking principles, ensuring that solutions are not only technically sound but also user-friendly and aesthetically pleasing.

3. Continuous Innovation
We stay at the forefront of technological trends, constantly exploring new ways to enhance our solutions and create better user experiences.

4. Custom Solutions
Every project receives a tailored approach, with creative solutions designed specifically for each client's unique requirements and goals.

5. Collaborative Creativity
We foster a collaborative environment where team members share ideas and inspire each other to push creative boundaries further.`
    },
    {
      icon: <Puzzle className="h-6 w-6 text-indigo-400" />,
      title: 'Innovation',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      description: `Innovation drives everything we do at SoftSolve. We're constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions:

1. Emerging Technologies
We actively research and implement emerging technologies like AI, blockchain, and IoT to create forward-thinking solutions that give our clients a competitive edge.

2. Agile Development
Our innovative development process combines agile methodologies with cutting-edge tools and practices, ensuring rapid delivery of high-quality solutions.

3. Research & Development
We maintain a dedicated R&D team that explores new technologies and methodologies, keeping us at the forefront of technological innovation.

4. Custom Frameworks
We develop proprietary frameworks and tools that enhance our development capabilities and deliver better results for our clients.

5. Sustainable Innovation
Our innovative solutions are designed with sustainability in mind, ensuring long-term value and scalability.`
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      title: 'Collaboration',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      description: `Collaboration is essential to our success at SoftSolve. We believe that the best results come from working together:

1. Team Synergy
Our diverse team brings together different perspectives and expertise, creating a collaborative environment that fosters innovation and excellence.

2. Client Partnership
We work closely with our clients, treating them as partners in the development process and ensuring their vision is realized through continuous collaboration.

3. Cross-functional Teams
Our projects benefit from cross-functional teams that bring together different areas of expertise to create comprehensive solutions.

4. Open Communication
We maintain open channels of communication, ensuring that all stakeholders are informed and involved throughout the project lifecycle.

5. Knowledge Sharing
Regular knowledge sharing sessions and collaborative learning opportunities help our team stay updated and grow together.`
    },
    {
      icon: <Trophy className="h-6 w-6 text-indigo-400" />,
      title: 'Excellence',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      description: `Excellence is not just a goal at SoftSolve – it's our standard. We strive for excellence in every aspect of our work:

1. Quality Standards
We maintain rigorous quality standards throughout our development process, ensuring every deliverable meets or exceeds industry benchmarks.

2. Professional Development
Our team members are encouraged to pursue continuous learning and professional development to maintain excellence in their respective fields.

3. Best Practices
We follow industry best practices and established standards while also developing our own enhanced methodologies for superior results.

4. Performance Optimization
Every solution we deliver is optimized for performance, ensuring excellent user experience and system efficiency.

5. Client Satisfaction
Our commitment to excellence is reflected in our high client satisfaction rates and long-term client relationships.`
    },
    {
      icon: <Target className="h-6 w-6 text-indigo-400" />,
      title: 'Results',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      description: `At SoftSolve, we're driven by results. Our focus is on delivering measurable value and tangible outcomes for our clients:

1. Measurable Impact
We define clear metrics and KPIs for every project, ensuring that results can be measured and success can be quantified.

2. Business Value
Our solutions are designed to deliver real business value, whether through increased efficiency, reduced costs, or improved user experience.

3. Continuous Improvement
We regularly analyze results and gather feedback to continuously improve our processes and deliverables.

4. ROI Focus
Every solution is developed with a focus on maximizing return on investment for our clients.

5. Long-term Success
We measure our success by the long-term value and sustainability of our solutions.`
    },
  ];

  return (
    <div className="min-h-screen section-bg text-white">
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 overlay-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Building the future of technology with innovation and expertise
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className={`bg-[#0F2744] p-8 rounded-lg shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedValue === value.title ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setSelectedValue(value.title)}
                whileHover={{ y: -5 }}
              >
                <div className="p-2 bg-indigo-900 rounded-lg mb-4 inline-block">{value.icon}</div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedValue && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 bg-[#0F2744]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {coreValues.map((value, index) => (
              value.title === selectedValue && (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744] via-transparent to-transparent" />
                  </div>
                  <div className="prose prose-lg prose-invert">
                    <h2 className="text-3xl font-bold mb-6">{value.title}</h2>
                    <div className="text-gray-300 whitespace-pre-line">
                      {value.description}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </motion.section>
      )}

      <section className="py-16 bg-[#0F2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2010, SoftSolve has grown from a small team of passionate developers into a leading software development company. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of evolving technology landscapes.
            </p>
            <p className="text-gray-300 mb-6">
              We believe in the power of technology to transform businesses and improve lives. Our team of expert developers, designers, and consultants works tirelessly to deliver solutions that not only meet but exceed our clients' expectations. We've successfully completed over 500 projects across various industries, helping businesses achieve their digital transformation goals.
            </p>
            <p className="text-gray-300 mb-6">
              Our approach combines technical excellence with strategic thinking. We don't just build software; we create solutions that drive business growth, enhance operational efficiency, and deliver measurable results. Our commitment to staying ahead of technological trends ensures that our clients always benefit from the latest innovations in software development.
            </p>
            <p className="text-gray-300 mb-6">
              What sets us apart is our dedication to understanding each client's unique challenges and objectives. We believe in building long-term partnerships, not just delivering projects. This philosophy has helped us maintain a 95% client retention rate and establish ourselves as a trusted technology partner for businesses worldwide.
            </p>
            <p className="text-gray-300">
              Looking ahead, we continue to invest in emerging technologies and talent development. Our vision is to remain at the forefront of technological innovation while maintaining our commitment to delivering exceptional value to our clients. Join us in building the future of technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;