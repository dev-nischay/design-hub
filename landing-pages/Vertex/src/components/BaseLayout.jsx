export default ({ children }) => {
  return (
    <div class="h-screen bg-gradient-to-b from-red-600 from-[0%] to-black to-[80%]">
      {/* add slate - 900 as a liner gradinent seee how to make it */}
      {children}
    </div>
  );
};
