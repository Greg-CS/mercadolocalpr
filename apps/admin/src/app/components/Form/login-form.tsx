"use client";

// import { Database } from "../../../../database.types";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@supabase/auth-helpers-nextjs";
// import { ResetPassModal } from "../Modals/ResetPassModal";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
interface Props {
  user: User | null;
}

export function LoginForm ({ user }: Props): JSX.Element {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <form
      className="grid items-center justify-center gap-4 bg-white p-4 border-2 rounded-md mx-auto"
      action="/auth/login"
      aria-label="login-form"
      method="post"
    >
      <h1 className="text-center text-2xl font-extrabold text-black">WELCOME - Admin</h1>

      {/* Input fields: email & password  */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border-r border-gray-300 bg-gray-50 text-gray-500 text-sm">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            className=" block w-full px-3 py-2  b rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            name="email"
            type="email"
            value={email}
            placeholder="you@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            id="email"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border-r border-gray-300 bg-gray-50 text-gray-500 text-sm">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            className="input input-bordered w-full max-w-xs"
            name="password"
            type="password"
            value={password}
            placeholder="••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            id="password"
          />
        </div>
      </div>

      {/* Remember ME and Forgot Password */}
      {/* <div className="flex items-center justify-between gap-1">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-xs text-gray-900 "
          >
            Remember me
          </label>
        </div>
        <div className="text-xs">
          <button
            formAction={forgotPassword}
            className="font-medium text-green-600 hover:text-green-500"
          >
            Forgot your password?
          </button>
        </div>
      </div> */}

      {/* Sign in & sign up button */}
      <div className="flex flex-col gap-2">
        <button className="bg-green-700 hover:bg-green-900 text-white rounded-md px-4 py-2  text-foreground">
          Login
        </button>
      </div>
      {/* {isModalActive && <ResetPassModal setPassword={setPassword} />} */}
      {/* <ToastContainer /> */}
    </form>
  );
};
