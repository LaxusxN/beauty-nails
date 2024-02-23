import { FC } from "react";
import anatomy from "../../../assets/anatomy.png";

interface NailsAnatomyProps {
  prop?: string;
}

export const NailsAnatomy: FC<NailsAnatomyProps> = () => {
  return (
    <div className="flex flex-col p-16 gap-16 items-center bg-[#F5F5F5]">
      <p className="text-4xl font-sans">ANATOMÍA DE LA UÑA</p>
      <img src={anatomy} />
    </div>
  );
};

export default NailsAnatomy;
