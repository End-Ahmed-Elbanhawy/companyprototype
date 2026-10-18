import * as z from "zod";

type fieldConfig = {
    name: string;
    type: "text" | "tel" | "email";
    dir?: "ltr" | "rtl";
};

export const normalFieldsConfiguration = [
    {
        name: "fullName",
        type: "text",
    },
    {
        name: "phoneNumber",
        type: "tel",
        dir: "ltr"
    },
    {
        name: "emailAddress",
        type: "email",
        dir: "ltr"
    }
] satisfies readonly fieldConfig[];

export const selectFieldsConfiguration = {
    name: "systemRequirements",
    type: "text",
    options:
        [
            "heavy-duty-sliding",
            "high-speed-roll-up",
            "thermal-clean-room",
            "crash-proof-warehouse"
        ]
} as const;

export const inquiryFormSchema = z.object({
    fullName: z.string().trim().min(2).max(50),
    emailAddress: z.string().trim().min(1).max(254).toLowerCase().pipe(z.email()),
    companyName: z.string().trim().max(255).optional(),
    phoneNumber: z.string().trim().min(8).max(30).regex(/^\+?[0-9\s\-().]+$/)
});

export const quickFormSchema = inquiryFormSchema.extend({
    systemRequirements: z.enum(selectFieldsConfiguration.options)
});

export type InquiryFormValues = z.infer<typeof inquiryFormSchema>;
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