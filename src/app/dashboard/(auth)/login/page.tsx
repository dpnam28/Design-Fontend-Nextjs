"use client";

import { signIn, useSession } from "next-auth/react";
import Button from "@/components/Button/Button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Page = () => {
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() => {
    if (session.status === "authenticated") router.push("/dashboard");
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return alert("Please fill all the fields");
    signIn("credentials", { email, password });
  };
  return (
    <div className="flex-center">
      <div className="flex flex-col gap-4">
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="email" className="auth-input" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input
            type="password"
            value={password}
            className="auth-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button name="Login" className="btn-primary w-full py-3 text-lg" />
        </form>
        <button
          onClick={() => signIn("google")}
          className="border border-gray-700 w-50 mx-auto text-lg cursor-pointer"
        >
          Login with Google
        </button>
        <Link href={"/dashboard/register"} className="mx-auto">
          <span className="text-login">Sign up here</span>
        </Link>
      </div>
    </div>
  );
};

export default Page;
