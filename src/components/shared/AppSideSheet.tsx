"use client";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTrigger } from "../ui/sheet";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

export default function AppSideSheet() {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleFilterChange = (filterValue: string) => {
        const params = new URLSearchParams(searchParams);

        if (filterValue === "all") {
            params.delete("type");
        } else {
            params.set("type", filterValue);
        }

        params.delete("page");

        router.push(`${pathname}?${params.toString()}`);
    }

    const locale = useLocale();

    const isArabic = locale === "ar" ? true : false;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="uppercase transition-all duration-200 ease-in-out px-6 text-sm py-5 bg-brand-primary text-brand-tertiary hover:bg-brand-primary hover:brightness-90 hover:-translate-y-0.5 tracking-wider font-bold roundede-sm shadow-lg shadow-cyan-900/30 flex lg:items-center ">
                    Filter
                    {isArabic ?
                        <PanelRightClose />
                        : <PanelRightOpen />
                    }
                </Button>
            </SheetTrigger>
            <SheetContent
                side={isArabic ? "right" : "left"}
            >
                <SheetHeader>
                    Filter
                </SheetHeader>
                <SheetDescription
                    className="flex flex-col justify-center ms-5"
                >
                    <Select
                        onValueChange={handleFilterChange}
                        defaultValue={searchParams.get("type") || ""}
                    >
                        <SelectTrigger className="w-full transition-colors duration-200 ease-in-out border rounded-sm shadow-sm max-w-80 hover:border-brand-primary">
                            <SelectValue placeholder="Motor Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Motor Type</SelectLabel>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="sliding">Sliding</SelectItem>
                                <SelectItem value="swing">Swing</SelectItem>
                                <SelectItem value="rolling">Rolling</SelectItem>
                                <SelectItem value="scissor">Scissor</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </SheetDescription>
            </SheetContent>
            <SheetFooter>
            </SheetFooter>
        </Sheet>
    );
};