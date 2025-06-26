import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

type PlaygroundPageProps = {
  params: {
    slug: string;
  };
};

export default async function PlaygroundPage({ params }: PlaygroundPageProps) {
  const filePath = path.join(
    process.cwd(),
    "contents/playground",
    `${params.slug}.mdx`,
  );

  let source = "";
  try {
    source = fs.readFileSync(filePath, "utf8");
  } catch {
    notFound(); // ← Next.js built-in 404 handler
  }

  const { content } = await compileMDX({ source });

  return <div className="prose mx-auto">{content}</div>;
}
