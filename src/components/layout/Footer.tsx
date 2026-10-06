import { Globe, Mail, Share2 } from "lucide-react";
import Link from "next/link";
import NewsletterForm from "../forms/NewsletterForm";
import LogoSvg from "../ui/LogoSvg";
import { useTranslations } from "next-intl";

export default function Footer() {

    const t = useTranslations("footer");

    const footerLinks = [
        {
            title: t("footerLinks.company.title"),
            links:
                [
                    {
                        title: t("footerLinks.company.links.link1.title"),
                        href: "/"
                    },
                    {
                        title: t("footerLinks.company.links.link2.title"),
                        href: "/"
                    },
                    {
                        title: t("footerLinks.company.links.link3.title"),
                        href: "/"
                    },
                    {
                        title: t("footerLinks.company.links.link4.title"),
                        href: "/"
                    }
                ]
        },
        {
            title: t("footerLinks.legal.title"),
            links: [
                {
                    title: t("footerLinks.legal.links.link1.title"),
                    href: "/"
                },
                {
                    title: t("footerLinks.legal.links.link2.title"),
                    href: "/"
                },
                {
                    title: t("footerLinks.legal.links.link3.title"),
                    href: "/"
                }
            ]
        }
    ]
    return (
        <footer className="w-full pt-20 bg-brand-secondary">
            <div className="container grid items-start grid-cols-1 gap-10 px-4 pb-16 mx-auto max-w-7xl md:px-10 md:grid-cols-2 lg:grid-cols-6">
                <div className="flex flex-col gap-6 lg:col-span-2">
                    <h2>
                        {/* <Link href={"/"} className="text-3xl font-black tracking-tight uppercase text-brand-tertiary">
                            <LogoSvg className="w-fit size-30" borderFill={"text-brand-primary"} textFill={"text-brand-tertiary"} />
                        </Link> */}
                    </h2>
                    <p className="text-gray-400 text-[16px] leading-relaxed">
                        {t("description")}
                    </p>
                    <div className="flex gap-4 mt-2 text-white">
                        <div className="flex items-center justify-center p-3 transition-all duration-200 ease-in-out rounded-full cursor-pointer bg-brand-neutral/30 hover:bg-brand-primary">
                            <Share2 className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center p-3 transition-all duration-200 ease-in-out rounded-full cursor-pointer bg-brand-neutral/30 hover:bg-brand-primary">
                            <Globe className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center p-3 transition-all duration-200 ease-in-out rounded-full cursor-pointer bg-brand-neutral/30 hover:bg-brand-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                {footerLinks.map((link, key) => {
                    return (
                        <div
                            key={key}
                            className="flex flex-col items-start gap-5 "
                        >
                            <h3 className="pl-3 mb-2 text-sm font-bold tracking-widest text-white uppercase border-l-2 border-brand-primary">
                                {link.title}
                            </h3>
                            {link.links.map((link, key) => {
                                return (
                                    <Link
                                        key={key}
                                        href={link.href}
                                        className="text-[16px] leading-6 text-gray-400 hover:text-brand-primary transition-all duration-200 ease-in-out">
                                        {link.title}
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
                <div className="flex flex-col items-start gap-5 lg:col-span-2">
                    <h3 className="pl-3 mb-2 text-sm font-bold tracking-widest text-white uppercase border-l-2 border-brand-primary">
                        {t("newsletterform.title")}
                    </h3>
                    <p className="text-gray-400  text-[16px] leading-6">
                        {t("newsletterform.description")}
                    </p>
                    <div className="w-full">
                        <NewsletterForm />
                    </div>
                </div>

            </div>
            <div

                className="border-t border-white/10 bg-black/30"
            >
                <div

                    className="container flex flex-col items-center justify-between gap-4 px-4 py-5 mx-auto text-sm font-medium text-gray-500 max-w-7xl md:px-10 md:flex-row">
                    <span
                    >
                        {t("bottomSection.copyright")}
                    </span>
                    <a href="https://ahmed-khedr-portfolio.vercel.app/" target="blank">
                        {t("bottomSection.author")}
                    </a>
                    <span>
                        {t("bottomSection.tagLine")}
                    </span>
                </div>
            </div>
        </footer>
    );
}