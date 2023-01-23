import { useTranslation } from "next-export-i18n";
import { ComponentAnchor } from "../componentAnchor";
import { Button } from "../ui/button";
import Container from "../ui/container";

export function Description() {
  const { t } = useTranslation();
  return (
    <ComponentAnchor id="about">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="max-w-screen-md text-xl sm:order-1 order-2">
            {t("about.description")}
          </div>
          <div className="w-full sm:order-2 order-1">
            <div className="mx-auto w-[30rem] h-[30rem] bg-green-400"></div>
          </div>
        </div>
      </Container>
    </ComponentAnchor>
  );
}
