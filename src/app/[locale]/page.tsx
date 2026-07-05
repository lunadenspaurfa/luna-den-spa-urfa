import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import AboutPageWrapper from "@/features/anasayfa/containers/AboutPageWrapper";
import { buildPageMetadata, normalizeLocale } from "@/lib/metadata";

type HomeProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? "Luna Den Spa Dedeman Şanlıurfa | Hammam, Sauna, Massage and Fitness"
        : "Luna Den Spa Dedeman Şanlıurfa | Hamam, Sauna, Masaj ve Spor Salonu",
    description:
      normalizedLocale === "en"
        ? "Discover Luna Den Spa Dedeman Şanlıurfa for hammam, sauna, scrub + foam, personalized massage, and a modern fitness center in a calm and attentive atmosphere."
        : "Luna Den Spa Dedeman Şanlıurfa'da hamam, sauna, kese + köpük, kişiye özel masaj ve modern spor salonu hizmetleriyle sakin ve özenli bir deneyim yaşayın.",
    path: normalizedLocale === "en" ? "/en" : "/",
    image: "/hero.webp",
  });
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <AboutPageWrapper />;
}
