import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Books from "./Books";
import { BooksData } from "./BooksData";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function BooksSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-medium text-slate-800 py-4">
        Books & Downloads
      </h1>

      <CarouselProvider
        className="lg:block hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={BooksData.length}
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
          {BooksData.map((book, index) => {
            return (
              <Slide key={index} className="py-4 border-r-[30px] border-white">
                <Books
                  heading={book.heading}
                  tags={book.tags}
                  image={book.image}
                />
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
      <CarouselProvider
        className="lg:hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={BooksData.length}
        visibleSlides={1}
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
          {BooksData.map((book, index) => {
            return (
              <Slide key={index}>
                <Books
                  heading={book.heading}
                  tags={book.tags}
                  image={book.image}
                />
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </section>
  );
}

export default BooksSection;
