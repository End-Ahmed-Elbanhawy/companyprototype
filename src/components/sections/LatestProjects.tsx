"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProjectCard, { ProjectData } from "../Cards/ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FormatQuoteIcon } from "../ui/FormatquoteIcon";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Latestprojects() {

    const t = useTranslations("latestprojects");

    const isArabic = usePathname().startsWith("/ar");

    const projects: ProjectData[] = [
        {
            id: 1,
            title: t("projectCard.card1.title"),
            category: t("projectCard.card1.category"),
            image: "/images/project-card-placeholder-1.png",
        },
        {
            id: 2,
            title: t("projectCard.card2.title"),
            category: t("projectCard.card2.category"),
            image: "/images/project-card-placeholder-2.png",
        },
        {
            id: 3,
            title: t("projectCard.card3.title"),
            category: t("projectCard.card3.category"),
            image: "/images/project-card-placeholder-3.png",
        },
        {
            id: 4,
            title: t("projectCard.card4.title"),
            category: t("projectCard.card4.category"),
            image: "/images/project-card-placeholder-4.png",
        },
    ];

    return (
        <section className="py-24 Latestprojects">
            <div className="container grid items-center grid-cols-1 gap-16 px-4 mx-auto lg:grid-cols-2 max-w-7xl md:px-10">
                <div className="flex flex-col gap-8 left">
                    <div className="head">
                        <span className="mb-2 text-sm font-black tracking-widest uppercase text-brand-primary">{t("header.tag")}</span>
                        <div className="flex items-center justify-between">
                            <h2 className="text-4xl font-black uppercase text-brand-secondary">{t("header.title")}</h2>
                            <Button asChild className="text-sm font-bold uppercase transition-all duration-200 bg-transparent ease-int-out hover:bg-transparent text-brand-primary hover:text-brand-secondary">
                                {/* Add all projects page here after I make it */}
                                <Link href={"/"}>
                                    {t("header.viewAll")}
                                    {isArabic ?
                                        <ArrowLeft className="w-6 h-6" strokeWidth={3} /> :
                                        <ArrowRight className="w-6 h-6" strokeWidth={3} />
                                    }
                                    {/* <ArrowRight className="w-6 h-6" strokeWidth={3} /> */}
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {projects.map((projectData) =>
                            <ProjectCard key={projectData.id} project={projectData} />
                        )}
                    </div>
                </div>
                <Card className="w-full h-full p-10 rounded-sm shadow-2xl rouded-md right bg-brand-secondary">
                    <CardHeader className="flex flex-col justify-center">
                        <span className="text-brand-primary/20">
                            <FormatQuoteIcon className="size-30" />
                        </span>
                        <span className="mb-2 text-sm font-black tracking-widest uppercase w-fit text-brand-primary">
                            {t("testimonialCard.header.tag")}
                        </span>
                        <CardTitle>
                            <h2 className="w-full text-4xl font-black tracking-tight uppercase text-surface-white">
                                {t("testimonialCard.header.title")}
                            </h2>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <p className="text-xl italic font-medium leading-relaxed text-brand-neutral">
                            {t("testimonialCard.content")}
                        </p>
                        <div className="flex items-center justify-start gap-5 mt-4 uppercase">
                            <span className="flex items-center justify-center w-16 h-16 text-xl font-bold rounded-full shadow-md bg-brand-primary text-brand-tertiary">
                                {t("testimonialCard.author.shortCut")}
                            </span>
                            <div>
                                <h4 className="text-lg font-bold tracking-wide text-surface-white">
                                    {t("testimonialCard.author.name")}
                                </h4>
                                <p className="text-sm font-bold tracking-widest text-brand-primary">
                                    {t("testimonialCard.author.position")}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};