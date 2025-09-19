"use client";

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "sonner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // handle login
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.currentTarget);

      const response = await login(formData);

      if (!!response.error) {
        setError(response.error);
        toast.error(error);
      } else {
        toast.success("Login successful");
        router.push("/post");
      }
    } catch (err: unknown) {
      const errMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errMessage);
      toast.error("Email or password mismatch");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleLogin}>
      {/* Email */}
      <div className="relative">
        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full rounded-xl border border-gray-300 dark:border-gray-700 py-3 pl-10 pr-4 
                     text-gray-700 dark:text-gray-100 
                     bg-white dark:bg-gray-800
                     focus:border-teal-500 dark:focus:border-teal-400
                     focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800
                     outline-none transition"
          required
        />
      </div>

      {/* Password */}
      <div className="relative">
        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          className="w-full rounded-xl border border-gray-300 dark:border-gray-700 py-3 pl-10 pr-10 
                     text-gray-700 dark:text-gray-100 
                     bg-white dark:bg-gray-800
                     focus:border-teal-500 dark:focus:border-teal-400
                     focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800
                     outline-none transition"
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 
                     text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
        >
          {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
        </button>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 px-4 
             bg-[#0A4466] hover:bg-[#093955]   
             dark:bg-blue-900 dark:hover:bg-blue-600  
             text-white rounded-lg 
             disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
