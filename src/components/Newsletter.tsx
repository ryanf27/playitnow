import React from "react";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";

const Newsletter: React.FC = () => {
  return (
    <div className="py-14 w-3/4 mx-auto">
      <form
        id="gcNewsletterForm"
        method="GET"
        action=""
        className="newsletter-form"
      >
        <h3 className="text-xl mb-4 font-semibold text-gray-900">
          Be the first to know about exclusive offers, tips and more.
        </h3>
        <p className="mb-6 text-sm text-gray-700">
          Subscribe to our newsletter and be the first to know about exclusive
          offers, tips, and more.
        </p>
        <fieldset className=" mb-6">
          <label htmlFor="NewsLetterEmail" className="block mb-2 text-gray-700">
            Email Address <span className="text-red-500">(Required)</span>
          </label>
          <div className="flex items-center border rounded-md overflow-hidden mb-4 bg-gray-50">
            <div className="p-3 bg-gold text-white">
              <FaEnvelope />
            </div>
            <input
              aria-required="true"
              type="email"
              id="NewsLetterEmail"
              name="NewsLetterEmail"
              placeholder="Enter your email address"
              title="Email Signup"
              className="w-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-muted"
            />
          </div>
          <input
            type="submit"
            id="btnJoinNow"
            className="w-full bg-gold hover:bg-gold-muted text-white font-semibold py-3 px-4 rounded-md shadow-md transition-transform duration-300 "
            value="Sign Up"
          />
        </fieldset>
        <div id="clarip-consent-33" className="mb-6 flex items-start">
          <input
            type="checkbox"
            id="consentCap-33"
            name="consentCap-33"
            required
            className="mt-1 mr-2 form-checkbox h-5 w-5 text-blue-500"
          />
          <label
            htmlFor="consentCap-33"
            className="flex items-center text-gray-700"
          >
            <FaCheckCircle className="text-blue-500 mr-2" />
            Yes, I would like to receive emails with news and offers from Guitar
            Center.
          </label>
        </div>
        <div id="gc-newsletter-consent-errors" className="text-red-500"></div>
      </form>
    </div>
  );
};

export default Newsletter;
