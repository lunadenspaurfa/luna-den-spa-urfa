import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import ServicesPageWrapper from "@/features/hizmetlerimiz/containers/ServicesPageWrapper";
import { buildPageMetadata, localizedPath, normalizeLocale } from "@/lib/metadata";

type ServicesPageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return buildPageMetadata({
    locale,
    title:
      normalizedLocale === "en"
        ? "Hammam, Sauna, Massage and Fitness Services | Luna Den Spa Dedeman Şanlıurfa"
        : "Hizmetlerimiz | Luna Den Spa Dedeman Şanlıurfa Hamam, Sauna, Masaj ve Spor Salonu",
    description:
      normalizedLocale === "en"
        ? "Review hammam, sauna, scrub + foam, personalized massage, and fitness center services at Luna Den Spa Dedeman Şanlıurfa."
        : "Luna Den Spa Dedeman Şanlıurfa'da hamam, sauna, kese + köpük, kişiye özel masaj ve spor salonu hizmetlerini inceleyin.",
    path: localizedPath(locale, "/hizmetlerimiz", "/services"),
    image: "/hizmetlerimiz/hizmetlerimiz-1.webp",
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <ServicesPageWrapper />;
}
