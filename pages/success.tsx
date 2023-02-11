import { IconCopy, IconShare } from "@tabler/icons";
import { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-export-i18n";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CopyBtn from "../components/CopyBtn";
import Container from "../components/ui/container";
import { prisma } from "../server/db/client";

interface TicketProps {
  response: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    programmingLanguages: string;
  };
}

function padWithLeadingZeros(num: number | string, totalLength: number) {
  return String(num).padStart(totalLength, "0");
}

export const getServerSideProps: GetServerSideProps<TicketProps> = async (
  context
) => {
  const id = context.query.id as string | undefined;

  if (!id) {
    return {
      notFound: true,
    };
  }
  // console.log(await prisma.response.findMany({}));

  const response = await prisma.response.findUnique({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      programmingLanguages: true,
    },
    where: {
      id: Number(id),
    },
  });

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      response,
    },
  };
};

const Page: NextPage<TicketProps> = ({ response }) => {
  const ticketRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const { t } = useTranslation();
  // const bruhRef = useRef<any>(null);
  useEffect(() => {
    let isMobile = false;
    let frames = 0;

    function animate(deg: { x: number; y: number }) {
      if (ticketRef.current) {
        ticketRef.current.style.transform = `rotateX(${
          deg.y
        }deg)  rotateY(${-deg.x}deg)`;
      }
      if (imageRef.current) {
        imageRef.current.style.transform = `translateX(${
          -deg.x * 3
        }px)  translateY(${-deg.y * 3}px)`;
      }
    }
    function animateOnMouseOver(e: any) {
      if (isMobile) return;
      const deg = {
        x: 30 * ((e.clientX / window.innerWidth) * 2 - 1),
        y: 30 * ((e.clientY / window.innerHeight) * 2 - 1),
      };
      animate(deg);
    }

    function handleMotionEvent(event: any) {
      // const rotation_degrees = event.alpha;
      const frontToBack_degrees = event.beta;
      const leftToRight_degrees = event.gamma;
      isMobile = !!leftToRight_degrees;
      if (!isMobile) return;

      const deg = {
        x: 270 * (leftToRight_degrees / 180),
        y: 270 * ((frontToBack_degrees - 45) / 180),
      };
      const stiffness = 2;
      deg.x /= stiffness;
      deg.y /= stiffness;
      animate(deg);
      // frames = 0;
      // }
    }
    window.addEventListener("mousemove", animateOnMouseOver);
    window.addEventListener("deviceorientation", handleMotionEvent, true);

    // @ts-ignore
    // if (DeviceMotionEvent.requestPermission !== undefined) {
    // @ts-ignore
    return () => {
      window.removeEventListener("mousemove", animateOnMouseOver);
      window.removeEventListener("deviceorientation", handleMotionEvent);
    };
  }, [ticketRef]);

  const [hasNavigator, hasNavigatorSet] = useState<boolean>(false);
  const [isSafari, isSafariSet] = useState<boolean>(false);
  useEffect(() => {
    if (!!navigator.share) {
      hasNavigatorSet(true);
    }
    if (navigator.userAgent) {
      isSafariSet(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }
  }, []);

  return (
    <>
      <Head>
        <title>You successfully registered for codeW 2023!</title>
        <meta
          name="description"
          content="Your application was received. We will contact you for the next steps by email. Look out!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://codew.kz/preview/success.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`absolute z-[-1]`}>
        <div className="w-screen overflow-x-hidden h-screen -mt-20">
          <div className="relative transition-all duration-75" ref={imageRef}>
            <div
              className={`absolute top-[calc(50%+8rem)] left-[calc(50%-10rem)] sm:left-[calc(50%-16rem)] blur-[120px] -z-1 w-[20rem] h-[20rem] sm:w-[32rem] sm:h-[32rem] bg-[#DDF9F1] bg-opacity-60 rounded-full`}
            ></div>
            <div
              className={`absolute top-[calc(50%+8rem)] left-[calc(50%-10rem)] sm:left-[calc(50%-18rem)] z-2`}
            >
              <Image
                className="w-[20rem] sm:w-[36rem]"
                src={"/assets/99.png"}
                width={500}
                height={500}
                alt=""
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-screen h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <div className="scale-[.45] sm:scale-[.8] md:scale-100">
          <div
            className=" w-[40rem] h-[20rem] border border-zinc-600 rounded-[60px] flex backdrop-blur-lg bg-bg bg-opacity-20 transition-all duration-75"
            ref={ticketRef}
          >
            <div className="w-[30rem] p-10 flex flex-col justify-between">
              <div>
                <div className=" text-4xl font-mont">
                  {response.firstName} {response.lastName}
                </div>
                <div>{response.programmingLanguages}</div>
              </div>
              <div className="flex flex-nowrap space-x-4 text-zinc-300 font-mont">
                <Image
                  src="/assets/logo.svg"
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-12"
                />
                <div className="text-sm">
                  <div>{t("success.date")}</div>
                  <div>{t("success.hosted")}</div>
                </div>
              </div>
            </div>
            <div className="w-[10rem] border-l border-zinc-600 flex items-center justify-center">
              <div className=" rotate-90 text-4xl tracking-wider m-0 p-0 font-mont">
                #{padWithLeadingZeros(response.id, 6)}
              </div>
            </div>
          </div>
        </div>
        <div>
          {!isSafari ? (
            <></>
          ) : (
            <button
              className="border border-default py-2 px-4 text-sm rounded-full"
              onClick={() => {
                try {
                  // @ts-ignore
                  DeviceMotionEvent.requestPermission().then(
                    (response: any) => {
                      if (response == "granted") {
                        console.log("bruh");
                        // Do stuff here
                      }
                    }
                  );
                } catch {
                  //pass
                }
                // }
              }}
            >
              Animate
            </button>
          )}
        </div>
        <div className="flex space-x-8 justify-center mt-8">
          {hasNavigator ? (
            <button
              onClick={() => {
                navigator.share({
                  title: t("share.title"),
                  text: t("share.text"), // todo change
                  url: `https://codew.kz/success?id=${response.id}`,
                });
              }}
              className="border border-zinc-400 bg-transparent flex text-lg items-center backdrop-blur-lg py-2 px-4 rounded-xl bg-zinc-600 bg-opacity-30 hover:bg-opacity-50"
            >
              <IconShare stroke={1.2} /> <span className="w-2"></span>
              {t("success.share")}
            </button>
          ) : (
            <></>
          )}

          <CopyBtn textToCopy={`https://codew.kz/success?id=${response.id}`} />
        </div>
        {/* <div className="w-40" ref={bruhRef}></div> */}
        <Container>
          <div className="text-center mt-20">
            <div className="text-2xl font-bold font-mont">
              {t("success.headline")}
            </div>
            <div className="text-xl">{t("success.description")}</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
