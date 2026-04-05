import { supabase } from "./supabase";
import type { Product, Variant } from "@/types/database";

export async function getProducts(category?: string): Promise<Product[]> {
  let query = supabase.from("products").select("*").order("created_at", { ascending: false });
  if (category) query = query.eq("category", category);
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

export async function getProductBySlug(
  slug: string
): Promise<{ product: Product; variants: Variant[] } | null> {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error || !product) return null;

  const { data: variants } = await supabase
    .from("variants")
    .select("*")
    .eq("product_id", product.id)
    .order("size");

  return { product, variants: variants ?? [] };
}

export async function getCategories(): Promise<string[]> {
  const { data } = await supabase.from("products").select("category");
  if (!data) return [];
  return [...new Set(data.map((r) => r.category))].sort();
}
