import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/b58e6c17-4d27-47fc-9c33-8e37ba189859/NL-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
      }}
      className="relative h-screen bg-cover bg-center flex flex-col overflow-hidden scroll"
    >
      <Header />
      <div className="bg-black/80 rounded-sm mx-44 lg:mx-48 p-16 text-3xl flex flex-col flex-grow">
        <div className="font-bold">Sign In</div>
        <div className="space-y-4">
          <div className="mt-5 space-y-3">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="text-sm font-normal outline-none ring-1 ring-slate-600 bg-slate-500/10 py-4 pr-24 px-4 w-full rounded-sm"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="text-sm font-normal outline-none ring-1 ring-slate-600 bg-slate-500/10 py-4 pr-24 px-4 w-full rounded-sm"
            ></input>

            <button className="w-full bg-red-600 hover:bg-red-700 delay-100 transition h-[20%] rounded-sm text-center text-sm p-2 font-semibold">
              Sign In
            </button>

            <div className="text-center text-sm text-gray-400 font-normal">
              OR
            </div>
            <button className="w-full bg-white/20 hover:bg-white/15 delay-100 transition h-[20%] rounded-sm text-center text-sm p-2 font-semibold">
              Use a sign-in code
            </button>
            <div className="flex items-center justify-center">
              <Link
                href={"/LoginHelp"}
                className="text-sm font-normal hover:underline hover:text-gray-400"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <label className="text-sm flex items-center space-x-2 font-medium">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 transition duration-150 ease-in-out"
            />

            <span>Remember Me</span>
          </label>

          <div className="text-sm text-gray-300">
            New to Netflix?{" "}
            <Link
              href={"/"}
              className="hover:underline text-white font-semibold"
            >
              Sign up now
            </Link>
            .
          </div>

          <div className="text-xs text-gray-400 space-y-2">
            <div>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <button className="hover:underline text-blue-500">
                Learn More.
              </button>
            </div>
            <div>
              The information collected by Google reCAPTCHA is subject to the
              Google{" "}
              <a
                className="hover:underline text-blue-500"
                href="https://policies.google.com/privacy"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                className="hover:underline text-blue-500"
              >
                Terms of Service
              </a>
              , and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalised advertising by Google).
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-6 bg-black/80 flex-grow">
        <div className="mt-8 mb-6 mx-4 text-gray-300">
          <div>Questions? Call 000-800-919-1694</div>

          <div className="my-5 text-sm underline grid grid-cols-4 gap-6">
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/help_center"}>Help Center</Link>
            <Link href={"/help_center/terms_of_use"}>Terms of Use</Link>
            <Link href={"/help_center/privacy"}>Privacy</Link>

            {/* privacy prefernece center */}
            <Link href={"/login"}>Cookie Preferneces</Link>
            <Link href={"/help_center/corporate_information"}>Corporate Information</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
