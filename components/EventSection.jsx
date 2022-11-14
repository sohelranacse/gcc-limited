import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Events from "./Events";
import { EventsData } from "./EventsData";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function EventSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-medium text-slate-800 py-4">Events</h1>

      <CarouselProvider
        className="lg:block hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={EventsData.length}
        visibleSlides={3.2}
        step={1}
        infinite={true}
      >
        <div className="flex flex-row justify-between py-6">
          <p className="text-sm leading-6 text-slate-800 pr-4">
            Dive in to some new, exciting topics, or learn more about what our
            software has to offer.
            <br />
            Oh, and please let us know if you`d like to us to cover anything
            else.
          </p>

          <div className="flex justify-end text-slate-500">
            <ButtonBack>
              <HiChevronLeft className="border border-slate-300 mr-2 h-7 w-7" />
            </ButtonBack>
            <ButtonNext>
              <HiChevronRight className="border border-slate-300 h-7 w-7" />
            </ButtonNext>
          </div>
        </div>

        {/* slider area */}
        <Slider>
          {EventsData.map((event, index) => {
            return (
              <Slide key={index} className="border-r-[30px] border-white">
                <Events
                  key={index}
                  heading={event.heading}
                  location={event.location}
                  image={event.image}
                />
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>

      {/* Image */}
      <div className="lg:hidden grid sm:grid-cols-1 md:grid-cols-3 gap-10 py-4">
        {EventsData.map((event, index) => {
          return (
            <Events
              key={index}
              heading={event.heading}
              location={event.location}
              image={event.image}
            />
          );
        })}
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
