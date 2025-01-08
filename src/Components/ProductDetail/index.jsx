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
        </aside>
    )
}



