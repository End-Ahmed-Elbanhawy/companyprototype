import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InquiryFormValues, InquiryItem } from "./schema";

interface CartState {
    cart: InquiryItem[],//Read
    addItem: (item: InquiryItem) => void; //Create/Add
    updateItem: (item: InquiryItem) => void;//Update
    deleteItem: (item: InquiryItem) => void; //Delete
    clearCart: () => void;
}

export const useInventory = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addItem: (newItem: InquiryItem) => set((state) => {

                state.cart.map((item) => {
                    if (item.id === newItem.id) {
                        item.quantity += 1;
                        console.log("current Item:", item.quantity);
                        return { cart: state.cart };
                    };
                });

                // const currentItem = state.cart.find((item) => item.id === newItem.id);
                // console.log("current Item:", currentItem?.quantity);
                // if (currentItem) {
                //     return {
                //         cart:
                //             state.cart.map((item) => item.id === currentItem.id ? { ...item, quantity: item.quantity + 1 } : item)
                //     };
                // };
                return { cart: [...state.cart, newItem] };
            }),
            updateItem: (newItem: InquiryItem) => set((state) => {
                state.cart.map((item) => {
                    if (item.id === newItem.id) {

                    }
                })
                return { cart: state.cart };

            }),
            deleteItem: (oldItem: InquiryItem) => set((state) => {

                state.cart.map((item) => {
                    if (item.id === oldItem.id) {

                    }
                })
                return { cart: state.cart };
            }),
            clearCart: () => set({ cart: [] })
        }),
        {
            name: "inquiry-cart-storage",
        }
    )
)