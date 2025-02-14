import AboutMe from "./_components/about";
import { ContactMe } from "./_components/contact-me";
import { Education } from "./_components/eduction";
import { Projects } from "./_components/projects";
import { SectionContainer } from "./_components/section-container";
import { Skills } from "./_components/skills";
import WorkExperience from "./_components/work-experience";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <div className="container">
        <div className="max-w-2xl mx-auto sm:py-28">
          <h1 className="text-7xl">Hi, I'm Sabastine</h1>
          <p>
            Tech Enthusiast turned Software Engineer . I love building things
            and helping people. Very active on Twitter.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-10">
          <AboutMe />
          <Skills />
          <WorkExperience />
          <Education />
          <SectionContainer
            label="My Projects"
            title="Check out my latest work"
            description="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
          >
            <Projects />
          </SectionContainer>
          <ContactMe />
        </div>
      </div>
    </main>
  );
}
