import Link from "next/link";
import { FaHouseDamage, FaHouseUser } from "react-icons/fa";
import { BsCalculatorFill, BsHouseFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navigation = () => {
  const { locale, locales, asPath } = useRouter();
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
            <img
              src="/logo-big-dark-transparent.png"
              alt="Logo"
              className="logo"
            />
          </Link>
        </div>
        <div className="navLinks">
          {routes.map((route, index) => {
            return (
              <p
                key={index}
                className={
                  "linkParent " + (asPath === route.path ? "current" : "")
                }
              >
                <Link className="link" href={route.path}>
                  {route.icon} {route.name}
                </Link>
              </p>
            );
          })}
        </div>
        <div className="navLang">
          {locales
            ? locales.map((l, i) => {
                return (
                  <span key={i}>
                    <Link
                      href={asPath}
                      locale={l}
                      dangerouslySetInnerHTML={{
                        __html:
                          (l === "en-GB"
                            ? "&#127468;&#127463;"
                            : l === "de-DE"
                            ? "&#127465;&#127466;"
                            : l === "fr-FR"
                            ? "&#127467;&#127479;"
                            : "") +
                          " " +
                          l.split("-")[0].toUpperCase(),
                      }}
                    />
                  </span>
                );
              })
            : ""}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
