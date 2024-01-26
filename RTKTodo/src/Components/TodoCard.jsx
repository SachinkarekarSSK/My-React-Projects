import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTodo, deleteTodo } from "../features/Mytodos/todoSlice";

const TodoCard = ({ item }) => {
  const dispatch = useDispatch();

  const [text, settext] = useState(item.text);
  console.log(text);
  const [readoredit, setReadoredit] = useState(true);

  return (
    <>


      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body flex flex-row ">
          <input
            className="card-title w-1/2 bg-white"
            value={text}
            readOnly={readoredit}
            onChange={(e) => {
              settext(e.target.value);
            }}
          />

          <div className="card-actions flex justify-end">
            <button
              className="btn btn-warning"
              onClick={() => {
                console.log("this is a readoredit -->", readoredit);
                setReadoredit(!readoredit);
                readoredit
                  ? ""
                  : dispatch(UpdateTodo({ id: item.id, text: text }));
              }}
            >
              {readoredit ? "Edit" : "save"}
            </button>
            <button
              className="btn bg-red-700 text-white"
              onClick={() => {
                dispatch(deleteTodo(item.id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
