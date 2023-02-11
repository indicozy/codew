import Container from "../components/ui/container";
import Image from "next/image";
import Head from "next/head";

export default function Notfound() {
  return (
    <>
      <Head>
        <title>Oops! 404 error | codeW 2023</title>
        <meta
          name="description"
          content="Something went wrong, try again please."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://codew.kz/preview/404.png" />
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
      </Head>
      <Container>
        <Image
          src="/assets/60.png"
          width={2400}
          height={2400}
          alt="404"
          className="fixed top-[calc(50%-24vw)] left-[calc(50%-30vw)] z-[-1] w-[60vw] sm:w-[40vw] sm:top-[calc(50%-18vw)] sm:left-[calc(50%-20vw)]"
        />
        <div className="grid grid-cols-3 h-[calc(100vh-4rem)] place-items-center text-4xl  sm:text-6xl font-mont font-bold">
          <div>oops!</div>
          <div>404</div>
          <div>:error</div>
        </div>
      </Container>
    </>
  );
}
