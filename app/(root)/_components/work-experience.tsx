"use client";

import { Heading } from "@/components/heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { workExperience } from "@/data/constant";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.03, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" },
};

export const WorkExperience = () => {
  return (
    <SectionWrapper className="">
      <Heading label="Work Experience" />
      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {workExperience.map((item) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            whileHover="hover"
            className="transition-all duration-300"
          >
            <Card className="p-6 border border-gray-100 rounded-xl shadow-sm bg-white">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-5 items-center">
                  <Avatar className="border border-gray-200">
                    <AvatarImage
                      src={item.image}
                      alt={item.title}
                      className="size-12 object-cover"
                    />
                    <AvatarFallback>{item.title[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{item.year}</p>
              </div>

              {item.responsibilities && (
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mt-2">
                  {item.responsibilities.map((task, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {task}
                    </motion.li>
                  ))}
                </ul>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
