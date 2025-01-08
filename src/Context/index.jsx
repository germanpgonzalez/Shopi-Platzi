import { createContext, useState } from "react";


export const ShopiContext = createContext();


export const ShopiProvider = ({children}) => {

    const [count, setCount] = useState(0);

    return (
        <ShopiContext.Provider value={{
            count, setCount
        }}>
            {children}
        </ShopiContext.Provider>
    )
}