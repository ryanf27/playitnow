import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PlayitNow - Rent Musical Instruments</title>
        <meta
          name="description"
          content="Easy, affordable, and reliable instrument rental service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slide />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
