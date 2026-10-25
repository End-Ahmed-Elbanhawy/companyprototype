import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InquiryItem } from "./schema";

interface CartState {
    cart: InquiryItem[],//Read
    addItem: (item: InquiryItem) => void; //Create/Add
    updateItem: (item: InquiryItem, newQuantity: number) => void;//Update( Increase / Decrease).
    deleteItem: (item: InquiryItem) => void; //Hard Delete
    clearCart: () => void;
}

export const useInventory = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addItem: (newItem: InquiryItem) => set((state) => {

                let itemExists: boolean = false;

                const newCart = state.cart.map((item) => {
                    if (item.id === newItem.id) {
                        itemExists = true;
                        return {
                            ...item,
                            quantity: item.quantity + 1
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
            }),
            updateItem: (oldItem: InquiryItem, newQuantity: number) => set((state) => {

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

            }),
            deleteItem: (oldItem: InquiryItem) => set((state) => ({ cart: state.cart.filter((item) => item.id !== oldItem.id) })),
            clearCart: () => set({ cart: [] })
        }),
        {
            name: "inquiry-cart-storage",
        }
    )
);