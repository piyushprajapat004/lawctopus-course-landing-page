/**
 * WhatsApp integration configuration.
 *
 * The phone number is read from `NEXT_PUBLIC_WHATSAPP_NUMBER`.
 * If the variable is missing or empty the WhatsApp URL will be `null`
 * and the floating button should not render.
 */

// ── Phone ────────────────────────────────────────────────────────────────────
const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "918334961769";

// Formatting for display (e.g. Footer)
const displayPhone = "+91 83349 61769";

// ── Pre-filled message ───────────────────────────────────────────────────────
const message = [
  "Hi Lawctopus Team,",
  "",
  "I visited your Course Landing Page and I'm interested in the Expert-Level Mastering Contract Drafting & Freelancing course.",
  "",
  "Could you please share more details regarding:",
  "",
  "• Curriculum",
  "• Fees",
  "• Upcoming Batch",
  "• Certification",
  "",
  "Thank you.",
].join("\n");

// ── Computed URL ─────────────────────────────────────────────────────────────
const whatsappUrl =
  phone.length > 0
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : null;

// ── Public API ───────────────────────────────────────────────────────────────
export const whatsappConfig = {
  phone,
  displayPhone,
  message,
  url: whatsappUrl,
} as const;
