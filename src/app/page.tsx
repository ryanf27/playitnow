import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slide from "@/components/Slide";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import BlogSection from "@/components/Blog";
import Favorit from "@/components/Favorit";

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
      <Category />

      <Favorit />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
