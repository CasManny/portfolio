import { ContactMe } from "../_components/contact-me";
import { Projects } from "../_components/projects";

const CaseStudies = () => {
  return (
    <section className="w-full sm:pt-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="">
            <h1 className="text-5xl font-extrabold text-center mb-5">Recent Case Studies</h1>
            <p className="text-xl text-balance text-center">
              Dive into my recent success stories and discover how I've helped
              clients overcome challenges, innovate, and achieve their goals.
            </p>
          </div>
          <div className="">
            <Projects />
          </div>
          <ContactMe />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
