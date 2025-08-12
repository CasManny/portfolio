"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const gradientTextVariants = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-black rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: particle.duration,
              ease: "easeInOut",
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <motion.span
            className="inline-block text-lg text-gray-600 font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            👋 Hello there! I'm
          </motion.span>
        </motion.div>

        {/* Main title with gradient animation */}
        <motion.h1
          variants={titleVariants}
          className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight"
        >
          <motion.span
            className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent bg-300% bg-size-300"
            variants={gradientTextVariants}
            style={{
              backgroundSize: "300% 300%",
            }}
          >
            Sabastine
          </motion.span>
        </motion.h1>

        {/* Static subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Creative{" "}
            <span className="text-black font-semibold">Frontend Engineer</span>{" "}
            building fast, sleek, and user-friendly web experiences. I turn
            ideas into pixel-perfect, responsive interfaces that help brands
            stand out and grow.
          </p>
        </motion.div>

        {/* Call-to-action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="px-8 py-4 bg-black cursor-pointer text-white font-semibold rounded-full shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            variants={pulseVariants}
            animate="animate"
            onClick={() => {
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black cursor-pointer transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = "mailto:chukwajahsabastinedev@gmail.com";
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{
              borderColor: [
                "rgba(107, 114, 128, 0.4)",
                "rgba(0, 0, 0, 1)",
                "rgba(107, 114, 128, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-black rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-black/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 border border-gray-400/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
