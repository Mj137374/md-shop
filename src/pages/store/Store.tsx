import ProductItem from "../../components/productItem/ProductItem"
import Container from "../../components/container/Container"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { IProduct } from "../../types/Servers";


function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);

    });
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-black text-white p-6">
      <Container>
        <h1 className='text-right mt-3 p-4'>New Product</h1>

        <div className='grid grid-cols-4 gap-4 MT-6'>

          {
            products.map((item) => (
              <Link key={item.id} to={`/Product/${item.id}`}>
                <ProductItem {...item} />
              </Link>

            ))
          }


        </div>
      </Container>
    </div>
  )
}


export default Store