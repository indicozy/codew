import Image from "next/image";
import Link from "next/link";
import { Socials } from "../../data/info";
import Container from "../ui/container";

export function Footer() {
  return (
    <footer className="p-4">
      <Container>
        <div className="grid grid-cols-3 place-items-center">
          <Image
            className="w-20 sm:w-40"
            src="/sponsor/tassay.svg"
            width={300}
            height={300}
            alt="epam"
          />
          <Image
            className="w-12 sm:w-24"
            src="/acm/pink.svg"
            width={300}
            height={300}
            alt="epam"
          />
          <Image
            className="w-20 sm:w-40"
            src="/sponsor/umag.svg"
            width={300}
            height={300}
            alt="epam"
          />
        </div>
        <div className="grid grid-cols-2 place-items-center mt-8">
          <Image
            className="w-20 sm:w-40"
            src="/sponsor/zapis.svg"
            width={300}
            height={300}
            alt="epam"
          />
          <Image
            className="w-20 sm:w-40"
            src="/sponsor/epam.png"
            width={300}
            height={300}
            alt="epam"
          />
        </div>
        <div className="flex items-center space-x-8 mx-auto flex-nowrap justify-center mt-8 text-rose-300">
          <Link href={Socials.instagram}>Instagram</Link>
          <Link href={Socials.telegram}>Telegram</Link>
          <Link href={Socials.youtube}>YouTube</Link>
        </div>
        <div className="text-center text-sm text-gray-600 mt-8 italic">
          © 2023 NU ACM-W SC All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
