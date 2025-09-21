"use client";

import Button from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
const Page = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!username || !email || !password)
      return alert("Please fill all the fields");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
      });
      if (res.status === 201) router.push("/dashboard/login?success=true");
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };
  return (
    <div className="flex-center">
      {err && (
        <p className="text-red-500 mx-auto">Error occured while registering</p>
      )}
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" className="auth-input" placeholder="Username" />
        <input type="email" className="auth-input" placeholder="Email" />
        <input type="password" className="auth-input" placeholder="Password" />
        <Button name="Register" className="btn-primary w-full py-3 text-lg" />

        <Link href="/dashboard/login" className="mx-auto">
          <span className="text-login">Log in</span> with an existing account
        </Link>
      </form>
    </div>
  );
};

export default Page;
