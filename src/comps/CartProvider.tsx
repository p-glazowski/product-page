import { createContext, useContext, useState, type ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface ContextProps {
  cart: Cart[] | undefined;
  handleCart: (id: number, type: "minus" | "plus") => void;
}

interface Cart {
  id: number;
  quantity: number;
}

const CartContext = createContext<ContextProps | undefined>(undefined);
export { CartContext };

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([{ id: 1, quantity: 6 }]);

  function handleCart(id: number, type: "minus" | "plus") {
    const foundItem = cart.find((item) => item.id === id);

    if (type === "plus") {
      if (foundItem) {
        setCart((pS) =>
          pS.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        );
        return;
      }

      setCart((pS) => [...pS, { id: id, quantity: 1 }]);
    }

    if (type === "minus") {
      if (foundItem) {
        setCart((pS) =>
          pS
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        );

        return;
      }
    }
  }

  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("This component needs a CartContext Provider!");

  return cartContext;
}
