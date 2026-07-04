import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

const contactPhoneHref = "tel:+905393396323";
const whatsappHref = "https://wa.me/905393396323";

export function HomeContact() {
  const t = useTranslations("home.contact");

  return (
    <Section className="bg-background">
      <Container>
        <Card className="relative overflow-hidden rounded-lg bg-card">
          <Image
            src="/anasayfa-iletisim.webp"
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="scale-105 object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-b from-card/90 via-card/72 to-card/50" />
          <div className="absolute inset-0 bg-primary/3" />

          <div className="relative z-10 grid gap-8 p-6 text-center md:p-10">
            <CardHeader className="gap-4 p-0">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="size-5" />
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary">
                  {t("eyebrow")}
                </p>
                <CardTitle className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                  {t("title")}
                </CardTitle>
                <CardDescription className="mx-auto mt-4 max-w-2xl text-base leading-7">
                  {t("description")}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col justify-center gap-3 p-0 sm:flex-row">
              <Button asChild className="h-11 px-5">
                <Link href="/iletisim">
                  {t("contactPage")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-11 px-5">
                <a
                  href={contactPhoneHref}
                  data-conversion="phone"
                  data-conversion-location="home-contact"
                >
                  {t("call")}
                  <Phone className="size-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="h-11 px-5">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  data-conversion="whatsapp"
                  data-conversion-location="home-contact"
                >
                  {t("whatsapp")}
                  <MessageCircle className="size-4" />
                </a>
              </Button>
            </CardContent>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
