import { Cpu, Gauge, Shield, Thermometer } from "lucide-react";
import SpecificationCard, { SpecificationData } from "../Cards/SpecificationCard";
import { useTranslations } from "next-intl";

export default function Technicalgrid() {

    const t = useTranslations("technicalgrid")

    const specifications: SpecificationData[] = [
        {
            id: 1,
            logo: < Cpu className="w-6 h-6 text-brand-primary" strokeWidth={3} />,
            title: t("specificationData.spec1.title"),
            description: t("specificationData.spec1.description"),
        },
        {
            id: 2,
            logo: < Gauge className="w-6 h-6 text-brand-primary" strokeWidth={3} />,
            title: t("specificationData.spec2.title"),
            description: t("specificationData.spec2.description"),
        },
        {
            id: 3,
            logo: < Shield className="w-6 h-6 text-brand-primary" strokeWidth={3} />,
            title: t("specificationData.spec3.title"),
            description: t("specificationData.spec3.description"),
        },
        {
            id: 4,
            logo: < Thermometer className="w-6 h-6 text-brand-primary" strokeWidth={3} />,
            title: t("specificationData.spec4.title"),
            description: t("specificationData.spec4.description"),
        }
    ];

    return (
        <section className="Technicalgrid bg-brand-tertiary">
            <div className="container px-4 py-24 mx-auto max-w-7xl md:px-10">
                <div className="flex flex-col items-center mb-16 head">
                    <span className="mb-3 text-sm font-black tracking-widest uppercase text-brand-primary">{t("header.tag")}</span>
                    <h2 className="text-4xl font-black uppercase md:text-5xl text-brand-secondary">{t("header.title")}</h2>
                    <p className="max-w-2xl mt-4 text-lg font-medium text-center text-brand-neutral">{t("header.description")}</p>
                </div>
                <div className="specGrid">
                    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {specifications.map((specificationData) => {
                            return (
                                <SpecificationCard key={specificationData.id} specification={specificationData} />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}