// import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectsList from "@/features/projects/components/ProjectsList";

// type FilterType = "" | "Work" | "Side Hustle" | "University Course Works";

export default function ProjectsPage() {
  // const [filter, setFilter] = useState<FilterType>("");

  return (
    <main className="container px-5 md:px-0 my-10 xl:my-20 w-full text-black dark:text-white bg-white dark:bg-black">
      <div className="mb-5 xl:mb-10 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-xl xl:text-2xl">Projects</h1>
          <Link to={"/"}>
            <span className="text-grey text-xs md:text-sm dark:hover:text-white">
              cd &nbsp;../home
            </span>
          </Link>
        </div>
        {/* <p className="text-grey text-xs xl:text-sm flex items-center flex-wrap gap-1">
          <span
            className="cursor-pointer hover:text-black dark:hover:text-white"
            onClick={() =>
              filter === "Work" ? setFilter("") : setFilter("Work")
            }
          >
            Work
          </span>
          &nbsp; | &nbsp;
          <span
            className="cursor-pointer hover:text-black dark:hover:text-white"
            onClick={() =>
              filter === "Side Hustle"
                ? setFilter("")
                : setFilter("Side Hustle")
            }
          >
            Side Hustle
          </span>
          &nbsp; | &nbsp;
          <span
            className="cursor-pointer hover:text-black dark:hover:text-white"
            onClick={() =>
              filter === "University Course Works"
                ? setFilter("")
                : setFilter("University Course Works")
            }
          >
            University Course Works
          </span>
        </p> */}
      </div>

      <ProjectsList />
    </main>
  );
}
