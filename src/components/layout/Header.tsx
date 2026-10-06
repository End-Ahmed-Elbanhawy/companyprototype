'use client';

import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { usePathname } from "next/navigation";
import LogoSvg from "../ui/LogoSvg";
import TopHeader from "./TopHeader";
import { useTranslations } from "next-intl";

export default function Header() {

    // add a redux store to hold the site language

    const pathName = usePathname();

    const t = useTranslations("Header")

    const navLinks = [
        {
            name: t("nav.Home"),
            path: "/"
        },
        {
            name: t("nav.Solutions"),
            path: "/solutions"
        },
        {
            name: t("nav.Services"),
            path: "/services"
        },
        {
            name: t("nav.Projects"),
            path: "/projects"
        },
        {
            name: t("nav.Safety"),
            path: "/safety"
        },
        {
            name: t("nav.Contact"),
            path: "/contact"
        },
    ];

    return (
        <header className="sticky top-0 z-50 flex flex-col items-center justify-between w-full text-white border-b MainNav bg-brand-secondary">
            <TopHeader />
            <div className="container flex items-center justify-between w-full px-4 mx-auto my-1 max-w-7xl md:px-10">
                {/* <div className="brand">
                    <Link href={"/"} className="flex items-center justify-start w-fit h-fit">
                        <LogoSvg className="p-0! m-0! w-23! h-23! sm:size-18 " borderFill={"text-brand-primary"} textFill={"text-brand-tertiary"} />
                    </Link>
                </div> */}
                <div className="hidden nav bg-brand-secondary lg:flex lg:gap-2 ">
                    {navLinks.map((link) =>
                        <Link key={link.name} href={link.path} className={`uppercase hover:text-brand-primary transition-all duration-200 ease-in-out px-2.5 py-1.5 text-md font-medium 
                                ${pathName.startsWith("/" + link.path) ? "text-brand-primary" : "text-brand-tertiary"}`}>
                            {link.name}
                        </Link>
                    )}
                </div>
                <div className="flex items-center gap-2 Dialog">
                    {/* <div className="block search">
                        <Dialog>
                            <DialogTrigger>
                                <Search className="w-6 h-6 transition-all duration-200 ease-in-out text-surface-white hover:text-brand-primary" />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div> */}
                    <Button className="hidden uppercase transition-all duration-200 ease-in-out px-6 text-sm py-5 bg-brand-primary text-brand-tertiary hover:bg-brand-primary hover:brightness-90 hover:-translate-y-0.5 tracking-wider font-bold roundede-sm shadow-lg shadow-cyan-900/30 lg:flex lg:items-center ">
                        {t("buttonLabel")}
                    </Button>

                    <div className="block NavButton lg:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="w-12! h-12! p-0 bg-transparent [&_svg]:size-8">
                                    <Menu className="w-8! h-8! text-surface-white" size={40} strokeWidth={2} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="w-full! mt-2!">
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    {
                                        navLinks.map((link) =>
                                            <DropdownMenuItem asChild key={link.name} className="py-10 text-xl font-medium uppercase transition-colors duration-200 ease-in-out pe-15! bg-brand-secondary md:pe-20! focus:bg-brand-secondary">
                                                <Link href={link.path} className={`focus:text-brand-primary transition-all duration-200 ease-in-out
                                                        ${pathName === link.path ? " text-brand-primary" : "text-brand-tertiary"}`}>
                                                    {link.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        )
                                    }
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header >
    );
};