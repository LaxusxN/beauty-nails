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
      <div
        className="text-center text-xl font-sans
        "
      >
        <h1>{text}</h1>
      </div>
      <img
        src={image}
        className="h-[150px] w-[200px] sm:h-[250px] sm:w-[300px] cursor-pointer rounded-lg shrink-0 grow-0
        hover:shadow-lg hover:scale-105 transition duration-300"
      />
    </div>
  );
};

export default ManicureInfo;
