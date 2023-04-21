import CustomAlert from "@/components/CustomAlert";
import NumberInput from "@/components/CustomInputs/NumberInput";
import { toOutString } from "@/utils/functions";
import { useState } from "react";

const HausratSchaden = () => {
  const [vs, setVs] = useState(Math.PI);
  const [vw, setVw] = useState(Math.PI);
  const [damage, setDamage] = useState(Math.PI);
  const [isClear, setIsClear] = useState(false);
  const [notEmpty, setNotEmpty] = useState({
    vs: false,
    vw: false,
    damage: false,
    compensation: false,
    percentage: false,
    excess: false,
  });
  const [result, setResult] = useState(Math.PI);
  const [percent, setPercent] = useState(Math.PI);
  const [own, setOwn] = useState(Math.PI);
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    message: "Success",
    type: "success",
    fill: false,
  });
  const [open, setOpen] = useState(false);

  const calc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (vw != Math.PI && damage != Math.PI && vw != 0) {
      const calc = Math.round((vs / vw) * damage * 100) / 100;
      const calcPercent = Math.round((vs / vw) * 100 * 100) / 100;
      const calcOwn = Math.round((damage - calc) * 100) / 100;
      if (calc >= damage) {
        setResult(Math.round(damage * 100) / 100);
        setPercent(100);
        setOwn(0);
      } else {
        setResult(calc);
        setPercent(calcPercent > 100 ? 100 : calcPercent);
        setOwn(calcOwn);
      }
      if (vs > vw) {
        setMessage(
          "Du bist überversichert. Du kannst die Versicherungssumme reduzieren um Geld zu sparen."
        );
      } else if (vs < vw) {
        setMessage(
          "Du bist unterversichert. Du kannst die Versicherungssumme erhöhen um mehr zu versichern."
        );
      } else {
        setMessage("Genau richtig versichert");
      }
    } else {
      if (vw == 0) {
        setError({
          message: "Der Versicherungswert darf nicht 0 sein.",
          type: "warning",
          fill: false,
        });
      } else if (vw == Math.PI && damage != Math.PI) {
        setError({
          message: "Der Versicherungswert darf nicht leer sein.",
          type: "warning",
          fill: false,
        });
      } else if (vw != Math.PI && damage == Math.PI) {
        setError({
          message: "Du must einen Schaden haben.",
          type: "warning",
          fill: false,
        });
      } else {
        setError({
          message: "Bitte alle Felder ausfüllen.",
          type: "error",
          fill: true,
        });
      }
      setOpen(true);
    }
  };

  const clear = () => {
    setVs(Math.PI);
    setVw(Math.PI);
    setDamage(Math.PI);
    setResult(Math.PI);
    setPercent(Math.PI);
    setOwn(Math.PI);
    setMessage("");
    setIsClear(true);
    setNotEmpty({
      vs: false,
      vw: false,
      damage: false,
      compensation: false,
      percentage: false,
      excess: false,
    });
    setTimeout(() => {
      setIsClear(false);
    }, 1000);
  };

  return (
    <>
      <CustomAlert
        message={error.message}
        type={error.type}
        fill={error.fill}
        open={open}
        close={() => setOpen(false)}
      />
      <main className="main">
        <div className="schaden">
          <div className="section">
            <h1>Schaden berechnen</h1>
            <div className="form">
              <NumberInput
                placeholder="Versicherungssumme"
                value={vs}
                onChange={setVs}
                clear={isClear}
                notEmpty={notEmpty.vs}
              />
              <NumberInput
                placeholder="Versicherungswert"
                value={vw}
                onChange={setVw}
                clear={isClear}
                notEmpty={notEmpty.vw}
              />
              <NumberInput
                placeholder="Schaden"
                value={damage}
                onChange={setDamage}
                clear={isClear}
                notEmpty={notEmpty.damage}
              />
              <button onClick={calc} className="btn">
                Berechnen
              </button>
            </div>
            <div className="results">
              <div className="result-item">
                <h2>Entschädigung: </h2>
                <p>
                  {result != Math.PI
                    ? toOutString(
                        Math.round(result * 100 + Number.EPSILON) / 100
                      ) + " CHF"
                    : notEmpty.compensation
                    ? toOutString(
                        Math.round(result * 100 + Number.EPSILON) / 100
                      ) + " CHF"
                    : ""}
                </p>
              </div>
              <div className="result-item">
                <h2>Prozentuale Absicherung: </h2>
                <p
                  className={percent >= 100 ? "text-green-500" : "text-red-500"}
                >
                  {percent != Math.PI
                    ? Math.round(percent * 100 + Number.EPSILON) / 100 + "%"
                    : notEmpty.percentage
                    ? Math.round(percent * 100 + Number.EPSILON) / 100 + "%"
                    : ""}
                </p>
              </div>
              <div className="result-item">
                <h2>Selbstbehalt:</h2>
                <p>
                  {own != Math.PI
                    ? toOutString(
                        Math.round(own * 100 + Number.EPSILON) / 100
                      ) + " CHF"
                    : notEmpty.excess
                    ? toOutString(
                        Math.round(own * 100 + Number.EPSILON) / 100
                      ) + " CHF"
                    : ""}
                </p>
              </div>
            </div>
            <div className="message">
              <p>{message} </p>
            </div>
            <div className="buttons">
              <button className="btn" onClick={clear}>
                Zurücksetzen
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HausratSchaden;
