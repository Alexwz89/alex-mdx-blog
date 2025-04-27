import React from "react";
import { BlogPostType, getBlogPosts } from "../lib/blogposts";
import Link from "next/link";

function BlogList() {
  const blogPosts: BlogPostType[] = getBlogPosts();
  return (
    <div>
      {blogPosts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blogs/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.summary}</p>
          <p>{post.publishedAt}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
