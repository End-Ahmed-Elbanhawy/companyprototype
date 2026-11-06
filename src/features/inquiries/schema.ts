import * as z from "zod";
import { selectFieldsConfiguration } from "./configs/quick-fields-config";
import { X } from "lucide-react";

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

export const inquiryItemSchema = z.object({
    id: z.uuid(),
    title: z.string().min(1),
    description: z.string().min(1),
    startingPrice: z.number().nonnegative(),
    img: z.string().min(1),
    category: z.enum(["product", "service", "repair"]),
    quantity: z.number().int().positive(),
    productType: z.string().min(1),
    slug: z.string().min(1)
})

export type InquiryItem = z.infer<typeof inquiryItemSchema>;