import { useRouter } from "next/router";
import content from "../../assets/text.json";

const HausratMain = () => {
  const { locale } = useRouter();
  let text = content.household.filter((p) => p.locale === locale)[0];
  return (
    <>
      <main className="main">
        <div className="hausrat">
          <div className="section">
            <h1>{text.title}</h1>
            <div className="explain">
              <h2>{text.what.title}</h2>
              <p>
                {text.what.text.map((t, i) => {
                  if (t.bold) {
                    return <b key={i}>{t.string}</b>;
                  } else {
                    return t.string;
                  }
                })}
              </p>
              <p>{text.whatIsCovered.title}</p>
              <ul>
                {text.whatIsCovered.list.map((l, i) => {
                  return <li key={i}>{l}</li>;
                })}
              </ul>
            </div>
            <div className="pay">
              <div className="does">
                <h2>{text.pay.does.title}</h2>
                <p>
                  {text.pay.does.text.map((l, i) => {
                    if (l.bold) {
                      return <b key={i}>{l.string}</b>;
                    } else {
                      return l.string;
                    }
                  })}
                </p>
              </div>
              <div className="doesnt">
                <h2>{text.pay.doesNot.title}</h2>
                <p>
                  {text.pay.doesNot.text.map((l, i) => {
                    if (l.bold) {
                      return <b key={i}>{l.string}</b>;
                    } else {
                      return l.string;
                    }
                  })}
                </p>
              </div>
              <div className="you">
                <h2>{text.pay.you.title}</h2>
                <p>
                  {text.pay.you.text.map((l, i) => {
                    if (l.bold) {
                      return <b key={i}>{l.string}</b>;
                    } else {
                      return l.string;
                    }
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HausratMain;
