/**
 * Supabase database types.
 *
 * Generate this file with:
 *   npx supabase gen types --lang=typescript --project-id <project-id> > src/types/supabase.ts
 *
 * See: https://supabase.com/docs/guides/api/rest/generating-types
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      lead_submissions: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          phone: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          phone: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          phone?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
