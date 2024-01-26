import React, { useCallback, useState } from "react";

const usePasswordGen = (length , numberAllowed, characterAllowed)=>{
    const [password, setpassword] = useState('')
    const generatepassword = useCallback(()=>{
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (numberAllowed){
             str += '1234567890'
        }
        if(characterAllowed){
            str += '~!@#$%^&*()'
        }

        let newpassword = ''
        for(let i=0; i<length; i++){
            let randomnum = Math.floor(Math.random() * str.length)
            newpassword += str[randomnum]
        }

        setpassword(newpassword)
        
    }, [length,numberAllowed,characterAllowed,setpassword])
    return[password,generatepassword]
}

export default usePasswordGen