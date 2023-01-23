import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import { ComponentAnchor } from "../componentAnchor";
import Container from "../ui/container";
import { Headline } from "../ui/headline";

interface iSponsor {
  href: string;
  width: number;
  height: number;
}

export function Sponsors() {
  const sponsors: iSponsor[] = [
    {
      href: "/sponsor/epam.png",
      height: 300,
      width: 300,
    },
    {
      href: "/sponsor/umag.svg",
      height: 300,
      width: 300,
    },
    {
      href: "/sponsor/zapis.svg",
      height: 300,
      width: 300,
    },
  ];
  const { t } = useTranslation();
  return (
    <ComponentAnchor id="sponsors">
      <Container>
        <Headline>{t("sponsors.headline")}</Headline>
        <div className="grid grid-cols-2 gap-40 place-items-center mx-auto max-w-screen-lg">
          {sponsors.map((sponsor, i) => (
            <div className="w-60 h-60" key={i}>
              <Image
                src={sponsor.href}
                alt={""}
                width={sponsor.width}
                height={sponsor.height}
              />
            </div>
          ))}
        </div>
      </Container>
    </ComponentAnchor>
  );
}
