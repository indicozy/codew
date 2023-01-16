import busboy from "busboy";
import { NextApiRequest } from "next";
import { z, ZodSchema } from "zod";
import { FileBuffers, FileFields } from "../../types/file";

export const parseMultipart = <Files extends string, TextFields extends ZodSchema>(
    req: NextApiRequest,
    fileFields: FileFields<Files>,
    textFields: TextFields,
): Promise<{
    files: Record<Files, FileBuffers>;
    fields: z.infer<TextFields>;
}> => new Promise((resolve, reject) => {
    type TextFieldKey = keyof z.infer<TextFields>;

    const bb = busboy({ headers: req.headers });

    const files: Partial<Record<Files, FileBuffers>> = {};
    const fields: Partial<Record<TextFieldKey, string>> = {};

    bb.on('file', (name, file, info) => {
        if (!Object.keys(fileFields).includes(name)) {
            return;
        }

        const fileField = name as Files;

        if (info.mimeType !== fileFields[fileField]) {
            return;
        }

        const buffer: Buffer[] = [];

        file.on('data', (data) => {
            buffer.push(data);
        });

        file.on('end', () => {
            files[fileField] = {
                buffer: Buffer.concat(buffer),
                mimeType: info.mimeType,
            };
        });
    });

    bb.on('field', (name, value) => {
        fields[name as TextFieldKey] = value;
    });

    bb.on('close', async () => {
        const parsedFields = await textFields.safeParseAsync(fields)
            .catch((err) => {
                reject(err);
                return null;
            });

        if (!parsedFields || !parsedFields.success) {
            return;
        }

        const allFilesPresent = Object.keys(fileFields).every((fileField) => {
            return files[fileField as Files]?.mimeType === fileFields[fileField as Files];
        });

        if (!allFilesPresent) {
            reject(new Error('Not all files are present'));
            return;
        }

        resolve({
            files: files as Record<Files, FileBuffers>,
            fields: parsedFields.data,
        });
    });

    req.pipe(bb);
});
