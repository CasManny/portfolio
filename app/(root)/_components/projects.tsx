"use client";

import { Github } from "@/components/icons/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredProjects } from "@/data/constant";
import { cropDescription } from "@/lib/utils";
import { Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Projects = () => {
  const containerVariants = {
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
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      id="projects"
    >
      {featuredProjects.map((item, index) => (
        <motion.div
          key={item.title}
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            rotateY: 3,
            boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-white to-gray-50 p-5 h-full flex flex-col justify-between rounded-xl border border-gray-200 shadow-md">
            {/* Project Name */}
            <motion.h3
              className="font-semibold mb-3 text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.name}
            </motion.h3>

            {/* Project Description */}
            <motion.p
              className="text-xs sm:text-sm mb-4 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {cropDescription(item.details)}
            </motion.p>

            {/* Stack Badges */}
            <motion.div
              className="flex flex-wrap gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.15 }}
            >
              {item.stack.map((value, i) => (
                <Badge
                  className="text-xs bg-slate-400 hover:bg-slate-500 transition-colors"
                  key={i}
                >
                  {value}
                </Badge>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="mt-5 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="space-x-2 flex">
                <Button
                  asChild
                  className="h-8 gap-1 bg-gray-900 text-white hover:bg-black transition-colors"
                >
                  <Link href={item.website} target="_blank">
                    <Globe className="size-4" />
                    <span>Website</span>
                  </Link>
                </Button>
                <Button asChild className="h-8 gap-1" variant={"outline"}>
                  <Link href={item.githubLink} target="_blank">
                    <Github className="size-4" />
                    <span>Source</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
