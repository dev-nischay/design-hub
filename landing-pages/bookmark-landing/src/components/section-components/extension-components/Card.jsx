import { Button } from "../../Button";

export const Card = ({ title, image, version }) => {
  return (
    <div className="relative flex flex-col items-center max-w-5xl px-4">
      <div className=" flex flex-col w-full justify-center py-6 space-y-4  rounded-lg shadow-lg md:w-1/3">
        <div className="flex justify-center">
          <img src={image} alt="logo" />
        </div>
        <div className=" pt-6 text-xl font-bold  ">{title}</div>
        <div className="text-[#9CA3AF]">{`Minimum Version ${version}`}</div>
        <div>
          <div className="relative pt-2   border-[#9CA3AF] border-b-2 border-dotted "></div>
          <Button
            text={"Add & Install Extension"}
            className="px-14 rounded-lg mt-5 pt-3  font-normal  text-[16px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
