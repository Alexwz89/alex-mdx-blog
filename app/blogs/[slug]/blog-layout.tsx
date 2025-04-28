// app/blog/[slug]/blog-layout.tsx
import { ReactNode } from "react";
import { Metadata } from "../../lib/mdx";
import Image from "next/image";

interface BlogLayoutProps {
  children: ReactNode;
  frontmatter: Metadata;
}

export default function BlogLayout({ children, frontmatter }: BlogLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <time className="text-gray-500 block mt-2">{frontmatter.publishedAt}</time>
        <p className="text-lg mt-4 italic">{frontmatter.summary}</p>

        {/* 可选的特色图片 */}
        {frontmatter.image && (
          <div className="mt-6 relative w-full aspect-video">
            <Image
              src={frontmatter.image}
              alt={`Cover image for ${frontmatter.title}`}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        )}

        {/* 可选的标签 */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose dark:prose-invert max-w-none">{children}</div>
    </article>
  );
}
