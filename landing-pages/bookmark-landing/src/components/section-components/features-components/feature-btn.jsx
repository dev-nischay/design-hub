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
    <div className="flex flex-col gap-6   md:flex-row  md:items-center">
      {/* {types.map((e, index) => (
        <LocalBtn
          key={index}
          content={e.content}
          setState={setState}
          featureType={e.title}
        />
      ))} */}
      <button>1</button>
      <button>2</button>
      <button>3</button>
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
    <div
      onClick={handleClick}
      className="md:inline-flex md:mx-2 cursor-pointer md:flex-none md:w-auto"
    >
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
