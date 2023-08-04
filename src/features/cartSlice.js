import { createSlice } from "@reduxjs/toolkit";

// cart slice for cart & checkout
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: localStorage.getItem("cartProducts")
      ? JSON.parse(localStorage.getItem("cartProducts"))
      : [],
    cartQuantity: 0,
    cartTotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // check index of id
      const existProduct = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      // condition for same id of index
      if (existProduct >= 0) {
        state.products[existProduct] = {
          ...state.products[existProduct],
          quantity: state.products[existProduct].quantity + 1,
        };
      } else {
        const updatedCart = { ...action.payload, quantity: 1 };
        state.products.push(updatedCart);
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    decrementCart(state, action) {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      //checks
      if (state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity -= 1;
      } else if (state.products[productIndex] === 1) {
        const nextCartItems = state.products.filter(
          (item) => item.id !== action.payload.id
        );
        state.products = nextCartItems;
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    removeProduct(state, action) {
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          const nextCartItem = state.products.filter(
            (item) => item.id !== product.id
          );
          state.products = nextCartItem;
        }
        localStorage.setItem("cartProducts", JSON.stringify(state.products));
        return state;
      });
    },
    getTotals(state) {
      let { total, quantity } = state.products.reduce(
        (total, product) => {
          const { price, quantity } = product;
          const itemTotal = price * quantity;

          total.total += itemTotal;
          total.quantity += quantity;

          return total;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartQuantity = quantity;
      state.cartTotal = total;
    },
    clearCart(state) {
      state.products = [];
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
  },
});

export const {
  addProduct,
  decrementCart,
  removeProduct,
  getTotals,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
