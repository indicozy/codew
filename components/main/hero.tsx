import { useTranslation } from "next-export-i18n";

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-3rem)]">
      <div className="grid grid-cols-1 w-screen sm:grid-cols-2">
        <div className="grid place-items-center">
          <div className="mx-auto w-[40rem] h-[40rem] bg-green-400"></div>
        </div>
        <div className="grid place-items-center text-center bg-blue-300">
          <div>
            <h1 className="text-6xl">
              {t("hero.welcome.1")} <br />
              {t("hero.welcome.2")}
            </h1>
            <div className="text-3xl">{t("hero.dates")}</div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center mt-8">
        <a
          href="#register"
          className="px-6 py-4 text-4xl bg-red-300 rounded-full"
        >
          {t("hero.register")}
        </a>
      </div>
    </div>
  );
}
