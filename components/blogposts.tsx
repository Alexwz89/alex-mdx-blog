import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

type BlogPost = Metadata & {
  slug: string;
};

export function getBlogPosts(): BlogPost[] {
  const blog_path = path.join(process.cwd(), "_blogs", "posts");
  const mdx_files = fs.readdirSync(blog_path).filter((file) => path.extname(file) === ".mdx");
  console.log(mdx_files);

  const blogPosts: BlogPost[] = mdx_files.map((file) => {
    const slug = file.replace(".mdx", "");
    const file_path = path.join(blog_path, file);
    const file_content = fs.readFileSync(file_path, "utf-8");

    // 使用类型断言确保从 matter 获取的数据符合 Metadata 类型
    const { data } = matter(file_content);
    const metadata = data as Metadata;

    return {
      ...metadata,
      slug,
    };
  });

  return blogPosts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    }
    return -1;
  });
}
