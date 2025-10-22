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
    <div className="flex flex-col gap-6   text-center m-10 ">
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
        className={`bg-none text-md pb-6 ${
          click ? "text-red-500" : "text-black"
        }`}
      >
        {featureType}
      </div>
    </div>
  );
};
