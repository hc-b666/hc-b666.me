import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbBrandGithub, TbBrandLeetcode, TbBrandLinkedin, TbBrandInstagram, TbFileCv, TbSun, TbMoonStars, TbMenuDeep } from "react-icons/tb";
import { useTheme } from "@context/ThemeProvider";
import handleDownload from "@lib/handleDownload";

// ToDo
// Optimize the Icon Links
// Too many repetitive code

interface NavbarInterface {
  toggleSidebar: () => void;
}

const Navbar: FC<NavbarInterface> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="container px-5 md:px-0 py-5 w-full flex items-center justify-between text-grey bg-white dark:bg-black">
    
      <NavLink to="/">
        <h2 className="hover:text-black dark:hover:text-white text-lg md:text-xl">&lt;hc-b666/&gt;</h2>
      </NavLink>
    
      <div className="flex items-center gap-5">

        <NavLink to="/projects" className="hover:text-black dark:hover:text-white hover:underline duration-500">
          Projects
        </NavLink>

        <Link to="https://github.com/hc-b666" className="hidden md:inline-block">
          <TbBrandGithub className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
        </Link>
        
        <Link to="https://leetcode.com/u/hc-b666" className="hidden md:inline-block">
          <TbBrandLeetcode className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
        </Link>

        <Link to="https://www.linkedin.com/in/muhammadbobur-abdukarimov-131362243" className="hidden md:inline-block">
          <TbBrandLinkedin className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
        </Link>
        
        <Link to="https://www.instagram.com/hc_b666" className="hidden md:inline-block">
          <TbBrandInstagram className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
        </Link>
        
        <button onClick={handleDownload} className="hidden md:inline-block">
          <TbFileCv className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />          
        </button>

        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <TbSun className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />
          ) : (
            <TbMoonStars className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />
          )}
        </button>

        <button onClick={toggleSidebar} className="md:hidden">
          <TbMenuDeep className="hover:text-black dark:hover:text-white text-4xl w-6 h-6" />
        </button>
      
      </div>
    
    </nav>
  );
};

export default Navbar;
