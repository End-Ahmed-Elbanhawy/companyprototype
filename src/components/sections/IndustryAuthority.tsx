import { BadgeCheck, DraftingCompass, Earth, LucideIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface CompanyAttribute {
    id: number,
    icon: LucideIcon,
    title: string,
};

export default function Industryauthority() {

    const t = useTranslations("industryauthority");

    const companyAttributes: CompanyAttribute[] = [
        {
            id: 1,
            icon: BadgeCheck,
            title: t("companyAttribute.attribute1.title")
        },
        {
            id: 2,
            icon: DraftingCompass,
            title: t("companyAttribute.attribute2.title")
        },
        {
            id: 3,
            icon: Earth,
            title: t("companyAttribute.attribute3.title")
        },
    ];

    return (
        <section className="Industryauthority">
            <div className="container grid items-center grid-cols-1 gap-16 px-4 py-24 mx-auto lg:grid-cols-2 max-w-7xl md:px-10">
                <div className="flex flex-col gap-6 left lg:pr-8">
                    <span className="text-sm font-black tracking-widest uppercase text-brand-primary">{t("header.tag")}</span>
                    <h2 className="text-4xl md:text-5xl text-brand-secondary leading-[1.1] font-black uppercase">{t("header.title")}</h2>
                    <p className="mt-2 text-lg leading-relaxed text-brand-neutral">{t("header.description")}</p>
                    <ul className="flex flex-col gap-6 mt-6">
                        {companyAttributes.map((attribute) => {
                            const Icon = attribute.icon;
                            return (
                                <li key={attribute.id} className="flex items-center gap-4 p-4 rounded-md bg-brand-tertiary">
                                    <div className="flex items-center justify-center p-1.5 shadow-sm bg-brand-primary shrink-0">
                                        <Icon className="w-6 h-6 text-brand-tertiary" />
                                    </div>
                                    <p className="text-lg font-bold text-brand-secondary">
                                        {attribute.title}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    <Button asChild className="px-10 py-6 mt-6 text-sm font-bold tracking-wider uppercase transition-all duration-200 ease-in-out bg-brand-secondary w-max hover:brightness-[.98]">
                        {/* This will be updated later when I make the corporate profile page */}
                        <Link href={"/"}>
                            {t("viewButton.buttonLabel")}
                        </Link>
                    </Button>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl right h-150">
                    <Image
                        src={"/images/industry-authority.png"}
                        alt="Industry Authority image"
                        fill
                        className="z-0 object-cover object-center"
                        sizes="(max-width:1.24) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-secondary/80 to-transparent"></div>
                    <div className="absolute z-20 flex flex-col p-8 text-xl font-bold tracking-wide uppercase rounded-md shadow-2xl text-brand-tertiary bottom-8 left-8 bg-brand-primary">
                        <span className="font-black leading-none tracking-tighter text-7xl">{t("experience.number")}</span>
                        <span className="mt-2 leading-tight">{t("experience.text1")}</span>
                        <span className="leading-tight">{t("experience.text2")}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};