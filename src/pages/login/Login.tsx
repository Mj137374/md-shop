import { useState } from "react";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { ChangeEvent } from "react";



export default function Login() {
    const { handleLogin } = useShoppingCartContext();

    const [user, setUser] = useState ({
        username : "",
        password : "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
       const {name, value} = e.target;
       setUser({
        ...user,
        [name]: value,
       });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-sm  active:bg-amber-50">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <div className="space-y-4">
                    <input onChange={handleChange}
                        type="text"
                        placeholder="Username" name="username" value={user.username}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input onChange={handleChange}
                        type="password" 
                        placeholder="Password" name="password" value={user.password}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                        onClick={()=>handleLogin(user.username, user.password)}
                        className="w-full cursor-pointer hover:bg-sky-50 active:bg-sky-50 focus:bg-sky-50"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}
