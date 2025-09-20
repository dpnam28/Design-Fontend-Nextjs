"use client";

import React from "react";
import useSWR from "swr";
const Page = () => {
  const fetcher = (...args: [RequestInfo, RequestInit?]) =>
    fetch(...args).then((res) => res.json());
  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`,
    fetcher
  );

  console.log(data);
  return <div>Page</div>;
};

export default Page;
