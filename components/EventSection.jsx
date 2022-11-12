import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Events from "./Events";

function EventSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-medium text-slate-800 py-4">Events</h1>
      <div>
        <div className="flex flex-wrap justify-between">
          <p className="text-sm leading-6 text-slate-800">
            Dive in to some new, exciting topics, or learn more about what our
            software has to offer.
            <br />
            Oh, and please let us know if you`d like to us to cover anything
            else.
          </p>
          <div className="flex justify-end text-slate-500">
            <button type="button">
              <HiChevronLeft className="border border-slate-300 mr-2 h-7 w-7" />
            </button>
            <button type="button">
              <HiChevronRight className="border border-slate-300 h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 py-4">
        <Events
          heading="Yes you can: Build Your Success"
          location="Online"
          image="https://images.unsplash.com/photo-1615419235091-59bf9cbd530b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY2fHxib29rJTIwY292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <Events
          heading="Yes you can: Build Your Success"
          location="Greenwoods, NY"
          image="https://images.unsplash.com/photo-1544736779-08492534e887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Events
          heading="Yes you can: Build Your Success"
          location="Edinburgh, LN"
          image="https://images.unsplash.com/photo-1555252586-d77e8c828e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxib29rJTIwY292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>

      <div className="flex justify-center py-10">
        <Link
          href="/"
          className="border-2 border-blue-600 text-blue-600 px-8 py-2 text-center font-bold rounded-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 ease-linear duration-200 w-64"
        >
          View all events
        </Link>
      </div>
    </section>
  );
}

export default EventSection;
