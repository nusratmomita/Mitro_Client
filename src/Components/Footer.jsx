import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0L15.09 8H24L17.454 12.91L20.545 20L12 15.09L3.455 20L6.546 12.91L0 8H8.91L12 0Z" />
            </svg>
            <span className="text-2xl font-bold">Mitro</span>
          </div>
          <p className="text-gray-200 text-sm">
            Helping students organize, plan, and succeed. Stay productive with our all-in-one toolkit.
          </p>
          <div className="flex space-x-4 mt-2">
            <a target="_blank" href="https://www.facebook.com/" className="hover:text-green-400"><FaFacebookF /></a>
            <a target="_blank" href="https://www.x.com/" className="hover:text-green-400"><FaTwitter /></a>
            <a target="_blank" href="https://www.instragram.com/" className="hover:text-green-400"><FaInstagram /></a>
            <a target="_blank" href="https://www.linkedin.com/in/nushrathmomita/" className="hover:text-green-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="font-bold mb-4">Features</h6>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/classTracker" className="hover:text-green-400">Schedule Tracker</Link></li>
            <li><Link to="/budgetTracker" className="hover:text-green-400">Budget Tracker</Link></li>
            <li><Link to="/qaGenerator" className="hover:text-green-400">Q&A Generator</Link></li>
            <li><Link to="/studyPlanner" className="hover:text-green-400">Study planner</Link></li>
          </ul>
        </div>

        {/* Shortcuts */}
        <div>
          <h6 className="font-bold mb-4">Shortcuts</h6>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#about" className="hover:text-green-400">About Us</a></li>
            <li><a href="#faq" className="hover:text-green-400">FAQ</a></li>
            <li><a href="#blog" className="hover:text-green-400">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h6 className="font-bold mb-4">Newsletter</h6>
          <p className="text-gray-200 text-sm mb-4">
            Subscribe for tips, updates, and new features.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full rounded-lg text-black"
            />
            <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-lg">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-green-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Mitro. All rights reserved to Nushrath.
      </div>
    </footer>
  );
};

export default Footer;
