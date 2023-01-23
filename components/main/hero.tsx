import { useTranslation } from "next-export-i18n";
import { ComponentAnchor } from "../componentAnchor";
import { Button } from "../ui/button";
import Container from "../ui/container";

export function Hero() {
  const { t } = useTranslation();
  return (
    <ComponentAnchor id="welcome">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="grid place-items-center">
            <div className="mx-auto w-[20rem] h-[20rem] bg-green-400"></div>
          </div>
          <div className="flex justify-center text-center">
            <div>
              <h1 className="text-6xl font-neue font-bold">
                {t("hero.welcome.1")} <br />
                {t("hero.welcome.2")}
              </h1>
              <div className="text-3xl">{t("hero.dates")}</div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center mt-8">
          <Button />
        </div>
      </Container>
    </ComponentAnchor>
  );
}
