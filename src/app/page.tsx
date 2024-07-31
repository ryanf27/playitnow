import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

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
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
