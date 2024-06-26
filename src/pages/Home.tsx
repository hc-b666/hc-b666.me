import { TbCode, TbMovie, TbMusicHeart, TbDeviceGamepad2 } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";

// ToDo
// import { TbBrandVscode } from "react-icons/tb";
// Add Icon of VSCode
// And when users clicks on it, it should open My Extensions Page
// And in that page, there should be a list of my favorite extensions

const Home = () => {
  return (
    <main className="container px-5 md:px-0 my-10 xl:my-20 w-full text-black dark:text-white bg-white dark:bg-black">

      {/* Heading */}
      <div className="mb-5 xl:mb-10 flex flex-col">
        <h1 className="text-xl xl:text-2xl">Hello! I am Muhammadbobur</h1>
        <span className="text-grey text-xs xl:text-sm flex items-center flex-wrap gap-1"><TbCode />Aspiring Full-Stack Developer&nbsp; | &nbsp;<FaUserGraduate />WIUT Student&nbsp; | &nbsp;<TbDeviceGamepad2 />Gamer</span>
      </div>

      {/* About.Me */}
      <div className="text-sm xl:text-base font-thin text-justify flex flex-col gap-4 xl:gap-8">
        <p>
          I am a passionate Front Web Developer with a meticulous approach to writing clean, and efficient code. 
          Currently, I am expanding my skillset to become a Fullstack Developer, integrating robust Backend capabilities into my repertoire.
        </p>
        <p>
          Working at <a href="https://play.google.com/store/apps/details?id=hc.elite.profireborn&hl=ru" className="underline font-medium">Profi24.uz</a>, 
          a dynamic local startup where I contribute to innovative projects that push the boundaries of web development. 
          Alongside my professional endeavors, I am a dedicated student at Westminster International University in Tashkent (<a href="https://www.wiut.uz/" className="underline font-medium">WIUT</a>), supported by a prestigious government scholarship.
        </p>

        {/* #Vision */}
        <div className="flex flex-col gap-1">
          <h4 className="font-medium">#Vision:</h4>
          <p>
            My journey in technology doesn't stop at web development. 
            I am eager to delve into the realms of Machine Learning (ML) and Artificial Intelligence (AI), 
            aiming to create cutting-edge software applications and projects that make a significant impact on people's lives.
          </p>
        </div>
        
        {/* #Interests */}
        <div className="flex flex-col gap-1">
          <h4 className="font-medium">#Interests:</h4>
          <p>Beyond coding, I have a diverse array of interests that keep me inspired:</p>

          <ul className="pl-1 md:pl-2">

            <li>
              <div className="flex md:items-center gap-1">
                <TbMovie className="text-xl md:text-base" />
                <p>
                  <span className="font-medium whitespace-nowrap">Movies & Anime:</span>
                  &nbsp;I enjoy immersing myself in captivating stories and unique animation styles.
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
                  &nbsp;An avid player of Free Fire and Mobile Legends: Bang Bang (MLBB), always up for a challenge.
                </p>
              </div>
            </li>

          </ul>
        </div>

        <p>
          Thank you for visiting my portfolio. 
          I am excited to connect with like-minded professionals and collaborate on future projects. 
          Together, let's build the next generation of impactful digital solutions.
        </p>
      </div>

    </main>
  );
};

export default Home;
