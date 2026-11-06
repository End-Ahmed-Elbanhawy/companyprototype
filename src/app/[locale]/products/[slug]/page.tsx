
import { getItemBySlug } from "@/features/items/api/get-single-item";
import { getLocale } from "next-intl/server";
import Image from "next/image";

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {

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
        slug: rawItem.slug
    };

    console.log(product);

    return (
        <section
            className=""
        >
            <div className="grid items-start grid-cols-1 gap-16 px-4 py-24 mx-auto lg:grid-cols-2 max-w-7xl md:px-10">
                <div
                    className="relative w-full overflow-hidden bg-muted"
                >
                    <Image
                        src={product.img}
                        alt={product.title}
                        width={1024}
                        height={1024}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="eager"
                        className="group-hover:scale-[1.04] transition-transform duration-200 ease-in-out w-full h-auto"
                    />
                </div>
                <div
                    className="flex flex-col items-start justify-around gap-4"
                >
                    <h2>
                        {product.title}
                    </h2>
                    <p
                        className="text-brand-neutral line-clamp-2 min-h-10"
                    >
                        {product.description}
                    </p>
                </div>
            </div>
        </section>
    )
}