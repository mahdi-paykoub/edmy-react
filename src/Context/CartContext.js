import { createContext } from "react";

export const CartContext = createContext({
    courseIds: [],
    addToCart:()=>{},
    removeFromCart:()=>{},
})
