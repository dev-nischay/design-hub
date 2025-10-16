import footerLogo from "../assets/logo-footer.svg";
import { X } from "lucide-react";
import { sections } from "./section-components/features-components/feature-content";
export const NavModal = ({ setModal, modal }) => {
  return (
    <div
      className={` bg-DarkBlue  inset-0 overflow-hidden  transition-opacity duration-300  p-6 fixed z-50  
            ${
              modal
                ? "opacity-95 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
        `}
    >
      <div className="mx-auto mt-[1.16rem] pl-[3.5px] flex justify-between items-center">
        <img src={footerLogo} />
        <div>
          <button
            onClick={() => setModal((prev) => !prev)}
            className="hover:bg-black/20 rounded-md p-1 transition-all duration-300"
          >
            <X color="white" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-8 mx-auto text-white tracking-widest text-center  gap-6">
        {sections.map((e, index) => (
          <LocalSections title={e} key={index} />
        ))}
      </div>
    </div>
  );
};

const LocalSections = ({ title }) => {
  return (
    <div className="hover:bg-black/20 rounded-md p-2 transition-all duration-300">
      {title}
    </div>
  );
};
