import ProductCard from "@/components/Cards/ProductCard";
// import Directpurchase from "@/components/sections/DirectPurchase";
import { Button } from "@/components/ui/button";
import { InquiryItem } from "@/features/inquiries/schema";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SolutionPage() {


    // add a redux store to hold the Cart items. So they are sent to the cart page.



    const t = useTranslations("directpurchase");

    const itemsData: InquiryItem[] = [
        {
            id: 1,
            title: t("products.product1.title"),
            description: t("products.product1.description"),
            startingPrice: 12500,
            img: "/images/product-card-placeholder-1.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 2,
            title: t("products.product2.title"),
            description: t("products.product2.description"),
            startingPrice: 8900,
            img: "/images/product-card-placeholder-2.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 3,
            title: t("products.product3.title"),
            description: t("products.product3.description"),
            startingPrice: 15200,
            img: "/images/product-card-placeholder-3.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 4,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 5,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 6,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 7,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 8,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 9,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 10,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 11,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        },
        {
            id: 12,
            title: t("products.product4.title"),
            description: t("products.product4.description"),
            startingPrice: 18400,
            img: "/images/product-card-placeholder-4.png",
            link: "",
            category: "product",
            quantity: 0,
        }
    ];

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
                        {itemsData.map((item) => {
                            return (
                                <ProductCard key={item.id} item={item} />
                            );
                        })}
                    </div>
                    <Button asChild className="self-center text-sm font-bold uppercase transition-all duration-200 ease-in-out rounded-sm lg:self-end bg-brand-primary text-brand-tertiary me-4 lg:me-6 px-15 py-7 hover:bg-brand-primary hover:brightness-90 hover:-translate-y-1">
                        <Link href={"/products"}>
                            {t("shopButton")}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};