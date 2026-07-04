import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function HomeHero() {
  const t = useTranslations("home.hero");

  return (
    <Section
      spacing="none"
      className="relative isolate min-h-[calc(100svh-97px)] overflow-hidden bg-image-overlay"
    >
      <Image
        src="/hero.webp"
        alt="Luna Den Spa Dedeman Şanlıurfa spa alanı"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,27,20,0.55),rgba(33,27,20,0.38)_45%,rgba(33,27,20,0.78))]" />
      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

      <Container className="relative z-10 flex min-h-[calc(100svh-97px)] items-center justify-center">
        <div className="mx-auto max-w-3xl py-20 text-center text-hero-foreground">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-hero-foreground/80">
            {t("eyebrow")}
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-px w-16 bg-hero-foreground/45"
          />

          <h1 className="mt-5 text-4xl font-semibold leading-tight text-hero-foreground md:text-6xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-hero-foreground/82 md:text-lg md:leading-8">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/hizmetlerimiz">{t("services")}</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-hero-foreground/70 bg-hero-foreground/10 px-6 text-hero-foreground backdrop-blur hover:bg-hero-foreground/20 hover:text-hero-foreground"
            >
              <Link href="/iletisim">{t("contact")}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
