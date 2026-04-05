import { supabase } from "./supabase";
import type { Product, Variant } from "@/types/database";

export async function getProducts(category?: string): Promise<Product[]> {
  let query = supabase.from("products").select("*").order("created_at", { ascending: false });
  if (category) query = query.eq("category", category);
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as Product[];
}

export async function getProductBySlug(
  slug: string
): Promise<{ product: Product; variants: Variant[] } | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error || !data) return null;

  const product = data as Product;

  const { data: variantData } = await supabase
    .from("variants")
    .select("*")
    .eq("product_id", product.id)
    .order("size");

  return { product, variants: (variantData ?? []) as Variant[] };
}
