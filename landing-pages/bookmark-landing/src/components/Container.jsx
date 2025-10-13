export const Container = ({ children }) => {
  return (
    <div className="bg-slate-200 min-h-screen w-full">
      <div className="max-w-md flex justify-center mx-auto border border-black  h-screen p-2">
        {children}
      </div>
    </div>
  );
};
