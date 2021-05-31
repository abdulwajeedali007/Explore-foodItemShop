export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state };
    case "ADD_TO_CART":
      // let allreadyExist = []
      return state.cartItems.length > 0
        ? state.cartItems.find((item) => item.id === action.payload.id)
          ? { ...state }
          : { ...state, cartItems: [...state.cartItems, action.payload] }
        : { ...state, cartItems: [...state.cartItems, action.payload] };

    // return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "DELETE_ITEM":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    case "INCREMENT":
      const tempItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload.id
          ? {
              ...cartItem,
              count: cartItem.count + 1,
            }
          : cartItem
      );
      return { ...state, cartItems: tempItems };
    case "DECREMENT":
      let tempDelete = [];
      action.payload.count === 1
        ? (tempDelete = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          ))
        : (tempDelete = state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.id
              ? {
                  ...cartItem,
                  count: cartItem.count - 1,
                }
              : cartItem
          ));

      return { ...state, cartItems: tempDelete };
    case "CLEAR_CART":
      return { ...state, cartItems: [] };
    default:
      console.log(state.cartItems);
      return state;
  }
};
