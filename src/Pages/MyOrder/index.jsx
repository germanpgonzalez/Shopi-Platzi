import { useContext } from "react";
import { ShopiContext } from '../../Context';
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";

export function MyOrder() {
    const context = useContext(ShopiContext);

  return (
    <Layout>
      <h1>My Order</h1>
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
