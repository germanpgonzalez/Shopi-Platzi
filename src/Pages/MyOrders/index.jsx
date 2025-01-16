import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShopiContext } from '../../Context';



export const MyOrders = () => {
  const context = useContext(ShopiContext);
  
  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center">
        <h1 className="font-medium text-xl mb-4">My Orders</h1>
      </div>
      
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
           <OrdersCard 
            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts}
          />
          </Link>
        ))
      }
    </Layout>
  )
}
