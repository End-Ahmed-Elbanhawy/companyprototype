"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InquiryItem } from "../schema";
import { useItemInquiryForm } from "../hooks/use-item-inquiry-form";
import { useFormState } from "react-hook-form";
import { useInventory } from "../cart-slice";
import { useEffect } from "react";

export default function ItemInquiryForm({ item }: { item: InquiryItem }) {

    // const cartItems = useInventory((state) => state.cart);

    // const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    // const currentQuantitry = existingCartItem ? existingCartItem.quantity : 1;

    const { form, handleSubmit, currentCartItemQuantity } = useItemInquiryForm(item);
    const { errors, isSubmitting } = useFormState({ control: form.control });

    useEffect(() => {

        // form.reset(
        //     {
        //         ...item,
        //         quantity: currentCartItemQuantity
        //     },
        //     {
        //         keepDefaultValues: false
        //     }
        // );
        form.setValue("quantity", currentCartItemQuantity);

        // }, [currentCartItemQuantity, item, form]);
    }, [currentCartItemQuantity, form]);

    // cartItems.map((cartItem) => {
    //     if (cartItem.id === item.id) {
    //         item.quantity = cartItem.quantity;
    //     }
    // });

    return (
        <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full pt-5 sm:p-0"
        >

            <Field data-invalid={!!errors.quantity}>
                <FieldLabel htmlFor="quantity">Inquire for this product</FieldLabel>
                <ButtonGroup>
                    <Input
                        id="quantity"
                        className="h-15"
                        // defaultValue={item.quantity}
                        min={1}
                        type="number"
                        aria-invalid={!!errors.quantity}
                        {...form.register("quantity", { valueAsNumber: true })}
                    />
                    <Button
                        type="submit"
                        variant="outline"
                        className="py-6 rounded-e-sm h-15"
                        disabled={isSubmitting}
                    >
                        {currentCartItemQuantity > 1 ? "update" : "Inquire"}
                    </Button>
                </ButtonGroup>
                {errors.quantity && (
                    <FieldError>
                        {errors.quantity.message?.toString() || "Invalid quantity"}
                    </FieldError>
                )}
            </Field>
        </form>
    );
};