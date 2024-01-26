import React, { useCallback, useEffect, useState, useRef } from "react";

const App = () => {
  const [lengthOfPass, setlengthOfPass] = useState(6);

  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const passwordRef = useRef(null)

  const passWordGenerator = useCallback(() => {
    let passStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      passStr += "1234567890";
    }
    if (characterAllowed) {
      passStr += "~!@#$%^&*()";
    }

    let passChar = "";

    for (let i = 0; i < lengthOfPass; i++) {
      let randomNum = Math.floor(Math.random() * passStr.length);

      passChar += passStr[randomNum];
    }

    setpassword(passChar);
  }, [lengthOfPass, numberAllowed, characterAllowed]);

  useEffect(() => {
    passWordGenerator();
  }, [lengthOfPass, numberAllowed, characterAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]);

  return (
    <>
      <div className="container min-h-screen bg-yellow-300  flex pt-60 items-center flex-col gap-5">
        <div className="inputBox ">
          <input type="text" className="p-3 mx-2" defaultValue={password} ref={passwordRef} />
          <button className="bg-blue-600 p-3 text-white font-extrabold hover:bg-blue-700" onClick={()=>{
            copyPassword()
          }}>
            Copy
          </button>
        </div>

        <div className="featureBtn   flex justify-center align-middle flex-wrap flex-col">
          <div className="text-center flex align-middle justify-center mr-4">
          <input
            type="range"
            min={6}
            max={16}
            value={lengthOfPass}
            onChange={(elem) => {
              setlengthOfPass(elem.target.value);
            }}
            readOnly
          />
          <label htmlFor="" className="mx-2">
            Length {lengthOfPass}
          </label>
          </div>

            <div className="box">
          <input
            type="checkbox"
            onClick={() => {
              setnumberAllowed((preNumValue) => {
                return !preNumValue;
              });
            }}
          />
          <label htmlFor="" className="mx-2">
            Number
          </label>
            </div>
          
            
            <div className="box">
          <input
            type="checkbox"
            onClick={() => {
              setcharacterAllowed((preCharValue) => {
                return !preCharValue;
              });
            }}
          />
          <label htmlFor="" className="mx-2">
            Character
          </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
