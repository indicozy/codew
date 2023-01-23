import { IconMenu } from "@tabler/icons";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import Link from "next/link";
import { LocaleSwitch } from "../locale-switch";
import Navbar from "../navbar/navbar";
export const links = [
  "welcome",
  "about",
  "timeline",
  "schedule",
  "sponsors",
  "team",
  "fAQ",
  "registration",
];
const Element = ({ link }: { link: string }) => {
  const { t } = useTranslation();
  return (
    <Link className="" href={`#${link}`}>
      {t(`header.${link}`)}
    </Link>
  );
};

const Links = () => {
  return (
    <div className="flex flex-row space-x-4 text-lg">
      {links.map((e, i) => (
        <Element link={e} key={i} />
      ))}
    </div>
  );
};

export function Header() {
  return (
    <>
      <div className="block sm:hidden">
        <Navbar />
      </div>
      <div className="fixed z-10 items-center w-full bg-bg bg-opacity-30 backdrop-blur-md">
        <div className="container flex justify-between items-center mx-auto h-12">
          <div className="hidden sm:block">
            <Links />
          </div>
          <div className="block sm:hidden"></div>
          <LocaleSwitch />
        </div>
      </div>
      <div className="h-12"></div>
    </>
  );
}
