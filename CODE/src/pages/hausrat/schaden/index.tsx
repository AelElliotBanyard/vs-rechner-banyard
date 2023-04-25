import CustomAlert from "@/components/CustomAlert";
import NumberInput from "@/components/CustomInputs/NumberInput";
import { toOutString } from "@/utils/functions";
import { useEffect, useState } from "react";
import content from "../../../assets/text.json";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import { DamagePageParams } from "@/types";
import { FiCheck, FiShare2 } from "react-icons/fi";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let damage = Math.PI;
  let damageNotEmpty = false;
  let vs = Math.PI;
  let vsNotEmpty = false;
  let vw = Math.PI;
  let vwNotEmpty = false;
  let compensation = Math.PI;
  let compensationNotEmpty = false;
  let percentage = Math.PI;
  let percentageNotEmpty = false;
  let excess = Math.PI;
  let excessNotEmpty = false;
  let message = "";
  if (query.damage) {
    damage = parseFloat(query.damage as string);
    damageNotEmpty = true;
  }
  if (query.vs) {
    vs = parseFloat(query.vs as string);
    vsNotEmpty = true;
  }
  if (query.vw) {
    vw = parseFloat(query.vw as string);
    vwNotEmpty = true;
  }
  if (query.compensation) {
    compensation = parseFloat(query.compensation as string);
    compensationNotEmpty = true;
  }
  if (query.percentage) {
    percentage = parseFloat(query.percentage as string);
    percentageNotEmpty = true;
  }
  if (query.excess) {
    excess = parseFloat(query.excess as string);
    excessNotEmpty = true;
  }
  if (query.message) {
    message = query.message as string;
  }
  return {
    props: {
      params: {
        damage: damage,
        damageNotEmpty: damageNotEmpty,
        vs: vs,
        vsNotEmpty: vsNotEmpty,
        vw: vw,
        vwNotEmpty: vwNotEmpty,
        compensation: compensation,
        compensationNotEmpty: compensationNotEmpty,
        percentage: percentage,
        percentageNotEmpty: percentageNotEmpty,
        excess: excess,
        excessNotEmpty: excessNotEmpty,
        message: message,
      },
    },
  };
};

const HausratSchaden = ({ params }: DamagePageParams) => {
  const { locale } = useRouter();
  const router = useRouter();
  let text = content.damage.filter((p) => p.locale === locale)[0];
  const [vs, setVs] = useState(params.vs);
  const [vw, setVw] = useState(params.vw);
  const [damage, setDamage] = useState(params.damage);
  const [isClear, setIsClear] = useState(false);
  const [notEmpty, setNotEmpty] = useState({
    vs: params.vsNotEmpty,
    vw: params.vwNotEmpty,
    damage: params.damageNotEmpty,
    compensation: params.compensationNotEmpty,
    percentage: params.percentageNotEmpty,
    excess: params.excessNotEmpty,
  });
  const [result, setResult] = useState(params.compensation);
  const [percent, setPercent] = useState(params.percentage);
  const [own, setOwn] = useState(params.excess);
  const [message, setMessage] = useState(params.message);
  const [error, setError] = useState({
    message: "Success",
    type: "success",
    fill: false,
    link: false,
  });
  const [open, setOpen] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    router.push(router.asPath.split("?")[0]);
  }, []);

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
        setMessage(text.messages.over);
      } else if (vs < vw) {
        setMessage(text.messages.under);
      } else {
        setMessage(text.messages.perfect);
      }
    } else {
      if (vw == 0) {
        setError({
          message: text.errors.vw0,
          type: "warning",
          fill: false,
          link: false,
        });
      } else if (vw == Math.PI && damage != Math.PI) {
        setError({
          message: text.errors.vwEmpty,
          type: "warning",
          fill: false,
          link: false,
        });
      } else if (vw != Math.PI && damage == Math.PI) {
        setError({
          message: text.errors.damage,
          type: "warning",
          fill: false,
          link: false,
        });
      } else {
        setError({
          message: text.errors.fillEverything,
          type: "error",
          fill: true,
          link: false,
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

  const share = () => {
    let path = window.location.href.split("?")[0];
    let vsString = `vs=${vs}`;
    let vwString = `&vw=${vw}`;
    let damageString = `&damage=${damage}`;
    let compensationString = `&compensation=${result}`;
    let percentageString = `&percentage=${percent}`;
    let excessString = `&excess=${own}`;
    let messageString = `&message=${encodeURIComponent(message)}`;
    let link =
      path +
      "?" +
      vsString +
      vwString +
      damageString +
      compensationString +
      percentageString +
      excessString +
      messageString;

    if (
      result === Math.PI ||
      percent === Math.PI ||
      own === Math.PI ||
      vw === Math.PI ||
      vs === Math.PI ||
      damage === Math.PI
    ) {
      setError({
        link: false,
        message: text.errors.fillEverything,
        type: "error",
        fill: true,
      });
      setOpen(true);
    } else {
      try {
        navigator.clipboard.writeText(link);
        setError({
          ...error,
          message: text.errors.link,
          type: "success",
          fill: false,
        });
        setOpen(true);
      } catch (err) {
        setError({
          message: link,
          type: "success",
          fill: false,
          link: true,
        });
        setOpen(true);
      }
    }
  };

  return (
    <>
      <CustomAlert
        message={error.message}
        type={error.type}
        fill={error.fill}
        open={open}
        close={() => setOpen(false)}
        link={error.link}
      />
      <main className="main">
        <div className="schaden">
          <div className="section">
            <h1>{text.title}</h1>
            <div className="form">
              <NumberInput
                placeholder={text.vs}
                value={vs}
                onChange={setVs}
                clear={isClear}
                notEmpty={notEmpty.vs}
              />
              <NumberInput
                placeholder={text.vw}
                value={vw}
                onChange={setVw}
                clear={isClear}
                notEmpty={notEmpty.vw}
              />
              <NumberInput
                placeholder={text.damage}
                value={damage}
                onChange={setDamage}
                clear={isClear}
                notEmpty={notEmpty.damage}
              />
              <button onClick={calc} className="btn">
                {text.calc}
              </button>
            </div>
            <div className="results">
              <div className="result-item">
                <h2>{text.compensation}: </h2>
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
                <h2>{text.percent}: </h2>
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
                <h2>{text.excess}:</h2>
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
            <button
              onClick={() => {
                share();
                setShared(true);
                setTimeout(() => {
                  setShared(false);
                }, 1000);
              }}
              className="btn share"
            >
              {shared ? <FiCheck /> : <FiShare2 />}
            </button>
            <div className="buttons">
              <button className="btn" onClick={clear}>
                {text.reset}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HausratSchaden;
