import { Button } from "@/components/ui/button";

interface ButtonHeadingProps {
  label: string;
}
export const ButtonHeading = ({ label }: ButtonHeadingProps) => {
  return <Button className="h-8">{label}</Button>;
};
