import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export const SectionWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={cn("p-5 sm:py-20", className)}>{children}</div>;
};
