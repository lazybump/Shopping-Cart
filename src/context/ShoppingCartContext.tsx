import { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getItemQuantity: (id: number) => number;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}

export interface CartItemType {
  id: number;
  quantity: number;
}

const ShoppingCartContext = createContext({} as CartContextType);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cartQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  function getItemQuantity(id: number) {
    const retrievedItem = cartItems.find((item) => item.id === id);
    return retrievedItem?.quantity || 0;
  }

  function incrementItem(id: number) {
    setCartItems((prev) => {
      const retrievedItem = prev.find((item) => item.id === id);
      if (!retrievedItem) return [...prev, { id, quantity: 1 }];

      return prev.map((item) => {
        if (item.id === id)
          return { ...item, quantity: retrievedItem.quantity + 1 };
        else return item;
      });
    });
  }

  function decrementItem(id: number) {
    setCartItems((prev) => {
      const retrievedItem = prev.find((item) => item.id === id);
      if (!retrievedItem) return [...prev];

      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: retrievedItem.quantity - 1 };
        } else return item;
      });
    });
  }

  function removeFromCart(id: number) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        incrementItem,
        decrementItem,
        removeFromCart,
        cartQuantity,
        cartItems,
        setCartItems,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
