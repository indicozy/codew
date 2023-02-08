import Image from "next/image";
import Link from "next/link";
import { Socials } from "../../data/info";
import Container from "../ui/container";
import LinkHover from "../ui/linkHover";

export function Footer() {
  return (
    <footer className="p-4">
      <Container>
        <div className="grid grid-cols-3 place-items-center max-w-6xl mx-auto">
          <Image
            className="w-24 sm:w-48"
            src="/sponsor/umag.svg"
            width={300}
            height={300}
            alt="umag"
          />
          <Image
            className="w-16 sm:w-28"
            src="/acm/pink.svg"
            width={300}
            height={300}
            alt="acm"
          />
          <Image
            className="w-24 sm:w-48"
            src="/sponsor/epam.png"
            width={300}
            height={300}
            alt="epam"
          />
        </div>
        <div className="grid grid-cols-2 place-items-center max-w-4xl mx-auto mt-8">
          <Image
            className="w-24 sm:w-48"
            src="/sponsor/zapis.svg"
            width={300}
            height={300}
            alt="zapis"
          />
          <Image
            className="w-24 sm:w-48"
            src="/sponsor/tassay.svg"
            width={300}
            height={300}
            alt="tassay"
          />
        </div>
        <div className="flex items-center space-x-8 mx-auto flex-nowrap justify-center mt-8 text-rose-300">
          <LinkHover isThin customColor="rose" href={Socials.instagram}>
            Instagram
          </LinkHover>
          <LinkHover isThin customColor="rose" href={Socials.telegram}>
            Telegram
          </LinkHover>
          <LinkHover isThin customColor="rose" href={Socials.youtube}>
            YouTube
          </LinkHover>
        </div>
        <div className="text-center text-sm text-gray-600 mt-8 italic">
          © 2023 NU ACM-W SC All rights reserved.
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          Made with ❤️ by{" "}
          <LinkHover
            isThin
            customColor="rose"
            className="text-rose-300"
            href="https://github.com/indicozy"
          >
            indicozy
          </LinkHover>
          , aruryss & Adam Cosman
        </div>
      </Container>
    </footer>
  );
}
