"use client";

import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
const Page = () => {
  const session = useSession();

  console.log(session);

  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());
  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`,
    fetcher
  );

  return <div>Page</div>;
};

export default Page;
