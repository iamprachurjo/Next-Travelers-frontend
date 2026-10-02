"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignupForm = () => {
  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      phone,
    });

    console.log(data, error);

    if (data) {
      redirect("/login");
    }
  };
  return (
    <main className="min-h-screen bg-[#EEF3F7] px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-115 overflow-hidden rounded-xl bg-white shadow-sm">
        {/* Header */}
        <div className="px-6 pt-10 text-center sm:px-12">
          <h1 className="text-3xl font-bold text-[#172536]">
            Let&apos;s Get Started
          </h1>

          <p className="mt-2 text-sm text-[#64748B]">
            Create an account and get the Deals &amp; Promotions news
          </p>
        </div>

        {/* Form */}
        <form className="px-6 pb-0 pt-8 sm:px-12" onSubmit={handleSignup}>
          {/* Social Login */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex h-12 items-center hover:cursor-pointer justify-center gap-3 rounded-lg bg-[#F4F6F8] text-sm font-medium text-[#172536] transition hover:bg-[#E9EDF2]"
            >
              <FcGoogle className="text-xl" />
              Google
            </button>

            <button
              type="button"
              className="flex h-12 items-center hover:cursor-pointer justify-center gap-3 rounded-lg bg-[#F4F6F8] text-sm font-medium text-[#172536] transition hover:bg-[#E9EDF2]"
            >
              <FaFacebookF className="text-lg text-[#1877F2]" />
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#DCE2E8]" />

            <span className="text-xs text-[#64748B]">Or Sign Up with</span>

            <div className="h-px flex-1 bg-[#DCE2E8]" />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-[#172536]"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              required
              className="h-12 w-full rounded-lg bg-[#F4F6F8] px-4 text-sm text-[#172536] outline-none placeholder:text-[#94A3B8] focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#172536]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="example@email.com"
              required
              className="h-12 w-full rounded-lg bg-[#F4F6F8] px-4 text-sm text-[#172536] outline-none placeholder:text-[#94A3B8] focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Number */}
          <div className="mt-5">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-[#172536]"
            >
              Mobile Number
            </label>

            <div className="flex h-12 overflow-hidden rounded-lg bg-[#F4F6F8]">
              <div className="flex items-center gap-2 bg-[#EDF5FF] px-3">
                <span className="text-sm text-[#172536]">+880</span>
              </div>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="01812-345678"
                required
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#172536] outline-none placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mt-5">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#172536]"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Your password"
              required
              minLength={8}
              className="h-12 w-full rounded-lg bg-[#F4F6F8] px-4 text-sm text-[#172536] outline-none placeholder:text-[#94A3B8] focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 h-12 w-full rounded-lg bg-[#2683F7] text-sm font-semibold text-white transition hover:bg-[#1673E8] hover:cursor-pointer"
          >
            Sign Up
          </button>

          {/* Login */}
          <p className="py-7 text-center text-sm text-[#64748B]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#1683FF] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>

        {/* Terms */}
        <div className="bg-[#F4F7F9] px-6 py-4 text-center">
          <p className="text-xs leading-5 text-[#64748B]">
            By Signing up you agree to the{" "}
            <Link href="/terms" className="text-[#1683FF] hover:underline">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignupForm;
