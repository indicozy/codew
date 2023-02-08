import { IconCopy, IconShare } from "@tabler/icons";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "../components/ui/container";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ticketId } = context.query;
  if (!ticketId)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  const sampleUser = {
    firstName: "burkit",
    lastName: "bruh",
    languages: ["C++", "Python", "JS"],
  };
  return {
    props: { ...sampleUser, ticketId },
  };
};
export default function Success({
  ticketId,
  firstName,
  lastName,
  languages,
}: {
  ticketId: string;
  firstName: string;
  lastName: string;
  languages: string[];
}) {
  const ticketRef = useRef<any>(null);
  const { t } = useTranslation();
  // const bruhRef = useRef<any>(null);
  useEffect(() => {
    let isMobile = false;
    function animateOnMouseOver(e: any) {
      const deg = {
        x: 30 * ((e.clientX / window.innerWidth) * 2 - 1),
        y: 30 * ((e.clientY / window.innerHeight) * 2 - 1),
      };
      if (ticketRef.current && !isMobile) {
        ticketRef.current.style.transform = `rotateX(${
          deg.y
        }deg)  rotateY(${-deg.x}deg)`;
      }
    }
    function handleMotionEvent(event: any) {
      const x = event.accelerationIncludingGravity.x;
      const y = event.accelerationIncludingGravity.y;
      const z = event.accelerationIncludingGravity.z;
      isMobile = !!x;

      const deg = {
        x: 30 * ((x / 10) * 2 - 1),
        y: 30 * ((((y - 7) % 10) / 10) * 2 - 1),
      };
      // if (bruhRef) {
      //   bruhRef.current.innerHTML = JSON.stringify({ x, y, z });
      // }
      if (ticketRef.current) {
        ticketRef.current.style.transform = `rotateX(${
          deg.y
        }deg)  rotateY(${-deg.x}deg)`;
      }
      // Do something awesome.
    }
    window.addEventListener("devicemotion", handleMotionEvent, true);
    window.addEventListener("mousemove", animateOnMouseOver);
    return () => {
      window.removeEventListener("mousemove", animateOnMouseOver);
      window.removeEventListener("devicemotion", handleMotionEvent);
    };
  }, [ticketRef]);
  function padWithLeadingZeros(num: number | string, totalLength: number) {
    return String(num).padStart(totalLength, "0");
  }
  return (
    <>
      <div
        className={`absolute top-[calc(50%-14rem)] sm:top-[calc(50%-18rem)] left-[calc(50%-8rem)] sm:left-[calc(50%-18rem)] w-[18rem] sm:w-[36rem] z-[-1]`}
      >
        <div className="relative">
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 blur-[120px] -z-1 w-[20rem] h-[20rem] sm:w-[32rem] sm:h-[32rem] bg-[#DDF9F1] bg-opacity-60 rounded-full`}
          ></div>
          <div className={`absolute top-0 left-0 right-0 bottom-0 z-2`}>
            <Image
              src={"/assets/99.png"}
              width={500}
              height={500}
              alt=""
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-screen h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <div className="scale-[.6] sm:scale-100">
          <div
            className=" w-[40rem] h-[20rem] border border-zinc-600 rounded-[60px] flex backdrop-blur-lg bg-bg bg-opacity-20"
            ref={ticketRef}
          >
            <div className="w-[30rem] p-10 flex flex-col justify-between">
              <div>
                <div className=" text-4xl font-neue">
                  {firstName} {lastName}
                </div>
                <div>{languages.join(", ")}</div>
              </div>
              <div className="flex flex-nowrap space-x-4 text-zinc-300 font-neue">
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
              <div className=" rotate-90 text-4xl tracking-wider m-0 p-0 font-neue">
                #{padWithLeadingZeros(ticketId, 6)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-8 justify-center mt-8">
          <button className="bg-transparent flex text-lg items-center backdrop-blur-lg py-2 px-4 rounded-xl bg-zinc-600 bg-opacity-30 hover:bg-opacity-50">
            <IconShare stroke={1.2} /> <span className="w-2"></span>
            {t("success.share")}
          </button>

          <button className="bg-transparent flex text-lg items-center backdrop-blur-lg py-2 px-4 rounded-xl bg-zinc-600 bg-opacity-30 hover:bg-opacity-50">
            <IconCopy stroke={1.2} />
            {t("success.copy")}
          </button>
        </div>
        {/* <div className="w-40" ref={bruhRef}></div> */}
        <Container>
          <div className="text-center mt-20">
            <div className="text-2xl font-semibold">
              {t("success.headline")}
            </div>
            <div className="text-xl">{t("success.description")}</div>
          </div>
        </Container>
      </div>
    </>
  );
}
