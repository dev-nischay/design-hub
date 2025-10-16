import { Hero } from "../components/Hero";
import { Extensions } from "../sections/Extenstions";
import { Features } from "../sections/Features";
import { Faq } from "../sections/Faq";
export const Home = () => {
  return (
    <div className="flex flex-col gap-[5.6rem] justify-center w-full   ">
      <Hero />
      <Features />
      <Extensions />
      <Faq />
    </div>
  );
};
