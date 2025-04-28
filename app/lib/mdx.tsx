import path from "path";
import fs from "fs";
import matter from "gray-matter";

//获取所有的博客文章，并根据publishedAt字段进行排序，返回值为{Metadata，slug，content}的数组

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string[];
};

export type BlogPostType = {
  frontmatter: Metadata;
  slug: string;
  content: string;
};

//根据slug 名获取单个mdx文件
export async function getMdxBySlug(slug: string) {
  const blog_path = path.join(process.cwd(), "_blogs", "posts");
  const file_path = path.join(blog_path, `${slug}.mdx`);
  const file_content = fs.readFileSync(file_path, "utf-8");
  const { data, content } = matter(file_content);

  return {
    slug,
    frontmatter: data as Metadata,
    content,
  };
}

// 获取所有 MDX 文件的 slug
export async function getAllSlugs() {
  const files = fs.readdirSync(path.join(process.cwd(), "_blogs", "posts"));
  return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(".mdx", ""));
}

//获取全部mdx文件并根据publishedAt字段进行排序
export async function getBlogPosts() {
  //指定blog目录
  const slugs = await getAllSlugs();
  const blogPosts = await Promise.all(slugs.map(getMdxBySlug));

  //根据publishedAt字段对博客进行排序
  return blogPosts.sort((a, b) => {
    if (a.frontmatter.publishedAt < b.frontmatter.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}
