// "use client";

import ProductCard from "@/components/Cards/ProductCard";
import AppSideSheet from "@/components/shared/AppSideSheet";
import CatalogPagination from "@/components/shared/CatalogPagination";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarHeader } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { useInventory } from "@/features/inquiries/cart-slice";
// import CartInquiryForm from "@/features/inquiries/components/cart-inquiry-form";
// import CartItemRow from "@/features/inquiries/components/cart-item-row";
// import { InquiryItem } from "@/features/inquiries/schema";
import { getItems } from "@/features/items/api/get-items";
// import { useTranslations } from "next-intl";
import { getTranslations, getLocale } from "next-intl/server";
import { Suspense } from "react";
// import { useEffect, useState } from "react";

// const itemsData: InquiryItem[] = [
//     {
//         id: 1,
//         title: "Heavy-Duty Sliding Door",
//         description: "Structural integrity for maximum width access",
//         startingPrice: 12500,
//         img: "/images/product-card-placeholder-1.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 2,
//         title: "High-Speed Roll-Up Door",
//         description: "High-speed operation for critical flow control",
//         startingPrice: 8900,
//         img: "/images/product-card-placeholder-2.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 3,
//         title: "Industrial Sectional Door",
//         description: "Thermal efficiency with heavy-duty construction",
//         startingPrice: 15200,
//         img: "/images/product-card-placeholder-3.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 4,
//         title: "Crash-Proof Warehouse Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 5,
//         title: "Crash-Proof Warehouse Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 6,
//         title: "Fire-Rated Steel Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 7,
//         title: "Insulated Cold Storage Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 8,
//         title: "PVC Strip Curtain Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 9,
//         title: "Aluminum Full-View Overhead Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 10,
//         title: "Bi-Folding Hangar Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 11,
//         title: "Blast-Resistant Security Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 12,
//         title: "Hygienic Cleanroom Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 13,
//         title: "Motorized Roller Shutter",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 14,
//         title: "Impact-Resistant Swing Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 15,
//         title: "Telescopic Sliding Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     },
//     {
//         id: 16,
//         title: "Bullet-Resistant Access Door",
//         description: "Maximum protection for high-risk areas",
//         startingPrice: 18400,
//         img: "/images/product-card-placeholder-4.png",
//         link: "",
//         category: "product",
//         quantity: 1,
//     }
// ];

export default async function ProductPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    // const cartItems = useInventory((state) => state.cart);

    // const clearCart = useInventory((state) => state.clearCart);
    const t = await getTranslations("directPurchasePage");

    const locale = await getLocale();

    const isArabic = locale === "ar" ? true : false;

    const resolvedParams = await searchParams;

    const page = Number(resolvedParams.page) || 1;

    // const productType = String(resolvedParams.type) || "";
    const productType = typeof resolvedParams.type === "string" ? resolvedParams.type : "";

    const { items: rawItems, totalPages: totalPages, currentPage: currentPage } = await getItems("product", page, productType, 9);

    const products = rawItems.map((item) => ({
        id: item.id,
        category: "product" as const,
        title: isArabic ? item.title_ar : item.title_en,
        description: isArabic ? item.description_ar : item.description_en,
        startingPrice: item.starting_price,
        img: item.img,
        quantity: 1,
        productType: item.product_type,
        slug: item.slug
    }));


    return (
        <section className="bg-brand-tertiary">
            <div className="flex flex-col w-full gap-10 px-4 pt-24 mx-auto max-w-7xl">
                <div className="flex flex-col items-center gap-5 font-black uppercase HeaderContent">
                    <span className="text-sm tracking-widest text-brand-primary">{t("header.tag")}</span>
                    <h2 className="text-4xl text-center text-brand-secondary md:text-5xl">{t("header.title")}</h2>
                    <div className="mx-auto border-b-4 BottomBorder w-25 border-brand-primary"></div>
                </div>
                <div>
                    <div
                        className="md:px-4 lg:px-6"
                    >
                        <Suspense
                            fallback={
                                <Button
                                    className="hidden px-6 py-5 lg:flex opacity-50 cursor-not-allowed"
                                >
                                    Loading Filter...
                                </Button>}
                        >
                            <AppSideSheet />
                        </Suspense>
                    </div>
                    <div className="grid justify-between grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-12 md:px-4 lg:px-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div
                        className="pt-5 pb-2"
                    >
                        <CatalogPagination currentPage={currentPage} totalPages={totalPages} />
                    </div>
                    {/* <Sheet>
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
                    </Sheet> */}
                </div>
            </div>
        </section>
    );
};