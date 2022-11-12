import Head from "next/head";
import ArticlesSection from "../components/ArticlesSection";
import BooksSection from "../components/BooksSection";
import EventSection from "../components/EventSection";
import FilterSection from "../components/FilterSection";
import Hero from "../components/Hero"
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>GCC Limited</title>
        <meta name="description" content="Find out about GCC&#039;s certified IT Support &amp; Consultancy, Software Solutions and Cloud services in London, Gloucester, Birmingham &amp; The West Midlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <FilterSection />
      <ArticlesSection />
      <BooksSection />
      <EventSection />
      <Subscribe />
    </>
  );
}
