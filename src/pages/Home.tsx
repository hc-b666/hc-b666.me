import {
  TbCode,
  TbMovie,
  TbMusicHeart,
  TbDeviceGamepad2,
} from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import { SiArchlinux } from "react-icons/si";

// ToDo
// import { TbBrandVscode } from "react-icons/tb";
// Add Icon of VSCode
// And when users clicks on it, it should open My Extensions Page
// And in that page, there should be a list of my favorite extensions

export default function HomePage() {
  return (
    <main className="container px-5 md:px-0 my-10 xl:my-20 w-full text-black dark:text-white bg-white dark:bg-black">
      {/* Heading */}
      <div className="mb-5 xl:mb-10 flex flex-col">
        <h1 className="text-xl xl:text-2xl">Hello! I am Muhammadbobur</h1>
        <span className="text-grey text-xs xl:text-sm flex items-center flex-wrap gap-1">
          <TbCode />
          Aspiring Software Engineer&nbsp; | &nbsp;
          <FaUserGraduate />
          WIUT Student&nbsp; | &nbsp;
          <SiArchlinux />
          I use Arch btw&nbsp; | &nbsp;
          <TbDeviceGamepad2 />
          Gamer
        </span>
      </div>

      {/* About.Me */}
      <div className="text-sm text-justify flex flex-col gap-4 xl:gap-8">
        <p>
          I'm a passionate software developer with a focus on building clean, functional, and efficient digital products.
          While I started my journey in frontend development—working with technologies like React, TypeScript, and Tailwind—I don’t limit myself to just UI.
          I’m constantly pushing to deepen my understanding of backend systems, low-level programming, and computer science fundamentals.
        </p>

        <p>
          I love solving problems—whether it's optimizing an API, crafting reusable components, or diving into algorithms and data structures.
          Outside of building projects, I enjoy exploring operating systems, networks, and how things work under the hood.
          I believe great engineers don’t just build features—they understand systems end to end.
        </p>

        <p>
          Currently, I'm learning Go and working on side projects that challenge me to grow as a full-stack developer.
          My goal is to become a well-rounded software engineer who can design scalable architectures, write performant code, and collaborate effectively on real-world products.
        </p>

        {/* #Interests */}
        <div className="flex flex-col gap-1">
          <h4 className="font-medium">#Interests:</h4>
          <p>
            Beyond coding, I have a diverse vector of interests that keep me
            inspired:
          </p>

          <ul className="pl-1 md:pl-2">
            <li>
              <div className="flex md:items-center gap-1">
                <TbMovie className="text-xl md:text-base" />
                <p>
                  <span className="font-medium whitespace-nowrap">
                    Movies & Anime:
                  </span>
                  &nbsp;I enjoy immersing myself in captivating stories and
                  unique animation styles.
                </p>
              </div>
            </li>

            <li>
              <div className="flex md:items-center gap-1">
                <TbMusicHeart className="text-xl md:text-base" />
                <p>
                  <span className="font-medium whitespace-nowrap">Music:</span>
                  &nbsp;A constant source of motivation and relaxation.
                </p>
              </div>
            </li>

            <li>
              <div className="flex md:items-center gap-1">
                <TbDeviceGamepad2 className="text-xl md:text-base" />
                <p>
                  <span className="font-medium whitespace-nowrap">Gaming:</span>
                  &nbsp;An avid player of Free Fire and Mobile Legends: Bang
                  Bang (MLBB), always up for a challenge.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <p>
          Thank you for visiting my portfolio. I am excited to connect with
          like-minded professionals and collaborate on future projects.
          Together, let's build the next generation of impactful digital
          solutions.
        </p>
      </div>
    </main>
  );
}
