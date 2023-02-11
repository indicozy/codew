import type { NextApiHandler } from 'next'
import { z } from 'zod'
import { prisma } from '../../server/db/client';
import { Errors } from '../../server/errors';
import { sendError } from '../../server/utils/sendError';
import { parseMultipart } from '../../server/utils/parseMultipart';
import { uploadFiles } from '../../server/utils/uploadFiles';

const incomingDataSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  dateOfBirth: z.string(),
  citizenship: z.string(),
  cityOfResidence: z.string(),
  schoolName: z.string(),
  pursuingDegree: z.string(),
  programmingLanguages: z.string(),
  motivationLetter: z.string(),
});

const fileFields = {
  stateId: 'application/pdf',
  enrollmentVerification: 'application/pdf',
  cv: 'application/pdf',
}

export type Response = {
  success: false;
  error: string;
  code: Errors;
} | {
  success: true;
}

const handler: NextApiHandler = async (req, res) => {
  const data = await parseMultipart(req, fileFields, incomingDataSchema).catch(() => null);

  if (!data) {
    return sendError(res, Errors.FORM_ERROR);
  }

  const { email } = data.fields;

  const exists = (await prisma.response.count({ where: { email } })) > 0;

  if (exists) {
    return sendError(res, Errors.EMAIL_ALREADY_EXISTS);
  }

  const files = await uploadFiles(data.files, email);

  const created = await prisma.response.create({
    data: {
      ...data.fields,
      ...files,
    }
  });

  return res.status(200).json({
    success: true,
    id: created.id,
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler;
