import React from "react";
import FlipWords from "@/components/FlipWords";

const Hero: React.FC = () => {
  const words = ["Guitar", "Piano", "Drums", "Bass", "Flute"];
  return (
    <section
      className="relative flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container p-10 mx-auto text-left z-10 flex items-center">
        <div className="w-full lg:w-1/2">
          <div className="text-3xl  text-white mb-4">
            Buy a <FlipWords words={words} /> <br />
            all your musical needs at PlayitNow
          </div>
          <p className="text-lg max-w-2xl text-gray-400 mb-6">
            PlayitNow is the most comprehensive online platform for all your
            musical needs. From renting instruments to finding professional
            musicians, we provide easy and safe solutions.
          </p>
          <a
            href="#services"
            className="inline-block bg-gold hover:bg-gold-muted text-black px-6 py-3 rounded-full font-semibold shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
