import { useState } from "react";
import { FeatureTypes } from "../components/section-components/features-components/feature-btn";
import { DynamicContent } from "../components/section-components/features-components/feature-content-component";
import { featureContent } from "../components/section-components/features-components/feature-content";

export const Features = () => {
  const [state, setState] = useState(featureContent[0]);

  return (
    <div>
      <div className="text-center leading-normal max-w-md flex flex-col gap-6 ">
        <div className="text-4xl font-semibold  ">Features</div>
        <p className="text-slate-900  opacity-45 text-[1rem]  tracking-[-0.010em] text-center ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-col mt-[4rem]  gap-10">
        <FeatureTypes setState={setState} />
        <DynamicContent
          title={state.title}
          image={state.img}
          paragraph={state.paragraph}
        />
      </div>
    </div>
  );
};
