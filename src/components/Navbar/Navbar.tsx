import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

const links = [
  { id: 5, name: "Porfolio", path: "/porfolio" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 2, name: "About", path: "/about" },
  { id: 6, name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full py-4">
      <Link href={"/"}>
        <h1>DesignX</h1>
      </Link>

      <div className="flex gap-2 lg:gap-5 lg:text-lg max-sm:hidden text-sm font-semibold items-center">
        {links.map((link) => (
          <Link key={link.id} href={link.path}>
            {link.name}
          </Link>
        ))}

        <Button name="Login" link="/dashboard/login" className="btn-primary" />
      </div>
    </div>
  );
};

export default Navbar;
