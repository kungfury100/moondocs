import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function PlaygroundPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'contents/playground', `${params.slug}.mdx`);
  let source = '';
  try {
    source = fs.readFileSync(filePath, 'utf8');
  } catch {
    return <div className="prose mx-auto">Not found.</div>;
  }
  const { content } = await compileMDX({ source });
  return <div className="prose mx-auto">{content}</div>;
}
