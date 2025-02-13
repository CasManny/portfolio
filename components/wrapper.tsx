import React, { PropsWithChildren } from "react";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] -z-10"
        )}
      />
      {children}
    </div>
  );
};
