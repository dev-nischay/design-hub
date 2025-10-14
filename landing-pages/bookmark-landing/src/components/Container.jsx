export const Container = ({ children }) => {
  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-md  min-h-screen mx-auto border border-black   p-2 font-[rubik]">
        {children}
      </div>
    </div>
  );
};
