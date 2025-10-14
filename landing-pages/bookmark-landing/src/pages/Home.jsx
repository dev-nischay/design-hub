import { Hero } from "../components/Hero";
import { Features } from "../sections/Features";

export const Home = () => {
  return (
    <div className="flex flex-col gap-[5.5rem]">
      <Hero />
      <Features />
    </div>
  );
};
