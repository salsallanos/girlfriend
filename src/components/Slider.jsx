// Slider.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const texts = [
  {
    title: "Liurys Alvarez",
    message: "A very beautiful and special woman",
    prev_next: true,
  },
  {
    title: "Will you",
    message:"I want you to know that i've been really enjoying getting to know you and spending time together. I find myself constantly thinking about you, your smile, and the way you make every moment we share special.",
    prev_next: true,
  },
  {
    title: "Be my",
    message: "I promise to respect you and to support your ambitions,  With you, I want to create a partnership built on trust, understanding, and love.",
    prev_next: true,
  },
  {
    title: "Girlfriend?",
    message: "So, with all the sincerity in my heart, I want to ask: Liurys, would you be my girlfriend? I would be honored to call you mine.",
    prev_next: false,
  },
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pos, setPos] = useState('relative');
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === texts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container text-center flex flex-col justify-center items-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {texts[currentIndex].title}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {texts[currentIndex].message}
      </p>
      <div className="flex">
        {texts[currentIndex].prev_next ? (
          <>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={prevSlide}
            >
              Previous
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={nextSlide}
            >
              Next
            </motion.button>
          </>
        ) : (
          <>
            <motion.button
              onClick={(e) => {
                console.log("CLICKED NO");
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              onHoverStart={() => {
                setPos("absolute");
                setTop(Math.random() * (window.innerHeight - 80));
                setLeft(Math.random() * (window.innerWidth - 80));
              }}
              style={{
                position: pos,
                top: top,
                left: left,
                transition: { duration: 0.5 },
              }}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              No
            </motion.button>
            <motion.button
              onClick={(e) => {
                console.log("CLICKED YES");
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Yes
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
};
