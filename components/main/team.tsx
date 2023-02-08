import { useTranslation } from "next-export-i18n";
import { Headline } from "../ui/headline";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandYoutube,
  TablerIcon,
} from "@tabler/icons";
import Link from "next/link";
import { FC } from "react";
import { ComponentAnchor } from "../componentAnchor";
import Image from "next/image";
import Container from "../ui/container";
import { Socials } from "../../data/info";
import LinkHover from "../ui/linkHover";

type Badge = { icon: TablerIcon; name: string; href: string };

export function Team() {
  const badges: Badge[] = [
    { icon: IconBrandInstagram, name: "Instagram", href: Socials.instagram },
    { icon: IconBrandTelegram, name: "Telegram", href: Socials.telegram },
    { icon: IconBrandYoutube, name: "YouTube", href: Socials.youtube },
  ];
  const Badge: FC<{ badge: Badge }> = ({ badge }) => (
    <a href={badge.href}>
      <span className="flex bg-red-300 rounded-full px-2 py-0.5 text-sm hover:bg-red-400">
        <badge.icon size={20} />
        {badge.name}
      </span>
    </a>
  );
  const { t } = useTranslation();
  return (
    <ComponentAnchor id="team">
      <Container>
        <Headline>{t("team.headline")}</Headline>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8">
          <div className="grid place-items-center order-2 sm:order-1 mt-8 sm:mt-0">
            <div className="max-w-screen-sm text-xl">
              <div>{t("team.description")}</div>
              <div className="flex mt-4 space-x-10">
                {badges.map((badge, i) => (
                  <LinkHover
                    isThin
                    customColor="rose"
                    href={badge.href}
                    key={i}
                    className="text-base text-rose-300"
                  >
                    {badge.name}
                  </LinkHover>
                ))}
              </div>
            </div>
          </div>
          <div className="grid place-items-center order-1 sm:order-2">
            <Image
              src="/assets/team.jpg"
              width={1000}
              height={1000}
              alt="ACM-W Team"
              className="rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </ComponentAnchor>
  );
}
