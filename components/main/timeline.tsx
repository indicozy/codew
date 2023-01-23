import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import { FC } from "react";
import { ComponentAnchor } from "../componentAnchor";
import Container from "../ui/container";
import { Headline } from "../ui/headline";

type TypeTimelines = { text1: string; text2: string };

const images = [
  "/assets/file-plus.png",
  "/assets/puzzle.png",
  "/assets/mail.png",
];

const Timelines: FC<{ timelines: TypeTimelines[] }> = ({ timelines }) => {
  return (
    <>
      {timelines.map((timeline, i) => (
        <div
          key={i}
          className="flex flex-col items-center mx-auto text-xl text-center my-12"
        >
          <div className="w-48 sm:w-60">
            <Image
              src={images[i]}
              width="300"
              height="300"
              alt=""
              layout="responsive"
            />
          </div>
          <div className="text-xl leading-loose sm:text-2xl sm:leading-relaxed">
            <p>{timeline.text1}</p>
            <p>{timeline.text2}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export function Timeline() {
  const { t } = useTranslation();
  const timelines: TypeTimelines[] = t("timeline.items");
  return (
    <ComponentAnchor id="timeline">
      <Container>
        <Headline>{t("timeline.headline")}</Headline>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:mt-20">
          <Timelines timelines={timelines} />
        </div>
      </Container>
    </ComponentAnchor>
  );
}
