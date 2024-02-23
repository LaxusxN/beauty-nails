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
      className="w-[400px] relative cursor-pointer
          hover:shadow-lg hover:scale-105 transition duration-300 
          "
    >
      <img
        src={image}
        className="rounded-lg cursor-pointer
          h-[350px] w-[400px]
            "
      />
      <div
        className="opacity-0 hover:opacity-100 duration-300 absolute cursor-pointer
            inset-0 z-10 flex justify-center items-center 
            "
        style={estiloTexto}
      >
        <h1>{info}</h1>
      </div>
    </div>
  );
};

export default CardService;
