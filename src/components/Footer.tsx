import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">SoftSolve</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative software solutions and cutting-edge technology.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects/smart-agriculture" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Smart Agriculture System
                </Link>
              </li>
              <li>
                <Link to="/projects/e-learning" className="text-gray-400 hover:text-purple-400 transition-colors">
                  E-Learning Platform
                </Link>
              </li>
              <li>
                <Link to="/projects/healthcare" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Healthcare Management
                </Link>
              </li>
              <li>
                <Link to="/projects/supply-chain" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Supply Chain Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <span>contact@softsolve.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SoftSolve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;