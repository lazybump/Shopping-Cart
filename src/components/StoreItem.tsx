import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, incrementItem, decrementItem } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="bg-white rounded overflow-hidden shadow md:max-w-md">
      <img src={imgUrl} className="h-52 w-full object-cover" />
      <div className="px-4 py-3">
        <div className="h-14 flex justify-between">
          <span className="text-2xl font-semibold">{name}</span>
          <span className="text-lg text-slate-500 font-medium">
            {formatCurrency(price)}
          </span>
        </div>
        <div className="mb-3">
          {quantity === 0 ? (
            <button
              className="bg-blue-500 text-white w-full rounded-sm h-10"
              onClick={() => incrementItem(id)}
            >
              + Add To Cart
            </button>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-3">
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded"
                  onClick={() => decrementItem(id)}
                >
                  -
                </button>
                <div className="flex items-end gap-2">
                  <span className="text-2xl">{quantity}</span>
                  in cart
                </div>
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded"
                  onClick={() => incrementItem(id)}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
