import { useTranslation } from "next-export-i18n";
import { useWindowSize } from "react-use";
import { ComponentAnchor } from "../componentAnchor";
import BackgroundImage from "../ui/backgroundImage";
import { Button } from "../ui/button";
import Container from "../ui/container";
import dynamic from "next/dynamic";

const HeroDesktopDynamic = dynamic(() => import("../hero/HeroDesktop"), {
  ssr: false,
  loading: () => <p>...</p>,
});
const HeroMobileDynamic = dynamic(() => import("../hero/HeroMobile"), {
  ssr: false,
  loading: () => <p>...</p>,
});

export function Hero() {
  const { t } = useTranslation();
  // const { width } = useWindowSize();
  return (
    <>
      <BackgroundImage image={"/assets/56.png"} position="right" />
      <div className="h-[calc(100vh-4rem)] scroll-mt-20" id="welcome">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-4rem-8rem)] place-items-center">
          <div className="grid place-items-start sm:place-items-center">
            <HeroDesktopDynamic />
          </div>
          <div className="flex flex-col justify-center text-center ">
            <div>
              <h1 className="text-4xl sm:text-6xl font-neue font-bold">
                {t("hero.welcome.1")} <br />
                {t("hero.welcome.2")}
              </h1>
              <div className="text-3xl">{t("hero.dates")}</div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center mt-4">
          <Button />
        </div>
      </div>
    </>
  );
}
