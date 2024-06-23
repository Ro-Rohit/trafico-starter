import Link from "next/link";

const NavMobile = ({ navData }) => {
  return (
    <nav className="bg-accent p-4">
      <ul className="flex flex-col gap-y-6">
        {navData.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href}>
                <a className="text-white">
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

export default NavMobile;
