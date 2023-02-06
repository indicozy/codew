import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

import { FC, useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const BackgroundImage: FC<{ image: string; position: "left" | "right" }> = ({
  image,
  position,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <div className="relative w-screen" ref={ref}>
      <motion.div
        style={{ y }}
        className={`absolute top-[4rem] sm:top-[-6rem] 
        ${position === "right" ? "right-[-6rem]" : "left-[-12rem]"} ${
          position === "right" ? "sm:right-[-18rem]" : "sm:left-[-18rem]"
        } w-[18rem] sm:w-[36rem] z-[-1]`}
      >
        <div className="relative">
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 blur-[120px] -z-1 w-[20rem] h-[20rem] sm:w-[32rem] sm:h-[32rem] bg-[#DDF9F1] rounded-full`}
          ></div>
          <div className={`absolute top-0 left-0 right-0 bottom-0 z-2`}>
            <Image
              src={image}
              width={500}
              height={500}
              layout="responsive"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BackgroundImage;
