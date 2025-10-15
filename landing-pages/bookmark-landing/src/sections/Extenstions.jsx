import Card from "../components/section-components/extension-components/Card.jsx";

export const Extensions = () => {
  const cards = [
    { title: "Chrome", desc: "Install on Chrome — sync across devices" },
    { title: "Firefox", desc: "Lightweight and fast" },
    { title: "Edge", desc: "Integrates with Windows" },
  ];

  return (
    <div>
      <div className="text-center leading-normal max-w-md flex flex-col gap-6 mx-auto ">
        <div className="text-4xl font-semibold  ">Download the extensions</div>
        <p className="text-slate-900  opacity-45 text-[1rem]  tracking-[-0.010em] text-center ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        {cards.map((e, index) => (
          <Card desc={e.desc} title={e.title} key={index} />
        ))}
      </div>
    </div>
  );
};
