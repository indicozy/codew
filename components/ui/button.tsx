import { useTranslation } from "next-export-i18n";
import Link from "next/link";

export const Button = () => {
  const { t } = useTranslation();
  return (
    <a
      href="#registration"
      className="px-6 sm:px-8 py-3 sm:py-4 text-2xl sm:text-4xl bg-default hover:bg-rose-600 transition-all duration-200 rounded-full"
    >
      {t("register")}
    </a>
  );
};
