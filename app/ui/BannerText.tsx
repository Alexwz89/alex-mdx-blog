"use client";

import { usePathname } from "next/navigation";

export default function BannerText() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/blogs") {
    return (
      <div className="border-y-2 flex justify-center items-center py-4 my-6">
        <h1 className="text-[clamp(2rem,15vw,15rem)] font-bold uppercase leading-none bg-gradient-to-r from-primary/70 to-primary text-transparent bg-clip-text">
          The Blog
        </h1>
      </div>
    );
  } else if (pathname === "/projects") {
    return (
      <div className="border-y-2 flex justify-center items-center py-4 my-6">
        <h1 className="text-[clamp(2rem,15vw,15rem)] font-bold uppercase leading-none ">Projects</h1>
      </div>
    );
  } else if (pathname === "/about") {
    return (
      <div className="border-y-2 flex justify-center items-center py-4 my-6">
        <h1 className="text-[clamp(2rem,15vw,15rem)] font-bold uppercase leading-none">Alex Wang</h1>
      </div>
    );
  }
}
