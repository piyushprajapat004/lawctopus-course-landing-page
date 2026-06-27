import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

/**
 * Browser-side (singleton) Supabase client.
 * Uses the anon key — safe to expose in the browser.
 *
 * Usage:
 *   import { supabase } from "@/lib/supabase/client";
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
