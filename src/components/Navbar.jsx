import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100 fixed w-full z-50 top-0 shadow-lg">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Sarafat Murshid <span className="text-emerald-600">Portfolio</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 font-bold duration-300"
              >
                {link.text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
export default Navbar