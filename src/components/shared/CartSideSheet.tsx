"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useInventory } from "@/features/inquiries/cart-slice";
import CartInquiryForm from "@/features/inquiries/components/cart-inquiry-form";
import CartItemRow from "@/features/inquiries/components/cart-item-row";
import { useTranslations } from "next-intl";
import React from "react";

export default function CartSideSheet({ children }: { children: React.ReactNode }) {

    const t = useTranslations("directPurchasePage");

    const cartItems = useInventory((state) => state.cart);

    const clearCart = useInventory((state) => state.clearCart);

    return (
        <Sheet>
            <SheetTrigger asChild>
                {/* <Button
                    className="self-center text-sm font-bold uppercase transition-all duration-200 ease-in-out rounded-sm lg:self-end bg-brand-primary text-brand-tertiary me-4 lg:me-6 px-15 py-7 hover:bg-brand-primary hover:brightness-90 hover:-translate-y-1"
                >
                    {t("proceedButton")}
                </Button> */}
                {children}
            </SheetTrigger>
            <SheetContent
                className="w-full h-full px-8 bg-white border-none rounded-sm shadow-2xl outline-none py-15 text-brand-secondary lg:max-w-xl sm:py-3 sm:px-2"
            >
                <div className="flex flex-col h-full">
                    <div
                        className="border-b "
                    >
                        <h2
                            className="text-2xl font-bold uppercase text-brand-secondary"
                        >
                            Inquiry Cart
                        </h2>
                    </div>
                    <div
                        className="flex-1 overflow-y-auto"
                    >
                        {cartItems.length > 0 ?
                            cartItems.map((item, index) => (
                                <CartItemRow key={index} item={item} />
                            )) : t("cart.emptyCart")}
                    </div>
                    <div
                        className="flex items-center justify-between"
                    >
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    className="px-10 py-5 text-sm font-bold uppercase transition-all duration-200 ease-in-out rounded-sm bg-brand-primary text-brand-tertiary hover:bg-brand-primary hover:brightness-90 hover:-translate-y-1"
                                >
                                    {t("cart.contactButtonLabel")}
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="flex justify-center">
                                <CartInquiryForm />
                            </SheetContent>
                        </Sheet>
                        <Button
                            className="px-10 py-5 text-sm font-bold uppercase transition-all duration-200 ease-in-out bg-red-500 rounded-sm text-brand-tertiary hover:bg-red-500 hover:brightness-90 hover:-translate-y-1"
                            onClick={() => {
                                clearCart()
                            }}
                        >
                            {t("cart.clearCartButtonLabel")}
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};