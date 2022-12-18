import { FC, ReactNode } from "react";

export const Headline: FC<{ children: ReactNode }> = ({ children }) => {
  return <p className="text-6xl text-center">{children}</p>;
};
