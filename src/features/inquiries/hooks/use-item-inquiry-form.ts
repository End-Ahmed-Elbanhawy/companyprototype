"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { InquiryItem, inquiryItemSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
// import { processItemInquiry } from "../actions/procces-item-inquiry";
import { useInventory } from "../cart-slice";

export function useItemInquiryForm(item: InquiryItem) {

    const addItem = useInventory((state) => state.addItem);
    const updateItem = useInventory((state) => state.updateItem);


    const cartItems = useInventory((state) => state.cart);

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    const currentCartItemQuantity = existingCartItem ? existingCartItem.quantity : 1;

    const t = useTranslations("inquiryForm");

    const form = useForm<InquiryItem>(
        {
            resolver: zodResolver(inquiryItemSchema),
            defaultValues: {
                ...item,
                quantity: currentCartItemQuantity,
            }
        }
    );

    function handleSubmit(values: InquiryItem): void {


        try {

            let response = null;

            if (existingCartItem) {
                response = updateItem(values, values.quantity);
            }
            else {
                response = addItem(values);
            }

            if (!response.success) {
                throw new Error("Adding error!");
            };

            // toast.success(t("toast.success"), {
            //     position: "bottom-center"
            // });
            toast.success("item added successfully", {
                position: "bottom-center"
            });

            // form.reset();

        } catch (error) {

            console.error("Adding error!!!", error);

            toast.error(t("toast.error"), {
                position: "bottom-center"
            });

        };
    };

    return { form, handleSubmit, currentCartItemQuantity };
};