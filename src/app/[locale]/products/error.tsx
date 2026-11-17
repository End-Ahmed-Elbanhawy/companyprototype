"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";

export default function ProductsError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {

    useEffect(() => {
        console.error("Cought by Error Boundary", error);
        toast.error("Catalog Error!", { description: error.message });
    }, [error]);

    return (
        <section
            className="bg-brand-tertiary"
        >
            <div
                className="container flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 mx-auto max-w-7xl"
            >
                <h2
                    className="text-brand-neutral"
                >
                    Something went wrong
                </h2>
                <p
                    className=""
                >
                    We were unable to load the industrial doors catalog. Please try again.
                </p>
                <Button
                    onClick={() => reset()}
                    className="px-10 py-5 text-sm font-bold uppercase transition-all duration-200 ease-in-out rounded-sm bg-brand-primary text-brand-tertiary hover:brightness-90"
                >
                    Try agatin
                </Button>
            </div>
        </section>
    )
}