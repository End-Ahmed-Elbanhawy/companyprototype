import { InquiryItem } from "../schema";

export default function CartItemRow({ item }: { item: InquiryItem }) {

    console.log(item);

    return (
        <div
            className="flex flex-row items-center justify-between gap-2"
        >

        </div>
    )
}