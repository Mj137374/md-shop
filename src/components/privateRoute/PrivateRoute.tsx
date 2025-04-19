import { Navigate, Outlet } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";




export default function PrivateRoute () {
     const {isLogin} = useShoppingCartContext ()


    return (
        <>
            {
                isLogin ? <Outlet /> : <Navigate to="/Login" />
            }
        </>
    )
}
