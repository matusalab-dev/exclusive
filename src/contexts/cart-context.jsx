import { createContext } from "react";

const cartContext = createContext([]);

const CartProvider = ({ children }) => {
  const cart = [];

  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
};
