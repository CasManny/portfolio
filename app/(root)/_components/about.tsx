import { Heading } from "@/components/heading";
import { SectionWrapper } from "@/components/section-wrapper";
import React from "react";

const AboutMe = () => {
  return (
    <SectionWrapper className="p-10">
      <Heading label="About" />
      <p className="text-sm">
        I’m a passionate pre-final year undergrad with a deep love for coding
        and technology. My journey has led me to develop a strong foundation in
        Web development, DevOps, and the emerging world of Web3. I thrive on
        building innovative products and sharing my insights through blogging.
        Always eager to expand my skills and tackle new challenges, I’m actively
        seeking lucrative opportunities to leverage my tech expertise and drive
        impactful projects. Whether it’s through creating seamless web
        experiences or exploring the future of decentralized applications, I’m
        excited to contribute to the tech landscape and grow alongside it.
      </p>
    </SectionWrapper>
  );
};

export default AboutMe;
