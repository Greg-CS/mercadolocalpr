"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [activeTab, setActiveTab] = useState("login");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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
      <h1 className="text-2xl font-extrabold text-center card-title ">
        Acceder
      </h1>
      <div className="flex flex-col gap-4 md:flex-row ">
        <div className="flex flex-col flex-1 gap-4 md:justify-center">
          <GoogleLoginButton
            className="truncate btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => console.log("Sign Up with Google")}
          />
          <AppleLoginButton
            className="truncate btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => console.log("Sign Up with Apple")}
          />
        </div>
        <div className="w-0.5 bg-gray-500 mx-2 hidden md:block md:text-opacity-0"></div>
        <div className="divider md:hidden"> ó </div>
        <div className="flex-1">
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
                    <span className="inline-flex items-center px-1 text-sm text-gray-500 border-r md:px-2 rounded-l-md lg:text-lg">
                      <svg
                        className="w-3 h-3 md:w-5 md:h-5"
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
                      className="w-full py-2 pl-1 text-xs placeholder-gray-400 rounded-md md:pl-2 focus:outline-none lg:text-sm "
                      ref={emailRef}
                      onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                    />
                  </div>

                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-green-500 focus-within:border-green-500">
                    <span className="inline-flex items-center px-1 text-sm text-gray-500 border-r md:px-2 rounded-l-md">
                      <svg
                        className="w-3 h-3 md:w-5 md:h-5"
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
                      className="w-full py-2 pl-1 placeholder-gray-400 rounded-md text-xd md:pl-2 focus:outline-none lg:text-sm"
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                      ref={passwordRef}
                      onKeyDown={(e) => handleKeyDown(e, formRef)}
                    />
                    <button
                      className="inset-y-0 right-0 px-1 text-green-500 rounded-r outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      {/* Conditional rendering for the eye icon */}
                      {isPasswordVisible ? (
                        // Icon for visible password
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.09756 8.00012C6.09756 10.1335 7.8439 11.8692 10 11.8692C12.1463 11.8692 13.8927 10.1335 13.8927 8.00012C13.8927 5.85709 12.1463 4.12133 10 4.12133C7.8439 4.12133 6.09756 5.85709 6.09756 8.00012ZM15.7366 2.04618C17.4439 3.36497 18.8976 5.29467 19.9415 7.70921C20.0195 7.89346 20.0195 8.10679 19.9415 8.28133C17.8537 13.1104 14.1366 16.0001 10 16.0001H9.99024C5.86341 16.0001 2.14634 13.1104 0.0585366 8.28133C-0.0195122 8.10679 -0.0195122 7.89346 0.0585366 7.70921C2.14634 2.88012 5.86341 0.00012207 9.99024 0.00012207H10C12.0683 0.00012207 14.0293 0.717698 15.7366 2.04618ZM10.0012 10.4125C11.3378 10.4125 12.4304 9.32647 12.4304 7.99799C12.4304 6.65981 11.3378 5.57375 10.0012 5.57375C9.8841 5.57375 9.76702 5.58344 9.65971 5.60284C9.62068 6.6695 8.74263 7.52284 7.65971 7.52284H7.61093C7.58166 7.67799 7.56215 7.83314 7.56215 7.99799C7.56215 9.32647 8.65483 10.4125 10.0012 10.4125Z"
                            fill="#404040"
                          />
                        </svg>
                      ) : (
                        // Icon for hidden password
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.80327 12.2527C8.42774 12.676 9.18882 12.932 9.99868 12.932C12.1453 12.932 13.8919 11.1697 13.8919 9.00381C13.8919 8.18667 13.6382 7.41876 13.2186 6.78867L12.1551 7.86178C12.3307 8.19652 12.4283 8.59032 12.4283 9.00381C12.4283 10.3526 11.3354 11.4552 9.99868 11.4552C9.58887 11.4552 9.19858 11.3568 8.86683 11.1796L7.80327 12.2527ZM16.4288 3.54964C17.8436 4.84919 19.0438 6.60161 19.9415 8.70846C20.0195 8.89552 20.0195 9.11211 19.9415 9.28932C17.8534 14.1922 14.1358 17.126 9.99868 17.126H9.98893C8.10575 17.126 6.30063 16.5058 4.71018 15.3736L2.81725 17.2835C2.67089 17.4312 2.4855 17.5001 2.30011 17.5001C2.11472 17.5001 1.91957 17.4312 1.78297 17.2835C1.53903 17.0374 1.5 16.6436 1.69515 16.3581L1.72442 16.3187L16.1556 1.75783C16.1751 1.73814 16.1946 1.71845 16.2044 1.69876L16.2044 1.69875C16.2239 1.67906 16.2434 1.65938 16.2532 1.63969L17.1704 0.714253C17.4631 0.428745 17.9217 0.428745 18.2046 0.714253C18.4974 0.99976 18.4974 1.47232 18.2046 1.75783L16.4288 3.54964ZM6.09836 9.00765C6.09836 9.26363 6.12764 9.5196 6.16667 9.75588L2.55643 13.3986C1.5807 12.2565 0.731804 10.8782 0.0585443 9.29316C-0.0195148 9.11595 -0.0195148 8.89936 0.0585443 8.7123C2.14662 3.80945 5.86419 0.885459 9.99156 0.885459H10.0013C11.3966 0.885459 12.7529 1.22019 14.0018 1.85028L10.7429 5.13854C10.5087 5.09915 10.255 5.06962 10.0013 5.06962C7.84494 5.06962 6.09836 6.83189 6.09836 9.00765Z"
                            fill="#404040"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember ME and Forgot Password */}
                <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
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
                  <div>
                    <Link
                      href="/forgot-password"
                      className="text-xs font-medium text-green-600 truncate hover:text-green-400"
                    >
                      ¿Olvidaste tu usuario?
                    </Link>
                  </div>
                </div>

                {/* Sign in & sign up button */}
                <div className="flex flex-col gap-2">
                  <button
                    className="px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-900 text-foreground "
                    type="submit"
                  >
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
                    <span className="inline-flex items-center px-1 text-sm text-gray-500 border-r md:px-2 rounded-l-md lg:text-lg">
                      <svg
                        className="w-3 h-3 md:w-5 md:h-5"
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
                      className="w-full py-2 pl-1 text-xs placeholder-gray-400 rounded-md md:pl-2 focus:outline-none lg:text-sm "
                      ref={emailRef}
                      onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                    />
                  </div>

                  <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-green-500 focus-within:border-green-500">
                    <span className="inline-flex items-center px-1 text-sm text-gray-500 border-r md:px-2 rounded-l-md">
                      <svg
                        className="w-3 h-3 md:w-5 md:h-5"
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
                      className="w-full py-2 pl-1 placeholder-gray-400 rounded-md text-xd md:pl-2 focus:outline-none lg:text-sm"
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                      ref={passwordRef}
                      onKeyDown={(e) => handleKeyDown(e, formRef)}
                    />
                    <button
                      className="inset-y-0 right-0 px-1 text-green-500 rounded-r outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      {/* Conditional rendering for the eye icon */}
                      {isPasswordVisible ? (
                        // Icon for visible password
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.09756 8.00012C6.09756 10.1335 7.8439 11.8692 10 11.8692C12.1463 11.8692 13.8927 10.1335 13.8927 8.00012C13.8927 5.85709 12.1463 4.12133 10 4.12133C7.8439 4.12133 6.09756 5.85709 6.09756 8.00012ZM15.7366 2.04618C17.4439 3.36497 18.8976 5.29467 19.9415 7.70921C20.0195 7.89346 20.0195 8.10679 19.9415 8.28133C17.8537 13.1104 14.1366 16.0001 10 16.0001H9.99024C5.86341 16.0001 2.14634 13.1104 0.0585366 8.28133C-0.0195122 8.10679 -0.0195122 7.89346 0.0585366 7.70921C2.14634 2.88012 5.86341 0.00012207 9.99024 0.00012207H10C12.0683 0.00012207 14.0293 0.717698 15.7366 2.04618ZM10.0012 10.4125C11.3378 10.4125 12.4304 9.32647 12.4304 7.99799C12.4304 6.65981 11.3378 5.57375 10.0012 5.57375C9.8841 5.57375 9.76702 5.58344 9.65971 5.60284C9.62068 6.6695 8.74263 7.52284 7.65971 7.52284H7.61093C7.58166 7.67799 7.56215 7.83314 7.56215 7.99799C7.56215 9.32647 8.65483 10.4125 10.0012 10.4125Z"
                            fill="#404040"
                          />
                        </svg>
                      ) : (
                        // Icon for hidden password
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.80327 12.2527C8.42774 12.676 9.18882 12.932 9.99868 12.932C12.1453 12.932 13.8919 11.1697 13.8919 9.00381C13.8919 8.18667 13.6382 7.41876 13.2186 6.78867L12.1551 7.86178C12.3307 8.19652 12.4283 8.59032 12.4283 9.00381C12.4283 10.3526 11.3354 11.4552 9.99868 11.4552C9.58887 11.4552 9.19858 11.3568 8.86683 11.1796L7.80327 12.2527ZM16.4288 3.54964C17.8436 4.84919 19.0438 6.60161 19.9415 8.70846C20.0195 8.89552 20.0195 9.11211 19.9415 9.28932C17.8534 14.1922 14.1358 17.126 9.99868 17.126H9.98893C8.10575 17.126 6.30063 16.5058 4.71018 15.3736L2.81725 17.2835C2.67089 17.4312 2.4855 17.5001 2.30011 17.5001C2.11472 17.5001 1.91957 17.4312 1.78297 17.2835C1.53903 17.0374 1.5 16.6436 1.69515 16.3581L1.72442 16.3187L16.1556 1.75783C16.1751 1.73814 16.1946 1.71845 16.2044 1.69876L16.2044 1.69875C16.2239 1.67906 16.2434 1.65938 16.2532 1.63969L17.1704 0.714253C17.4631 0.428745 17.9217 0.428745 18.2046 0.714253C18.4974 0.99976 18.4974 1.47232 18.2046 1.75783L16.4288 3.54964ZM6.09836 9.00765C6.09836 9.26363 6.12764 9.5196 6.16667 9.75588L2.55643 13.3986C1.5807 12.2565 0.731804 10.8782 0.0585443 9.29316C-0.0195148 9.11595 -0.0195148 8.89936 0.0585443 8.7123C2.14662 3.80945 5.86419 0.885459 9.99156 0.885459H10.0013C11.3966 0.885459 12.7529 1.22019 14.0018 1.85028L10.7429 5.13854C10.5087 5.09915 10.255 5.06962 10.0013 5.06962C7.84494 5.06962 6.09836 6.83189 6.09836 9.00765Z"
                            fill="#404040"
                          />
                        </svg>
                      )}
                    </button>
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
                  <button
                    className="px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-900 text-foreground "
                    type="submit"
                  >
                    Registrate
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs font-normal">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </div>
  );
};
