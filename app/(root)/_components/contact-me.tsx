import { SectionWrapper } from "@/components/section-wrapper";
import Link from "next/link";
import { ButtonHeading } from "./button-heading";

export const ContactMe = () => {
  return (
    <SectionWrapper className="py-32">
      <div className="max-w-5xl mx-auto flex-center flex-col sm:mb-24">
        <ButtonHeading label="Contact" />
        <div className="max-w-lg flex-center flex-col">
          <h1 className="heading my-5 font-extrabold">Get in Touch</h1>
          <p className="text-balance text-lg text-center">
            Want to chat? Just shoot me a dm with a
            <Link
              href={"https://x.com/ChukwuAjahsaba"}
              className="inline-flex mx-2 text-blue-600 underline"
            >
              direct question on X
            </Link>
            and I'll respond Immediately.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
