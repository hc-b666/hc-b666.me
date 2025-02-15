import useFetchProjects from "../hooks/useFetchProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const { loading, projects } = useFetchProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {loading &&
        Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="skeleton h-32" />
        ))}
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
