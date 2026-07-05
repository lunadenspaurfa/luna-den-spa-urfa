import Image from "next/image";
import { Check, Dumbbell, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    key: "hamam",
  },
  {
    key: "keseKopuk",
  },
  {
    key: "sauna",
  },
  {
    key: "fitness",
  },
  {
    key: "classic",
  },
  {
    key: "deepTissue",
  },
  {
    key: "aromatherapy",
  },
  {
    key: "personal",
  },
] as const;

export function ServicesOverview() {
  const t = useTranslations("servicesPage");

  return (
    <Section className="bg-background">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="lg:order-last">
            <Badge
              variant="outline"
              className="h-11 rounded-full px-5 text-sm"
            >
              <Sparkles className="size-4" />
              {t("badge")}
            </Badge>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:hidden">
            <Card className="relative min-h-44 rounded-lg p-0 sm:min-h-56">
              <CardContent className="relative min-h-44 overflow-hidden p-0 sm:min-h-56">
                <Image
                  src="/hizmetlerimiz/hizmetlerimiz-1.webp"
                  alt={t("images.primaryAlt")}
                  fill
                  priority
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </CardContent>
            </Card>

            <Card className="relative min-h-44 rounded-lg p-0 sm:min-h-56">
              <CardContent className="relative min-h-44 overflow-hidden p-0 sm:min-h-56">
                <Image
                  src="/hizmetlerimiz/hizmetlerimiz-2.webp"
                  alt={t("images.secondaryAlt")}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </CardContent>
            </Card>
          </div>

          <Card className="relative hidden min-h-96 rounded-lg p-0 lg:block">
            <CardContent className="relative min-h-96 overflow-hidden p-0">
              <Image
                src="/hizmetlerimiz/hizmetlerimiz-1.webp"
                alt={t("images.primaryAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </CardContent>
          </Card>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Card className="relative hidden min-h-112 rounded-lg p-0 lg:block">
            <CardContent className="relative min-h-112 overflow-hidden p-0">
              <Image
                src="/hizmetlerimiz/hizmetlerimiz-2.webp"
                alt={t("images.secondaryAlt")}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </CardContent>
          </Card>

          <Card className="rounded-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="size-5" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">
                  {t("listTitle")}
                </CardTitle>
              </div>
              <CardDescription className="mt-3 text-base leading-7">
                {t("listDescription")}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                  <AccordionItem key={service.key} value={`service-${index}`}>
                    <AccordionTrigger>
                      <span className="flex items-center gap-3 text-base font-semibold text-foreground">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Check className="size-4" />
                        </span>
                        {t(`items.${service.key}.title`)}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="pl-11 text-base leading-7 text-muted-foreground">
                        {t(`items.${service.key}.description`)}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="mt-14">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="h-11 rounded-full px-5 text-sm"
            >
              <Dumbbell className="size-4" />
              {t("gym.badge")}
            </Badge>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              {t("gym.title")}
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              {t("gym.description")}
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card className="relative rounded-lg p-0">
              <CardContent className="relative aspect-[5/2] overflow-hidden p-0">
                <Image
                  src="/hizmetlerimiz/spor-salonu-1.webp"
                  alt={t("gym.primaryAlt")}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </CardContent>
            </Card>

            <Card className="relative rounded-lg p-0">
              <CardContent className="relative aspect-[5/2] overflow-hidden p-0">
                <Image
                  src="/hizmetlerimiz/spor-salonu-2.webp"
                  alt={t("gym.secondaryAlt")}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
