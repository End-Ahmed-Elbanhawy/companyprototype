"use server";

import { sendQuickInquiryEmail } from "../mails/quick-inquiry-email";
import { quickFormSchema, QuickFormValues } from "../schema";


export async function processQuickInquiry(formData: QuickFormValues) {

    const validator = quickFormSchema.safeParse(formData);

    if (!validator.success) { return { success: false, message: "invalid_input" } };

    const mailerData = validator.data;

    try {

        const [clientResponse, internalResponse] = await sendQuickInquiryEmail(mailerData);

        if (clientResponse.accepted.length > 0 && internalResponse.accepted.length > 0) {

            return {
                success: true,
                messageId: `${clientResponse.messageId} and ${internalResponse.messageId}`
            }
        } else {
            throw new Error("One or both emails failed to dispatch.");
        }

    } catch (error) {

        console.error("Email failed to send!", error);

        return {
            success: false,
            message: "failed_to_send_email"
        };
    }

}