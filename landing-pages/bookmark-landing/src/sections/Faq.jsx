import { useState } from "react";
import { Accordian } from "../components/section-components/faq-components/Accordion";

export const Faq = () => {
  return (
    <div>
      <div className="text-center leading-normal max-w-md flex flex-col gap-6 mx-auto mb-10 md:max-w-lg  ">
        <div className="text-3xl font-semibold text-center   ">
          Frequently Asked Questions
        </div>
        <p className="text-slate-900   text-[1rem]  tracking-[-0.010em]   ">
          Here are some of our FAQs. if you have any other questions you's like
          answered please feel free to email use.
        </p>
      </div>
      <div className="flex-col flex ">
        <Accordian />
      </div>
    </div>
  );
};
