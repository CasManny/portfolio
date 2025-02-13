import { cn } from "@/lib/utils";

interface Headingprops {
  className?: string;
  label: string;
}
export const Heading = ({ className, label }: Headingprops) => {
  return <h1 className={cn(className, "font-semibold text-2xl mb-5")}>{label}</h1>;
};
