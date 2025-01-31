import Image from "next/image";
import Hero from "./components/landing-page/hero";
import Header from "./components/landing-page/header";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto "> 
    {/* limitamos o tamanho da tela para 7xl e centralizamos, para n se preocupar com telas muito grander */}
      <Header />
      <Hero />

    </div>
  );
}
