"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import type { Size } from "@/types/database";

export interface CartItem {
  productId: string;
  variantId: string;
  name: string;
  size: Size;
  price: number; // grosze
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
}

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; variantId: string }
  | { type: "UPDATE_QTY"; variantId: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items };
    case "ADD": {
      const existing = state.items.find((i) => i.variantId === action.item.variantId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.variantId === action.item.variantId
              ? { ...i, quantity: i.quantity + action.item.quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.variantId !== action.variantId) };
    case "UPDATE_QTY":
      if (action.quantity <= 0) {
        return { items: state.items.filter((i) => i.variantId !== action.variantId) };
      }
      return {
        items: state.items.map((i) =>
          i.variantId === action.variantId ? { ...i, quantity: action.quantity } : i
        ),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number; // grosze
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "riot-act-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) dispatch({ type: "HYDRATE", items: JSON.parse(stored) });
    } catch {}
  }, []);

  // Persist on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        itemCount,
        subtotal,
        addItem: (item) => dispatch({ type: "ADD", item }),
        removeItem: (variantId) => dispatch({ type: "REMOVE", variantId }),
        updateQuantity: (variantId, quantity) => dispatch({ type: "UPDATE_QTY", variantId, quantity }),
        clearCart: () => dispatch({ type: "CLEAR" }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
