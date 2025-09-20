import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DesignX - Blog",
  description: "This is a blog page",
};

type BlogType = {
  userId: number;
  _id: string;
  title: string;
  description: string;
  image: string;
};
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item: BlogType) => (
        <Link href={`blog/${item._id}`} key={item._id}>
          <div className="flex gap-10 mt-15">
            <div className="order-1 w-full">
              <div className="flex flex-col gap-5">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>

            <div className="w-100 lg:h-50 h-40 relative max-sm:hidden">
              <Image src={item.image} alt="image" fill={true} className="" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
