import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
    return (
    <div className="bg-emerald-100 py-48" id="hero">
      <div className=" align-element  grid  md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I&apos;m Sarafat
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            <Typewriter
            words={['Hello, World!','Front-end developer','React enthusiast','UI/UX designer','Tech enthusiast']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Crafting seamless web solutions with passion, precision, and
            innovation – where every line of code tells a story.
          </p>
          <div className="flex gap-x-4 mt-8">
            <a
              href="https://github.com/Sarafat-Murshid"
              className="text-3xl text-slate-600 hover:text-black duration-300"
            >
              <FaGithubSquare />
            </a>

            <a
              href="https://linkedin.com/in/sarafat-murshid"
              className="text-3xl text-slate-600 hover:text-black duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/skiller_shourov"
              className="text-3xl text-slate-600 hover:text-black duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </article>
        <img src={heroImg} alt="hero" className="hidden md:block" />
      </div>
    </div>
  );
};
export default Hero;
