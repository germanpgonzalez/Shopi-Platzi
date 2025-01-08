import { createContext, useState } from "react";


export const ShopiContext = createContext();


export const ShopiProvider = ({children}) => {

    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }

    const closeProductDetail = () => {
        setIsProductDetailOpen(false);
    }

    return (
        <ShopiContext.Provider value={{
            count, 
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            {children}
        </ShopiContext.Provider>
    )
}