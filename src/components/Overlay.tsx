import { useShoppingCart } from "../context/ShoppingCartContext";

function Overlay() {
  const { isOpen } = useShoppingCart();
  return (
    <div
      className={`bg-black absolute inset-0 z-10 opacity-${
        isOpen ? 50 : 0
      } pointer-events-none`}
    />
  );
}

export default Overlay;
