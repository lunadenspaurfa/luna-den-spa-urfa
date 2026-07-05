import { ArrowRight, Droplets, Dumbbell, Flame, HeartPulse } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { Section } from "@/components/layout/primitives/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

const featuredServices = [
  {
    key: "hamam",
    icon: Droplets,
  },
  {
    key: "sauna",
    icon: Flame,
  },
  {
    key: "massage",
    icon: HeartPulse,
  },
  {
    key: "fitness",
    icon: Dumbbell,
  },
] as const;

export function HomeServices() {
  const t = useTranslations("home.services");

  return (
    <Section className="bg-secondary/40">
      <Container>
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center">
          <Badge
            asChild
            variant="outline"
            className="h-14 rounded-full border-primary/25 bg-background px-7 text-lg font-medium text-foreground shadow-sm transition hover:border-primary/45 hover:bg-secondary"
          >
            <Link href="/hizmetlerimiz">{t("badge")}</Link>
          </Badge>

          <p className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            {t("intro")}
          </p>

          <Button asChild className="mt-7 h-11 px-5">
            <Link href="/hizmetlerimiz">
              {t("cta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div>
          <h2 className="mb-5 text-center text-xl font-semibold text-foreground md:text-2xl">
            {t("popularTitle")}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <Card key={service.key} className="rounded-lg border-t-2 border-t-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <service.icon className="size-5" />
                    </div>
                    <CardTitle>{t(`featured.${service.key}.title`)}</CardTitle>
                  </div>
                  <CardDescription className="mt-3 leading-6">
                    {t(`featured.${service.key}.description`)}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
