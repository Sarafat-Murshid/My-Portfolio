const SkillsCard = ({ title, icon, text }) => {
  return (
    <article className="bg-white p-8 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out">
      <span>{icon}</span>
      <h4 className="text-2xl font-bold mt-6">{title}</h4>
      <p className="mt-4">{text}</p>
    </article>
  );
};
export default SkillsCard