import { Button } from "../../Button";

export const DynamicContent = ({ paragraph, title, image }) => {
  return (
    <div className="flex flex-col max-w-md gap-14">
      <div>
        <img src={image} />
      </div>
      <div className=" flex flex-col justify-center text-center  gap-2 max-w-md ">
        <div className="text-3xl  font-semibold">{title}</div>
        <p className="text-slate-900  text-[1.05rem] opacity-45 leading-snug pt-6 p-1 tracking-[-0.020em] text-center ">
          {paragraph}
        </p>

        <div className="mt-2">
          <Button
            text={"More Info"}
            className=" py-[0.6rem] px-7 font-bold  text-lg rounded"
          />
        </div>
      </div>
    </div>
  );
};
// convert the above layout to flex and then fix the rendering logictracking-[-0.020em]
