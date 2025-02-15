import { Heading } from "@/components/heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { workExperience } from "@/data/constant";

export const WorkExperience = () => {
  return (
    <SectionWrapper>
      <Heading label="Work Experience" />
      <div className="flex flex-col gap-5">
        {workExperience.map((item) => (
          <div key={item.title}>
            <Card className="p-5 hover:scale-110 transition-all duration-300">
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <Avatar>
                    <AvatarImage
                      src={item.image}
                      alt={"user"}
                      className="size-11"
                    />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <h3 className="text-sm sm:text-md font-semibold">{item.title}</h3>
                    <p className="text-xs sm:text-sm">{item.role}</p>
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
