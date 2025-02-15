import { FC, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  TbBrandGithub,
  TbBrandLeetcode,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandX,
  TbBrandDiscord,
  TbFileCv,
} from "react-icons/tb";
import { RiCloseLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { handleDownload } from "@/common/utils";

interface SidebarInterface {
  sidebar: boolean;
  toggleSidebar: () => void;
}

const navbarLinks = [
  {
    name: "Projects",
    link: "/projects",
    icon: <GoProjectSymlink className="icon" />,
  },
];

const sidebarLinks = [
  {
    name: "Github",
    link: "https://github.com/hc-b666",
    icon: <TbBrandGithub className="icon" />,
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/u/hc-b666",
    icon: <TbBrandLeetcode className="icon" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/muhammadbobur-abdukarimov-131362243",
    icon: <TbBrandLinkedin className="icon" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hc_b666",
    icon: <TbBrandInstagram className="icon" />,
  },
  {
    name: "Telegram",
    link: "https://t.me/hc_b666",
    icon: <TbBrandTelegram className="icon" />,
  },
  {
    name: "Twitter",
    link: "https://x.com/bobbyInsomniac8",
    icon: <TbBrandX className="icon" />,
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/1239424605534421022",
    icon: <TbBrandDiscord className="icon" />,
  },
];

export const Sidebar: FC<SidebarInterface> = ({ sidebar, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
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
    <aside
      ref={sidebarRef}
      className={`${
        sidebar ? "w-3/4 p-5" : "w-0"
      } h-full text-grey bg-white dark:bg-black absolute right-0 duration-500`}
    >
      {sidebar && (
        <>
          <div className="mb-10 flex items-center justify-between">
            <NavLink to="/">
              <h2 className="hover:text-black dark:hover:text-white text-lg">
                &lt;hc-b666/&gt;
              </h2>
            </NavLink>
            <button onClick={toggleSidebar}>
              <RiCloseLine className="text-4xl" />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h6 className="text-xs text-grey">Pages</h6>
              {navbarLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.link}
                  className="flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h6 className="text-xs text-grey">Social Links</h6>
              {sidebarLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h6 className="text-xs text-grey">More</h6>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2"
              >
                <TbFileCv className="icon" />
                Download my CV
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};
