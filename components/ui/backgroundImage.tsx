import Image from "next/image";
import { FC } from "react";

const BackgroundImage: FC<{ image: string; position: "left" | "right" }> = ({
  image,
  position,
}) => {
  return <></>;
  return (
    <div className="relative w-screen">
      <div className={`absolute -top-72 -${position}-72 w-[36rem] h-36rem`}>
        <div className="relative">
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 blur-[100px] -z-1 w-[30rem] h-[30rem] bg-red-300 rounded-full`}
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
      </div>
    </div>
  );
};

export default BackgroundImage;
