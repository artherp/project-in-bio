import Image from "next/image";
import Hero from "./components/landing-page/hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto "> 
    {/* limitamos o tamanho da tela para 7xl e centralizamos, para n se preocupar com telas muito grander */}
      
      <Hero />

    </div>
  );
}
