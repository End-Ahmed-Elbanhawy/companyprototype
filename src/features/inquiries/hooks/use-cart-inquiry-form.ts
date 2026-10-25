import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { cartInquiryFormSchema, CartInquiryFormValues } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useInventory } from "../cart-slice";
import { processCartInquiry } from "../actions/process-cart-inquiry";

export function useCartInquiryForm() {

    const cartItems = useInventory((state) => state.cart);

    const t = useTranslations("inquiryForm");

    const form = useForm<CartInquiryFormValues>(
        {
            resolver: zodResolver(cartInquiryFormSchema),
            defaultValues: {
                fullName: "",
                emailAddress: "",
                companyName: "",
                phoneNumber: "",
            }
        }
    );

    async function handleSubmit(values: CartInquiryFormValues): Promise<void> {
        console.log("Form Successfully validated and submitted :", values);

        try {

            const response = await processCartInquiry(values, cartItems);

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