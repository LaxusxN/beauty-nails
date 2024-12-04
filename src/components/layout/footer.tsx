import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faWhatsapp,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
interface FooterProps {
  prop?: string;
}
const media = [
  // {
  //   name: faWhatsapp,
  //   url: "https://wa.link/eei8ku",
  // },
  {
    name: faInstagram,
    url: "https://www.instagram.com/beuty.nails.lima/",
  },
  {
    name: faTiktok,
    url: "https://www.tiktok.com/@beauty.nails.lima?_t=8rwL3E0m5fs&_r=1",
  },
];

const handleRedirect = (url: string) => {
  window.open(url, "_blank");
};

export const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex flex-col p-16 gap-8">
      <h1 className="text-white text-2xl font-sans">Contáctame:</h1>
      <div className=" flex justify-between">
        {media.map((index) => (
          <FontAwesomeIcon
            icon={index.name}
            style={{ color: "#ffffff", height: 60, cursor: "pointer" }}
            onClick={() => handleRedirect(index.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
