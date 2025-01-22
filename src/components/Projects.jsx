import { useFetchProjects } from "./fetchProjects";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";

const projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="py-28 align-element" id="projects">
      <div className="align-element">
        <SectionTitle text="projects" />
      </div>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default projects;
