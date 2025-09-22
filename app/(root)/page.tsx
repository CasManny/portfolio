import { Navbar } from "@/components/navbar";
import { AboutMe } from "./_components/about";
import { ContactMe } from "./_components/contact-me";
import { Education } from "./_components/eduction";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { SectionContainer } from "./_components/section-container";
import { WorkExperience } from "./_components/work-experience";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <Navbar />
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <Hero />
          <AboutMe />
          <WorkExperience />
          <SectionContainer
            label="My Projects"
            title="Check out my latest work"
            description="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
          >
            <Projects />
          </SectionContainer>
          <Education />
          <ContactMe />
        </div>
      </div>
    </main>
  );
}
