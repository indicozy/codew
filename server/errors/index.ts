export enum Errors {
    EMAIL_ALREADY_EXISTS,
    FORM_ERROR,
    INTERNAL_SERVER_ERROR,
}

export const errors: Record<Errors, string> = {
    [Errors.EMAIL_ALREADY_EXISTS]: 'Email already exists',
    [Errors.FORM_ERROR]: 'Form error',
    [Errors.INTERNAL_SERVER_ERROR]: 'Internal server error',
}
