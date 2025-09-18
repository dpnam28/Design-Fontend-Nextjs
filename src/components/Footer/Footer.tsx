import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div className="text-md font-semibold">&copy; Copyright 2025</div>

      <div className="flex-center gap-2">
        <Image src={"/1.png"} width={25} height={25} alt={"facebook-logo"} />
        <Image src={"/2.png"} width={25} height={25} alt={"instagram-logo"} />
        <Image src={"/3.png"} width={25} height={25} alt={"twitter-logo"} />
        <Image src={"/4.png"} width={25} height={25} alt={"youtube-logo"} />
      </div>
    </div>
  );
};

export default Footer;
