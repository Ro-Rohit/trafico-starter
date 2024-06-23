import Link from "next/link";


const Nav = ({ navData, onScroll }) => {
  return (
    <nav className="p-4">
      <ul className="flex  gap-x-14">
        {navData.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <a className={`${onScroll ? "text-black hover:text-accent-hover" : "text-white hover:text-accent"}`}>
                  {name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>

    </nav>
  );
};

export default Nav;
