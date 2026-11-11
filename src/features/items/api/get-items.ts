import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";


export async function getItems(category: "product" | "service" | "repair", page: number, productType: string, limit: number = 10) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const start = (page - 1) * limit;
    const end = start + limit - 1;

    let supabaseQuery = supabase
        .from("items")
        .select("id, starting_price, img, title_en, title_ar, description_en, description_ar, product_type, slug, gallery", { count: 'exact' })
        .eq("category", category);

    if (productType) supabaseQuery = supabaseQuery.eq("product_type", productType);

    const { data: items, count, error } = await supabaseQuery.range(start, end);

    if (error) {
        console.error("Supabase error!", error.message);
        throw new Error("Failed to fetch items!");
    }

    const totalPages = count ? Math.ceil(count / limit) : 1;

    return { items, totalPages, currentPage: page };
}