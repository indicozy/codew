import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import { ComponentAnchor } from "../componentAnchor";
import { Button } from "../ui/button";
import Container from "../ui/container";

export function Description() {
  const { t } = useTranslation();
  return (
    <ComponentAnchor id="about">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="max-w-screen-sm text-base sm:text-xl sm:order-1 order-2">
            {t("about.description")}
          </div>
          <div className="w-full sm:order-2 order-1">
            <Image
              className="p-8 w-full sm:w-[40rem]"
              src={"/assets/logo.svg"}
              width="1000"
              height={1000}
              alt="CodeW logo"
            />
          </div>
        </div>
      </Container>
    </ComponentAnchor>
  );
}
