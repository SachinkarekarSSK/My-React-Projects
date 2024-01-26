import React, { useCallback, useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import usefetchData from "../components/usefetchData";

const App = () => {
  // from part
  const [fromNum, setfromNum] = useState(0);
  const [fromcurrency, setfromCurrency] = useState("usd");

  // to part
  const [toNum, settoNum] = useState(0);
  const [toCurrency, settoCurrency] = useState("inr");

  const dataOBJ = usefetchData(fromcurrency);

  const options = Object.keys(dataOBJ);

  useEffect(() => {
    console.log(dataOBJ[options]);
  }, []);

  const convert = () => {
    console.log('convert is running');
    settoNum(fromNum * dataOBJ[toCurrency]);
  };

  return (
    <>

      <div className="container m-auto h-screen w-screen bg-yellow-400 flex justify-center items-center flex-col gap-5 ">
        {/* from */}
        <InputBox
          value={fromNum}
          currencyName={fromcurrency}
          options={options}
          setCurrency={setfromCurrency}
          NumberIncrement={setfromNum}
          disable={false}
        />

        {/* to */}
        <InputBox
          value={toNum}
          currencyName={toCurrency}
          options={options}
          NumberIncrement={settoNum}
          setCurrency={settoCurrency}
          disable={true}
        />

        <button className="bg-red-600 text-white p-5 px-10" onClick={convert}>
          convert {fromcurrency} to {toCurrency}
        </button>
      </div>
    </>
  );
};

export default App;
