import { unstable_noStore as noStore } from "next/cache";
import { HeroSection } from "@/components/HeroSection";

export default async function Home() {
  noStore();

  return <HeroSection />;
}