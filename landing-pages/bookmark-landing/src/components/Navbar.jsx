import { TextAlignJustify } from "lucide-react";
import logo from "../assets/nav-logo.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-between mt-10 ">
      <div>
        <img src={logo} loading="lazy" />
      </div>
      <div>
        <button className="hover:bg-slate-700 rounded-md transition-all ">
          <TextAlignJustify size={24} absoluteStrokeWidth strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};
