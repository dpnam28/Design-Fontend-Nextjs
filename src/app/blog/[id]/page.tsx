import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  if (!res.ok) return notFound();

  return res.json();
};

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const data = await getData(id);

  return (
    <div className="flex flex-col">
      <div className="flex gap-10 items-center">
        <div className="flex flex-col  gap-12 w-1/2">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>

        <div className="w-1/2 h-80 relative ">
          <Image
            src={data.image}
            alt="image"
            fill={true}
            className="object-center object-cover"
          />
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default page;
