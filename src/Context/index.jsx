import { createContext, useState } from "react";


export const ShopiContext = createContext();


export const ShopiProvider = ({children}) => {
    //Product Detail - Increment Quantity
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    //Shopi Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    //Product Detail - Open/Close
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
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShopiContext.Provider>
    )
}