"use client";

import React from "react";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

type PostType = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

const Page = () => {
  const session = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session.status, router]);

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSWR<PostType[]>(`/api/posts`, fetcher);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(`/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          image,
        }),
      });
      setTitle("");
      setImage("");
      setDescription("");
      mutate(`/api/posts`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate(`/api/posts`);
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
          <div className="w-full flex flex-col items-start gap-5">
            {isLoading
              ? "loading"
              : data?.map((post) => {
                  return (
                    <div
                      className="flex items-center gap-3 justify-between w-full"
                      key={post._id}
                    >
                      <div className="">
                        <Image
                          src={post.image}
                          alt=""
                          width={130}
                          height={60}
                        />
                      </div>
                      <h1>{post.title}</h1>
                      <div
                        className="text-red-700 cursor-pointer text-xl"
                        onClick={() => handleDelete(post._id)}
                      >
                        X
                      </div>
                    </div>
                  );
                })}
          </div>

          <form
            action=""
            className="w-1/2 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="py-2 px-4 w-100 text-xl border border-black dark:border-gray-500 rounded-sm placeholder:text-base"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="py-2 px-4 w-100 text-xl border border-black dark:border-gray-500 rounded-sm placeholder:text-base"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <textarea
              className="p-4 w-100 h-50 border border-black rounded-sm dark:border-gray-500"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button className="btn-primary w-30">Post</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Page;
