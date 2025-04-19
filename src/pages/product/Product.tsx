import Container from "../../components/container/Container";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/Servers";
import { getProduct } from "../../services/api";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";



function Product() {
    const [product, setProduct] = useState<IProduct>()
    const Params = useParams<{ id: string }>()

    const { handleDecreaseProductQty, handleIncreaseProductQty, getProductQty, handleRemoveProduct } = useShoppingCartContext();

    useEffect(() => {
        getProduct(Params.id as string).then((data) => {
            setProduct(data);
        })
    }, [])



    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-black text-white p-6">
            <Container>
                <div className="shadow-lg mt-6 grid grid-cols-12 bg-gray-900 rounded-2xl overflow-hidden">
                    <div className="h-120 col-span-10 p-6">
                        <h1 className="text-right text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">{product?.title}</h1>


                        <p className="text-right text-lg  text-gray-300 leading-relaxed mt-4">{product?.description}</p>
                        <p className="text-right text-lg font-semibold text-blue-400 mt-4">Price: {product?.price}$</p>
                    </div>
                    <div className="bg-gray-800 col-span-2 p-4 flex flex-col items-center justify-center rounded-r-2xl">
                        <img
                            className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            src={product?.image}
                            alt="" />

                        {
                            getProductQty(parseInt(Params.id as string)) === 0 ? (<Button onClick={() => handleIncreaseProductQty(parseInt(Params.id as string))}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold !py-2 px-4 rounded-lg shadow-lg transition-all " variant="primary">Add to Card</Button>) :
                                (<>
                                  <div className="grid grid-cols-3">
                                    <Button onClick={() => handleIncreaseProductQty(parseInt(Params.id as string))}
                                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold !py-2 px-4 rounded-lg shadow-lg transition-all " variant="primary"> + </Button>


                                    <span className="flex justify-center items-center">{getProductQty(parseInt(Params.id as string))}</span>


                                    <Button onClick={() => handleDecreaseProductQty(parseInt(Params.id as string))}
                                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold !py-2 px-4 rounded-lg shadow-lg transition-all " variant="primary">
                                        -
                                    </Button>
                                </div>
                                  
                                <Button onClick={() =>handleRemoveProduct(parseInt(Params.id as string))}
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold !py-2 px-4 rounded-lg shadow-lg transition-all " variant="success">Remove From Cart</Button>

                                
                                </>
                        )}

                    </div>
                </div>
            </Container>
        </div>
    );
}


export default Product;




