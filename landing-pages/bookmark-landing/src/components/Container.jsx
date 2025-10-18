export const Container = ({ children }) => {
  return (
    <div className="bg-white min-h-screen  w-screen p-6">
      <div className="  mx-auto w-full font-[rubik] mb-28 sm:max-w-lg md:max-w-none">
        {children}
      </div>
    </div>
  );
};
