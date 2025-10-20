"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { techStack } from "@/data";

interface HeadingProps {
  label: string;
}

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

const Heading: React.FC<HeadingProps> = ({ label }) => (
  <motion.h2
    className="text-4xl font-bold mb-8 text-black"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {label}
  </motion.h2>
);

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
}) => <div className={`relative ${className}`}>{children}</div>;

export const AboutMe: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView: boolean = useInView(ref, { once: true });

  // Generate particles for background animation
  const particles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 8,
    delay: Math.random() * 3,
  }));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillBarVariants: Variants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <SectionWrapper className="min-h-screen relative overflow-hidden py-20 px-10">
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-black"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
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
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Heading label="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="bg-gray-50 p-6 rounded-2xl border-l-4 border-black shadow-sm"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-lg leading-relaxed text-gray-800 font-medium"
                variants={itemVariants}
              >
                I'm a{" "}
                <span className="text-black font-bold">
                  passionate web developer
                </span>{" "}
                with an insatiable appetite for creating exceptional digital
                experiences. My journey began with frontend technologies, and
                I've fallen in love with the art of bringing designs to life
                through clean, efficient code.
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-400 "
              whileHover={{
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              variants={itemVariants}
            >
              <motion.p
                className="text-lg leading-relaxed text-gray-800"
                variants={itemVariants}
              >
                Currently expanding my expertise into{" "}
                <span className="text-black font-bold">
                  full-stack development
                </span>
                , I'm diving deep into{" "}
                <span className="text-green-600 font-semibold">Node.js</span>{" "}
                and{" "}
                <span className="text-gray-700 font-semibold">Express.js</span>{" "}
                to master the backend realm. This journey towards becoming a
                complete full-stack developer excites me every single day.
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-black to-gray-800 p-6 rounded-2xl shadow-lg text-white"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
              variants={itemVariants}
            >
              <motion.p
                className="text-lg leading-relaxed font-medium"
                variants={itemVariants}
              >
                I thrive on solving complex problems, optimizing performance,
                and crafting user interfaces that don't just look stunning but
                provide seamless, intuitive experiences. Every line of code I
                write is driven by the goal of creating something meaningful and
                impactful.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg"
              whileHover={{ boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-black mb-6">
                Technical Expertise
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="group relative flex flex-col items-center p-4  transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <tech.Icon className="w-10 h-10 text-gray-700 group-hover:text-black transition-colors" />
                    {/* <span className="mt-2 text-sm font-semibold text-gray-800">
                      {tech.name}
                    </span> */}
                    <motion.span className="absolute hidden bottom-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {tech.purpose}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <motion.div
                className="bg-black text-white p-4 rounded-xl text-center shadow-lg"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-2xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  2+
                </motion.div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </motion.div>
              <motion.div
                className="bg-gray-100 text-black p-4 rounded-xl text-center shadow-lg border-2 border-gray-200"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-2xl font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  3+
                </motion.div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center hidden"
          variants={itemVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl shadow-xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-xl font-semibold mb-4"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Ready to bring your web vision to life? Let's build something
              extraordinary together.
            </motion.p>
            <motion.button
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "mailto:chukwajahsabastinedev@gmail.com";
              }}
            >
              Let's Connect 🚀
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
