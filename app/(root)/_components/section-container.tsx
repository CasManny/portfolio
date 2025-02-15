import { SectionWrapper } from "@/components/section-wrapper";
import { ButtonHeading } from "./button-heading";

interface SectionContainerProps {
  label: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}
export const SectionContainer = ({
  label,
  title,
  description,
  children,
}: SectionContainerProps) => {
  return (
    <SectionWrapper>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="flex-center flex-col space-y-5">
          <ButtonHeading label={label} />
          <h1 className="font-extrabold heading text-center">{title}</h1>
          <p className="text-center text-base sm:text-xl">{description}</p>
        </div>
        {children}
      </div>
    </SectionWrapper>
  );
};
