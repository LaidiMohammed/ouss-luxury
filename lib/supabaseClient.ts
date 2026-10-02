// Prêt pour Supabase / Postgres — frontend only pour l'instant.
// Quand tu actives Supabase : NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY
// Table `products`: id, brand, name, description, price_da, badge, image_url, category, featured
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabaseReady = Boolean(url && anon);

export function getSupabase() {
  if (!supabaseReady) return null;
  return createClient(url, anon);
}
