import logo from "../assets/logo-footer.svg";
import { Twitter } from "lucide-react";

import { sections } from "./section-components/features-components/feature-content";
import { useState } from "react";
export const Footer = () => {
  return (
    <div className=" relative inset-x-0 bg-DarkBlue ">
      <div className="flex flex-col gap-9 mx-auto items-center py-16 ">
        <div>
          <img src={logo} alt="logo" />
        </div>
        {sections.map((e, i) => (
          <div className=" text-lg text-[rgb(145,148,161)]" key={i}>
            {e}
          </div>
        ))}
        <div className="flex justify-center gap-8">
          <div>
            <img
              src="https://tailwindfromscratch.com/website-projects/bookmark/images/icon-facebook.svg"
              alt="facebook-logo"
            />
          </div>
          <div>
            <Twitter fill="white" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
