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
        ? "Hammam, Sauna and Massage Services | Luna Den Spa Dedeman Şanlıurfa"
        : "Hizmetlerimiz | Luna Den Spa Dedeman Şanlıurfa Hamam, Sauna ve Masaj",
    description:
      normalizedLocale === "en"
        ? "Review hammam, sauna, scrub + foam, and personalized massage services at Luna Den Spa Dedeman Şanlıurfa."
        : "Luna Den Spa Dedeman Şanlıurfa'da hamam, sauna, kese + köpük ve kişiye özel masaj hizmetlerini inceleyin.",
    path: localizedPath(locale, "/hizmetlerimiz", "/services"),
    image: "/hizmetlerimiz/hizmetlerimiz-1.webp",
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <ServicesPageWrapper />;
}
