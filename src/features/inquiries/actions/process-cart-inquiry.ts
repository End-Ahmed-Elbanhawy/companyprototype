"use server";

import { sendCartInquiryEmail } from "../mails/cart-inquiry-email";
import { cartInquiryFormSchema, CartInquiryFormValues, InquiryItem } from "../schema";




export async function processCartInquiry(formData: CartInquiryFormValues, cartItems: InquiryItem[]) {

    const validator = cartInquiryFormSchema.safeParse(formData);

    if (!validator.success) { return { success: false, message: "invalid_input" } };

    const mailerData = validator.data;

    try {

        const [clientResponse, internalResponse] = await sendCartInquiryEmail(mailerData, cartItems);

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
