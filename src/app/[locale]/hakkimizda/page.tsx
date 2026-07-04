import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import AboutPageWrapper from "@/features/hakkımızda/containers/AboutPageWrapper";
import { buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/metadata";

type AboutPageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? "About Luna Den Spa Dedeman Şanlıurfa | Hammam, Sauna and Massage"
        : "Hakkımızda | Luna Den Spa Dedeman Şanlıurfa",
    description:
      normalizedLocale === "en"
        ? "Learn about Luna Den Spa Dedeman Şanlıurfa, offering hammam, sauna, scrub + foam, and personalized massage experiences in a calm and attentive atmosphere."
        : "Luna Den Spa Dedeman Şanlıurfa hakkında bilgi alın. Hamam, sauna, kese + köpük ve kişiye özel masaj deneyimini sakin ve özenli bir atmosferde sunuyoruz.",
    path: localizedPath(locale, "/hakkimizda", "/about"),
    image: "/hakkimizda/hakkimizda.webp",
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <AboutPageWrapper />;
}
