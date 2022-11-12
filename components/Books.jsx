import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiSearch } from "react-icons/hi";

function Books({ heading, tags, image }) {
  return (
    <Link href="/" className="group">
      <div className="my-4 relative">
        <Image src={image} alt="" width={200} height={200} className="w-full" />
        {/* overlay */}
        <div className="absolute group-hover:bg-slate-900/30 top-0 left-0 h-full w-full shadow-sm ease-in duration-250"></div>
        {/* icon */}
        <div className="absolute mx-auto top-[45%] left-[45%] hidden group-hover:block ease-in duration-250">
          <HiSearch className="text-white p-2 rounded-full w-8 h-8 border-2 border-sky-500 group-hover:bg-sky-500 group-hover:text-white-900" />
        </div>

        {/*  */}
        <div className="absolute top-0 left-0 h-8 w-9 border-l-8 border-t-8 border-t-indigo-500 border-l-sky-500"></div>
      </div>
      <h2 className="font-bold text-slate-800 text-2xl py-px group-hover:text-sky-500 ease-in duration-250">
        {heading}
      </h2>
      <strong className="uppercase text-blue-700 py-3 text-xs tracking-tight">
        {tags}
      </strong>
      <p className="py-4 text-sm text-slate-800 leading-6">
        In publishing and graphic desing, Lorem Ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document.
      </p>
    </Link>
  );
}

export default Books;
