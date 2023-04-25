import CustomAlert from "@/components/CustomAlert";
import NumberInput from "@/components/CustomInputs/NumberInput";
import TextInput from "@/components/CustomInputs/TextInput";
import { Item, Items } from "@/types";
import { toOutString } from "@/utils/functions";
import { useState } from "react";
import { MdOutlineDeleteForever, MdAdd } from "react-icons/md";
import content from "../../../assets/text.json";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      test: ""
    }
  }
};

const HausratVersicherungssumme = () => {
  const { locale } = useRouter();
  let text = content.vsumme.filter((p) => p.locale === locale)[0];
  const [items, setItems] = useState([
    {
      gegenstand: "",
      wert: Math.PI,
    },
  ]);
  const [squareMetres, setSquareMetres] = useState(Math.PI);
  const [flatRate, setFlatRate] = useState(Math.PI);
  const [vs, setVs] = useState(Math.PI);
  const [vw, setVw] = useState(Math.PI);
  const [itemsIsClear, setItemsIsClear] = useState(false);
  const [sqrIsClear, setSqrIsClear] = useState(false);
  const [notEmpty, setNotEmpty] = useState({
    items: false,
    squareMetres: false,
    flatRate: false,
    vs: false,
    vw: false,
  });
  const [error, setError] = useState({
    message: "Success",
    type: "success",
    fill: false,
  });
  const [open, setOpen] = useState(false);

  const calcItems = () => {
    setItemsIsClear(false);
    if (items.length >= 1) {
      if (
        !items.find(
          (item: Item) => item.gegenstand === "" || item.wert === Math.PI
        )
      ) {
        var tvw = 0;
        items.forEach((item: Item) => {
          tvw += parseFloat(item.wert.toString());
        });
        setVw(tvw);
        setVs(tvw * 1.1);
        setSquareMetres(Math.PI);
        setFlatRate(Math.PI);
        setSqrIsClear(true);
        setNotEmpty({ ...notEmpty, squareMetres: false, flatRate: false });
      } else {
        setVw(Math.PI);
        setVs(Math.PI);
        setSquareMetres(Math.PI);
        setFlatRate(Math.PI);
        setSqrIsClear(true);
        setNotEmpty({
          ...notEmpty,
          flatRate: false,
          squareMetres: false,
          vs: false,
          vw: false,
        });
        setError({
          message: text.errors.null,
          type: "error",
          fill: true,
        });
        setOpen(true);
      }
    } else {
      setVw(Math.PI);
      setVs(Math.PI);
      setSquareMetres(Math.PI);
      setFlatRate(Math.PI);
      setSqrIsClear(true);
      setItems([{ gegenstand: "", wert: Math.PI }]);
      setNotEmpty({
        flatRate: false,
        squareMetres: false,
        vs: false,
        vw: false,
        items: false,
      });
      setError({
        message: text.errors.min,
        type: "error",
        fill: true,
      });
      setOpen(true);
    }
  };

  const calcSqr = () => {
    if (squareMetres != Math.PI) {
      if (flatRate === Math.PI) setFlatRate(700);
      setSqrIsClear(false);
      setVw(squareMetres * flatRate);
      setVs(squareMetres * flatRate * 1.1);
      setItems([
        {
          gegenstand: "",
          wert: Math.PI,
        },
      ]);
      setNotEmpty({ ...notEmpty, items: false });
      setItemsIsClear(true);
    } else {
      setSqrIsClear(true);
      setNotEmpty({
        items: false,
        squareMetres: false,
        flatRate: false,
        vs: false,
        vw: false,
      });
      setVw(Math.PI);
      setVs(Math.PI);
      setFlatRate(Math.PI);
      setItems([
        {
          gegenstand: "",
          wert: Math.PI,
        },
      ]);
      setItemsIsClear(true);
      setError({
        message: text.errors.sqr,
        type: "error",
        fill: true,
      });
      setOpen(true);
    }
  };

  const addItem = () => {
    if (items.length >= 1) {
      setItems((prevArr: Items) => {
        const result = [...prevArr];
        result.push({
          gegenstand: "",
          wert: Math.PI,
        });
        return result;
      });
    } else {
      setItems([{ gegenstand: "", wert: Math.PI }]);
    }
  };

  const clear = () => {
    setVs(Math.PI);
    setVw(Math.PI);
    setFlatRate(Math.PI);
    setSquareMetres(Math.PI);
    setItems([{ gegenstand: "", wert: Math.PI }]);
    setItemsIsClear(true);
    setSqrIsClear(true);
    setNotEmpty({
      items: false,
      squareMetres: false,
      flatRate: false,
      vs: false,
      vw: false,
    });
    setTimeout(() => {
      setItemsIsClear(false);
      setSqrIsClear(false);
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
        <div className="summe">
          <div className="section">
            <h1>{text.title}</h1>
            <div className="forms">
              <div className="form">
                <table className="table">
                  <thead>
                    <tr className="header">
                      <th className="title" colSpan={2}>
                        {text.list}
                      </th>
                      <th className="button">
                        <button className="btn" onClick={addItem}>
                          <MdAdd />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item: Item, index: number) => {
                      const setGegenstand = (e: string) => {
                        setItems((prevArr: Items) => {
                          const result = [...prevArr];
                          result[index].gegenstand = e;
                          return result;
                        });
                      };
                      const setWert = (e: number) => {
                        setItems((prevArr: Items) => {
                          const result = [...prevArr];
                          result[index].wert = e;
                          return result;
                        });
                      };
                      return (
                        <tr key={index} className="item">
                          <td className="inputs">
                            <TextInput
                              placeholder={text.item}
                              value={item.gegenstand}
                              onChange={setGegenstand}
                              clear={itemsIsClear}
                              notEmpty={notEmpty.items}
                            />
                          </td>
                          <td className="inputs">
                            <NumberInput
                              placeholder={text.value}
                              value={item.wert}
                              onChange={setWert}
                              clear={itemsIsClear}
                              notEmpty={notEmpty.items}
                            />
                          </td>
                          <td className="buttons">
                            <button
                              className="btn"
                              onClick={() => {
                                setItems((prevArr: Items) => {
                                  const result = [...prevArr];
                                  const newArr = result.filter(
                                    (e, i) => e !== item && index != i
                                  );
                                  return newArr;
                                });
                              }}
                            >
                              <MdOutlineDeleteForever />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <button onClick={calcItems} className="btn">
                  {text.calc}
                </button>
              </div>
              <div className="form">
                <div className="sqr">
                  <NumberInput
                    placeholder={text.sqrMeters}
                    value={squareMetres}
                    onChange={setSquareMetres}
                    clear={sqrIsClear}
                    notEmpty={notEmpty.squareMetres}
                  />

                  <NumberInput
                    placeholder={text.flatRatePlaceHolder}
                    value={flatRate}
                    onChange={setFlatRate}
                    clear={sqrIsClear}
                    notEmpty={
                      flatRate === 700 ? true : notEmpty.flatRate ? true : false
                    }
                  />
                </div>
                <button onClick={calcSqr} className="btn">
                  {text.calc}
                </button>
              </div>
            </div>
            <div className="results">
              <div className="result-item">
                <h2>{text.vw}: </h2>
                <p>
                  {vw != Math.PI &&
                  vw != Math.PI * flatRate &&
                  vw != Math.PI * 700
                    ? toOutString(Math.round(vw * 100 + Number.EPSILON) / 100) +
                      " CHF"
                    : notEmpty.vw
                    ? toOutString(Math.round(vw * 100 + Number.EPSILON) / 100) +
                      " CHF"
                    : ""}
                </p>
              </div>
              <div className="result-item">
                <h2>{text.vs}: </h2>
                <p>
                  {vs != Math.PI &&
                  vs != Math.PI * 1.1 &&
                  vs != Math.PI * flatRate &&
                  vs != Math.PI * flatRate * 1.1 &&
                  vs != Math.PI * 700 &&
                  vs != Math.PI * 700 * 1.1
                    ? toOutString(Math.round(vs * 100 + Number.EPSILON) / 100) +
                      " CHF"
                    : notEmpty.vs
                    ? toOutString(Math.round(vs * 100 + Number.EPSILON) / 100) +
                      " CHF"
                    : ""}
                </p>
              </div>
            </div>
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

export default HausratVersicherungssumme;
