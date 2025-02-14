import { SectionWrapper } from "@/components/section-wrapper";
import Link from "next/link";
import { ButtonHeading } from "./button-heading";

export const ContactMe = () => {
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto flex-center flex-col">
        <ButtonHeading label="Contact" />
        <div className="max-w-lg flex-center flex-col">
          <h1 className="text-5xl my-5 font-extrabold">Get in Touch</h1>
          <p className="text-balance text-lg text-center">
            Want to chat? Just shoot me a dm with a
            <Link
              href={"https://x.com/ChukwuAjahsaba"}
              className="inline-flex mx-2 text-blue-600 underline"
            >
              direct question on X
            </Link>
            and I'll respond whenever I can.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
