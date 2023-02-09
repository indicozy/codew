/**
 * A dictionary of file fields.
 * file field name as key and the mime type as value.
 */
export type FileFields<T extends string> = Record<T, string>;

/**
 * An object with file as buffer and the mime type.
 */
export interface FileBuffers {
    buffer: Buffer;
    mimeType: string;
}
