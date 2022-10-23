import { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
}

export interface CartItem {
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const openCart = () => {};
  const closeCart = () => {};

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

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        incrementItem,
        decrementItem,
        cartQuantity,
        cartItems,
        openCart,
        closeCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
