"use client";

import React, { useEffect, useState } from "react";

interface FlipWordsProps {
  words: string[];
  width?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({ words, width }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeOut(false);
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <span
      className={`inline-block transition-opacity duration-500 ease-in-out text-4xl font-bold text-gold ml-1 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ width }}
    >
      {words[currentWordIndex]}
    </span>
  );
};

export default FlipWords;
