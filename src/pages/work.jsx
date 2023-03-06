import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Head from "next/head";

const work = () => {
  return (
    <div>
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
          content="https://frontend-photography-wheat.vercel.app/_next/image?url=%2Fslider3.jpg&w=1080&q=75"
        />
        <meta
          property="og:description"
          content="Look through the lens of your heart!"
        />
      </Head>
      <Hero
        heading="My Work"
        message="This is some of the recent work by this organization."
      />
      <Portfolio />
    </div>
  );
};

export default work;
