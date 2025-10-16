export const Container = ({ children }) => {
  return (
    <div className="bg-white min-h-screen  w-screen p-6">
      <div className=" max-w-md mx-auto w-full font-[rubik]">{children}</div>
    </div>
  );
};
