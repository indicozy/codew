import { IconCalendar } from "@tabler/icons";
import { useTranslation } from "next-export-i18n";
import BackgroundImage from "../ui/backgroundImage";
import { Headline } from "../ui/headline";

export function Schedule() {
  const { t } = useTranslation();
  const schedules: { time: string; name: string; description: string }[] =
    t("schedule.items");
  return (
    <>
      <div className="relative">
        <BackgroundImage image="/assets/95.png" position="left" />
      </div>

      <Headline>{t("schedule.headline")}</Headline>
      <ol className="mx-auto z-0 -space-y-1">
        {schedules.map((schedule, i) => (
          <li className="my-0" key={i}>
            <div className="flex flex-nowrap relative mr-8 ml-8 ">
              <div className="flex items-center">
                <div className="text-2xl text-right w-30">{schedule.time}</div>
              </div>
              <span className="absolute mx-0 my-auto top-0 bottom-0 left-[9.375rem] justify-center items-center w-6 h-6 bg-default rounded-full"></span>
              <div className="flex items-center ml-8 border-l-2 pl-8 h-40">
                <h3 className="text-xl">{schedule.name}</h3>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
