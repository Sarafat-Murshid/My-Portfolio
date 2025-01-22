import { nanoid } from "nanoid";
import { FaDatabase, FaGitAlt, FaGoogle, FaHtml5, FaJs, FaLaravel, FaNodeJs, FaReact, FaShopify } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#hero", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Node.js, building scalable and efficient backend systems, and implementing RESTful APIs for seamless frontend-backend communication.",
  },
  {
    id: nanoid(),
    title: "Laravel",
    icon: <FaLaravel className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Laravel, creating robust backend systems, integrating APIs, and developing secure, scalable web applications.",
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "Strong knowledge of MySQL, skilled in designing efficient database schemas and optimizing queries for high-performance applications.",
  },
  {
    id: nanoid(),
    title: "Git & GitHub",
    icon: <FaGitAlt className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Git and GitHub, managing code repositories effectively, and collaborating seamlessly within development teams.",
  },
  {
    id: nanoid(),
    title: "Firebase",
    icon: <FaGoogle className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Firebase, implementing authentication, real-time databases, and cloud-based solutions for modern web applications.",
  },
  {
    id: nanoid(),
    title: "Shopify",
    icon: <FaShopify className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Shopify integration, utilizing Shopify Polaris to create responsive and functional components for eCommerce platforms.",
  },
];
