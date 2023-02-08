import { FC, ReactNode } from "react";

const LinkHover: FC<{
  href: string;
  children: ReactNode | string;
  className?: string;
  customColor?: string;
  isThin?: boolean;
}> = ({ children, className, href, customColor, isThin }) => {
  return (
    <a href={href} className={className}>
      <span
        className={`link link-underline ${
          isThin ? "link-underline-thin" : ""
        } ${customColor ? "link-underline-" + customColor : ""}`}
      >
        {children}
      </span>
    </a>
  );
};
export default LinkHover;
