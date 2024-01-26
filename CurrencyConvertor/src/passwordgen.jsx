// import React,{useState, useCallback, useRef, useEffect} from "react";
// import usePasswordGen from "./Hooks/usePasswordGen";

// const App = ()=>{

//   const [length, setLength] = useState(6)
//   const [numberAllowed, setnumberAllowed] = useState(false)
//   const [characterAllowed, setcharacterAllowed] = useState(false)
  
//   const [password,generatepassword] = usePasswordGen(length,numberAllowed,characterAllowed)

//   useEffect(()=>{
//     generatepassword()
//   },[length,numberAllowed,characterAllowed])


//   return(
//     <>

//       <div className="container bg-yellow-600 flex justify-center items-center flex-col p-5">
//         <div className="inputbox">
//           <input type="text" className="p-3" defaultValue={password} readOnly />
//           <button className="bg-blue-600 p-3">Copy</button>
//         </div>

//         <div className="feature">
//           <div className="box">
//             <input type="range" min={6} max={16} defaultValue={length} onChange={(e)=>{
//               setLength(e.target.value)
//               generatepassword()
//             }} />
//             <label htmlFor="">Length : {length}</label>
//           </div>
//           <div className="box">
//             <input type="checkbox" onClick={()=>{
//               setnumberAllowed((prevalue)=>{return !prevalue})
//               generatepassword()
//             }}/>
//             <label htmlFor="">Number</label>
//           </div>
//           <div className="box">
//             <input type="checkbox" onClick={()=>{
//               setcharacterAllowed((prevalue)=>{return !prevalue})
//               generatepassword()
//             }} />
//             <label htmlFor="">special character</label>
//           </div>
//         </div>

//       </div>

//     </>
//   )
// }

// export default App