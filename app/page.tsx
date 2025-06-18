import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        Build the best digital experiences
      </h1>
      <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-secondary text-center sm:text-center">
        Moon Design System is an open-source, complete design system. It&apos;s
        built to help product teams across the world build better digital
        experiences.
      </p>
      <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-secondary text-center sm:text-center">
        Quickstart your project as a:
      </p>
      <div className="grid md:grid-cols-2 gap-5 pt-4">
        <Link
          className={buttonVariants({
            variant: "secondary",
            className: "sm:py-16 py-16 px-24 w-full flex flex-col",
          })}
          href={`/docs/quickstart/designer`}
        >
          <span className="md:text-lg font-bold">Designer</span>
          <span className="flex items-center text-secondary md:text-lg pt-2 font-normal">
            Get started with our Figma libraries.
          </span>
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
            className: "sm:py-16 py-16 px-24 w-full flex flex-col",
          })}
          href={`/docs/quickstart/developer`}
        >
          <span className="md:text-lg font-bold">Developer</span>
          <span className="flex items-center text-secondary md:text-lg pt-2 font-normal">
            Find installation guides to start building.
          </span>
        </Link>
      </div>
    </div>
  );
}
