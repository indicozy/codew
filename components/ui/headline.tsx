import { FC, ReactNode } from "react";

export const Headline: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <p className="text-4xl sm:text-6xl text-center font-mont font-bold mb-12">
      {children}
    </p>
  );
};
