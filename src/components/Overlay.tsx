import { useShoppingCart } from "../context/ShoppingCartContext";

function Overlay() {
  const { isOpen } = useShoppingCart();
  console.log(isOpen);
  return (
    <div
      className={`bg-black absolute inset-0 z-10 pointer-events-none transition-opacity duration-200 ${
        isOpen ? "opacity-30" : "opacity-0"
      }
      `}
    />
  );
}

export default Overlay;
