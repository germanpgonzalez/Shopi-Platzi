import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"

export const Home = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
     .then(response => response.json())
     .then(data => setProducts(data));
  },[])

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {
          products?.map((products) => (
            <Card key={products.id} data={products} />
          ))    
        }
      </div>

    </Layout>
  )
}


