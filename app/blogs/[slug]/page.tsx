import { getMdxBySlug } from "@/app/lib/mdx";
import BlogLayout from "./blog-layout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdx-components";
import rehypePrismPlus from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter, content } = await getMdxBySlug(slug);

  return (
    <BlogLayout frontmatter={frontmatter}>
      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]],
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </BlogLayout>
  );
}
