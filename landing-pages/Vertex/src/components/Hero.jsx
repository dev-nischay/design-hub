export default () => {
  return (
    <div className="my-40  mx-auto text-center  ">
      <h1
        className="mx-auto max-w-3xl   text-7xl font-bold tracking-tight
 bg-clip-text  text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-500 "
      >
        Unleash the power of intuitive finance
      </h1>
      <p className="   mt-8 mx-auto max-w-2xl text-neutral  text-xl text-zinc-400">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
      <div className="  flex flex-col justify-center items-center  mt-8">
        <button
          className="  relative border-neutral-950 text-xs font-mono border  px-6 py-3 rounded-lg text-white cursor-pointer transition-all
            hover:shadow-[0px_0px_10px_#94a3b8]
        "
        >
          <div className="absolute   -bottom-0 bg-gradient-to-l from-transparent via-red-500 to-transparent left-0 right-0 h-px  "></div>
          Join Waitlist
        </button>
      </div>
    </div>
  );
};
