"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { education } from "@/data/constant";
import Link from "next/link";
import { motion } from "framer-motion";

export const Education = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <SectionWrapper className="py-16 rounded-3xl mb-10">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎓 My Education Journey
        </motion.h2>

        {education.map((item, index) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 15px 40px rgba(255,255,255,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={item.link || "#"}
              target="_blank"
              className="block rounded-xl p-5 border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <motion.div
                    className="flex-shrink-0 rounded-full border-2 border-gray-700 overflow-hidden"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Avatar className="size-14">
                      <AvatarImage
                        src={item.image}
                        alt={item.title}
                        className="object-contain"
                      />
                      <AvatarFallback>EDU</AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
                <motion.span
                  className="text-xs sm:text-sm font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.year}
                </motion.span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
