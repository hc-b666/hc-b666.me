import { FC } from "react";
import { Link } from "react-router-dom";
import { ExtensionInterface } from "@/data/extensions";

export const Extension: FC<{ extension: ExtensionInterface }> = ({ extension }) => {

  return (
    <Link to={extension.link} className="extension-wrap">
      <div className="flex flex-col gap-1">
        <h3 className="text-md">{extension.name}</h3>
        <p className="text-grey text-xs">{extension.description}</p>
      </div>
      <img src={extension.image} alt={extension.name} className="w-10 h-10 object-cover" />
    </Link>
  );
};
