"use client";

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { usePathname, useSearchParams } from "next/navigation";

interface CatalogPaginationProps {
    currentPage: number;
    totalPages: number;
};

export default function CatalogPagination({ currentPage, totalPages }: CatalogPaginationProps) {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={currentPage > 1 ? createPageURL(currentPage - 1) : "#"}
                    />
                </PaginationItem>
                {pageNumbers.map((page) => {
                    return (
                        <PaginationItem key={page}>
                            <PaginationLink
                                href={`?page=${page}`}
                                isActive={page === currentPage}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <PaginationNext
                        href={currentPage < totalPages ? createPageURL(currentPage + 1) : "#"}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
