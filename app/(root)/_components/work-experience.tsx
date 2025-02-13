import { Heading } from "@/components/heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card } from "@/components/ui/card";
import { workExperience } from "@/data/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkExperience = () => {
  return (
    <SectionWrapper>
      <Heading label="Work Experience" />
      <div className="flex flex-col gap-5">
        {workExperience.map((item) => (
          <div key={item.title}>
            <Card className="p-5 hover:scale-110 transition-all duration-300">
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="">
                    <h3 className="text-md font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
                <p className="">{item.year}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WorkExperience;
