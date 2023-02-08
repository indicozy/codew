import { IconCopy } from "@tabler/icons";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ticketId } = context.query;
  if (!ticketId)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  const sampleUser = {
    firstName: "burkit",
    lastName: "bruh",
  };
  return {
    props: { firstName, lastName, ticketId },
  };
};
export default function Success({}) {
  return (
    <>
      <button className="bg-transparent">
        <IconCopy /> Copy URL
      </button>
    </>
  );
}
