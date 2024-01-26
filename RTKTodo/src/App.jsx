import React from "react";
import Input from "./Components/Input";
import AllTodos from "./Components/AllTodos";
import Nav from "./Components/Navbar/Nav";

const App = () => {
  return (
    <>
      <div className=" min-h-screen w-full">
        <Nav />

        <div className="box flex py-5 flex-col gap-14 bg-blue-950 w-full min-h-screen ">
          <Input />
          <div className="todosSection ">
            <AllTodos />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
