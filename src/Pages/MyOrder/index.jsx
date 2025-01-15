import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopiContext } from '../../Context';
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

export function MyOrder() {
    const context = useContext(ShopiContext);

  return (
    <Layout>
       <div className="flex w-80 items-center relative justify-center mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="size-6 text-black cursor-pointer"/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
            {context.order?.slice(-1)[0].products.map((product) => (
            <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageURL={product.images}
                price={product.price}
            />
            ))}
      </div>
    </Layout>
  );
}
