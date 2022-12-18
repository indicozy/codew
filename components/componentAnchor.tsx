import { FC, ReactNode } from "react";

export const ComponentAnchor: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => {
  return (
    <section id={href} className="min-h-screen scroll-mt-12">
      {children}
    </section>
  );
};
