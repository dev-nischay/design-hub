import { Button } from "../../Button";

export const DynamicContent = ({ paragraph, title, image }) => {
  return (
    <div className="flex flex-col  gap-14 md:flex-row">
      <div>
        <img src={image} className="mx-auto" />
      </div>
      <div className=" flex flex-col  text-center  gap-2 mx-auto md:max-w-lg  ">
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
