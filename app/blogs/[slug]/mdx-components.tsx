import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import MotionBox from "@/components/blog-components/MotionBox";

export const mdxComponents: MDXComponents = {
  // 自定义组件
  MotionBox,

  // 标题
  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 border-b-2 border-primary pb-2">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-6 mb-3 border-b-[1px] border-gray-400 pb-2">{children}</h2>
  ),
  h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,

  // 段落和列表
  p: ({ children }) => <p className="my-4 leading-7">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-6 my-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 my-4">{children}</ol>,

  // 代码块和行内代码
  code: ({ children, className }) => {
    const isInline = !className;
    return isInline ? (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">{children}</code>
    ) : (
      <code className={className}>{children}</code>
    );
  },
  pre: ({ children, className }) => (
    <pre className={cn("p-4 rounded-lg overflow-x-auto my-4", className)}>{children}</pre>
  ),

  // 表格
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => <th className="border px-4 py-2 bg-gray-100 dark:bg-gray-800">{children}</th>,
  td: ({ children }) => <td className="border px-4 py-2">{children}</td>,

  // 其他元素
  a: ({ children, href }) => (
    <a href={href} className="text-blue-600 hover:underline">
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
  ),
  hr: () => <hr className="my-8 border-t border-gray-300" />,

  // 任务列表 (GitHub Flavored Markdown)
  li: ({ children, className, ...props }) => {
    if (className?.includes("task-list-item")) {
      return (
        <li className="flex items-start gap-2" {...props}>
          {children}
        </li>
      );
    }
    return <li {...props}>{children}</li>;
  },
};
