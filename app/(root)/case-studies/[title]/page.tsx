import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/constant";
import { Globe, Rocket } from "lucide-react";
import Link from "next/link";

interface ProjectDetailPageProps {
  params: Promise<{ name: string }>;
}
const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const projectName = (await params).name;
  const project = featuredProjects.find(
    (project) => project.name === projectName
  );
  if (!project) {
    return null;
  }
  return (
    <section>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h5>Web Dev Project</h5>
          <div className="">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
          <div className="">
            <div className="space-x-2">
              <Button asChild className="h-8">
                <Link href={project.website}>
                  <Globe />
                  <span>Website</span>
                </Link>
              </Button>
              <Button asChild className="h-8">
                <Link href={project.githubLink}>
                  <Rocket className="text-white" />
                  <span>Source</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="">
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
