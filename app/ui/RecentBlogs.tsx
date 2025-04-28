import React from "react";
import { BlogPostType, getBlogPosts } from "../lib/blogposts";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

function BlogCard({
  blog,
  size = "default",
  layout = "row",
}: {
  blog: BlogPostType;
  size?: "default" | "large";
  layout?: "row" | "col";
}) {
  const img_src = blog.image ? blog.image : "/images/webdevelopment.jpg";
  return (
    <div
      className={clsx("border-2 rounded-lg", {
        "md:grid md:grid-cols-2 md:gap-6": layout === "row",
        "md:grid md:row-span-2 md:gap-6": layout === "col" && size === "large",
        "md:grid md:col-span-2 md:gap-6": layout === "row" && size === "large",
      })}
    >
      <div
        className={clsx("relative w-full overflow-hidden aspect-[2.4/1]", {
          "md:h-full": layout === "row",
          "md:aspect-2/1": layout === "col" && size === "large",
          "md:aspect-8/5": layout === "row" && size === "default",
          "md:aspect-3/1": layout === "row" && size === "large",
        })}
      >
        <Image src={img_src} alt={blog.title} fill style={{ objectFit: "cover" }} className="rounded-sm" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="p-2">
          <p className="text-sm font-bold text-[#6941C6]">{blog.publishedAt}</p>
          <h3
            className={clsx("font-bold leading-tight py-3 text-lg", {
              "md:text-2xl": size === "large",
            })}
          >
            {blog.title}
          </h3>
          <p className="text-base text-muted-foreground line-clamp-3">{blog.summary}</p>
        </div>
        <Link
          href={`/blogs/${blog.slug}`}
          className={clsx("self-end text-primary-foreground bg-primary px-4 py-2 m-2 rounded-md text-xs", {
            "md:text-sm": size === "large",
          })}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

const Recent4Blogs = () => {
  const recent4Blogs = getBlogPosts().slice(0, 4);
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Recent Blogs</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <BlogCard blog={recent4Blogs[0]} size="large" layout="col" />
        <BlogCard blog={recent4Blogs[1]} />
        <BlogCard blog={recent4Blogs[2]} />
        <BlogCard blog={recent4Blogs[3]} size="large" layout="row" />
      </div>
    </section>
  );
};

export const RestofBlogs = () => {
  if (getBlogPosts().length <= 4) {
    return null;
  }
  const restofBlogs = getBlogPosts().slice(4);
  return (
    <section className="md: mt-10">
      <h2 className="text-2xl font-bold mb-4">All blog posts</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {restofBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} size="default" layout="col" />
        ))}
      </div>
    </section>
  );
};
export default Recent4Blogs;
