import { createContext, useState } from "react";

export const TodoContext=createContext();

export const TodoProvider=({children})=>{
    const [arr,setArr]=useState(["Apple","Banana"]);
    function consoleHi(){
        console.log("hi");
    }
    return(
        <TodoContext.Provider value={{arr,setArr,consoleHi}}>
            {children}
        </TodoContext.Provider>
    )
}