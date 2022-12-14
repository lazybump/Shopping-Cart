import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { GrClose } from "react-icons/gr";
import { useEffect, useRef } from "react";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";

export function ShoppingCart() {
  const { isOpen, setIsOpen, cartItems } = useShoppingCart();
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMousedown = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (!cartRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("mousedown", handleMousedown);
    return () =>
      document.body.removeEventListener("mousedown", handleMousedown);
  }, []);

  const totalCartPrice = cartItems.reduce((acc, curr) => {
    const retrievedItem = storeItems.find((item) => item.id === curr.id);
    return acc + curr.quantity * (retrievedItem?.price || 0);
  }, 0);

  return (
    <div
      className={`
        bg-white fixed right-0 top-0 z-20 h-screen w-[500px] px-4 py-5 transition-all duration-500 
        ${isOpen ? "" : "translate-x-full"}
      `}
      ref={cartRef}
    >
      <div className="flex justify-between">
        <span>SIDE CART</span>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <GrClose />
        </button>
      </div>
      <div className="my-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem {...item} key={item.id} />)
        ) : (
          <h2 className="text-center relative top-20 font-bold text-xl">
            Cart is empty
          </h2>
        )}
      </div>
      <div className="text-end font-bold text-xl">
        {cartItems.length > 0
          ? `Total: ${formatCurrency(totalCartPrice)}`
          : null}
      </div>
    </div>
  );
}
