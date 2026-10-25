'use client';

import { Controller, useFormState } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { QuickFormValues } from "../schema";
import { useQuickInquiryForm } from "../hooks/use-quick-inquiry-form";
import { quickFieldsConfiguration, selectFieldsConfiguration } from "../configs/quick-fields-config";

import { Fragment } from "react";

export default function QuickInquiryForm() {

    const t = useTranslations("inquiryForm");

    const { form, handleSubmit } = useQuickInquiryForm();

    const { errors, isSubmitting } = useFormState({ control: form.control });

    return (
        <Card className="w-full h-full border-none! shadow-none! bg-transparent! ring-0">
            <CardHeader className="px-0 pt-0 pb-8">
                <CardTitle className="text-3xl font-black uppercase border-e-4 pe-4 border-brand-primary">
                    {t("title")}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-6"
                    noValidate
                >
                    {quickFieldsConfiguration.map((configItem) => {

                        const fieldName = configItem.name as keyof QuickFormValues;

                        const formError = errors[fieldName];

                        return (
                            <Fragment key={fieldName}>
                                {configItem.type === "select" ? (
                                    <Controller
                                        control={form.control}
                                        name="systemRequirements"
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={!!fieldState.error}>
                                                <FieldLabel htmlFor="systemRequirements" className="text-sm font-bold text-gray-700 uppercase">
                                                    {t("selectFields.systemRequirements.label")}
                                                </FieldLabel>
                                                <Select onValueChange={field.onChange} value={field.value} name={field.name}>
                                                    <SelectTrigger id="systemRequirements" aria-invalid={!!fieldState.error} className="h-12 text-gray-700 border-gray-200 bg-gray-50">
                                                        <SelectValue placeholder={t("selectFields.systemRequirements.placeholder")} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {selectFieldsConfiguration.options.map((option) => {
                                                            return (
                                                                <SelectItem
                                                                    value={option}
                                                                    key={option}
                                                                    className="cursor-pointer"
                                                                >
                                                                    {t(`selectFields.systemRequirements.options.${option}`)}
                                                                </SelectItem>
                                                            )
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                                {fieldState.error && (
                                                    <FieldError>
                                                        {t(`selectFields.systemRequirements.errors.${fieldState.error.type}`!)}
                                                    </FieldError>
                                                )}
                                            </Field>
                                        )}
                                    />
                                ) : (
                                    <Field data-invalid={!!formError}>
                                        <FieldLabel htmlFor={fieldName} className="text-sm font-bold text-gray-700 uppercase">
                                            {t(`normalFields.${fieldName}.label`)}
                                        </FieldLabel>
                                        <Input
                                            id={fieldName}
                                            dir={configItem.dir}
                                            type={configItem.type}
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
                                )}
                            </Fragment>
                        );
                    })}
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