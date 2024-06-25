import Project from "../components/Project";
import projects, { ProjectInterface } from "../data/projects";

const Projects = () => {
  return (
  <main className="container my-20 w-full text-black dark:text-white bg-white dark:bg-black">
      
      {/* Heading */}
      <div className="mb-10 flex flex-col">
        <h1 className="text-2xl">Projects</h1>
        <span className="text-grey text-sm flex items-center gap-1">Work&nbsp; | &nbsp;Side Hustle&nbsp; | &nbsp;University Course Works</span>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {projects.map((project: ProjectInterface, index: number) => <Project project={project} key={index} />)}
      </div>
    </main>
  );
};

export default Projects;
