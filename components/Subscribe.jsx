import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";

function Subscribe() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-between">
        {/* left */}
        <div className="md:w-1/2 sm:w-full">
          <p className="uppercase text-xl tracking-tight py-4">
            Collaborative work management
          </p>
          <h1 className="font-medium md:text-7xl text-4xl">Stay Connected</h1>
        </div>

        {/* right */}
        <div className="md:w-1/2 sm:w-full py-4">
          <p className="text-sm font-medium text-slate-600">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            lorem Ipsum has been the industry`s standard dummy text ever since
            the 1500s.
          </p>
          <form className="flex flex-wrap py-6 justify-between gap-0">
            <p className="uppercase text-lg font-medium text-slate-900 pr-2 md:pb-0 pb-4">
              Subscribe now
            </p>
            <div className="md:w-2/3 w-[90%]">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border-b-2 border-solid appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
            </div>
            <button type="submit" className="text-3xl">
              <RiArrowRightCircleLine className="text-slate-600" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
