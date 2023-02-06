import Container from "../components/ui/container";

export default function Notfound() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-3 h-[calc(100vh-3rem)] place-items-center text-4xl font-neue font-bold">
          <div>oops!</div>
          <div>404</div>
          <div>:error</div>
        </div>
      </Container>
    </>
  );
}
