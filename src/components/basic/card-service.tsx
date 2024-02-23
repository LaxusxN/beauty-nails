import { FC, CSSProperties } from "react";

interface CardServiceProps {
  image: string;
  info: string;
}

const estiloTexto: CSSProperties = {
  color: "#fff",
  textShadow:
    "0 0 10px #00ff00, " +
    "0 0 20px #00ff00, " +
    "0 0 30px #00ff00, " +
    "0 0 40px #00ff00, " +
    "0 0 50px #00ff00, " +
    "0 0 60px #00ff00, " +
    "0 0 70px #00ff00",
  textAlign: "center",
};

export const CardService: FC<CardServiceProps> = ({ image, info }) => {
  return (
    <div
      className=" flex flex-col-reverse gap-4
      sm:w-[400px] sm:relative sm:cursor-pointer
          sm:hover:shadow-lg sm:hover:scale-105 sm:transition sm:duration-300 
          "
    >
      <img
        src={image}
        className="rounded-lg cursor-pointer
          w-[300px] h-[300px] sm:h-[350px] sm:w-[400px]
            "
      />
      <div
        className="
        sm:opacity-0 sm:hover:opacity-100 sm:duration-300 sm:absolute cursor-pointer
            sm:inset-0 sm:z-10 sm:flex sm:justify-center sm:items-center 
            "
        style={estiloTexto}
      >
        <h1>{info}</h1>
      </div>
    </div>
  );
};

export default CardService;
