import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineGlobal, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log(nav);
    setNav(!nav);
    console.log(nav);
  };

  return (
    <nav className="w-full fixed top-0 bg-white z-10 shadow-md">
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
            <li className="relative group">
              <Link href="/" className="hover:text-gray-500 pb-2">
                Company
              </Link>
              <span className="absolute left-0 right-0 top-6 border-b-4 border-b-1 ease-out duration-200 border-sky-700 w-full inline-block"></span>
            </li>
            <li className="relative group">
              <Link href="/articles" className="hover:text-gray-500 pb-2">
                Articles
              </Link>
              <span className="absolute left-0 right-0 top-6 group-hover:border-b-4 border-b-1 ease-out duration-200 border-sky-700 w-0 group-hover:w-full inline-block"></span>
            </li>
            <li className="relative group">
              <Link href="/articles" className="hover:text-gray-500 pb-2">
                Pricing
              </Link>
              <span className="absolute left-0 right-0 top-6 group-hover:border-b-4 border-b-1 ease-out duration-200 border-sky-700 w-0 group-hover:w-full inline-block"></span>
            </li>
            <li className="relative group">
              <Link href="/articles" className="hover:text-gray-500 pb-2">
                Resources
              </Link>
              <span className="absolute left-0 right-0 top-6 group-hover:border-b-4 border-b-1 ease-out duration-200 border-sky-700 w-0 group-hover:w-full inline-block"></span>
            </li>
            <li className="relative group">
              <Link href="/articles" className="hover:text-gray-500 pb-2">
                Enterprise
              </Link>
              <span className="absolute left-0 right-0 top-6 group-hover:border-b-4 border-b-1 ease-out duration-200 border-sky-700 w-0 group-hover:w-full inline-block"></span>
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

        {/* mobile nav */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} className="text-black" />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-sky-600 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-sky-600 text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              className="hover:text-gray-300 p-4 text-xl text-slate-50"
              onClick={handleNav}
            >
              <Link href="/">Company</Link>
            </li>
            <li
              className="hover:text-gray-300 p-4 text-xl text-slate-50"
              onClick={handleNav}
            >
              <Link href="/articles">Articles</Link>
            </li>
            <li
              className="hover:text-gray-300 p-4 text-xl text-slate-50"
              onClick={handleNav}
            >
              <Link href="/">Pricing</Link>
            </li>
            <li
              className="hover:text-gray-500 p-4 text-xl text-slate-50"
              onClick={handleNav}
            >
              <Link href="/">Resources</Link>
            </li>
            <li
              className="hover:text-gray-500 p-4 text-xl text-slate-50"
              onClick={handleNav}
            >
              <Link href="/">Enterprise</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
