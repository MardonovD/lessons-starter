import React from "react";
import { ActionType } from "../contants/action-type";
const initialState = {
  products: [
    {
      id: 1,
      title: "doston",
      category: "Programmer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SER_PRODUCTS:
      return state;
    default:
      return state;
  }
};
