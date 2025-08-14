"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function ThankYouScreen() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/motorcycle.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="min-h-screen bg-blue-700 text-white flex flex-col items-center  px-4  ">
      {animationData && (
        <motion.div
          initial={{ x: -600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-[280px]  md:w-[450px]   pr-13  md:pr-20"
        >
          <Lottie animationData={animationData} loop={false} />
        </motion.div>
      )}

      <motion.h1
        className="text-center  text-white/90 text-2xl  lg:text-4xl font-bold md:mt-6 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Thank you for completing the survey.
      </motion.h1>

      {/* <motion.p
        className="text-center text-sm sm:text-base md:text-lg mt-4 max-w-md text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Your feedback is valuable and helps us improve your experience. We truly
        appreciate your time and input.
      </motion.p> */}

      <motion.div
  className="mt-10 flex flex-col sm:flex-row gap-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.8 }}
>
  <a
    href="https://balancers.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-2xl bg-white text-blue-700 text-sm sm:text-base font-semibold hover:scale-105 transition"
  >
    Explore Balancers 
  </a>

  <a
    href="/"
    className="px-6 py-3 rounded-2xl bg-transparent border border-white text-white text-sm sm:text-base font-semibold hover:bg-white hover:text-blue-700 transition"
  >
    Join our services
  </a>
</motion.div>

    </div>
  );
}