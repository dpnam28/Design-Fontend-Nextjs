import Button from "@/components/Button/Button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DesignX - Contact",
  description: "This is contact page",
};

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1>Let&apos;s Keep in Touch</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
        <div className="w-full h-100 relative">
          <Image
            src={"/contact.png"}
            fill={true}
            alt={"contact"}
            className="object-contain moving"
          />
        </div>

        <form action="" className="w-1/2 flex flex-col gap-5">
          <input
            type="text"
            className="py-2 px-4 w-100 text-xl border border-black dark:border-gray-500 rounded-sm placeholder:text-base"
            placeholder="Name"
          />
          <input
            type="email"
            className="py-2 px-4 w-100 text-xl border border-black dark:border-gray-500 rounded-sm placeholder:text-base"
            placeholder="Email"
          />
          <textarea
            className="p-4 w-100 h-50 border border-black rounded-sm dark:border-gray-500"
            placeholder="Message"
          ></textarea>
          <Button name="Send" link="/" className="btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default page;
