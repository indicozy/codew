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
