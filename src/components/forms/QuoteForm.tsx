'use client';

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldLabel, FieldError } from "../ui/field";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { useTranslations } from "use-intl";
import { toast } from "sonner";


export const quoteFormSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: "fields.fullName.Messages.min" })
        .max(50, { message: "fields.fullName.Messages.max" }),

    emailAddress: z
        .email({ message: "fields.emailAddress.Message" })
    // .min(2, { message: "Email address is required." })
    ,

    systemRequirements: z
        .string()
        .min(1, { message: "fields.systemRequirements.Message" })
});

function useQuoteFormLogic() {

    const t = useTranslations("QuoteForm.fields")
    const form = useForm<z.infer<typeof quoteFormSchema>>(
        {
            resolver: zodResolver(quoteFormSchema),
            defaultValues: {
                fullName: "",
                emailAddress: "",
                systemRequirements: "",
            }
        }
    )
    function handleSubmit(values: z.infer<typeof quoteFormSchema>) {
        console.log("Form Successfully validated and submitted :", values);

        toast.success(t("toast.Success"), {
            position: "bottom-center"
        })
    }

    return { form, handleSubmit };
}

export default function QuoteForm() {

    const t = useTranslations("QuoteForm")

    const { form, handleSubmit } = useQuoteFormLogic();

    return (
        <Card className="w-full h-full border-none! shadow-none! bg-transparent! ring-0">
            <CardHeader className="px-0 pt-0 pb-8">
                <CardTitle className="pl-4 text-3xl font-black uppercase border-l-4 border-brand-primary">
                    {t("title")}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <Field data-invalid={!!form.formState.errors.fullName}>
                        <FieldLabel htmlFor="fullName" className="text-sm font-bold text-gray-700 uppercase">
                            {t("fields.fullName.Label")}
                        </FieldLabel>
                        <Input
                            id="fullName"
                            placeholder={t("fields.fullName.Placeholder")}
                            aria-invalid={!!form.formState.errors.fullName}
                            {...form.register("fullName")}
                            className="h-12 border-gray-200 bg-gray-50"
                        />
                        {form.formState.errors.fullName && (
                            <FieldError>
                                {t(form.formState.errors.fullName.message!)}
                            </FieldError>
                        )}
                    </Field>
                    <Field data-invalid={!!form.formState.errors.emailAddress} >
                        <FieldLabel htmlFor="emailAddress" className="text-sm font-bold text-gray-700 uppercase">
                            {t("fields.emailAddress.Label")}
                        </FieldLabel>
                        <Input
                            id="emailAddress"
                            placeholder="example@gmail.com"
                            aria-invalid={!!form.formState.errors.emailAddress}
                            {...form.register("emailAddress")}
                            className="h-12 border-gray-200 bg-gray-50"
                        />
                        {form.formState.errors.emailAddress && (
                            <FieldError>
                                {t(form.formState.errors.emailAddress.message!)}
                            </FieldError>
                        )}
                    </Field>

                    <Controller
                        control={form.control}
                        name="systemRequirements"
                        render={({ field, fieldState }) => (
                            <Field data-invalid={!!fieldState.error}>
                                <FieldLabel htmlFor="systemRequirements" className="text-sm font-bold text-gray-700 uppercase">
                                    {t("fields.systemRequirements.Label")}
                                </FieldLabel>
                                <Select onValueChange={field.onChange} value={field.value} name={field.name}>
                                    <SelectTrigger id="systemRequirements" aria-invalid={!!fieldState.error} className="h-12 text-gray-700 border-gray-200 bg-gray-50">
                                        <SelectValue placeholder={t("fields.systemRequirements.Placeholder")} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="heavy-duty-sliding">Heavy-Duty Sliding</SelectItem>
                                        <SelectItem value="high-speed-roll-up">High-Speed Roll-up</SelectItem>
                                        <SelectItem value="thermal-clean-room">Thermal Clean-Room</SelectItem>
                                        <SelectItem value="crash-proof-warehouse">Crash-Proof WareHouse</SelectItem>
                                    </SelectContent>
                                </Select>
                                {fieldState.error && (
                                    <FieldError>
                                        {t(fieldState.error.message!)}
                                    </FieldError>
                                )}
                            </Field>
                        )}
                    />
                    <Button type="submit" className="w-full px-10 transition-all duration-200 ease-in-out rounded-sm bg-brand-primary text-brand-tertiary py-7 md:px-7 md:py-5 hover:bg-brand-primary hover:brightness-90 hover:-translate-y-1">
                        {t("buttonLabel")}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );

};