import React, { useEffect , useState} from "react";

const useCounter = (num)=>{
    const [number, setNumber] = useState(num)

    const increment = ()=>{
        setNumber(number+1)
    }

    const decrement = ()=>{
        setNumber(number-1)
    }

    return [number , increment, decrement]

}

export default useCounter