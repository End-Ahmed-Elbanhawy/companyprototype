import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InquiryFormValues } from "./schema";

// export interface item{
//     id: 
// }

interface CartState {
    cart: InquiryFormValues[],
    addItem: (item: InquiryFormValues) => void;
    updateItem: (item: InquiryFormValues) => void;
    deleteItem: (item: InquiryFormValues) => void;
    clearCart: () => void;
}

// export const useInventory = create<CartState>()(
//     persist(
//         (set) => ({
//             cart: [],
//             addItem: (item: InquiryFormValues) => set((state) => ({
//                 if(state.cart.find((item)=> item.))
//             })),
//             updateItem: (item: InquiryFormValues) => set((state) => ({

//             })),
//             deleteItem: (item: InquiryFormValues) => set((state) => ({

//             })),
//             clearCart: () => set({ cart: [] })
//         }),
//         {
//             name: "inquiry-cart-storage",
//         }
//     )
// )