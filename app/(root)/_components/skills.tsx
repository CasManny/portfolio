import { Heading } from "@/components/heading";
import { techStack } from "@/data";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SectionWrapper } from "@/components/section-wrapper";

export const Skills = () => {
  return (
    <SectionWrapper>
      <Heading label="Tech Stack" />
      <div className="flex justify-between flex-wrap gap-5">
        {techStack.map(({ purpose, name, Icon }) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Icon className="size-10" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{purpose}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </SectionWrapper>
  );
};
