import Image from "next/image";
import Hero from "@/app/components/landing-page/hero";
import Header from "@/app/components/landing-page/header";
import VideoExplanation from "@/app/components/landing-page/video-explanation";
import Pricing from "@/app/components/landing-page/pricing";
import FAQ from "@/app/components/landing-page/faq";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto "> 
    {/* limitamos o tamanho da tela para 7xl e centralizamos, para n se preocupar com telas muito grander */}
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}
