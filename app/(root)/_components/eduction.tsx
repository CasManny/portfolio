import { Heading } from "@/components/heading";
import { SectionWrapper } from "@/components/section-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { education } from "@/data/constant";
import Link from "next/link";

export const Education = () => {
  return (
    <SectionWrapper>
      <Heading label="Education" />
      <div className="flex flex-col gap-5">
        {education.map((item) => (
          <Link href={item.link} key={item.title}>
            <Card className="p-5">
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <Avatar>
                    <AvatarImage
                      src={item.image}
                      alt={item.title}
                      className="size-11"
                    />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div className="">
                    <h3 className="text-sm sm:text-md font-semibold">{item.title}</h3>
                    <p className="text-xs sm:text-sm ">{item.description}</p>
                  </div>
                </div>
                <p className="">{item.year}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};
