import * as z from "zod";
import { selectFieldsConfiguration } from "./configs/quick-fields-config";

export const cartInquiryFormSchema = z.object({
    fullName: z.string().trim().min(2).max(50),
    emailAddress: z.string().trim().min(1).max(254).toLowerCase().pipe(z.email()),
    companyName: z.string().trim().max(255).optional(),
    phoneNumber: z.string().trim().min(8).max(30).regex(/^\+?[0-9\s\-().]+$/)
});

export const quickFormSchema = cartInquiryFormSchema.extend({
    systemRequirements: z.enum(selectFieldsConfiguration.options)
});

export type CartInquiryFormValues = z.infer<typeof cartInquiryFormSchema>;
export type QuickFormValues = z.infer<typeof quickFormSchema>;

export interface InquiryItem {
    id: number;
    title: string;
    description: string;
    startingPrice: number;
    img: string;
    link: string;
    category: "product" | "service" | "repair";
    quantity: number;
}