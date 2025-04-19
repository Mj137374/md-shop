import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";



export default function Navbar() {

  const { cartQty, handleLogout } = useShoppingCartContext()


  return (
    <div className="h-14 border-b shadow fiex items-center">
      <Container>
        <div className='flex justify-between flex-row-reverse'>
          <ul className='flex flex-row-reverse'>
            <li className="ml-4 border-1">
              <Link to="/">home</Link>
            </li>
            <li className="ml-4 border-1">
              <Link to="/Store">Store</Link>
            </li>
          </ul>

          <div>
            <Button className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200 absolute left-20 top-4"
             onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left"     viewBox="0      0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                         <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
            </svg></Button>
            <Link className="relative" to="./Cart">
              <button className="">
                <svg className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-200 absolute left-6 top-2"
                  xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" viewBox="0 0     16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
              </button>
              <span className="absolute w-5 h-5 mt-0.5 bg-red-400 flex justify-center items-center
               rounded-full top-1 left-12 text-white text-xs" >{cartQty !== 0 ? cartQty : ""}</span>
            </Link>
          </div>
        </div>
      </Container>

    </div>

  )
} 