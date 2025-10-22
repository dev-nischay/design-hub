import { useState } from "react";
import { featureContent } from "./feature-content";
export const FeatureTypes = ({ setState }) => {
  const types = [
    {
      title: "Simple Bookmarking",
      content: featureContent[0],
    },
    {
      title: "Speedy Searching ",
      content: featureContent[1],
    },

    {
      title: "Easy Sharing",
      content: featureContent[2],
    },
  ];

  return (
    <div className="flex  text-center flex-col gap-5 md:flex-row ">
      {types.map((e, index) => (
        <LocalBtn
          key={index}
          content={e.content}
          setState={setState}
          featureType={e.title}
        />
      ))}
    </div>
  );
};

const LocalBtn = ({ featureType, content, setState }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
    setState(content);
  };

  return (
    <div onClick={handleClick}>
      <div
        className={` text-center bg-none  text-md pb-6  ${
          click ? "text-red-500" : "text-black"
        } `}
      >
        {featureType}
      </div>
      <div className="relative  border-[0.5px] border-neutral-300 ">
        <div
          className={`absolute border-2 border-red-400 -top-1 inset-x-32 transition-opacity ${
            click ? "opacity-100" : "opacity-0"
          } `}
        ></div>
      </div>
    </div>
  );
};
