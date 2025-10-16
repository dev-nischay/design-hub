import heroImage from "../assets/hero-image.svg";
import { Button } from "./Button";
export const Hero = () => {
  return (
    <div className="w-full">
      <div className="mt-[4.2rem] ">
        <img src={heroImage} alt="image" className="mx-auto" />
      </div>
      <div className="flex flex-col gap-5 text-center ">
        <div>
          <h1 className="font-semibold text-3xl">A Simple Bookmark Manager</h1>
        </div>
        <div className="opacity-45 text-lg pt-5 text-slate-900  ">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </div>
        <div className="flex justify-center gap-4 pt-5 ">
          <Button text={"Get It On Chrome"} />
          <Button
            text={"Get It On Firefox"}
            className="bg-[#D1D5DB] border-[#D1D5DB]  text-black  hover:border-neutral-400 hover:opacity-80 hover:text-black"
          />
        </div>
      </div>
    </div>
  );
};
// fix the  button above its not loading the colors correctly
