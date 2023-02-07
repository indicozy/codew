import { env } from "../../env/server.mjs";
import { FileBuffers } from "../../types/file";
import { s3 } from "../s3";

export const uploadFiles = async <Files extends string>(files: Record<Files, FileBuffers>, uniqueKey: string) => {
    const prefix = `${uniqueKey}`;
    const promises: Promise<[Files, string]>[] = Object.keys(files).map((field) => {
        const file = files[field as Files];
        const key = `${prefix}_${field}`;

        const params = {
            Bucket: env.S3_BUCKET_NAME,
            Key: `${prefix}_${field}`,
            Body: file.buffer,
            ContentType: file.mimeType,
        };

        return new Promise(async (resolve) => {
            await s3.putObject(params);
            resolve([field as Files, key]);
        });
    });

    return (await Promise.all(promises)).reduce((acc, [field, key]) => {
        acc[field] = key;
        return acc;
    }, {} as Record<Files, string>);
};
