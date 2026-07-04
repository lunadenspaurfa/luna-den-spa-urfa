import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/primitives/container";
import { navigationItems } from "@/data/navigation";
import { Link } from "@/i18n/navigation";

const footerNavigationItems = navigationItems.filter(
  (item) => item.href !== "/",
);

const address = "Atatürk, Meteoroloji Caddesi No:19, 63100 Haliliye/Şanlıurfa";
const phoneNumber = "+90 539 339 6323";
const phoneHref = "tel:+905393396323";
const whatsappHref = "https://wa.me/905393396323";

export function Footer() {
  const tNavigation = useTranslations("navigation");
  const tFooter = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1.2fr_0.8fr] md:items-start">
          <div className="max-w-xl">
            <p className="text-sm leading-6 text-muted-foreground">
              {tFooter("description")}
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              {tFooter("contactTitle")}
            </h2>
            <ul className="mt-3 grid gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href={phoneHref} className="transition hover:text-foreground">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="size-4 shrink-0 text-primary" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-foreground"
                >
                  WhatsApp: {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-primary" />
                <span>{tFooter("hours")}</span>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer menü" className="md:justify-self-end">
            <h2 className="text-base font-semibold text-foreground">
              {tFooter("quickLinks")}
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {footerNavigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="transition hover:text-foreground"
                  >
                    {tNavigation(item.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
          {tFooter("copyright")}
        </div>
      </Container>
    </footer>
  );
}
