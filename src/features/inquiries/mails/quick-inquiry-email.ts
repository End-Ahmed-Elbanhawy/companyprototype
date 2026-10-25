import { env } from "@/lib/nodemailer/env";
import { transporter } from "@/lib/nodemailer/transporter";
import { type QuickFormValues } from "../schema";

function buildPlainTextFallback(formData: QuickFormValues) {
    return `
                  Name: ${formData.fullName}
                  Email: ${formData.emailAddress}
                  Phone: ${formData.phoneNumber}
                  Message: ${formData.systemRequirements}
            `;
};

async function sendClientReceipt(formData: QuickFormValues) {
    return transporter.sendMail({
        from: env.EMAIL_USER,
        to: formData.emailAddress,
        subject: "Quick Inquiry",
        text: buildPlainTextFallback(formData),
        html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #0056b3;">Quote Request Received</h2>
                    <p>Dear ${formData.fullName},</p>
                    <p>Thank you for reaching out to International EAS. We have received your inquiry regarding our <strong>${formData.systemRequirements}</strong> systems.</p>
                    <p>Our engineering and sales team is currently reviewing your request. You can expect a personalized response or a follow-up call within 24 to 48 hours to discuss your facility's specific needs.</p>
    
                    <div style="background-color: #f8f9fa; padding: 15px; margin-top: 20px; border-left: 4px solid #0056b3;">
                        <h4 style="margin-top: 0;">Your Submission Summary:</h4>
                        <p><strong>Name:</strong> ${formData.fullName}</p>
                        <p><strong>Email:</strong> ${formData.emailAddress}</p>
                        <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
                        <p><strong>System of Interest:</strong> ${formData.systemRequirements}</p>
                    </div>
    
                    <p style="margin-top: 30px;">Best regards,<br><strong>The International EAS Team</strong></p>
                </div>
            `
    });
};

async function sendInternalAlert(formData: QuickFormValues) {
    return transporter.sendMail({
        from: env.EMAIL_USER,
        to: env.EMAIL_USER,
        subject: "Quick Inquiry",
        text: buildPlainTextFallback(formData),
        html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2 style="color: #d9534f; border-bottom: 2px solid #d9534f; padding-bottom: 5px;">New Quick Inquiry Lead</h2>
                    
                    <h3>Contact Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd; width: 30%;"><strong>Name:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${formData.fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${formData.emailAddress}">${formData.emailAddress}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${formData.phoneNumber}</td>
                        </tr>
                    </table>

                    <h3>Requested System</h3>
                    <p style="font-size: 16px; font-weight: bold; background-color: #f4f4f4; padding: 10px;">
                        ${formData.systemRequirements}
                    </p>
                </div>
            `
    });
};


export async function sendQuickInquiryEmail(formData: QuickFormValues) {
    return Promise.all([
        sendClientReceipt(formData),
        sendInternalAlert(formData)
    ])
}

// export async function sendQuickInquiryEmail(formData: QuickFormValues) {

//     const recipients = [formData.emailAddress, env.EMAIL_USER];

//     return transporter.sendMail({
//         from: env.EMAIL_USER,
//         to: recipients,
//         subject: "Quick Inquiry",
//         text: `
//                   Name: ${formData.fullName}
//                   Email: ${formData.emailAddress}
//                   Phone: ${formData.phoneNumber}
//                   Message: ${formData.systemRequirements}
//             `,
//         html: `
//                   <h1>Quick Inquiry</h1>
//                   <p>Name: ${formData.fullName}</p>
//                   <p>Email: ${formData.emailAddress}</p>
//                   <p>Phone: ${formData.phoneNumber}</p>
//                   <p>Message: ${formData.systemRequirements}</p>
//             `
//     });
// };

