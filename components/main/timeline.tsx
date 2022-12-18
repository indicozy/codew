import { useTranslation } from "next-export-i18n";
import { FC } from "react";
import { Headline } from "../ui/headline";

type TypeTimelines = { text1: string; text2: string };

const Timelines: FC<{ timelines: TypeTimelines[] }> = ({ timelines }) => {
  return (
    <>
      {timelines.map((timeline, i) => (
        <div
          key={i}
          className="flex flex-col items-center mx-auto text-xl text-center"
        >
          <div className="w-40 h-40 bg-green-300">{"lllsdasd"}</div>
          <p>{timeline.text1}</p>
          <p>{timeline.text2}</p>
        </div>
      ))}
    </>
  );
};
export function Timeline() {
  const { t } = useTranslation();
  const timelines: TypeTimelines[] = t("timeline.items");
  return (
    <>
      <Headline>{t("timeline.headline")}</Headline>
      <div className="grid grid-cols-3">
        <Timelines timelines={timelines} />
      </div>
    </>
  );
}
