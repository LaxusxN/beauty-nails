import { FC } from "react";
import about from "../../../assets/about.jpeg";

interface AboutProps {
  prop?: string;
}

export const About: FC<AboutProps> = () => {
  return (
    <div
      className="flex flex-col
      sm:flex-row sm:justify-center items-center 
       w-full p-16 gap-8 bg-rose-100 "
    >
      <img
        src={about}
        className="rounded-full grow-0 shrink-0 
        w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] 
        object-cover object-center"
      />
      <h1
        className="w-[250px]  text-lg text-gray-700 font-sans
        sm:w-[700px] sm:text-xl text-center"
      >
        ¡Hola! Soy una manicurista apasionada que está dando sus primeros pasos
        en este maravilloso mundo del cuidado de uñas. Me llamo Nita y estoy
        aquí para cuidar tus manos y uñas con dedicación y entusiasmo. ¡Espero
        tener la oportunidad de atenderte pronto!
      </h1>
    </div>
  );
};

export default About;
