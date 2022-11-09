import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero"

import { FcAssistant } from "react-icons/fc"

export default function Home() {
  return (
    <>
      <Head>
        <title>GCC Limited</title>
        <meta name="description" content="Find out about GCC&#039;s certified IT Support &amp; Consultancy, Software Solutions and Cloud services in London, Gloucester, Birmingham &amp; The West Midlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  );
}
