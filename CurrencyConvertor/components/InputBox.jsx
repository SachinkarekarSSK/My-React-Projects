import React from "react";

const InputBox = ({
  value,
  currencyName,
  NumberIncrement,
  disable,
  options,
  setCurrency,
}) => {
  return (
    <>
      <div className="container flex justify-center item-gap-x-5">
        <input
          type="number"
          className="input input-bordered input-secondary mx-5 "
          value={value}
          disabled={disable}
          onChange={(e) => {
            e.target.value >= 0
              ? NumberIncrement(e.target.value)
              : (e.target.value = 0);
          }}
        />

        <select className="select select-accent m-5" value={currencyName}
         onChange={(e)=>{setCurrency(e.target.value)}}>

          {options.map((item, id) => {
            return (
              <option
                key={id}
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default InputBox;
