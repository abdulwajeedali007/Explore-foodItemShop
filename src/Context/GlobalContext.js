import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { foodData } from "../data";

const initialState = {
  products: foodData,
  cartItems: [],
};

export const Globalcontext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // actions comes here
  // addtocart
  const addtocart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };
  // clear from cart
  const deleteItem = (item) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };
  // increment
  const increment = (id) => {
    dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  // decrement
  const decrement = (id) => {
    dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  // grandtotal
  const grandTotal = () => {
    return state.cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  // clear cart
  const clearData = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <Globalcontext.Provider
      value={{
        allPosts: state.products,
        addToCartAction: addtocart,
        cartItems: state.cartItems,
        grandTotal,
        increment,
        decrement,
        deleteItem,
        clearData,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};
