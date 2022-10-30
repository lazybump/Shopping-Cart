import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { cartQuantity, setIsOpen } = useShoppingCart();
  return (
    <nav className="bg-white shadow-sm mb-3 sticky top-0">
      <div className="flex justify-between items-center p-5">
        <div className="space-x-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/store"}>Store</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
        <button className="relative" onClick={() => setIsOpen((prev) => !prev)}>
          <IoMdCart className="w-10 h-10 text-blue-600 outline outline-1 rounded-full p-2 hover:bg-blue-100 active:bg-blue-600 active:text-white transition-all duration-100" />
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
