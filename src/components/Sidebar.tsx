import { FC, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbBrandGithub, TbBrandLeetcode, TbBrandLinkedin, TbBrandInstagram, TbBrandTelegram, TbBrandX, TbBrandDiscord, TbFileCv } from "react-icons/tb";
import { RiCloseLine } from "react-icons/ri";
import handleDownload from "../lib/handleDownload";

// ToDo
// Optimize the Icon Links
// Too many repetitive code

interface SidebarInterface {
  sidebar: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarInterface> = ({ sidebar, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };

    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar, toggleSidebar]);

  return (
    <aside ref={sidebarRef} className={`${sidebar ? "w-3/4 p-5" : "w-0"} h-full text-grey bg-white dark:bg-black absolute right-0 duration-500`}>
      {sidebar && (
        <>
          <div className="mb-10 flex items-center justify-between">
            <NavLink to="/">
              <h2 className="hover:text-black dark:hover:text-white text-lg">&lt;hc-b666/&gt;</h2>
            </NavLink>
            <button onClick={toggleSidebar}>
              <RiCloseLine className="text-4xl"/>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {/* <NavLink to="/projects" className="hover:text-black dark:hover:text-white hover:underline duration-500">
              Projects
            </NavLink> */}

            <Link to="https://github.com/hc-b666" className="flex items-center gap-2">
              <TbBrandGithub className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" /> 
              Github         
            </Link>
            
            <Link to="https://leetcode.com/u/hc-b666" className="flex items-center gap-2">
              <TbBrandLeetcode className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" /> 
              Leetcode         
            </Link>

            <Link to="https://www.linkedin.com/in/muhammadbobur-abdukarimov-131362243" className="flex items-center gap-2">
              <TbBrandLinkedin className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
              Linkedin
            </Link>
            
            <Link to="https://www.instagram.com/hc_b666" className="flex items-center gap-2">
              <TbBrandInstagram className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
              Instagram
            </Link>

            <Link to="https://t.me/hc_b666" className="flex items-center gap-2">
              <TbBrandTelegram className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
              Telegram
            </Link>

            <Link to="https://x.com/bobbyInsomniac8" className="flex items-center gap-2">
              <TbBrandX className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
              Twitter
            </Link>

            <Link to="https://discordapp.com/users/1239424605534421022" className="flex items-center gap-2">
              <TbBrandDiscord className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
              Discord
            </Link>
            
            <button onClick={handleDownload} className="flex items-center gap-2">
              <TbFileCv className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
              Download my CV
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
