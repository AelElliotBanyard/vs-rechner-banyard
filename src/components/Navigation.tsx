import Link from "next/link";
import { FaHouseDamage, FaHouseUser } from "react-icons/fa";
import { BsCalculatorFill, BsHouseFill } from "react-icons/bs";

const Navigation = () => {
  let routes = [
    {
      name: "Startseite",
      path: "/",
      icon: <BsHouseFill />,
    },
    {
      name: "Hausrat",
      path: "/hausrat",
      icon: <FaHouseUser />,
    },
    {
      name: "Schaden",
      path: "/hausrat/schaden",
      icon: <FaHouseDamage />,
    },
    {
      name: "Versicherungssumme",
      path: "/hausrat/versicherungssumme",
      icon: <BsCalculatorFill />,
    },
  ];
  return (
    <>
      <nav>
        <div>
          <Link href="/">
            <p>Logo</p>
          </Link>
        </div>
        <div>
          {routes.map((route, index) => {
            return (
              <p key={index}>
                <Link href={route.path}>
                  {route.icon} {route.name}
                </Link>
              </p>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
