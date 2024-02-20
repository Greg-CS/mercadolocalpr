"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

interface Props {
  signIn: (formData: FormData) => void;
  signUp: (formData: FormData) => void;
  user: any;
}

export const LoginForm = ({ signIn, signUp, user }: Props) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("login");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (
    e: React.KeyboardEvent,
    nextRef: React.RefObject<HTMLInputElement> | null
  ) => {
    if (e.key === "Enter" && nextRef && nextRef.current) {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/account");
    }
  }, [user]);

  return (
    <div className="items-center card-body">
      <h1 className="text-2xl font-extrabold text-center card-title text-">
        Acceder
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <GoogleLoginButton
            onClick={() => console.log("Sign Up with Google")}
          />
          <AppleLoginButton onClick={() => console.log("Sign Up with Apple")} />
        </div>
      </div>
      <div className="divider"> ó </div>
      {/* Tabs for Login and Register forms */}
      <ul className="w-full tabs tabs-bordered">
        <li
          className={`tab ${activeTab === "login" ? "tab-active " : ""}`}
          onClick={() => setActiveTab("login")}
        >
          <a>Conectar</a>
        </li>
        <li
          className={`tab ${activeTab === "register" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          <a>Registrar</a>
        </li>
      </ul>
      {/* Content for Login and Register forms */}

      {/* Login Form */}
      {activeTab === "login" && (
        <div id="login">
          <form
            className="flex flex-col justify-center flex-1 w-full gap-4 p-4 bg-white animate-in text-foreground"
            action={signIn}
            aria-label="login-form"
          >
            {/* Input fields: email & password  */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-green-500 focus-within:border-green-500 focus-withihn:shadow-inner-lg">
                <span className="inline-flex items-center px-3 text-sm text-gray-500 border-r rounded-l-md">
                  <svg
                    className="w-5 h-5"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <input
                  name="email"
                  placeholder="juandelpueblo@ejemplo.com"
                  required
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full px-3 py-2 placeholder-gray-400 rounded-md focus:outline-none sm:text-sm "
                  ref={emailRef}
                  onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-green-500 focus-within:border-green-500 ">
                <span className="inline-flex items-center px-3 text-sm text-gray-500 border-r border-gray-300 rounded-l-md ">
                  <svg
                    className="w-5 h-5"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="block w-full px-3 py-2 placeholder-gray-400 rounded-md focus:outline-none sm:text-sm "
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  ref={passwordRef}
                  onKeyDown={(e) => handleKeyDown(e, null)}
                />
              </div>
            </div>

            {/* Remember ME and Forgot Password */}
            <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-green-600 border-gray-300 rounded "
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-xs text-gray-900 "
                >
                  Recuerdame
                </label>
              </div>
              <div className="text-xs">
                <Link
                  href="/forgot-password"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  ¿Olvidaste tu usuario?
                </Link>
              </div>
            </div>

            {/* Sign in & sign up button */}
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-900 text-foreground ">
                Conéctate
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Register Form */}
      {activeTab === "register" && (
        <div id="register">
          <form
            className="flex flex-col justify-center flex-1 w-full gap-4 p-4 bg-white animate-in text-foreground"
            action={signUp}
            aria-label="login-form"
          >
            {/* Input fields: email & password  */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-green-500 focus-within:border-green-500 focus-withihn:shadow-inner-lg">
                <span className="inline-flex items-center px-3 text-sm text-gray-500 border-r rounded-l-md">
                  <svg
                    className="w-5 h-5"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <input
                  name="email"
                  placeholder="juandelpueblo@ejemplo.com"
                  required
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full px-3 py-2 placeholder-gray-400 rounded-md focus:outline-none sm:text-sm "
                  ref={emailRef}
                  onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                />
              </div>

              <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-green-500 focus-within:border-green-500 ">
                <span className="inline-flex items-center px-3 text-sm text-gray-500 border-r border-gray-300 rounded-l-md ">
                  <svg
                    className="w-5 h-5"
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="block w-full px-3 py-2 placeholder-gray-400 rounded-md focus:outline-none sm:text-sm "
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  ref={passwordRef}
                  onKeyDown={(e) => handleKeyDown(e, null)}
                />
              </div>
            </div>

            {/* Remember ME and Forgot Password */}
            <div className="flex flex-col items-center justify-end gap-1 right md:flex-row">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-green-600 border-gray-300 rounded "
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-xs text-gray-900 "
                >
                  Recuerdame
                </label>
              </div>
            </div>

            {/* Sign in & sign up button */}
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-900 text-foreground ">
                Registrate
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
