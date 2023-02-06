import { FC, ReactNode } from "react";

export const ComponentAnchor: FC<{ children: ReactNode; id: string }> = ({
  children,
  id,
}) => {
  return (
    <section
      id={id}
      className="min-h-[calc(100vh-4rem)] scroll-mt-20 flex flex-col justify-center items-center my-24 sm:my-12"
    >
      {children}
    </section>
  );
};
