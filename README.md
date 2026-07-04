# Luna Den Spa Dedeman Şanlıurfa

Luna Den Spa markasının Dedeman Şanlıurfa şubesi için hazırlanmış statik web sitesi. `luna-den-spa-bodrum` ve `luna-den-spa-izmir` projeleriyle aynı mimari ve tasarım dilini kullanır.

- **Next.js** (App Router, statik export destekli) + **TypeScript**
- **Tailwind CSS v4** + shadcn/ui bileşenleri
- **next-intl** ile TR/EN çok dilli yapı (`messages/tr.json`, `messages/en.json`)
- Şube bilgileri kaynağı: https://lunadenspa.com.tr/dedeman-sanliurfa/

## Geliştirme

```bash
pnpm install
pnpm dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Derleme

```bash
# Standart production build
pnpm build

# Statik export (Cloudflare Pages vb. için, çıktı: out/)
pnpm build:cloudflare
```

## Yapılandırma

- `NEXT_PUBLIC_SITE_URL`: canlı alan adı (varsayılan: `https://lunadenspaurfa.com`). `src/data/site.ts` üzerinden okunur; sitemap, robots ve metadata bu değeri kullanır.
- Google Ads dönüşüm kimlikleri `.env` içinde tanımlanır (`.env.example` şablonuna bakın). Boş bırakılırsa analytics devre dışı kalır.

## İçerik

- Şube iletişim bilgileri: `src/features/iletisim/components/ContactOverview.tsx`, `src/features/anasayfa/components/HomeContact.tsx`, `src/components/layout/controls/phone-contact-dropdown.tsx`
- Metinler: `messages/tr.json` ve `messages/en.json`
- Görseller: `public/` (hero, hizmetlerimiz, hakkımızda galerisi, logo)

## Görseller

`public/` altındaki fotoğraflar Dedeman Şanlıurfa şubesinin gerçek görselleridir (marka sahibi tarafından sağlandı).
