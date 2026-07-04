import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const address = "Atatürk, Meteoroloji Caddesi No:19, 63100 Haliliye/Şanlıurfa";
const phoneNumber = "+90 539 339 6323";
const phoneHref = "tel:+905393396323";
const whatsappHref = "https://wa.me/905393396323";
const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=Luna%20Den%20Spa%20Dedeman%20%C5%9Eanl%C4%B1urfa%2C%20Atat%C3%BCrk%2C%20Meteoroloji%20Caddesi%20No%3A19%2C%2063100%20Haliliye%2F%C5%9Eanl%C4%B1urfa";
const mapEmbedSrc =
  "https://maps.google.com/maps?q=Dedeman%20%C5%9Eanl%C4%B1urfa&t=m&z=16&output=embed&iwloc=near";

export function ContactOverview() {
  const t = useTranslations("contactPage");

  return (
    <Section className="bg-background">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="h-11 rounded-full bg-background px-5 text-sm"
          >
            {t("badge")}
          </Badge>

          <h1 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            {t("title")}
          </h1>

          <p className="mt-6 text-base leading-8 text-foreground/75 md:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <Card className="flex h-full rounded-lg">
            <CardHeader>
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                {t("branch.title")}
              </CardTitle>
              <CardDescription className="text-base leading-7 text-foreground/70">
                {t("branch.description")}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
              <Separator className="mb-5" />
              <dl className="grid gap-5 text-sm">
                <div>
                  <dt className="font-medium text-foreground">
                    {t("labels.address")}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-foreground/80">
                    {address}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">
                    {t("labels.phone")}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-foreground/80">
                    {phoneNumber}
                  </dd>
                </div>
              </dl>

              <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
                <Button asChild className="h-11 px-5">
                  <a href={phoneHref}>
                    {t("actions.call")}
                    <Phone className="size-4" />
                  </a>
                </Button>

                <Button asChild variant="outline" className="h-11 px-5">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    {t("actions.whatsapp")}
                    <MessageCircle className="size-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 px-5 sm:col-span-2"
                >
                  <a href={directionsHref} target="_blank" rel="noreferrer">
                    {t("actions.directions")}
                    <Navigation className="size-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="h-80 gap-0 rounded-lg p-0 md:h-96 lg:h-full">
            <CardContent className="h-full p-0">
              <iframe
                src={mapEmbedSrc}
                title={t("map.title")}
                className="block size-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
