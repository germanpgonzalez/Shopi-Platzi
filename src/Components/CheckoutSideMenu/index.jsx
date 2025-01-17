import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopiContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../Utils';
import './styles.css';

export const CheckoutSideMenu = () => {

    const context = useContext(ShopiContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date:'01.02.2025',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(context.count = 0);
    }

    return (
        <aside className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className="size-6 text-black cursor-pointer" onClick={() => context.closeCheckoutSideMenu()}/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map((product) => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            imageURL={product.images} 
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mt-4 mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black w-full text-white py-3 rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}



