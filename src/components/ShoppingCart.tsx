import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { GrClose } from "react-icons/gr";
import { useEffect, useRef } from "react";

export function ShoppingCart() {
  const { getItemQuantity, isOpen, setIsOpen } = useShoppingCart();

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

  return (
    <div
      className={
        "bg-white fixed right-0 top-0 h-screen w-[500px] px-4 py-5 border border-red-700 transition-all duration-500 " +
        (isOpen ? "" : "translate-x-full")
      }
      ref={cartRef}
    >
      <div className="flex justify-between">
        <span>SIDE CART</span>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <GrClose />
        </button>
      </div>
      <div>
        {storeItems.map((item) => (
          <article
            className="my-4 flex justify-between border-2 border-black"
            key={item.id}
          >
            <div className="border-2 border-yellow-500 w-1/2 flex justify-between space-x-2">
              <img
                src={item.imgUrl}
                className="h-20 w-[200px] object-cover border-2 border-x-teal-500"
              />
              <div className="border-2 border-red-600 flex flex-col justify-center">
                <span>{item.name}</span>
                <span className="text-slate-500">
                  {formatCurrency(item.price)}
                </span>
              </div>
            </div>
            <div className="border-2 border-green-600">
              <span>{getItemQuantity(item.id)}</span>
              <button>x</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
