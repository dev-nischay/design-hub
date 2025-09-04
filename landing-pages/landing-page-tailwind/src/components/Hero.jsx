export default () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20 ">
      <div className="text-xs font-medium bg-slate-300  py-1 px-4 rounded-xl border border-slate-300">
        Incorportaion common mistake to avoid
      </div>
      {/* add svg later */}
      <div className="text-6xl w-2/3  font-medium my-10">
        Magically simplify accounting and taxes
      </div>
      <div className="text-lg text-gray-600 w-2/4  ">
        Automated bookkeeping, effortless tax filing, real-time insights. Set up
        in 10 mins. Back to building by 1:53am.
      </div>
      <div className="flex items-center gap-4 text-center">
        <button className="px-4 py-2 bg-blue-600 text-xs text-white font-sm rounded-lg drop-shadow-md my-5">
          Get Started
        </button>
        <button>Pricing</button>
      </div>
      <div className="text-xs text-gray-500">
        Currently for US-based Delaware C-Corps.
      </div>
    </div>
  );
};
