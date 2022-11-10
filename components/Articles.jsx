import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightCircleLine } from "react-icons/ri";

function Articles() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 sm:col-span-2">
        {/* Image */}
        <div className="md:col-span-2 sm:col-span-1 mr-6">
          <Image
            src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width="300"
            height="0"
            alt=""
            className="w-full "
          />
        </div>

        {/* content */}
        <div className="">
          <p className="text-xs font-medium text-slate-500">
            Friday, September 3, 2021
          </p>
          <h1 className="text-3xl font-bold py-4">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <p className="text-sm text-slate-500">The Lorem team</p>
          <p className="text-sm py-5 text-slate-800 leading-6">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry`s standard dummy text ever since
            the 1500s. In publishing and graphic design. Lorem inpus is a
            placeholder text commonly used to demonstrate the visual form of
            adocument. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the indistry`s standard
            dummy text ever since. Lorem inpus is a placeholder text commonly
            used to demonstrate the visual form of adocument. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the indistry`s standard dummy text ever since.
          </p>
          <Link
            href="/"
            className="uppercase font-bold text-blue-400 text-xs hover:text-slate-600 ease-linear duration-100"
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center font-medium hover:text-blue-700 ease-linear duration-75 py-8">
        <RiArrowRightCircleLine className="text-xl" />
        <Link href="/" className="pl-2">
          View all articles
        </Link>
      </div>
    </section>
  );
}

export default Articles;
