import { createContext, useState } from "react";


export const ShopiContext = createContext();


export const ShopiProvider = ({children}) => {
    //Product Detail - Increment Quantity
    const [count, setCount] = useState(0);
    
    //Shopi Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopi Cart - Order
    const [order, setOrder] = useState([]);

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
    //Checkout Side Menu - Open/Close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

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
            setCartProducts,
            isCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShopiContext.Provider>
    )
}