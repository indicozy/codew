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

type Badge = { icon: TablerIcon; name: string; href: string };

export function Team() {
  const badges: Badge[] = [
    { icon: IconBrandInstagram, name: "Instagram", href: "https://t.me" },
    { icon: IconBrandTelegram, name: "Telegram", href: "https://t.me" },
    { icon: IconBrandYoutube, name: "YouTube", href: "https://t.me" },
  ];
  const Badge: FC<{ badge: Badge }> = ({ badge }) => (
    <Link href={badge.href}>
      <span className="flex bg-red-300 rounded-full px-2 py-0.5 text-sm hover:bg-red-400">
        <badge.icon size={20} />
        {badge.name}
      </span>
    </Link>
  );
  const { t } = useTranslation();
  return (
    <ComponentAnchor id="team">
      <Container>
        <Headline>{t("team.headline")}</Headline>
        <div className="grid grid-cols-2 mt-8">
          <div className="grid place-items-center">
            <div className="max-w-screen-sm text-xl">
              <div>{t("team.description")}</div>
              <div className="flex mt-4 space-x-2">
                {badges.map((badge, i) => (
                  <Badge badge={badge} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid place-items-center">
            <Image
              src="/assets/team.jpg"
              width={1000}
              height={1000}
              alt="ACM-W Team"
            />
          </div>
        </div>
      </Container>
    </ComponentAnchor>
  );
}
