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

  const calc = (e: any) => {
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
        setMessage("Du bist überversichert. Du kannst die Versicherungssumme reduzieren um Geld zu sparen.");
      } else if (vs < vw) {
        setMessage(
          "Du bist unterversichert. Du kannst die Versicherungssumme erhöhen um mehr zu versichern."
        );
      } else {
        setMessage("Genau richtig versichert");
      }
    }
  };

  return (
    <>
      <main>
        <div>
          <div>
            <h1>Schaden berechnen</h1>
            <div>
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
              <button onClick={calc}>Berechnen</button>
            </div>
            <div>
              <div>
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
              <div>
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
              <div>
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
            <div>
              <p>{message} </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HausratSchaden;
