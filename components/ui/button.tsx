import { useTranslation } from "next-export-i18n";

export const Button = () => {
  const { t } = useTranslation();
  return (
    <a href="#register" className="px-6 py-4 text-4xl bg-red-300 rounded-full">
      {t("register")}
    </a>
  );
};
