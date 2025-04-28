import Link from "next/link";
import React from "react";
import { ModeToggle } from "../components/ModeToggle";

function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <div>
        <Link href="/">
          <h1 className="text-xl font-bold">Alex Wang</h1>
        </Link>
      </div>
      <nav className="flex items-center text-lg gap-4">
        <Link href="/blogs">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <ModeToggle />
      </nav>
    </header>
  );
}

export default Header;
