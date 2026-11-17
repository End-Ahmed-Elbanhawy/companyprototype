"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

export default function ItemGallery({ gallery }: { gallery: string[] }) {

    if (!gallery || gallery.length === 0) return null;

    const [imageLink, setImageLink] = useState<string>(gallery[0]);

    const handleGlleryClick = (e: React.MouseEvent<HTMLDivElement>) => {

        const target = e.target as HTMLElement;
        const button = target.closest("button[data-img-src]");

        if (button) {
            const src = button.getAttribute("data-img-src");
            if (src) setImageLink(src);
        }

    }

    return (
        <div
            className="flex flex-col w-full max-w-md gap-4"
        >
            <div
                className="relative w-full overflow-hidden rounded-sm shadow-md aspect-square bg-muted"
            >
                <Image
                    src={imageLink}
                    alt={imageLink}
                    width={1024}
                    height={1024}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="eager"
                    className="hover:scale-[1.04] transition-transform duration-200 ease-in-out w-full h-full bg-transparent object-cover absolute inset-0"
                />
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-md px-10"
            >
                <CarouselContent
                    onClick={handleGlleryClick}
                >
                    {gallery.map((img: string, index: number) => (
                        <CarouselItem key={index} className="bg-transparent basis-1/3">
                            <div className="overflow-hidden">
                                <Button
                                    className={`${img === imageLink ? "border-brand-primary" : "border-transparent"} border-2 w-full h-full bg-transparent hover:bg-transparent p-0 rounded-sm overflow-hidden`}
                                >
                                    <Image
                                        src={img}
                                        alt={img}
                                        width={1024}
                                        height={1024}
                                        sizes="(max-width: 1024px) 100vh, 50vh"
                                        loading="lazy"
                                        className="hover:scale-[1.04] transition-transform duration-200 ease-in-out w-full h-full"
                                    />
                                </Button>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className="inset-y-0 z-10 my-auto rounded-sm shadow-md inset-s-0"
                />
                <CarouselNext
                    className="inset-y-0 z-10 my-auto rounded-sm shadow-md inset-e-0"
                />
            </Carousel>
        </div>
    )
}
