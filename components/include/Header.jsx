import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineGlobal } from "react-icons/ai";

function Header() {
  return (
    <nav className="w-full fixed top-0 bg-white z-10">
      <div className="container p-5 mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              className="w-20 "
              src="/assets/gcc-logo.svg"
              alt="logo"
              width={20}
              height={20}
            />
          </Link>
          <ul className="hidden md:flex space-x-5 text-gray-700 font-[600] text-sm uppercase ml-20 tracking-tighter">
            <li>
              <Link
                href="/company"
                className="hover:text-gray-500 border-solid border-b-4 border-blue-700 pb-2 hover:border-solid hover:border-b-4 hover:border-blue-700 ease-linear duration-100"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-gray-500 pb-2 hover:border-solid hover:border-b-4 hover:border-blue-700 ease-linear duration-100 "
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-gray-500 pb-2 hover:border-solid hover:border-b-4 hover:border-blue-700 ease-liner duration-100"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-gray-500 pb-2 hover:border-solid hover:border-b-4 hover:border-blue-700 ease-liner duration-100"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/enterprise"
                className="hover:text-gray-500 pb-2 hover:border-solid hover:border-b-4 hover:border-blue-700 ease-linear duration-100"
              >
                Enterprise
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-4">
          <Link
            href="/"
            className="text-xl text-gray-600 hover:text-blue-700 ease-linear duration-100"
          >
            <AiOutlineGlobal />
          </Link>
          <ul className="uppercase flex space-x-2 md:space-x-4 text-blue-500 font-bold text-sm tracking-tighter">
            <li>
              <Link
                href="/"
                className="hover:text-gray-600 ease-linear duration-100"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-gray-600 ease-linear duration-100"
              >
                Contact Sales
              </Link>
            </li>
          </ul>
        </div>
        <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-20">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
        <ul
          id="menu"
          className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
        >
          <li className="hover:text-gray-500 leading-8 ">
            <Link href="/company">Company</Link>
          </li>
          <li className="hover:text-gray-500 leading-8">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-gray-500 leading-8">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="hover:text-gray-500 leading-8">
            <Link href="/resources">Resources</Link>
          </li>
          <li className="hover:text-gray-500 leading-8">
            <Link href="/enterprise">Enterprise</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
