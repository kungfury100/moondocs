import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Figma, HeartIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            Moon Design System, {new Date().getFullYear()}
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://www.figma.com/design/S3q1SkVngbwHuwpxHKCsgtJj/MDS-Components?node-id=69257-3604&t=R9Bvf8yxWLzlbXZL-0"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Figma className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Figma library
      </Link>
    </>
  );
}
