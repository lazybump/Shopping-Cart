import { createContext, ReactNode, useContext, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface ShoppingCartContext {
  getItemCount: (id: number) => number;
  increaseCartCount: (id: number) => void;
  decreaseCartCount: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
