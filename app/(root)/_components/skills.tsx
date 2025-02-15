import { Heading } from "@/components/heading";
import { SectionWrapper } from "@/components/section-wrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { techStack } from "@/data";

export const Skills = () => {
  return (
    <SectionWrapper>
      <Heading label="Tech Stack" />
      <div className="flex flex-wrap gap-5">
        {techStack.map(({ purpose, name, Icon }) => (
          <TooltipProvider key={name}>
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
