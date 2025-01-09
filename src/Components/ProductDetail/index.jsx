import { useContext } from 'react';
import { ShopiContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css';

export const ProductDetail = () => {

    const context = useContext(ShopiContext);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className="size-6 text-black cursor-pointer" onClick={() => context.closeProductDetail()}/>
                </div>
            </div>
            <figure className='px-6'>
                <img 
                 className="w-full h-full rounded-lg" 
                 src={context.productToShow.images}	 
                 alt={context.productToShow.title}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-bold text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md mb-1'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}



