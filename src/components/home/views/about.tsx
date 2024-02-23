import { FC } from "react";
import about from "../../../assets/about.jpeg";

interface AboutProps {
  prop?: string;
}

export const About: FC<AboutProps> = () => {
  return (
    <div
      className="flex justify-center items-center 
       w-full p-16 gap-8 bg-[#E6E6FA] "
    >
      <img src={about} className="rounded-full h-[500px] w-[500px]" />
      <h1 className="w-[700px] text-xl text-center">
        ¡Hola! Soy una manicurista apasionada que está dando sus primeros pasos
        en este maravilloso mundo del cuidado de uñas. Me llamo Nita y estoy
        aquí para cuidar tus manos y uñas con dedicación y entusiasmo. ¡Espero
        tener la oportunidad de atenderte pronto!
      </h1>
    </div>
  );
};

export default About;
