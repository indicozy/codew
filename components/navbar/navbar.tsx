import { Cycle, motion, useCycle } from "framer-motion";
import { useWindowSize } from "react-use";
import { links } from "../main/header";
import { useTranslation } from "next-export-i18n";
import Link from "next/link";
import { FC, ReactNode } from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem: FC<{ toggle: Cycle; link: string }> = ({ link, toggle }) => {
  const { t } = useTranslation();
  return (
    <motion.li
      className="m-0 p-0 list-none mb-[20px] flex items-center cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link className="" href={`#${link}`} onClick={() => toggle()}>
        <div className="rounded-[5px] w-screen flex-1 text-white text-xl font-medium font-neue">
          {t(`header.${link}`)}
        </div>
      </Link>
    </motion.li>
  );
};

const variantsNavigation = {
  open: {
    display: "block",
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    display: "none",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export const Navigation: FC<{ toggle: Cycle }> = ({ toggle }) => (
  <motion.ul
    className="m-0 p-[25px] absolute top-[100px] w-[230px]"
    variants={variantsNavigation}
  >
    {links.map((link, i) => (
      <MenuItem toggle={toggle} link={link} key={i} />
    ))}
  </motion.ul>
);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 34px 34px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: FC<{ toggle: Cycle }> = ({ toggle }) => (
  <button
    onClick={() => toggle()}
    className="absolute w-[40px] h-[40px] rounded-full flex items-center left-[12px] top-[14px] justify-center bg-transparent text-white"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { width, height } = useWindowSize();

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className="fixed z-40 top-0 left-0 bottom-0"
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-screen bg-opacity-20 backdrop-blur-md text-white border border-white"
          variants={sidebar}
        />
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default Navbar;
