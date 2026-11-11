import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InquiryItem, inquiryItemSchema } from "./schema";
import * as z from "zod";

type validationResult = { success: true } | { success: false, error: z.ZodIssue[] };

interface CartState {
    cart: InquiryItem[],//Read
    addItem: (item: InquiryItem) => validationResult; //Create/Add
    updateItem: (item: InquiryItem, newQuantity: number) => validationResult;//Update( Increase / Decrease).
    deleteItem: (item: InquiryItem) => validationResult; //Hard Delete
    clearCart: () => void;
};


function validateItem(item: InquiryItem): validationResult {
    const validator = inquiryItemSchema.safeParse(item);

    if (!validator.success) {
        return {
            success: false,
            error: validator.error.issues
        };
    };

    return {
        success: true,
    };
}

export const useInventory = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addItem: (newItem: InquiryItem) => {
                const checkedItem = validateItem(newItem);

                if (!checkedItem.success) return checkedItem;

                set((state) => {

                    let itemExists: boolean = false;

                    const newCart = state.cart.map((item) => {
                        if (item.id === newItem.id) {
                            itemExists = true;
                            return {
                                ...item,
                                quantity: item.quantity + newItem.quantity
                            };
                        };
                        return item;
                    });

                    if (!itemExists) {
                        return {
                            cart:
                                [...state.cart, newItem]
                        };
                    };

                    return { cart: newCart };
                })

                return checkedItem;
            },
            updateItem: (oldItem: InquiryItem, newQuantity: number) => {
                const checkedItem = validateItem(oldItem);

                if (!checkedItem.success) return checkedItem;

                set((state) => {

                    if (newQuantity === 0) {
                        return {
                            cart:
                                state.cart.filter(item => item.id !== oldItem.id)
                        }
                    }
                    const newCart = state.cart.map((item) => {
                        if (item.id === oldItem.id) {
                            return { ...item, quantity: newQuantity };
                        }
                        return item;
                    })
                    return {
                        cart:
                            newCart
                    };

                })
                return checkedItem;
            },
            deleteItem: (oldItem: InquiryItem) => {
                const checkedItem = validateItem(oldItem);

                if (!checkedItem.success) return checkedItem;
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== oldItem.id)
                }))
                return checkedItem;
            },
            clearCart: () => set({ cart: [] })
        }),
        {
            name: "inquiry-cart-storage",
        }
    )
);