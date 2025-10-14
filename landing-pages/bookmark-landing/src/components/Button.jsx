export const Button = ({ text, className = "" }) => {
  return (
    <button
      className={` text-white p-4 border-2 border-btnPrimary  font-semibold bg-btnPrimary text-sm rounded  shadow-md hover:text-btnPrimary hover:bg-white ${className}`}
    >
      {text}
    </button>
  );
};
