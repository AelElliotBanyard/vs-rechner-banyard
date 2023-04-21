import { useRouter } from "next/router";
import text from "../assets/text.json";

export default function Home() {
  const { locale } = useRouter();
  return (
    <>
      <main className="main">
        <div className="welcome">
          <div className="section">
            <h1>{text.welcome.filter((p) => p.locale === locale)[0].title}</h1>
            <p>
              {text.welcome.filter((p) => p.locale === locale)[0].createdBy}
              <a href="https://github.com/AelElliotBanyard" target="_blank">
                Ael Banyard
              </a>
              .
            </p>
            <p>{text.welcome.filter((p) => p.locale === locale)[0].state}</p>
            <p>
              {text.welcome.filter((p) => p.locale === locale)[0].why}
              <a href="https://www.bbw.ch/" target="_blank">
                BBW
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
