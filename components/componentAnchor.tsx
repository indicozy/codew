import { FC, ReactNode } from "react";

export const ComponentAnchor: FC<{ children: ReactNode; id: string }> = ({
  children,
  id,
}) => {
  return (
    <section id={id} className="min-h-screen scroll-mt-12">
      {children}
    </section>
  );
};
