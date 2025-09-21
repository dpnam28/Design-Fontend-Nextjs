"use client";

import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Button from "../Button/Button";
const links = [
  { id: 5, name: "Portfolio", path: "/portfolio" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 2, name: "About", path: "/about" },
  { id: 6, name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const session = useSession();
  return (
    <div className="flex justify-between items-center w-full py-4">
      <Link href={"/"}>
        <h1>DesignX</h1>
      </Link>

      <div className="flex items-baseline gap-3">
        <DarkModeToggle />
        <div className="flex gap-2 lg:gap-5 lg:text-lg max-sm:hidden text-sm font-semibold items-center">
          {links.map((link) => (
            <Link key={link.id} href={link.path}>
              {link.name}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <Button
              name="Sign Out"
              onClick={() => signOut()}
              className="btn-primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
