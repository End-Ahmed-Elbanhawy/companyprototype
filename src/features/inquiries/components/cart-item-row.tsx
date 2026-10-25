import { Button } from "@/components/ui/button";
import { InquiryItem } from "../schema";
import { useInventory } from "../cart-slice";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CartItemRow({ item }: { item: InquiryItem }) {

    const t = useTranslations("directPurchasePage");

    const addItem = useInventory((state) => state.addItem);
    const deleteItem = useInventory((state) => state.deleteItem);
    const updateItem = useInventory((state) => state.updateItem);

    const [localQty, setLocalQty] = useState<string | number>(item.quantity);

    useEffect(() => {
        if (localQty !== item.quantity) {
            setLocalQty(item.quantity);
        }
    }, [item.quantity]);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setLocalQty(value);
        }
    }

    return (
        <div
            className="flex flex-row items-center justify-between gap-2"
        >
            <Image
                src={item.img}
                alt={item.title}
                width={50}
                height={50}
                className="rounded-sm"
                loading="lazy"
            />
            <div
                className="flex flex-col flex-1"
            >
                <div
                    className="flex items-center justify-between"
                >
                    <span
                        className="text-sm font-bold uppercase text-brand-secondary"
                    >
                        {item.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <span
                        className="text-xs font-bold uppercase text-brand-primary"
                    >
                        Starting: {item.startingPrice}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Button
                            className="flex items-center px-2 py-1 text-sm font-bold transition-all duration-200 ease-in-out bg-transparent rounded-sm text-brand-primary hover:border-brand-primary hover:border hover:bg-transparent"
                            onClick={() => updateItem(item, item.quantity - 1)}
                        >
                            -
                        </Button>
                        <Input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={localQty}
                            className="flex items-center w-12 text-sm font-bold text-center transition-all duration-200 ease-in-out bg-transparent border-none rounded-sm text-brand-primary hover:border hover:bg-transparent"
                            onChange={(e) => handleQuantityChange(e)}
                            onBlur={() => updateItem(item, Number(localQty) || 0)}
                        />
                        <Button
                            className="flex items-center px-2 py-1 text-sm font-bold transition-all duration-200 ease-in-out bg-transparent rounded-sm text-brand-primary hover:border-brand-primary hover:border hover:bg-transparent"
                            onClick={() => addItem(item)}
                        >
                            +
                        </Button>
                    </div>
                    <Button
                        className="text-sm font-bold uppercase transition-all duration-200 ease-in-out bg-transparent rounded-sm text-brand-tertiary hover:bg-transparent hover:brightness-90 hover:-translate-y-1 hover:text-red-600"
                        onClick={() => deleteItem(item)}
                    >
                        <Trash2 />
                    </Button>
                </div>

            </div>
        </div>
    )
}