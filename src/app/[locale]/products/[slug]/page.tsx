
import CartSideSheet from "@/components/shared/CartSideSheet";
import ItemGallery from "@/components/shared/ItemGallery";
import { Button } from "@/components/ui/button";
import ItemInquiryForm from "@/features/inquiries/components/item-inquiry-form";
import { InquiryItem } from "@/features/inquiries/schema";
import { getItemBySlug } from "@/features/items/api/get-item-by-slug";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {

    const t = await getTranslations("directPurchasePage");

    const locale = await getLocale();

    const isArabic = locale === "ar" ? true : false;

    const resolvedParams = await params;

    const { item: rawItem } = await getItemBySlug(String(resolvedParams.slug));

    const product = {
        id: rawItem.id,
        category: "product" as const,
        title: isArabic ? rawItem.title_ar : rawItem.title_en,
        description: isArabic ? rawItem.description_ar : rawItem.description_en,
        startingPrice: rawItem.starting_price,
        img: rawItem.img,
        quantity: 1,
        productType: rawItem.product_type,
        slug: rawItem.slug,
        gallery: rawItem.gallery,
    };

    return (
        <section
            className=""
        >
            <div className="grid items-start grid-cols-1 gap-16 px-4 py-24 mx-auto lg:grid-cols-2 max-w-7xl md:px-10">
                <div
                    className="relative w-full overflow-hidden"
                >
                    <ItemGallery gallery={product.gallery} />
                </div>
                <div
                    className="flex flex-col items-start justify-between h-full"
                >
                    <div
                        className="flex flex-col items-start justify-around w-full gap-4"
                    >
                        <div
                            className="flex items-center justify-between w-full"
                        >
                            <h2
                                className="text-xl font-bold leading-tight uppercase line-clamp-2 text-start min-h-12 text-brand-secondary"
                            >
                                {product.title}
                            </h2>
                            <CartSideSheet>
                                <Button
                                    className="py-5 text-sm font-bold uppercase transition-all duration-200 ease-in-out rounded-sm bg-brand-primary text-brand-tertiary px-15 hover:bg-brand-primary hover:brightness-90 hover:-translate-y-1"
                                >
                                    {/* {t("proceedButton")} */}
                                    Cart
                                </Button>
                            </CartSideSheet>
                        </div>
                        <div
                            className="flex items-start justify-between w-full"
                        >
                            <p
                                className="text-brand-neutral line-clamp-2 min-h-10"
                            >
                                {product.description}
                            </p>
                            <span
                                className="font-bold leading-tight uppercase sm:text-xl text-brand-primary"
                            >
                                starting {product.startingPrice}
                            </span>
                        </div>
                    </div>
                    <ItemInquiryForm item={product as InquiryItem} />
                </div>
            </div>
        </section>
    );
};