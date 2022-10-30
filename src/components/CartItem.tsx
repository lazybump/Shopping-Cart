import { formatCurrency } from "../utilities/formatCurrency";
import { IoIosClose } from "react-icons/io";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

function CartItem({ id, name, price, imgUrl }: CartItemProps) {
  const { getItemQuantity } = useShoppingCart();

  return (
    <article className="grid grid-cols-3 my-5">
      <img src={imgUrl} className="h-24 w-full object-cover" />
      <div className="flex flex-col ml-3 justify-center">
        <div className="space-x-2">
          <span>{name}</span>
          <span className="text-xs text-zinc-400">
            {"x" + getItemQuantity(id)}
          </span>
        </div>
        <span className="text-sm text-zinc-500">{formatCurrency(price)}</span>
      </div>
      <div className="justify-self-end self-center">
        <span>{formatCurrency(price * getItemQuantity(id))}</span>
        <button className="p-2 border border-red-300 rounded ml-3 text-red-600 hover:bg-red-500 hover:text-white">
          <IoIosClose />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
