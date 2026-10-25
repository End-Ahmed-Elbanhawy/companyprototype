'use client';

import { useFormState } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CartInquiryFormValues } from "../schema";
import { useCartInquiryForm } from "../hooks/use-cart-inquiry-form";
import { cartFieldConfiguration } from "../configs/cart-fields-config";

export default function CartInquiryForm() {

    const t = useTranslations("inquiryForm");

    const { form, handleSubmit } = useCartInquiryForm();

    const { errors, isSubmitting } = useFormState({ control: form.control });

    return (
        <Card className="w-full h-full border-none! shadow-none! bg-transparent! ring-0 py-2 px-5">
            <CardHeader className="px-0 pt-0 pb-8">
                <CardTitle className="text-3xl font-black uppercase pe-4">
                    {t("title")}
                </CardTitle>
            </CardHeader>
            <CardContent className="h-full p-0">
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col items-center justify-between h-full"
                    noValidate
                >
                    <div
                        className="w-full h-full"
                    >
                        {cartFieldConfiguration.map((field) => {

                            const fieldName = field.name as keyof CartInquiryFormValues;

                            const formError = errors[fieldName];

                            return (
                                <Field
                                    data-invalid={!!formError}
                                    key={fieldName}
                                    className="pb-5"
                                >
                                    <FieldLabel htmlFor={fieldName} className="text-sm font-bold text-gray-700 uppercase ">
                                        {t(`normalFields.${fieldName}.label`)}
                                    </FieldLabel>
                                    <Input
                                        id={fieldName}
                                        dir={field.dir}
                                        type={field.type}
                                        placeholder={t(`normalFields.${fieldName}.placeholder`)}
                                        aria-invalid={!!formError}
                                        {...form.register(fieldName)}
                                        className="h-12 border-gray-200 bg-gray-50 rtl:text-right"
                                    />
                                    {formError && (
                                        <FieldError>
                                            {t(`normalFields.${fieldName}.errors.${formError.type!}`)}
                                        </FieldError>
                                    )}
                                </Field>
                            )
                        })}
                    </div>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-10 transition-all duration-200 ease-in-out rounded-sm bg-brand-primary text-brand-tertiary py-7 md:px-7 md:py-5 hover:bg-brand-primary hover:brightness-90 hover:-translate-y-1"
                    >
                        {t("buttonLabel")}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );

};