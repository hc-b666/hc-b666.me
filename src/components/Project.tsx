import { FC } from "react";
import { Link } from "react-router-dom";
import { ProjectInterface } from "@/data/projects";

export const Project: FC<{ project: ProjectInterface }> = ({ project }) => {

  return (
    <Link to={`https://github.com/hc-b666${project.link}`} className="project-wrap">
      
      <div className="mb-1 flex justify-between">
        <h3 className="text-md">{project.title}</h3>
        <p className="text-grey text-xs">{project.date}</p>
      </div>

      <p className="text-xs text-grey mb-3">{project.description}</p>
    
      <div className="mt-auto flex flex-wrap items-center gap-2">
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
