import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";


export async function getItemBySlug(productSlug: string) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    if (!productSlug) {
        console.error("No Item selected");
        throw new Error("No Item selected");
    }

    const { data: item, error } = await supabase
        .from("items")
        .select("id, starting_price, img, title_en, title_ar, description_en, description_ar, product_type, slug, gallery")
        .eq("slug", productSlug)
        .single();

    if (error) {
        console.error("Supabase error!", error.message);
        throw new Error("Failed to fetch item!");
    }

    return { item };
}