import { TextAlignJustify } from "lucide-react";
import logo from "../assets/nav-logo.svg";
import { Link } from "react-router-dom";
import { NavModal } from "./Nav-Modal";
import { useState } from "react";
export const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <NavModal setModal={setModal} modal={modal} />
      <div
        className={`flex justify-between mt-5 items-center w-full mx-auto ${
          modal ? "opacity-0" : "opacity-100"
        }`}
      >
        <div>
          <img src={logo} loading="lazy" />
        </div>
        <div>
          <button onClick={() => setModal((prev) => !prev)}>
            <TextAlignJustify size={24} absoluteStrokeWidth strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};
