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
    image: tecnicas,
    info: "Diversas técnicas",
  },
  {
    image: mantenimiento,
    info: "Mantenimiento",
  },
  {
    image: retiro,
    info: "Retiro",
  },
];
export const Services: FC<ServicesProps> = () => {
  return (
    <div
      className="p-16 bg-rose-100
      flex flex-col gap-8"
    >
      <h1 className="text-center text-4xl">Se realiza</h1>
      <div
        className="
        flex flex-col
        lg:grid lg:grid-cols-[500px_500px] lg:justify-center items-center
        gap-8  
       "
      >
        {services.map((index) => (
          <CardService image={index.image} info={index.info} />
        ))}
      </div>
    </div>
  );
};

export default Services;
