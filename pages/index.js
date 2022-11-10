import Head from "next/head";
import Image from "next/image";
import Articles from "../components/Articles";
import FilterSection from "../components/FilterSection";
import Hero from "../components/Hero"
import Subscription from "../Subscription";

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
      <Articles />
      {/* <Subscription /> */}
    </>
  );
}
