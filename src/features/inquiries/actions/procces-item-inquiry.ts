import { useInventory } from "../cart-slice";
import { InquiryItem, inquiryItemSchema } from "../schema";


export function processItemInquiry(formData: InquiryItem) {

    const validator = inquiryItemSchema.safeParse(formData);

    if (!validator.success) { return { success: false, message: "invalid_input" } };

    const itemData = validator.data;

    const addItem = useInventory((state) => state.addItem);

    try {

        const addingItem = addItem(itemData);

        if (addingItem.success) {

            return {
                success: true,
                messageId: `${addingItem.success}`
            }
        } else {
            throw new Error("Failed to add Item.");
        }

    } catch (error) {

        console.error("Failed to add Item!", error);

        return {
            success: false,
            message: "failed_to_add_item"
        };
    }

}