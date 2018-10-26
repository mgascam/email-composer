export const SEND_EMAIL = 'SEND_EMAIL';

export function sendEmail(email) {
    return { type: SEND_EMAIL, email };
}