import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { ActionTypes, ProductState } from "../types";
import { initialState } from ".";

export interface State {
  products: ProductState
}

export const productReducer = (
  state: State = { products: initialState },
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === "init") delete action.payload.app;
      if (action.payload.page === "init") delete action.payload.page;
        return { ...state, ...action.payload };
    case ActionTypes.PRODUCT_FETCH_REQUEST: 
        return {
            isLoading: true
        };
    case ActionTypes.PRODUCT_FETCH_REQUEST_SUCCESS: 
        return {
            ...state,
            isLoading: false,
            products: action.payload
        };
    case ActionTypes.PRODUCT_FETCH_REQUEST_FAIL:
        return {
            isLoading: false,
            errors: action.payload
        };
    default:
      return state;
  }
};
