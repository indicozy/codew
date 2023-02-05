import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import { ComponentAnchor } from "../componentAnchor";
import Container from "../ui/container";
import { Headline } from "../ui/headline";

interface iSponsor {
  href: string;
  width: number;
  height: number;
  description: string;
}

export function Sponsors() {
  const { t } = useTranslation();
  const sponsors: iSponsor[] = [
    {
      href: "/sponsor/umag.svg",
      height: 300,
      width: 300,
      description: t("sponsors.umag"),
    },
    {
      href: "/sponsor/epam.png",
      height: 300,
      width: 300,
      description: t("sponsors.epam"),
    },
    {
      href: "/sponsor/tassay.svg",
      height: 300,
      width: 300,
      description: t("sponsors.zapis"),
    },
    {
      href: "/sponsor/zapis.svg",
      height: 300,
      width: 300,
      description: t("sponsors.tassay"),
    },
  ];
  return (
    <ComponentAnchor id="sponsors">
      <Container>
        <Headline>{t("sponsors.headline")}</Headline>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-40 w-full sm:w-[1028px] mx-auto">
          {sponsors.map((sponsor, i) => (
            <div key={i}>
              <Image
                className="w-40"
                src={sponsor.href}
                alt={""}
                width={sponsor.width}
                height={sponsor.height}
              />
              <div className="text-xl">{sponsor.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </ComponentAnchor>
  );
}
