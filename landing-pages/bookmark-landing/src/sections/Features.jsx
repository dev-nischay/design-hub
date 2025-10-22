import { useState } from "react";
import { FeatureTypes } from "../components/section-components/features-components/feature-btn";
import { DynamicContent } from "../components/section-components/features-components/feature-content-component";
import { featureContent } from "../components/section-components/features-components/feature-content";

export const Features = () => {
  const [state, setState] = useState(featureContent[0]);

  return (
    <div>
      <div className="text-center leading-normal justify-center flex flex-col gap-6 md:max-w-lg mx-auto ">
        <div className="text-4xl font-semibold  ">Features</div>
        <p className="text-slate-900  opacity-45 text-[1rem]  tracking-[-0.010em] text-center ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <div>
          <FeatureTypes setState={setState} />
        </div>
        <div>
          <DynamicContent
            title={state.title}
            image={state.img}
            paragraph={state.paragraph}
          />
        </div>
      </div>
    </div>
  );
};
