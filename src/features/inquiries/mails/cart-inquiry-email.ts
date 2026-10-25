import { env } from "@/lib/nodemailer/env";
import { transporter } from "@/lib/nodemailer/transporter";
import { type InquiryItem, type CartInquiryFormValues } from "../schema";

function buildPlainTextFallback(formData: CartInquiryFormValues) {
    return `
                  Name: ${formData.fullName}
                  Company: ${formData.companyName}
                  Email: ${formData.emailAddress}
                  Phone: ${formData.phoneNumber}
            `;
};

function buildInquiryRows(cartItems: InquiryItem[]) {
    return cartItems.map((item) => {
        return (
            `<tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;"> ${item.title} </td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;"> ${item.category} </td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;"> ${item.quantity} </td>
                </tr>
                `
        )
    }).join("");
};

async function sendClientReceipt(formData: CartInquiryFormValues, cartItems: InquiryItem[]) {
    return transporter.sendMail({
        from: env.EMAIL_USER,
        to: formData.emailAddress,
        subject: "Cart Inquiry",
        text: buildPlainTextFallback(formData),
        html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                    <h2 style="color: #0056b3;">Quote Request Received</h2>
                    <p>Dear ${formData.fullName},</p>
                    <p>Thank you for contacting International EAS. We have successfully received the quote request for your selected industrial access systems.</p>
                    <p>Our team is reviewing your requested items and quantities. We will reach out within 24 to 48 hours to provide pricing and discuss installation requirements for ${formData.companyName}.</p>

                    <h3 style="margin-top: 30px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Your Requested Items</h3>
                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead>
                            <tr style="background-color: #f4f4f4;">
                                <th style="padding: 10px; border-bottom: 2px solid #ddd;">System</th>
                                <th style="padding: 10px; border-bottom: 2px solid #ddd;">Category</th>
                                <th style="padding: 10px; border-bottom: 2px solid #ddd;">Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${buildInquiryRows(cartItems)}
                        </tbody>
                    </table>
                    <p style="margin-top: 30px;">Best regards, <br><strong>The company Team </strong></p>
                </div>
        `
    });
};

async function sendInternalAllert(formData: CartInquiryFormValues, cartItems: InquiryItem[]) {
    return transporter.sendMail({
        from: env.EMAIL_USER,
        to: env.EMAIL_USER,
        subject: "Quick Inquiry",
        text: buildPlainTextFallback(formData),
        html: `
            <div style = "font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #d9534f; border-bottom: 2px solid #d9534f; padding-bottom: 5px;"> New Cart Inquiry Lead </h2>
                <h3> Client Details </h3>
                <table style = "width: 100%; max-width: 600px; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; width: 30%;"> <strong>Company: </strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"> <strong>${formData.companyName} </strong></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"> <strong>Contact Name: </strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"> ${formData.fullName} </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"> <strong>Email: </strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"> <a href="mailto:${formData.emailAddress}"> ${formData.emailAddress} </a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"> <strong>Phone: </strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"> ${formData.phoneNumber} </td>
                    </tr>
                </table>
                <h3> Cart Contents </h3>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="background-color: #333; color: #fff;">
                        <th style="padding: 10px; border: 1px solid #555;"> ID </th>
                        <th style="padding: 10px; border: 1px solid #555;"> System Title </th>
                        <th style="padding: 10px; border: 1px solid #555;"> Qty </th>
                    </tr>
                </thead>
                    <tbody>
                        ${buildInquiryRows(cartItems)}
                    </tbody>
                </table>
            </div>
        `
    });
};


export async function sendCartInquiryEmail(formData: CartInquiryFormValues, cartItems: InquiryItem[]) {
    return Promise.all([
        sendClientReceipt(formData, cartItems),
        sendInternalAllert(formData, cartItems)
    ])
}