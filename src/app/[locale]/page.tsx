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
        ? "Luna Den Spa Dedeman Şanlıurfa | Hammam, Sauna and Massage"
        : "Luna Den Spa Dedeman Şanlıurfa | Hamam, Sauna ve Masaj",
    description:
      normalizedLocale === "en"
        ? "Discover Luna Den Spa Dedeman Şanlıurfa for hammam, sauna, scrub + foam, and personalized massage services in a calm and attentive atmosphere."
        : "Luna Den Spa Dedeman Şanlıurfa'da hamam, sauna, kese + köpük ve kişiye özel masaj hizmetleriyle sakin ve özenli bir deneyim yaşayın.",
    path: normalizedLocale === "en" ? "/en" : "/",
    image: "/hero.webp",
  });
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <AboutPageWrapper />;
}
