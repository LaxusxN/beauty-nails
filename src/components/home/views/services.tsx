import { FC } from "react";
import retiro from "../../../assets/retiro.png";
import limpieza from "../../../assets/Limpieza.png";
import mantenimiento from "../../../assets/mantenimiento.png";
import tecnicas from "../../../assets/tecnicas.png";
import { CardService } from "../../basic";

interface ServicesProps {
  prop?: string;
}

const services = [
  {
    image: limpieza,
    info: "Limpieza",
  },
  {
    image: retiro,
    info: "Retiro",
  },
  {
    image: mantenimiento,
    info: "Mantenimiento",
  },
  {
    image: tecnicas,
    info: "Diversas técnicas",
  },
];
export const Services: FC<ServicesProps> = () => {
  return (
    <div
      className="grid grid-cols-[500px_500px] justify-center items-center  
      p-16 bg-[#E6E6FA] gap-8 "
    >
      {services.map((index) => (
        <CardService image={index.image} info={index.info} />
      ))}
    </div>
  );
};

export default Services;
