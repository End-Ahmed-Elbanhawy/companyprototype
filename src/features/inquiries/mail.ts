import { env } from "@/lib/nodemailer/env";
import { transporter } from "@/lib/nodemailer/transporter";
import { type QuickFormValues } from "./schema";


export async function sendQuickInquiryEmail(formData: QuickFormValues) {

    const recipients = [formData.emailAddress, env.EMAIL_USER];

    return transporter.sendMail({
        from: env.EMAIL_USER,
        to: recipients,
        subject: "Quick Inquiry",
        text: `
                  Name: ${formData.fullName}
                  Email: ${formData.emailAddress}
                  Phone: ${formData.phoneNumber}
                  Message: ${formData.systemRequirements}
            `,
        html: `
                  <h1>Quick Inquiry</h1>
                  <p>Name: ${formData.fullName}</p>
                  <p>Email: ${formData.emailAddress}</p>
                  <p>Phone: ${formData.phoneNumber}</p>
                  <p>Message: ${formData.systemRequirements}</p>
            `
    })
}