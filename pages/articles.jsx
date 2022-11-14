import Link from "next/link";
import React from "react";
import Head from "next/head";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { FaRegEnvelope, FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import RelatedArticles from "../components/RelatedArticles";
import { BooksData } from "../components/BooksData";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function articles() {
  return (
    <>
      <Head>
        <title>Article | GCC Limited</title>
        <meta
          name="description"
          content="Find out about GCC&#039;s certified IT Support &amp; Consultancy, Software Solutions and Cloud services in London, Gloucester, Birmingham &amp; The West Midlands"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container mx-auto pt-32 pb-12 px-4">
        <Link
          href="/"
          className="pb-8 flex flex-wrap flex-row justify-left text-slate-600"
        >
          <RiArrowRightCircleLine className="text-2xl mr-2" />
          <span>Go to previous page</span>
        </Link>

        {/* main section */}
        <div className="grid md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-9 md:border-r-2 md:pr-8">
            <Link
              href="/"
              className="uppercase border border-sky-600 bg-sky-600 text-white px-4 py-1 rounded-sm text-xs"
            >
              Article
            </Link>

            {/* titile */}
            <h1 className="py-4 font-bold text-3xl">
              How Did van Gogh`s Turbulent Mind Depict One of the Most Complex
              Concepts in Physics?
            </h1>
            <div className="flex flex-wrap justify-left gap-8 text-xs pb-8">
              <p className="text-slate-600">By Katy Liu on September 3, 2021</p>
              <Link href="/" className="text-sky-600 flex flex-wrap">
                <FaRegBookmark className="mr-2" />
                <span>Save this article</span>
              </Link>
            </div>

            {/* content */}
            <p className="text-xs text-slate-700 leading-6 pt-4">
              Lorem Ipsum is simply dummy text of the printing. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry`s standard dummy text ever since the
              1500s. In publishing and graphic design. Lorem inpus is a
              placeholder text commonly used to demonstrate the visual form of
              adocument.
            </p>
            <p className="text-xs text-slate-700 leading-6 pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the indistry`s standard dummy text
              ever since. In publishing and graphic design. Lorem inpus is a
              placeholder text commonly used to demonstrate the visual form of
              adocument. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the indistry`s standard
              dummy text ever since.
            </p>

            {/* blockcote */}

            <div className="flex flex-wrap justify-between py-12">
              <blockquote className="pl-4 my-4 border-l-4 border-sky-500 md:basis-1/2">
                <h2 className="text-sky-500 font-bold text-2xl pb-2">
                  Summary
                </h2>
                <p className="text-xs font-bold leading-relaxed text-slate-90">
                  Lorem Ipsum is simply dummy text of the printing. In
                  publishing and graphic design, Lorem ipsum is a placeholder
                  text. To take a trival example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage
                  from it? But who has any right to find fault with a man who
                  chooses to enjoy a pleasure that has no annoying cosequences.
                  Lorem Ipsum is simply dummy text of the printing. In
                  publishing and graphic design, Lorem ipsum is a placeholder
                  text.
                </p>
              </blockquote>
              <div className="basis 1/2">
                <Image
                  src="https://images.unsplash.com/photo-1596045663166-e5668e9b748e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1794&q=80"
                  width={300}
                  height={0}
                  alt="author image"
                  className="w-full h-48 rounded-sm"
                />
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-6 pt-4">
              Lorem Ipsum is simply dummy text of the printing. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry`s standard dummy text ever since the
              1500s. In publishing and graphic design. Lorem inpus is a
              placeholder text commonly used to demonstrate the visual form of
              adocument.
            </p>
            <p className="text-xs text-slate-700 leading-6 pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the indistry`s standard dummy text
              ever since. In publishing and graphic design. Lorem inpus is a
              placeholder text commonly used to demonstrate the visual form of
              adocument. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the indistry`s standard
              dummy text ever since.
            </p>

            {/* Article tags */}
            <h3 className="text-md font-bold py-8">Article tags</h3>
            <div className="flex flex-wrap justify-left gap-4">
              <Link
                href="/"
                className="border border-slate-500 px-5 py-2 rounded-sm text-slate-800 text-xs font-medium hover:bg-sky-600 hover:border-sky-600 ease-linear duration-150 hover:text-white"
              >
                Graphic Design
              </Link>
              <Link
                href="/"
                className="border border-slate-500 px-5 py-2 rounded-sm text-slate-800 text-xs font-medium hover:bg-sky-600 hover:border-sky-600 ease-linear duration-150 hover:text-white"
              >
                Majento
              </Link>
              <Link
                href="/"
                className="border border-slate-500 px-5 py-2 rounded-sm text-slate-800 text-xs font-medium hover:bg-sky-600 hover:border-sky-600 ease-linear duration-150 hover:text-white"
              >
                Project Management
              </Link>
              <Link
                href="/"
                className="border border-slate-500 px-5 py-2 rounded-sm text-slate-800 text-xs font-medium hover:bg-sky-600 hover:border-sky-600 ease-linear duration-150 hover:text-white"
              >
                Marketing
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-3 md:pl-8">
            <h2 className="text-slate-700 font-bold pt-16 pb-6 text-sm">
              About the author
            </h2>
            <Image
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              width={140}
              height={0}
              alt="author image"
              className="w-32"
            />
            <h3 className="text-slate-700 text-sm py-4 font-bold">
              Sohel Rana
            </h3>
            <p className="text-xs leading-6 text-slate-500">
              To take a trival example, which of us ever undertakes laborious
              physical exercise, except to obtain some advantage from it? But
              who has any right to find fault with a man who chooses to enjoy a
              pleasure that has no annoying cosequences.
            </p>

            {/* popular post */}
            <h2 className="font-bold text-md pt-10 pb-6">Popular Posts</h2>
            <ul>
              <li>
                <Link href="/" className="font-bold text-xs py-4">
                  Beautiful Landscape View of Rio de Janerio
                </Link>
              </li>
              <li>
                <Link href="/" className="font-bold text-xs py-4">
                  Beautiful Landscape View of Rio de Janerio
                </Link>
              </li>
              <li>
                <Link href="/" className="font-bold text-xs py-4">
                  Beautiful Landscape View of Rio de Janerio
                </Link>
              </li>
              <li>
                <Link href="/" className="font-bold text-xs py-4">
                  Beautiful Landscape View of Rio de Janerio
                </Link>
              </li>
              <li>
                <Link href="/" className="font-bold text-xs py-4">
                  Beautiful Landscape View of Rio de Janerio
                </Link>
              </li>
            </ul>

            {/* newsletter */}
            <div className="py-6 mt-8 w-full bg-gray-100">
              <div className="text-center pb-12">
                <div className="w-full py-6">
                  <span className="relative mx-auto text-center w-16 h-16 leading-8 bg-gray-50 block rounded-full">
                    <FaRegEnvelope className="text-3xl absolute top-4 left-4 text-gray-500" />
                  </span>
                </div>
                <h4 className="font-bold py-2 text-slate-600 text-lg">
                  Sign up for Newsletter
                </h4>
                <p className="text-xs">
                  Sign up to receive latest posts and news
                </p>
              </div>
              <div className="px-10">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="border-b-2 border-solid
                  w-full
                  bg-transparent
                  border-b-gray-400 
                  appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <button
                  type="button"
                  className="flex flex-wrap flex-row justify-left text-slate-600 py-4 font-medium mx-auto"
                >
                  <RiArrowRightCircleLine className="text-2xl mr-2" />
                  <span>Subscribe Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-9 flex flex-wrap justify-between pt-28 py-12">
            <h1 className="text-2xl font-bold leading-6 text-slate-800">
              Related Insights
            </h1>

            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={BooksData.length}
              visibleSlides={2.2}
              step={1}
              infinite={true}
            >
              <div className="flex flex-row justify-between py-6">
                <p className="text-sm leading-6 text-slate-800 pr-4">
                  Dive in to some new, exciting topics, or learn more about what
                  our software has to offer.
                  <br />
                  Oh, and please let us know if you`d like to us to cover
                  anything else.
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
                    <Slide
                      key={index}
                      className="py-4 border-r-[30px] border-white"
                    >
                      <RelatedArticles
                        heading={book.heading}
                        image={book.image}
                      />
                    </Slide>
                  );
                })}
              </Slider>
            </CarouselProvider>

            <div className="lg:hidden grid sm:grid-cols-1 md:grid-cols-2 gap-10 py-8">
              {BooksData.map((book, index) => {
                return (
                  <RelatedArticles
                    key={index}
                    heading={book.heading}
                    image={book.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
