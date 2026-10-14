"use server";

import { sendQuickInquiryEmail } from "./mail";
import { quickFormSchema, QuickFormValues } from "./schema";


export async function processQuickInquiry(formData: QuickFormValues) {

    const validator = quickFormSchema.safeParse(formData);

    if (!validator.success) { return { success: false, message: "invalid_input" } };

    const mailerData = validator.data;

    try {

        const quickInquiryEmailResponse = await sendQuickInquiryEmail(mailerData);

        if (quickInquiryEmailResponse.accepted.length > 0) {

            return {
                success: true,
                messageId: quickInquiryEmailResponse.messageId
            }
        } else {
            throw new Error(quickInquiryEmailResponse.messageId);
        }

    } catch (error) {

        console.error("Email faild to send!", error);

        return {
            success: false,
            message: "failed_to_send_email"
        };
    }

}
