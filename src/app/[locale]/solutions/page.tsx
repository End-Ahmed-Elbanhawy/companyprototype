"use client";

import ProductCard from "@/components/Cards/ProductCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useInventory } from "@/features/inquiries/cart-slice";
import CartInquiryForm from "@/features/inquiries/components/cart-inquiry-form";
import CartItemRow from "@/features/inquiries/components/cart-item-row";
import { InquiryItem } from "@/features/inquiries/schema";
import { useTranslations } from "next-intl";

const itemsData: InquiryItem[] = [
    {
        id: 1,
        title: "Heavy-Duty Sliding Door",
        description: "Structural integrity for maximum width access",
        startingPrice: 12500,
        img: "/images/product-card-placeholder-1.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 2,
        title: "High-Speed Roll-Up Door",
        description: "High-speed operation for critical flow control",
        startingPrice: 8900,
        img: "/images/product-card-placeholder-2.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 3,
        title: "Industrial Sectional Door",
        description: "Thermal efficiency with heavy-duty construction",
        startingPrice: 15200,
        img: "/images/product-card-placeholder-3.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 4,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 5,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 6,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 7,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 8,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 9,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 10,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 11,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 12,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 13,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 14,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 15,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    },
    {
        id: 16,
        title: "Crash-Proof Warehouse Door",
        description: "Maximum protection for high-risk areas",
        startingPrice: 18400,
        img: "/images/product-card-placeholder-4.png",
        link: "",
        category: "product",
        quantity: 1,
    }
];

export default function SolutionPage() {

    const cartItems = useInventory((state) => state.cart);

    const clearCart = useInventory((state) => state.clearCart);

    const t = useTranslations("directPurchasePage");

    return (
        <section className="Directpurchase bg-brand-tertiary">
            <div className="container flex flex-col w-full gap-10 px-4 pt-24 mx-auto max-w-7xl md:my-10">
                <div className="flex flex-col items-center gap-5 font-black uppercase HeaderContent">
                    <span className="text-sm tracking-widest text-brand-primary">{t("header.tag")}</span>
                    <h2 className="text-4xl text-center text-brand-secondary md:text-5xl">{t("header.title")}</h2>
                    <div className="mx-auto border-b-4 BottomBorder w-25 border-brand-primary"></div>
                </div>
                <div className="flex flex-col gap-10 content">
                    <div className="grid justify-between grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 lg:gap-12 md:px-4 lg:px-6">
                        {itemsData.filter(item => item.id <= 16).map((item) => {
                            return (
                                <ProductCard key={item.id} item={item} />
                            );
                        })}
                    </div>
                    {/* This will be linked to the cart-inquiry-form.tsx */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                className="self-center text-sm font-bold uppercase transition-all duration-200 ease-in-out rounded-sm lg:self-end bg-brand-primary text-brand-tertiary me-4 lg:me-6 px-15 py-7 hover:bg-brand-primary hover:brightness-90 hover:-translate-y-1"
                            >
                                {t("proceedButton")}
                            </Button>
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
                </div>
            </div>
        </section>
    );
};