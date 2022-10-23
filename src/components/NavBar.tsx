import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { cartQuantity } = useShoppingCart();
  return (
    <nav className="bg-white shadow-sm mb-3 sticky top-0">
      <div className="flex justify-between items-center p-5">
        <div className="space-x-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/store"}>Store</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="blue"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-blue-600 outline outline-1 rounded-full p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {cartQuantity ? (
            <div className="bg-red-600 h-5 w-5 rounded-full absolute bottom-0 right-0 text-sm flex items-center justify-center text-white translate-x-1/4 translate-y-1/4">
              {cartQuantity}
            </div>
          ) : null}
        </button>
      </div>
    </nav>
  );
}

// w-11/12 m-auto
