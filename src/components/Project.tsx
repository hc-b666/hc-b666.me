import { FC } from "react";
import { Link } from "react-router-dom";
import { ProjectInterface } from "@data/projects";

const Project: FC<{ project: ProjectInterface }> = ({ project }) => {

  return (
    <Link to={`https://github.com/hc-b666${project.link}`} className="p-5 rounded-lg flex flex-col border-2 hover:shadow-lg border-gray-100 hover:border-gray-300 hover:shadow-gray-300 dark:border-gray-900 dark:hover:border-gray-700 dark:hover:shadow-gray-700 duration-500 cursor-pointer">
      <div className="mb-1 flex justify-between">
        <h3 className="text-md">{project.title}</h3>
        <p className="text-grey text-xs">{project.date}</p>
      </div>

      <p className="text-xs text-grey mb-3">{project.description}</p>
    
      <div className="flex flex-wrap items-center gap-2">
        {project.langs.map((Lang, index) => (
          <div key={index} className="flex items-center gap-1">
            <Lang.icon className="text-xl" />
            <span className="text-xs text-grey">{Lang.lang}</span>
          </div>
        ))}
      </div>

    </Link>
  );
};

export default Project;
