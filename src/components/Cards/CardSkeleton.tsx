import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardDescription, CardHeader } from "../ui/card";

export default function SkeletonCard() {

    return (
        <Card className="w-full h-full max-w-3xl p-5 transition-colors duration-200 ease-in-out border border-transparent rounded-sm shadow-md">
            <Skeleton className="w-full h-48 rounded-md" />
            <CardHeader className="flex flex-col gap-2 px-0 mt-4" >
                <Skeleton className="w-3/4 h-6" />
                <CardDescription>
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-5/6 h-4" />
                </CardDescription>
                <Skeleton
                    className="self-center w-64 h-12 rounded-sm"
                />
            </CardHeader>
        </Card>
    );
};