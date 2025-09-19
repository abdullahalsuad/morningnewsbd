"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaImage } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "sonner";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // handle register
  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // collecting form data
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const image = formData.get("image");

      // sending to the backend
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          image,
        }),
      });

      if (res.status === 201) {
        toast.success("Registration successful");
        router.push("/login");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";

      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleRegister}>
      {/* Name */}
      <div className="relative">
        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full rounded-xl border border-gray-300 dark:border-gray-700 
                     py-3 pl-10 pr-4 
                     text-gray-700 dark:text-gray-100 
                     bg-white dark:bg-gray-800
                     focus:border-teal-500 dark:focus:border-teal-400
                     focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800
                     outline-none transition"
          required
        />
      </div>

      {/* Email */}
      <div className="relative">
        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full rounded-xl border border-gray-300 dark:border-gray-700 
                     py-3 pl-10 pr-4 
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
          placeholder="Enter your password"
          name="password"
          className="w-full rounded-xl border border-gray-300 dark:border-gray-700 
                     py-3 pl-10 pr-10 
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
                     text-gray-400 dark:text-gray-500 
                     hover:text-gray-600 dark:hover:text-gray-300"
        >
          {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
        </button>
      </div>

      {/* Image Upload */}
      <div className="relative">
        <FaImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="url"
          name="image"
          placeholder="Enter your img url"
          className="w-full rounded-xl border border-gray-300 dark:border-gray-700 
                     py-3 pl-10 pr-10 
                     text-gray-700 dark:text-gray-100 
                     bg-white dark:bg-gray-800
                     focus:border-teal-500 dark:focus:border-teal-400
                     focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800
                     outline-none transition"
        />
      </div>

      {/* error */}
      {error && <div className="text-xl text-red-500 text-center">{error}</div>}

      {/* Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 px-4 
                   bg-[#0A4466] hover:bg-[#093955]   /* light mode */
                   dark:bg-teal-500 dark:hover:bg-teal-600  /* dark mode */
                   text-white rounded-lg 
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "submitting...." : "Register"}
      </button>
    </form>
  );
};

export default RegistrationForm;
