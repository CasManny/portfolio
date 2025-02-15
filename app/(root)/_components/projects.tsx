import { Github } from "@/components/icons/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredProjects } from "@/data/constant";
import { cropDescription } from "@/lib/utils";
import { Globe } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
      {featuredProjects.map((item) => (
        <Card key={item.title} className="bg-white p-5">
          <h3 className="font-semibold mb-5">{item.name}</h3>
          <p className="text-xs sm:text-sm mb-5">{cropDescription(item.details)}</p>
          <div className="flex flex-wrap gap-1">
            {item.stack.map((value, index) => (
              <Badge className="text-xs bg-slate-400" key={index}>
                {value}
              </Badge>
            ))}
          </div>
          <div className="mt-5 flex justify-between">
            <div className="space-x-2">
              <Button asChild className="h-8">
                <Link href={item.website}>
                  <Globe />
                  <span>Website</span>
                </Link>
              </Button>
              <Button asChild className="h-8" variant={"outline"}>
                <Link href={item.githubLink}>
                  <Github />
                  <span>Source</span>
                </Link>
              </Button>
            </div>
            {/* <Link
              href={`/case-studies/${item.title}`}
              className="text-xs flex items-center text-blue-500/80 underline"
            >
              See Detail project <ArrowRight className="ml-2 size-4" />
            </Link> */}
          </div>
        </Card>
      ))}
    </div>
  );
};
