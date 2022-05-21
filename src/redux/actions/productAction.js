import { ActionType } from "../contants/action-type";

export const setProducts = (products) => {
  return {
    type: ActionType.SER_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};
