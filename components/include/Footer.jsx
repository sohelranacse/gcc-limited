import Image from "next/image";
import React from "react";
import Link from "next/link";
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
      <div className="container grid grid-cols-2 gap-2 mx-auto px-5 py-12 ">
        <div className="">
          <div className="py-6">
            <Image
              className="w-40 py-3"
              src="/assets/gcc-logo.svg"
              alt=""
              width={20}
              height={20}
            />
            <p className="text-slate-300 py-2">
              Inspiring the world through change.
            </p>
          </div>
          <div className="py-8 flex items-center justify-between">
            <div>
              <h4 className="text-lg text-slate-100">Get our newsletter</h4>
              <p className="text-xs text-slate-300 py-4">
                Read about the latest in wrkplace trends, events and insights
                straight to your inbox
              </p>
            </div>
            <ul className="flex items-center gap-4 text-xl text-slate-500">
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
            <div className="pb-4">
              <input
                type="email"
                class="w-[65%] py-[0.35rem] px-0 text-slate-100 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter email"
                required
              />

              <button
                type="button"
                className="border border-blue-400 text-slate-100 px-4 py-2 uppercase bg-blue-400 text-xs font-bold w-[35%]"
              >
                Subscribe to Newsletter
              </button>
            </div>
            <input
              type="checkbox"
              className="w-4 h-4 border bg-transparent border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              for="checkbox-1"
              className="ml-2 font-medium text-slate-300 text-xs align-top"
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
        <div className="">Hello2</div>
      </div>
    </div>
  );
}

export default Footer;
