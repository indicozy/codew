import { IconCalendar } from "@tabler/icons";
import { useTranslation } from "next-export-i18n";
import { Headline } from "../ui/headline";

export function Schedule() {
  const { t } = useTranslation();
  const schedules: { time: string; name: string; description: string }[] =
    t("schedule.items");
  return (
    <>
      <Headline>{t("schedule.headline")}</Headline>
      <ol className="mx-auto w-[28rem] z-0">
        {schedules.map((schedule, i) => (
          <li className="" key={i}>
            <div className="flex flex-nowrap">
              <div className="flex justify-end items-center h-12 text-2xl text-right">
                {schedule.time}
              </div>
              <div className="relative mr-8 ml-8 border-l-4 border-gray-800">
                <span className="flex absolute -left-[1.625rem] justify-center items-center w-12 h-12 bg-blue-200 rounded-full border-4 border-gray-800">
                  <IconCalendar />
                </span>
              </div>
              <div>
                <h3 className="flex items-center mt-1 text-2xl font-semibold text-gray-900">
                  {schedule.name}
                </h3>
                <p className="mb-20 text-base font-normal text-gray-500">
                  {schedule.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
