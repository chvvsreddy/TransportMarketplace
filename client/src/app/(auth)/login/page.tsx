"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/app/(components)/Header";
import Link from "next/link";

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',

  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',

  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',

  },
]

export default function LoginPage() {
  const [number, setNumber] = useState("");

  return (
    <>
   
    <div className="overflow-hidden bg-white py-22 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid lg:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none  ">
          <div className="login-left py-12 px-12 lg:col-span-2">
              <div className="relative z-30">
              
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                A better Transit
              </p>
              <p className="mt-6 text-lg/8 text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    {' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              </div>
          </div>
          <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="flex justify-center">
          <Link href={"/"}><img src="/goodseva-logo.png" alt="Goodseva-logo"  className="h-12 w-auto" /></Link> </div>  
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2> 
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-orange-800 hover:text-orange-900">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                    <button type="submit" className="flex w-full justify-center button-primary mt-6" >
                      Sign in
                    </button>
                  </div>

                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                  Not a member?{' '}
                  <a href="#" className="font-semibold text-orange-800 hover:text-orange-900">
                    Register
                  </a>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
