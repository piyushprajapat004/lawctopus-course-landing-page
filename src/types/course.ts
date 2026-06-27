/**
 * Course domain types.
 * Add course-related interfaces and types here.
 */

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  thumbnail_url: string;
  duration_hours: number;
  created_at: string;
  updated_at: string;
}
