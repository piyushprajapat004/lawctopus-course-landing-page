import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

/**
 * Server-side Supabase client.
 * Uses the service role key — NEVER expose this to the browser.
 *
 * Use in:
 *   - Server Components
 *   - Route Handlers (app/api/...)
 *   - Server Actions
 *
 * Usage:
 *   import { createServerSupabaseClient } from "@/lib/supabase/server";
 *   const supabase = createServerSupabaseClient();
 */
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
