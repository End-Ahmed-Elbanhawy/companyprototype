"use client";

import { InquiryItem } from "@/features/inquiries/schema";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useInventory } from "@/features/inquiries/cart-slice";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function ProductCard({ item }: { item: InquiryItem }) {

  const t = useTranslations("productCard");

  const addItem = useInventory((state) => state.addItem);

  return (
    <Card className="w-full h-full max-w-3xl p-5 transition-colors duration-200 ease-in-out border border-transparent rounded-sm shadow-md hover:border-brand-primary">
      <div className="relative w-full h-48 overflow-hidden bg-gray-200 rounded-md" >
        <img
          src={item.img}
          alt="Event cover"
          className="absolute inset-0 z-20 object-cover w-full"
        />
      </div>
      <CardHeader className="flex flex-col gap-5 px-0" >
        <CardTitle className="text-xl font-bold leading-tight uppercase text-start min-h-12 text-brand-secondary ">{item.title}</CardTitle>
        <CardDescription>
          <div className="ProductDescription text-brand-neutral line-clamp-2 min-h-10">
            {item.description}
          </div>
        </CardDescription>
        <Button
          className="self-center px-10 py-5 text-sm font-bold uppercase transition-all duration-200 ease-in-out rounded-sm bg-brand-primary text-brand-tertiary hover:bg-brand-primary hover:brightness-90 hover:-translate-y-1"
          onClick={() => addItem(item)}
        >
          {/* Add to Inquiry cart */}
          {t("buttonLabel")}
        </Button>
      </CardHeader>
    </Card>
  );
};