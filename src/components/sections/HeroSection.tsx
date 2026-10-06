import { useTranslations } from "next-intl";
import QuoteForm from "../forms/QuoteForm";

export default function Herosection() {
    const t = useTranslations("HeroSection");
    return (
        <>
            <section className="HeroSection relative bg-[radial-gradient(at_2%_10%,#0c1a18_0%,#31655e_25%,#0c1a18_50%,#31655e_75%,#0c1a18_100%)] h-fit lg:max-h-[90vh] text-brand-neutral ">
                <div className="absolute inset-0 shadows bg-gray-900/30 z-1"></div>
                <div className="relative z-10 grid items-center grid-cols-1 gap-16 px-4 mx-auto my-10 HeroContent max-w-7xl lg:grid-cols-2 lg:my-40 md:px-10">
                    <div className="flex flex-col gap-6 LeftSide">
                        <p className="text-xs font-bold border rounded-xs border-brand-neutral bg-white/10 uppercase w-fit px-4 py-1.5 text-surface-white">{t("tag")}</p>
                        <h1 className="text-5xl font-bold tracking-tight uppercase md:text-6xl lg:text-7xl text-surface-white">{t("title")}</h1>
                        <p className="text-lg font-medium leading-relaxed text-gray-300 md:text-xl">{t("description")}</p>
                    </div>
                    <div className="flex w-full RightSide align-start lg:justify-end">
                        <div className="w-full h-full px-8 py-10 bg-white border-none rounded-lg shadow-2xl outline-none text-brand-secondary lg:max-w-lg sm:py-12 sm:px-10">
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};