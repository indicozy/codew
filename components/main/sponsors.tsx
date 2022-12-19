import { useTranslation } from "next-export-i18n";
import { Headline } from "../ui/headline";

export function Sponsors() {
  const sponsors: string[] = [
    "/img1.png",
    "/img1.png",
    "/img1.png",
    "/img1.png",
  ];
  const { t } = useTranslation();
  return (
    <>
      <Headline>{t("sponsors.headline")}</Headline>
      <div className="grid grid-cols-2 gap-40 place-items-center mx-auto max-w-screen-lg">
        {sponsors.map((sponsor, i) => (
          <div className="w-60 h-60 bg-red-300" key={i}></div>
        ))}
      </div>
    </>
  );
}
