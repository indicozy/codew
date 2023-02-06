import Container from "../components/ui/container";
import Image from "next/image";

export default function Notfound() {
  return (
    <Container>
      <Image
        src="/assets/60.png"
        width={2400}
        height={2400}
        alt="404"
        className="fixed top-[calc(50%-24vw)] left-[calc(50%-30vw)] z-[-1] w-[60vw] sm:w-[40vw] sm:top-[calc(50%-18vw)] sm:left-[calc(50%-20vw)]"
      />
      <div className="grid grid-cols-3 h-[calc(100vh-4rem)] place-items-center text-4xl  sm:text-6xl font-neue font-bold">
        <div>oops!</div>
        <div>404</div>
        <div>:error</div>
      </div>
    </Container>
  );
}
