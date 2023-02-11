import { Montserrat, Poppins } from "@next/font/google";
import { FC, ReactNode } from "react";
import { Header } from "../main/header";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic", "latin-ext", "cyrillic-ext"],
  variable: "--font-mont",
});

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className={`overflow-x-hidden overflow-y-visible font-medium ${montserrat.variable} font-mont`}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
