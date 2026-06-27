// TODO: Populate with verified testimonials from Lawctopus.
// Do not invent content.

export interface Testimonial {
  name: string;
  designation?: string;
  rating?: number;
  content: string;
  image?: string;
}

export const testimonialsContent: Testimonial[] = [];
