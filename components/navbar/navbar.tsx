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
    display: "block",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    display: "none",
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
        <div className="rounded-[5px] w-screen  flex-1 text-black">
          {t(`header.${link}`)}
        </div>
      </Link>
    </motion.li>
  );
};

const variantsNavigation = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation: FC<{ toggle: Cycle }> = ({ toggle }) => (
  <motion.ul
    className="m-0 p-0 p-[25px] absolute top-[100px] w-[230px]"
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
    clipPath: "circle(30px at 40px 40px)",
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
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: FC<{ toggle: Cycle }> = ({ toggle }) => (
  <button
    onClick={() => toggle()}
    className="absolute w-[60px] h-[60px] rounded-full flex items-center left-[10px] top-[10px] justify-center bg-transparent"
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
          className="absolute top-0 left-0 bottom-0 w-screen bg-white"
          variants={sidebar}
        />
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  );
};

export default Navbar;
