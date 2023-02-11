import { NextApiHandler } from "next";
import { env } from "../../env/server.mjs";
import { prisma } from "../../server/db/client";
import { stringify } from "csv";
import { Response } from "@prisma/client";

const getFullUrl = (id: string) => `${env.S3_PUBLIC_PREFIX}${id}`;

const generateCsv = (data: Response[]) =>
  new Promise((res, rej) => {
    stringify(
      data,
      {
        header: true,
        columns: {
          id: "ID",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          dateOfBirth: "Date of Birth",
          citizenship: "Citizenship",
          cityOfResidence: "City of Residence",
          schoolName: "School Name",
          pursuingDegree: "Pursuing Degree",
          programmingLanguages: "Programming Languages",
          motivationLetter: "Motivation Letter",
          stateId: "State ID",
          enrollmentVerification: "Enrollment Verification",
          cv: "CV",
        },
      },
      (err, output) => {
        if (err) {
          rej(err);
          return;
        }
        res(output);
      }
    );
  });

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(403).end();
  }
  const { password } = req.body;
  if (password !== process.env.PASSWORD && process.env.PASSWORD) {
    return res.status(403).end();
  }
  const data = (await prisma.response.findMany()).map((response) => {
    return {
      ...response,
      stateId: getFullUrl(response.stateId),
      enrollmentVerification: getFullUrl(response.enrollmentVerification),
      cv: getFullUrl(response.cv),
    };
  });

  const csv = await generateCsv(data);
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", 'attachment; filename="responses.csv"');
  res.status(200).end(csv);
};

export default handler;
