import Head from "next/head";
import { ComponentAnchor } from "../components/componentAnchor";
import { Description } from "../components/main/description";
import { Faq } from "../components/main/faq";
import { Footer } from "../components/main/footer";
import { Hero } from "../components/main/hero";
import { Registration } from "../components/main/registration";
import { Schedule } from "../components/main/schedule";
import { Sponsors } from "../components/main/sponsors";
import { Team } from "../components/main/team";
import { Timeline } from "../components/main/timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeW 2023 | NU ACM-W SC</title>
        <meta
          name="description"
          content="Register for IV annual national competition in competitive programming for the university and high school female students."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://codew.kz/preview/index.png"
        />

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Description />
      <Timeline />
      <Schedule />
      <Sponsors />
      <Team />
      <Faq />
      <Registration />
      <Footer />
    </>
  );
}
