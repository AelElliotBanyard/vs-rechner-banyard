import Link from "next/link";
import { FaHouseDamage, FaHouseUser } from "react-icons/fa";
import { BsCalculatorFill, BsHouseFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  let routes = [
    {
      name: "Startseite",
      path: "/",
      icon: <BsHouseFill className="navIcon" />,
    },
    {
      name: "Hausrat",
      path: "/hausrat",
      icon: <FaHouseUser className="navIcon" />,
    },
    {
      name: "Schaden",
      path: "/hausrat/schaden",
      icon: <FaHouseDamage className="navIcon" />,
    },
    {
      name: "Versicherungssumme",
      path: "/hausrat/versicherungssumme",
      icon: <BsCalculatorFill className="navIcon" />,
    },
  ];
  return (
    <>
      <nav className="navigation">
        <div className="navLogo">
          <Link href="/">
            <img src="/logo-big-dark-transparent.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navLinks">
          {routes.map((route, index) => {
            return (
              <p
                key={index}
                className={
                  "linkParent " +
                  (router.asPath === route.path ? "current" : "")
                }
              >
                <Link className="link" href={route.path}>
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
