import { useTranslation } from "next-export-i18n";
import { Button } from "../ui/button";

export function Description() {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-3rem)]">
      <div className="grid grid-cols-1 w-screen sm:grid-cols-2">
        <div className="grid place-items-center">
          <div className="ml-12 max-w-screen-md text-xl">
            {t("about.description")}
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="mx-auto w-[40rem] h-[40rem] bg-green-400"></div>
        </div>
      </div>
      <div className="grid place-items-center mt-8">
        <Button />
      </div>
    </div>
  );
}
