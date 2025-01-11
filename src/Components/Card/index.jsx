import { useContext } from "react"
import { ShopiContext } from "../../Context"	
import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";

export const Card = (data, handleDelete) => {

    const context = useContext(ShopiContext);

    const showProduct = (ProductDetail) => {
        context.openProductDetail();
        context.setProductToShow(ProductDetail);
    }

    const addProductToCart = (e,productData) => {
        e.stopPropagation();
        context.setCartProducts([...context.cartProducts, productData]);
        context.setCount(context.count +1)
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter((product) => product.id === id).length > 0;

        if(isInCart) {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black   w-6 h-6 rounded-full m-2 p-1"> 
                    <CheckIcon className="size-6 text-white" onClick={ () => handleDelete(data.data.id)} />
                </div>
            )
        } else {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white   w-6 h-6 rounded-full m-2 p-1" onClick={(e) => addProductToCart(e,data.data)}> 
                    <PlusIcon className="size-6 text-black" />
                </div>
            )
        }

       
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt=""/>
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-bold">${data.data.price}</span>
            </p>
        </div>
    )
}