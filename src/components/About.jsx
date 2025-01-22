import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-28" id="about">
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hi, I&apos;m Sarafat Murshid, a passionate and driven software
            developer with a strong foundation in full-stack web development,
            specializing in MERN Stack, Laravel, and React.js. I recently
            graduated with a B.Sc. in Computer Science & Engineering from
            American International University-Bangladesh (AIUB) and am eager to
            create innovative and user-friendly solutions that make an impact.
            With over a year of hands-on experience in frontend development and
            WordPress, I&apos;ve worked on diverse projects involving HTML, CSS,
            JavaScript, React, PHP, Node.js, and MySQL. My expertise lies in
            designing seamless interfaces, optimizing backend logic, and solving
            complex challenges like ensuring smooth communication between
            frontend and backend systems. Apart from development, I&apos;ve also
            explored research in areas like AI, NLP, and computer vision, and
            I&apos;m passionate about integrating emerging technologies into my
            work. I enjoy tutoring and breaking down complex coding and
            mathematical concepts to help others grow, which reflects my love
            for learning and sharing knowledge. In the next stage of my career,
            I&apos;m excited to contribute to meaningful projects and
            collaborate with innovative teams to build scalable, efficient, and
            impactful applications. Let&apos;s create something amazing
            together!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
