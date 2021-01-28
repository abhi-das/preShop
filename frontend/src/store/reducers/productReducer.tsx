import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { ActionTypes, AppState } from "../types";
import { initialState } from ".";
import { productFetchRequest, productFetchRequestFail, productFetchRequestSuccess } from "../actions";

type ProductActions = ReturnType<typeof productFetchRequest> & 
ReturnType<typeof productFetchRequestSuccess> &
ReturnType<typeof productFetchRequestFail>;


export const productReducer = (
  state: AppState = initialState,
  action: ProductActions | AnyAction
) => {
  switch (action.type) {
    // case HYDRATE:
      // if (action.payload.app === "init") delete action.payload.app;
      // if (action.payload.page === "init") delete action.payload.page;
      // return { ...state, ...action.payload };
      // return state;
    case ActionTypes.PRODUCT_FETCH_REQUEST: 
        return {
          ...state,
          isLoading: true
        };
    case ActionTypes.PRODUCT_FETCH_REQUEST_SUCCESS: 
        return {
            isLoading: false,
            products: [...state.products, action.payload]
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
