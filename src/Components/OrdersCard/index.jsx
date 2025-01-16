import { ChevronRightIcon } from '@heroicons/react/24/solid'

export const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center border rounded-lg border-black p-4 w-80 mb-4">
            <div className='flex justify-between items-center w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.2025</span>
                    <span className='font-light'>{totalProducts} artículos</span>
                </p>
                <p className='flex items-center gap-2'>
                 <span className='font-medium text-2xl'>${totalPrice}</span>
                 <ChevronRightIcon className='h-6 w-6 cursor-pointer text-black'/>
                </p>
            </div>
        </div>
    )
}