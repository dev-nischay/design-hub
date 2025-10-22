import Card from "../components/section-components/extension-components/Card.jsx";
import chromeLogo from "../assets/logo-chrome.svg";
import firefoxLogo from "../assets/logo-firefox.svg";
import operaLogo from "../assets/logo-opera.svg";

export const Extensions = () => {
  const cards = [
    {
      title: "Add to Chrome",
      version: "62",
      image: chromeLogo,
    },
    { title: "Add to Firefox", version: "55", image: firefoxLogo },
    { title: "Add to Opera", version: "46", image: operaLogo },
  ];

  return (
    <div>
      <div className="text-center leading-normal flex flex-col gap-6 mx-auto mt-14 md:max-w-lg ">
        <div className="text-3xl font-semibold   ">Download the extension</div>
        <p className="text-slate-900  opacity-45 text-[1rem]  tracking-[-0.010em] text-center  ">
          We've got more browsers in the pipeline. Please do let use know if
          you've got a favourite you'd like us to prioritize
        </p>
      </div>
      <div className="flex flex-col justify-center gap-10 pt-32 md:flex-row">
        {cards.map((e, index) => (
          <Card
            title={e.title}
            version={e.version}
            image={e.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

// remove mt-14 if causing problem in dekstop view
