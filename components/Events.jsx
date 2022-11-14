import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";

function Events({ heading, location, image }) {
  return (
    <div>
      <div className="my-4">
        <Link href="/" className="group ease-in duration-150 group">
          <div className="relative">
            <Image
              src={image}
              alt=""
              width={200}
              height={200}
              className="w-full relative"
            />
            {/* overlay */}
            <div className="absolute group-hover:bg-slate-900/30 top-0 left-0 h-full w-full shadow-sm"></div>
            {/* icon */}
            <FaRegBookmark className="absolute top-6 right-6 text-2xl text-slate-600 group-hover:text-sky-600" />
          </div>

          {/* title */}
          <div className="flex flex-wrap justify-between items-center">
            <h2 className="px-2 text-xl font-bold text-slate-700 w-4/5 group-hover:text-sky-600">
              {heading}
            </h2>

            {/* date */}
            <div className="flex flex-col text-white bg-sky-600 px-4 py-1 text-center w-1/5">
              <span className="text-sm">OCT</span>
              <span className="text-4xl font-mono ">30</span>
            </div>
          </div>
        </Link>
      </div>

      {/* online */}
      <div className="flex flex-wrap text-blue-600 font-bold text-md">
        <FaMapMarkerAlt />
        <span className="pl-4">{location}</span>
      </div>
      <p className="py-3 text-sm text-slate-800 leading-6">
        In publishing and graphic desing, Lorem Ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document.
      </p>

      {/* book */}
      <div className="flex flex-wrap justify-between py-4 font-bold">
        <Link href="/" className="uppercase text-blue-600">
          Book Now
        </Link>
        <Link href="/" className="uppercase text-slate-600 underline">
          More Info
        </Link>
      </div>
    </div>
  );
}

export default Events;
