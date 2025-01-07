import { createContext } from "react";


const ShopiContext = createContext();


export const ShopiProvider = ({children}) => {
    return (
        <ShopiContext.Provider>
            {children}
        </ShopiContext.Provider>
    )
}