import { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  getItemQuantity: (id: number) => number;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
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

  function getItemQuantity(id: number) {
    const retrievedItem = cartItems.find((item) => item.id === id);
    return retrievedItem?.quantity || 0;
  }

  function incrementItem(id: number) {
    setCartItems((prev) => {
      // check if item is already in cart
      const retrievedItem = prev.find((item) => item.id === id);
      // if the item is already in the cart, just increment the quantity
      if (retrievedItem) {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: retrievedItem.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...prev, { id, quantity: 1 }];
      }
    });
  }

  function decrementItem(id: number) {
    setCartItems((prev) => {
      // check if item is already in cart
      const retrievedItem = prev.find((item) => item.id === id);
      if (retrievedItem) {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: retrievedItem.quantity - 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...prev];
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, incrementItem, decrementItem }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
