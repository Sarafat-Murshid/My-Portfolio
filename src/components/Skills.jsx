import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <section className="py-28 align-element" id="skills">
      <SectionTitle text="tech stack " />
      <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
