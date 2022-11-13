import React, { useState } from "react";
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
      {/* <div>
        <div className="flex flex-wrap justify-between">
          <p className="text-sm leading-6 text-slate-800">
            Dive in to some new, exciting topics, or learn more about what our
            software has to offer.
            <br />
            Oh, and please let us know if you`d like to us to cover anything
            else.
          </p>
          <div className="flex justify-end text-slate-500">
            <button type="button" onClick={prevSlide}>
              <HiChevronLeft className="border border-slate-300 mr-2 h-7 w-7" />
            </button>
            <button type="button" onClick={nextSlide}>
              <HiChevronRight className="border border-slate-300 h-7 w-7" />
            </button>
          </div>
        </div>
      </div> */}
      {/* Image */}

      <CarouselProvider
        // className="lg:block hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={6}
        visibleSlides={3}
        step={1}
        infinite={true}
      >
        <div className="py-6">
          <div className="flex flex-wrap justify-between">
            <p className="text-sm leading-6 text-slate-800">
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
        </div>

        {/* slider area */}
        <div className="grid grid-cols-1 py-4">
          {/* <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden"> */}
          <Slider>
            <Slide index={0}>
              <Books
                heading="Yes you can: Build Your Success"
                tags="Freelancer"
                image="https://images.unsplash.com/photo-1544736779-08492534e887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </Slide>
            <Slide index={1}>
              <Books
                heading="Yes you can: Build Your Success"
                tags="Freelancer"
                image="https://images.unsplash.com/photo-1544736779-08492534e887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </Slide>
            <Slide index={2}>
              <Books
                heading="Yes you can: Build Your Success"
                tags="Freelancer"
                image="https://images.unsplash.com/photo-1544736779-08492534e887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </Slide>
            <Slide index={3}>
              <Books
                heading="Yes you can: Build Your Success"
                tags="Freelancer"
                image="https://images.unsplash.com/photo-1544736779-08492534e887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </Slide>
            <Slide index={4}>
              <Books
                heading="Yes you can: Build Your Success"
                tags="Freelancer"
                image="https://images.unsplash.com/photo-1544736779-08492534e887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </Slide>
            <Slide index={5}>
              <Books
                heading="Yes you can: Build Your Success"
                tags="Freelancer"
                image="https://images.unsplash.com/photo-1544736779-08492534e887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </Slide>
          </Slider>
          {/* </div> */}
        </div>
      </CarouselProvider>

      {/* <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 py-4">
        {BooksData.map((book, index) => {
          return (
            <Books
              key={index}
              heading={book.heading}
              tags={book.tags}
              image={book.image}
            />
          );
        })}
      </div> */}

      {/* <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 py-4">
        <Books
          heading="Yes you can: Build Your Success"
          tags="Freelancer"
          image="https://images.unsplash.com/photo-1544736779-08492534e887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Books
          heading="A Guidbook to Hiring Freelancers"
          tags="Enterprise"
          image="https://images.unsplash.com/photo-1555252586-d77e8c828e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM1fHxib29rJTIwY292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
        <Books
          heading="A Guide to Developing Your Personal Brand"
          tags="Freelancer"
          image="https://images.unsplash.com/photo-1615419235091-59bf9cbd530b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY2fHxib29rJTIwY292ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div> */}
    </section>
  );
}

export default BooksSection;
