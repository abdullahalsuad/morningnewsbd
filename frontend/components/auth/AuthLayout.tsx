"use client";

import SocialLogin from "./SocialLogin";

import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

type AuthPageType = "login" | "register";

interface AuthLayoutProps {
  pageType: AuthPageType;
}

const AuthLayout = ({ pageType }: AuthLayoutProps) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  const isLogin = pageType === "login";

  return (
    <>
      <div className="flex justify-center min-h-screen flex-col ">
        {/* Main content (center card) */}
        <div className="flex items-center justify-center p-4 ">
          <div className="w-full max-w-md rounded-2xl bg-white/90 dark:bg-gray-800 shadow-xl border border-gray-200 p-8 dark:border-0">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
              {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
            </h2>

            {/* Form */}
            {isLogin ? <LoginForm /> : <RegistrationForm />}

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            {/* Auth Switcher */}
            <p className="my-6 text-center text-sm text-gray-600 dark:text-gray-50 ">
              {isLogin
                ? "Do not have an account ? "
                : "Already have an account ? "}
              <Link
                href={isLogin ? "/register" : "/login"}
                className="text-teal-600 font-semibold hover:underline"
              >
                {isLogin ? "Register" : "Login"}
              </Link>
            </p>

            {/* Social login */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
