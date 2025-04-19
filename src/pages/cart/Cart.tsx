import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";



export default function Cart() {

    const { cartItems } = useShoppingCartContext();



    return (
        <div>
            <Container>
                <div className="bg-gray-200">

                    {
                        cartItems.map((item) => (
                            <CartItem {...item} />
                        ))
                    }


                </div>

                <div className="bg-gray-400 rounded p-3">
                    <p className="text-right">Total Price : 1.000</p>
                    <p className="text-right">Your Discount : 800</p>
                    <p className="text-right">Final Price : 900</p>
                </div>

                <Button className="mt-2 hover:bg-sky-700 active:bg-violet-700" variant="primary">
                    Order Registration
                </Button>
            </Container>
        </div>
    )
}