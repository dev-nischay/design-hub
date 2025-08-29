export default () => {
  const links = [
    {
      href: "#",
      title: "Founders",
    },
    {
      href: "#",
      title: "Guide",
    },
    {
      href: "#",
      title: "Pricing",
    },
    {
      href: "#",
      title: "Login",
    },
  ];

  return (
    <div className="navbar-root">
      <div className="logo">Finta</div>
      <div className="links">
        {links.map((e, idx) => (
          <a key={idx} className="link-items" href={e.href}>
            {e.title}
          </a>
        ))}
        <button className="start-btn">Get started</button>
      </div>
    </div>
  );
};
