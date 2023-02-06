import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="container sm:mx-auto">
    <div className="mx-4">{children}</div>
  </div>
);

export default Container;
