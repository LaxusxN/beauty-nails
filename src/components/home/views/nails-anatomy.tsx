import { FC } from "react";
import anatomy from "../../../assets/anatomy.png";

interface NailsAnatomyProps {
  prop?: string;
}

export const NailsAnatomy: FC<NailsAnatomyProps> = () => {
  return (
    <div className="flex flex-col p-16 gap-16 items-center bg-[#F5F5F5]">
      <p className="text-4xl font-thin">ANATOMÍA DE LA UÑA</p>
      <div
        className=" flex flex-col-reverse gap-4 sm:relative
        hover:shadow-lg hover:scale-105 transition duration-300
        "
      >
        <img
          src={anatomy}
          className="w-[550px] rounded-xl 
          "
        />
        <h1
          className="cursor-pointer text-black font-serif text-center
          sm:absolute sm:top-20 sm:w-[170px] sm:left-48 sm:text-white
          sm:opacity-0 sm:hover:opacity-100 sm:duration-300  
          sm:inset-0 sm:z-10"
        >
          Como epecialista en sistema de uñas he invertido tiempo en comprender
          su anatomía y he adquirido un profundo conocimiento sobre el cuidado,
          la higiene y el fascinante mundo de diversas técnicas que se pueden
          aplicar en ellas.
        </h1>
      </div>
    </div>
  );
};

export default NailsAnatomy;
