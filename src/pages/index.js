import Head from "next/head";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Flickr from "@/components/Flickr";

export default function Home() {
  return (
    <>
      <Head>
        <title>Capture</title>
        <meta
          name="description"
          content="Look through the lens of your heart!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="Capture" />
        <meta
          property="og:image"
          content="https://frontend-photography-wheat.vercel.app/hero.png"
        />
        <meta
          property="og:description"
          content="Look through the lens of your heart!"
        />
      </Head>
      <Hero
        heading="Capture Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Slider data={SliderData} />
      <Flickr />
    </>
  );
}
