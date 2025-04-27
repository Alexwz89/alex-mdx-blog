import path from "path";
import fs from "fs";
import matter from "gray-matter";

//获取所有的博客文章，并根据publishedAt字段进行排序，返回值为{Metadata，slug，content}的数组

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string[];
};

export type BlogPostType = Metadata & { slug: string; content: string };

export function getBlogPosts(): BlogPostType[] {
  //指定blog目录
  const blog_path = path.join(process.cwd(), "_blogs", "posts");
  //读取blog目录下的所有mdx文件
  const mdx_files = fs.readdirSync(blog_path).filter((file) => path.extname(file) === ".mdx");
  const blogPosts: BlogPostType[] = mdx_files.map((file) => {
    const slug = file.replace(".mdx", "");
    const file_path = path.join(blog_path, file);
    const file_content = fs.readFileSync(file_path, "utf-8");

    const { data, content } = matter(file_content);

    return {
      slug, //文件名
      ...(data as Metadata), //文件元数据
      content, //正文
    };
  });
  //根据publishedAt字段对博客进行排序
  return blogPosts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}
