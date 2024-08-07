import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbBrandGithub, TbBrandLeetcode, TbBrandLinkedin, TbBrandInstagram, TbFileCv, TbSun, TbMoonStars, TbMenuDeep } from "react-icons/tb";
import { useTheme } from "@/context/ThemeProvider";
import handleDownload from "@/lib/handleDownload";

interface NavbarInterface {
  toggleSidebar: () => void;
}

const navbarLinks = [
  { name: "Projects", link: "/projects" },
  { name: "Extensions", link: "/extensions" },
  // { name: "Resume", link: "/resume" },
];

const socialLinks = [
  { name: "Github", link: "https://github.com/hc-b666", icon: <TbBrandGithub className="icon" /> },
  { name: "Leetcode", link: "https://leetcode.com/u/hc-b666", icon: <TbBrandLeetcode className="icon"  /> },
  { name: "Linkedin", link: "https://www.linkedin.com/in/muhammadbobur-abdukarimov-131362243", icon: <TbBrandLinkedin className="icon"  /> },
  { name: "Instagram", link: "https://www.instagram.com/hc_b666", icon: <TbBrandInstagram className="icon"  /> }
];

export const Navbar: FC<NavbarInterface> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="container px-5 md:px-0 py-5 w-full flex items-center justify-between text-grey bg-white dark:bg-black">
    
      <NavLink to="/">
        <h2 className="hover:text-black dark:hover:text-white text-lg md:text-xl">&lt;hc-b666/&gt;</h2>
      </NavLink>
    
      <div className="flex items-center gap-5">
        {navbarLinks.map((link, index) => (
          <NavLink key={index} to={link.link} className="hidden md:inline-block hover:text-black dark:hover:text-white hover:underline duration-500">
            {link.name}
          </NavLink>
        ))}

        {socialLinks.map((link, index) => (
          <Link key={index} to={link.link} className="hidden md:inline-block">
            {link.icon}
          </Link>
        ))}
        
        <button onClick={handleDownload} className="hidden md:inline-block">
          <TbFileCv className="icon" />          
        </button>

        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <TbSun className="icon" />
          ) : (
            <TbMoonStars className="icon" />
          )}
        </button>

        <button onClick={toggleSidebar} className="md:hidden">
          <TbMenuDeep className="icon" />
        </button>     
      </div>
    
    </nav>
  );
};
