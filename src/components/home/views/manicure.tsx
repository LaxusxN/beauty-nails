import { FC } from "react";
import { ManicureInfo } from "../../basic";
import basico from "../../../assets/basico.png";
import gel from "../../../assets/intermedio.png";
import acrilico from "../../../assets/acrilico.png";

interface ManicureProps {
  prop?: string;
}
const uñas = [
  {
    text: "BÁSICO",
    image: basico,
    reverse: false,
  },
  {
    text: "SISTEMA DE UÑAS EN GEL",
    image: gel,
    reverse: true,
  },
  {
    text: "SISTEMA DE UÑAS EN ACRÍLICO",
    image: acrilico,
    reverse: false,
  },
];
export const Manicure: FC<ManicureProps> = () => {
  return (
    <div className="bg-[#F5F5F5] p-16">
      <h1 className="text-center text-4xl ">MANICURE</h1>
      {uñas.map((index) => (
        <ManicureInfo
          reverse={index.reverse}
          image={index.image}
          text={index.text}
        />
      ))}
    </div>
  );
};

export default Manicure;
