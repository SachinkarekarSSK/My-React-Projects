import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Mytodos/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <div className="card mx-auto py-5 w-96 bg-white shadow-xl">
        <input
          type="text"
          className="input input-bordered input-secondary bg-white w-full max-w-xs m-auto my-5"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter your Todo"
        />
        <div className="m-auto w-full max-w-xs items-center text-center">
          <button className="btn bg-blue-800 text-white w-full text-lg font-bold"
                    onClick={() => {
                        input !== "" ? dispatch(addTodo(input)) : "";
                        setInput("");
                      }}
            >
            Add ToDo
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
