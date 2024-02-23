import { FC } from "react";

interface HeaderProps {
  prop?: string;
}

export const Header: FC<HeaderProps> = () => {
  return (
    <div
      className="text-red-50 font-thin
      flex flex-col  items-center gap-4 p-8"
    >
      <p className="text-4xl">Beauty Nails </p>
      <p className="text-xl">Cuida y engrie tus uñas</p>
    </div>
  );
};

export default Header;
