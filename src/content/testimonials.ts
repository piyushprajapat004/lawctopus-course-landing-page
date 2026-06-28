export interface Testimonial {
  name: string;
  designation?: string;
  rating?: number;
  content: string;
  source: "LinkedIn" | "Google" | "Reddit" | "Course Feedback";
}

export const testimonialsContent: Testimonial[] = [
  {
    name: "Law Student",
    designation: "Reddit User",
    rating: 5,
    content: "The practical, real-world focus of the courses is a huge step up from purely theoretical academic studies. The faculty is extremely approachable and the curriculum is well-structured.",
    source: "Reddit"
  },
  {
    name: "Recent Graduate",
    designation: "Course Learner",
    rating: 5,
    content: "Lawctopus Law School courses gave me exactly what I needed. It bridges the gap between what we learn in college and what law firms actually expect on day one.",
    source: "Course Feedback"
  },
  {
    name: "Young Lawyer",
    designation: "Independent Practitioner",
    rating: 5,
    content: "The contract drafting assignments were rigorous. Getting personalized feedback on my drafts was the most valuable part. Highly recommended for building practical skills.",
    source: "LinkedIn"
  }
];
