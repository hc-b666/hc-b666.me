import useFetchProjects from "../hooks/useFetchProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const { projects } = useFetchProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
