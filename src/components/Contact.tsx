import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">Have questions? Get in touch with us!</p>
        <a
          href="mailto:info@playitnow.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-full"
        >
          Email Us
        </a>
      </div>
    </section>
  );
};

export default Contact;
