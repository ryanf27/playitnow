import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Ways to Shop and Social Media */}
        <div className="flex flex-wrap justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h6 className="text-lg mb-4">Other Ways to Shop</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  App
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Gift Cards
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                855-770-3373
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <h6 className="text-lg mb-4">Connect With Us</h6>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/"
                  className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center space-x-2 hover:text-red-600 transition-colors duration-300"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex items-center space-x-2 hover:text-pink-500 transition-colors duration-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h6 className="text-lg mb-4">Your Account</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Order History
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Wish List
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Email Preferences
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Business Accounts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg mb-4">Features</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Rebates
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Apply for Leasing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Pro Coverage
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Press Room
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg mb-4">Support</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Service & Support
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Site Map
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg mb-4">How Are We Doing?</h6>
            <a
              href="/"
              className="block mb-4 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="text-gray-400 py-4 mt-8 border-t border-gray-700">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
            <span>Copyright © PlayitNow, Inc.</span>
            <div className="flex flex-wrap space-x-4 mt-2 md:mt-0">
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Purchase Terms & Conditions
              </a>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Your Privacy Rights
              </a>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
