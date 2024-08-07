import { Link } from "react-router-dom";
import { Extension } from "@/components/Extension";
import { ExtensionInterface, extensions } from "@/data/extensions";

export const Extensions = () => {

  return (
    <main className="container px-5 md:px-0 my-10 xl:my-20 w-full text-black dark:text-white bg-white dark:bg-black">
      
      {/* Heading */}
      <div className="mb-5 xl:mb-10 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-xl xl:text-2xl">Extensions</h1>
          <Link to={"/"}>
            <span className="text-grey text-xs md:text-sm dark:hover:text-white">cd &nbsp;../home</span>
          </Link>
        </div>
        <span className="text-grey text-xs xl:text-sm flex items-center flex-wrap gap-1">VS Code extensions I use daily</span>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
        {extensions.map((extension: ExtensionInterface, index: number) => <Extension extension={extension} key={index} />)}
      </div>
    </main>
  );
};
