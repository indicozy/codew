import { useTranslation } from "next-export-i18n";
import { Montserrat, Poppins } from "@next/font/google";
import { FC, ReactNode } from "react";
import localFont from "@next/font/local";
import { Header } from "../main/header";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin-ext", "cyrillic-ext"],
});

const neue = localFont({
  variable: "--font-neue",
  src: [
    {
      path: "../../public/font/neue-machina/light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/neue-machina/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/neue-machina/ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className={`${montserrat.className} font-medium ${neue.variable}`}>
        {children}
      </main>
    </>
  );
};

export default Layout;
