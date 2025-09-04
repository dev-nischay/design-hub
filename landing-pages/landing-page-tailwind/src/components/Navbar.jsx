export default () => {
  const links = [
    { href: "#", name: "Founders" },
    { href: "#", name: "Guide" },
    { href: "#", name: "Price" },
    { href: "#", name: "Log In" },
  ];

  return (
    <div className="flex justify-between items-center p-3  ">
      <img
        src="https://a-us.storyblok.com/f/1023015/68x24/8f586a9168/logo.svg"
        width={60}
        height={60}
        alt=""
      />
      <div className="flex gap-7 text-sm items-center  ">
        {links.map((e) => (
          <a href={e.href}>{e.name}</a>
        ))}
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg drop-shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};
