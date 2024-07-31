import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Wide Selection</h3>
              <p>
                We offer a wide range of instruments from guitars to pianos.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Affordable Prices</h3>
              <p>Rent instruments at prices that fit your budget.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Easy Process</h3>
              <p>
                Our rental process is quick and easy, so you can get started
                right away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
