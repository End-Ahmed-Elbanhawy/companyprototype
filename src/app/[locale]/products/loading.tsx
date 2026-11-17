import SkeletonCard from "@/components/Cards/CardSkeleton";
import { getTranslations } from "next-intl/server";

export default async function ProductsLoading() {

    const t = await getTranslations("directPurchasePage");
    return (
        <section className="bg-brand-tertiary">
            <div className="container flex flex-col w-full gap-10 px-4 pt-24 mx-auto max-w-7xl md:my-10">
                <div className="flex flex-col items-center gap-5 font-black uppercase HeaderContent">
                    <span className="text-sm tracking-widest text-brand-primary">{t("header.tag")}</span>
                    <h2 className="text-4xl text-center text-brand-secondary md:text-5xl">{t("header.title")}</h2>
                    <div className="mx-auto border-b-4 BottomBorder w-25 border-brand-primary"></div>
                </div>
                <div className="flex flex-col gap-10 content">
                    <div className="grid justify-between grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-12 md:px-4 lg:px-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                            <SkeletonCard key={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}