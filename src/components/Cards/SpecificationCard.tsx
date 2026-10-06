"use client";

import { usePathname } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import React from "react";

export interface SpecificationData {
    id: number;
    logo: React.ReactNode;
    title: string;
    description: string;
}
interface SpecificationCardProps {
    specification: SpecificationData;
}

export default function SpecificationCard({ specification }: SpecificationCardProps) {

    const pathName = usePathname();

    return (
        <Card className="relative transition-all duration-200 ease-in-out border-t-4 rounded-sm group hover:shadow-md border-brand-primary">
            <span className={`absolute z-0 font-black transition-all duration-200 ease-in-out ${pathName.startsWith("/ar") ? "-left-4" : "-right-4"} -top-4 text-brand-neutral/10 group-hover:text-brand-neutral/50 text-9xl`}>{"0" + specification.id}</span>
            <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full icon bg-brand-tertiary">
                    {specification.logo}
                </div>
                <CardTitle>
                    <h3 className="mb-4 text-2xl font-bold uppercase text-brand-secondary">{specification.title}</h3>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="leading-relaxed text-[16px] text-brand-neutral">{specification.description}</p>
            </CardContent>
        </Card>
    );
};