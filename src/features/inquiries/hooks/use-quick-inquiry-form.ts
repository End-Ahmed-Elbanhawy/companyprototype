import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { quickFormSchema, QuickFormValues } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { processQuickInquiry } from "../inquiry-actions";

export function useQuickInquiryForm() {

    const t = useTranslations("InquiryForm");

    const form = useForm<QuickFormValues>(
        {
            resolver: zodResolver(quickFormSchema),
            defaultValues: {
                fullName: "",
                emailAddress: "",
                companyName: "",
                phoneNumber: "",
                systemRequirements: undefined,
            }
        }
    );

    async function handleSubmit(values: QuickFormValues): Promise<void> {
        console.log("Form Successfully validated and submitted :", values);

        try {

            const response = await processQuickInquiry(values);

            if (!response.success) {
                throw new Error("Network error!");
            };

            toast.success(t("toast.success"), {
                position: "bottom-center"
            });

            form.reset();

        } catch (error) {

            console.error("Network error!!!", error);

            toast.error(t("toast.error"), {
                position: "bottom-center"
            });

        };
    };

    return { form, handleSubmit };
}