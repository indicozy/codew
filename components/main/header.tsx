import { useLanguageQuery, useTranslation } from "next-export-i18n";
import Link from "next/link";
import { LocaleSwitch } from "../locale-switch";
const links = [
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
    <div className="w-full bg-blue-400 items-center ">
      <div className="h-12 justify-between items-center flex container mx-auto">
        <Links />
        <LocaleSwitch />
      </div>
    </div>
  );
}
