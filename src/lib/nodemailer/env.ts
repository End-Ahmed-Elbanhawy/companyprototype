import * as z from "zod";

export const env = z.object({
    EMAIL_USER: z.email(),
    EMAIL_APP_PASSWORD: z.string().min(1)
}).parse(process.env);