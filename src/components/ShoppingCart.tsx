import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export function ShoppingCart() {
  const { getItemQuantity } = useShoppingCart();
  return (
    <div className="bg-white fixed right-0 top-0 h-full w-[500px] px-4 py-5 border-2 border-red-700">
      <div className="flex justify-between border-2 border-blue-500">
        <span>SIDE CART</span>
        <button>
          <i className="ion-close-outline"></i>
        </button>
      </div>
      <div></div>
    </div>
  );
}
