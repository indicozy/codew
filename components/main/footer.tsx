import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4">
      <div className="grid grid-cols-3">
        <div className="grid grid-cols-2">
          <Image src="/acm/pink.svg" width={300} height={300} alt="epam" />
          <Image src="/sponsor/umag.svg" width={300} height={300} alt="epam" />
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <Link href="#">Instagram</Link>
          <Link href="#">Telegram</Link>
          <Link href="#">YouTube</Link>
        </div>
        <div className="grid grid-cols-2">
          <Image src="/sponsor/zapis.svg" width={300} height={300} alt="epam" />
          <Image src="/sponsor/epam.png" width={300} height={300} alt="epam" />
        </div>
      </div>
    </footer>
  );
}
