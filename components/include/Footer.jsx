import Image from "next/image";
import React from "react";
import Link from "next/link";

import { FaRegEnvelope } from "react-icons/fa";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-fill bg-slate-900">
      <div className="container grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto px-5 py-12 ">
        <div className="pr-4">
          <div className="py-6">
            <Image
              className="w-36 py-3"
              src="/assets/gcc-logo.svg"
              alt=""
              width={20}
              height={20}
            />
            <p className="text-slate-300 py-2">
              Inspiring the world through change.
            </p>
          </div>
          <div className="py-6 flex flex-wrap items-center justify-between">
            <div>
              <h4 className="text-lg text-slate-100">Get our newsletter</h4>
              <p className="text-xs text-slate-300 py-4">
                Read about the latest in wrkplace trends, events and insights
                straight to your inbox
              </p>
            </div>
            <ul className="flex items-center gap-3 text-xl text-slate-500">
              <li>
                <Link href="https://facebook.com" target="_blank">
                  <FaFacebookSquare />
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank">
                  <FaInstagramSquare />
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="pb-4 flex flex-wrap">
              <input
                type="email"
                className="w-[65%] py-[0.40rem] px-0 text-slate-100 text-sm bg-transparent border-0 border-b border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter email"
                required
              />

              <button
                type="button"
                className="border border-blue-400 text-slate-100 px-4 py-2 uppercase bg-blue-400 text-xs font-bold w-[35%] lg:block hidden"
              >
                Subscribe to Newsletter
              </button>
              <button
                type="button"
                className="border border-blue-400 text-slate-100 px-4 py-2 uppercase bg-blue-400 text-xs font-bold w-[35%]"
              >
                <FaRegEnvelope />
              </button>
            </div>

            <input
              type="checkbox"
              id="checkbox-1"
              className="w-4 h-4 accent-blue-300 align-middle"
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 font-medium text-slate-300 text-xs"
            >
              Yes, I`d liek to receive marketing emails from Edge and agree to
              it`s &nbsp;
              <Link
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms of business
              </Link>
              .
            </label>
          </div>
        </div>
        <div className="md:pl-4 sm:pl-0">
          <div className="flex flex-wrap justify-between pt-6 pb-12">
            <div className="font-medium">
              <h4 className="uppercase text-sm text-blue-400  py-2 tracking-tight ">
                Company
              </h4>
              <ul className="text-slate-200 text-xs">
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">About us</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Policies</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Pricing</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Meat our team</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Accreditation</Link>
                </li>
              </ul>
            </div>

            <div className="font-medium">
              <h4 className="uppercase text-sm text-blue-400  py-2 tracking-tight">
                Services
              </h4>
              <ul className="text-slate-200 text-xs">
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Work</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Search Policies</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Licensing</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Resources</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Upcoming events</Link>
                </li>
              </ul>
            </div>

            <div className="font-medium">
              <h4 className="uppercase text-sm text-blue-400  py-2 tracking-tight">
                Learn
              </h4>
              <ul className="text-slate-200 text-xs">
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">UX Design</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Ceatuve Skills</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Community</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Business resources</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Free tools</Link>
                </li>
              </ul>
            </div>

            <div className="font-medium">
              <h4 className="uppercase text-sm text-blue-400  py-2 tracking-tight">
                Collaborate
              </h4>
              <ul className="text-slate-200 text-xs">
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Partner with us</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Become an affiliate</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">FAQ`s</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Work with us</Link>
                </li>
                <li className="py-2 hover:text-slate-400 ease-linear duration-100">
                  <Link href="/">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:pt-10 sm:pt-0 pb-2">
            <ul className="md:flex flex-wrap sm:flex-1 justify-between text-slate-300 uppercase text-[10px] tracking-tighter leading-3">
              <li className="md:border-r border-slate-400 pr-3 my-2 hover:text-slate-200 ease-linear duration-100">
                <Link href="/">Terms of business</Link>
              </li>
              <li className="md:border-r border-slate-400 md:px-3 my-2 hover:text-slate-200 ease-linear duration-100">
                <Link href="/">Data usage & privacy policy</Link>
              </li>
              <li className="md:border-r border-slate-400 md:px-3 my-2 hover:text-slate-200 ease-linear duration-100">
                <Link href="/">Cancelation policy</Link>
              </li>
              <li className="md:border-r border-slate-400 md:px-3 my-2 hover:text-slate-200 ease-linear duration-100">
                <Link href="/">Our ethics statement</Link>
              </li>
              <li className="md:pl-3 my-2 hover:text-slate-200 ease-linear duration-100">
                <Link href="/">Sitemap</Link>
              </li>
            </ul>
            <p className="uppercase text-[8px] text-slate-500 py-4">
              Edge reffers to the global platform, and may reffer to one of more
              licensed companies, each of which is a separatelegal entity edge
              brand and technology is owned by GCC limited company no 10453456
            </p>
            <p className="uppercase text-[8px] text-slate-500">
              GCC limited &copy; All right reserved 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
