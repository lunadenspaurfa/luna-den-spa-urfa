import { HomeAbout } from "@/features/anasayfa/components/HomeAbout";
import { HomeContact } from "@/features/anasayfa/components/HomeContact";
import { HomeHero } from "@/features/anasayfa/components/HomeHero";
import { HomeServices } from "@/features/anasayfa/components/HomeServices";

export default function AboutPageWrapper() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeContact />
    </>
  );
}
