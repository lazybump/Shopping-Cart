import { formatCurrency } from "../utilities/formatCurrency";
import { IoIosClose } from "react-icons/io";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItemType } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

function CartItem({ id, quantity }: CartItemType) {
  const { removeFromCart } = useShoppingCart();

  const currentItem = storeItems.find((item) => item.id === id);
  const { name, price, imgUrl } = currentItem!;

  return (
    <article className="grid grid-cols-3 my-5">
      <img src={imgUrl} className="h-24 w-full object-cover" />
      <div className="flex flex-col ml-3 justify-center">
        <div className="space-x-2">
          <span>{name}</span>
          <span className="text-xs text-zinc-400">{"x" + quantity}</span>
        </div>
        <span className="text-sm text-zinc-500">{formatCurrency(price)}</span>
      </div>
      <div className="justify-self-end self-center">
        <span>{formatCurrency(price * quantity)}</span>
        <button
          className="p-2 border border-red-300 rounded ml-3 text-red-600 hover:bg-red-500 hover:text-white"
          onClick={() => removeFromCart(id)}
        >
          <IoIosClose />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
