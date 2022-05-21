import React from "react";
import { ActionType } from "../contants/action-type";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SER_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
