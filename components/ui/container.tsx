import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="container sm:mx-auto">{children}</div>
);

export default Container;
