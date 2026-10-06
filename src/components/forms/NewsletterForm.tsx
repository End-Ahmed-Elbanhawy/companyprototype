"use client";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Field, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

const formSchema = z.object({
    emailAddress: z
        .email({
            message: "emailAddress.invalidMessage",
        })
        .min(1, "emailAddress.minEmailAddress"),
});

function useNewsletterFormLogic() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: "",
        },
    });
    function handleSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form Succefully validated and submitted :", values);
    };
    return { form, handleSubmit }
}






export default function NewsletterForm() {

    const t = useTranslations("footer.newsletterform");

    const { form, handleSubmit } = useNewsletterFormLogic();

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex items-center justify-center mt-2">
            <Field data-invalid={!!form.formState.errors.emailAddress}>
                <Input
                    id="emailAddress"
                    placeholder={t("emailAddress.placeholder")}
                    className="w-full px-5 placeholder-gray-500 border rounded-r-none outline-none border-white/10 bg-white/5 text-brand-tertiary py-7 rounded-l-xs focus:border-brand-primary focus:ring-0 me-0"
                    aria-invalid={!!form.formState.errors.emailAddress}
                    {...form.register("emailAddress")}

                />
                {form.formState.errors.emailAddress && (
                    <FieldError>
                        {t(form.formState.errors.emailAddress.message!)}
                    </FieldError>
                )}
            </Field>
            <Button type="submit" className="bg-brand-primary text-brand-tertiary px-5 py-[1.78rem] rounded-r-xs rounded-l-none hover:bg-brand-primary hover:brightness-90 transition-all font-bold duration-200 ms-0 ease-in-out">
                <SendHorizontal className="size-6" strokeWidth={3} />
            </Button>
        </form>
    );
};