import { NextApiResponse } from "next";
import { errors, Errors } from "../errors";

export const sendError = (res: NextApiResponse, code: Errors) => {
    return res.json({
        success: false,
        error: errors[code],
        code,
    });
};
