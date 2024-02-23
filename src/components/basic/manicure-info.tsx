import { FC } from "react";

interface ManicureInfoProps {
  reverse: boolean;
  image: string;
  text: string;
}

export const ManicureInfo: FC<ManicureInfoProps> = ({
  reverse,
  image,
  text,
}) => {
  return (
    <div
      className={` flex justify-center items-center
                p-16 gap-16
${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <h1 className="text-center text-xl font-sans w-[400px]">{text}</h1>
      <img src={image} className="h-[300px] w-[400px]" />
    </div>
  );
};

export default ManicureInfo;
