const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lunadenspaurfa.com";

export const siteConfig = {
  name: "Luna Den Spa Dedeman Şanlıurfa",
  url: siteUrl.replace(/\/$/, ""),
  description:
    "Luna Den Spa Dedeman Şanlıurfa, hamam, sauna, kese + köpük, kişiye özel masaj ve modern spor salonu hizmetlerini sakin ve özenli bir atmosferde sunar.",
} as const;
