import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";

function Subscription() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between gap-4">
        {/* left */}
        <div className="w-full">
          <p className="uppercase text-xl tracking-tight pb-4">
            Collaborative work management
          </p>
          <h1 className="font-medium text-3xl" style={{ fontSize: "60px" }}>
            Stay Connected
          </h1>
        </div>
        {/* right */}
        <div className="w-full">
          <p className="text-sm font-medium text-slate-600">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            lorem Ipsum has been the industry`s standard dummy text ever since
            the 1500s.
          </p>
          <form className="flex flex-wrap py-6 justify-between">
            <div className="pr-4">
              <p className="uppercase text-lg font-medium text-slate-800">
                Subscribe now
              </p>
            </div>
            <div style={{ width: "67%" }}>
              <input
                type="email"
                placeholder="Enter email"
                className="border-b-2 border-solid appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer w-full"
                required
              />
            </div>
            <div>
              <button type="submit" className="text-3xl">
                <RiArrowRightCircleLine />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
