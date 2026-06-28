import { whatsappConfig } from "./whatsapp";

export const supportContent = {
  title: "Contact & Support",
  subtitle: "Our career counsellors and support team are here to help you.",
  methods: [
    {
      title: "Admissions & Promotion",
      detail: "+91 90235 43927",
      subDetail: "contact@lawctopus.com",
      icon: "PhoneCall",
      action: "tel:+919023543927",
    },
    {
      title: "Career Counselling",
      detail: "+91 9214883452",
      subDetail: "courses@lawctopus.com",
      icon: "Phone",
      action: "tel:+919214883452",
    },
    {
      title: "WhatsApp Support",
      detail: whatsappConfig.displayPhone,
      subDetail: "Aaditya Kashyap, Career Counsellor",
      icon: "MessageCircle",
      action: whatsappConfig.url || `https://wa.me/${whatsappConfig.phone}`,
    },
    {
      title: "Headquarters",
      detail: "Chandigarh, India",
      subDetail: "Lawctopus, 2nd Floor, Sector 35B",
      icon: "MapPin",
      action: "https://maps.google.com/?q=Lawctopus+Chandigarh",
    },
  ],
  officeHours: "Office hours: 11 AM - 7 PM IST",
};
