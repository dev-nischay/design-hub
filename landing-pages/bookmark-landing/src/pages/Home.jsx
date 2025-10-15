import { Hero } from "../components/Hero";
import { Extensions } from "../sections/Extenstions";
import { Features } from "../sections/Features";

export const Home = () => {
  return (
    <div className="flex flex-col gap-[5.6rem]  ">
      <Hero />
      <Features />
      <Extensions />
    </div>
  );
};
