import { ActionTypes, Product, ResponseError } from "../types";

export const productFetchRequest = () => ({
  type: ActionTypes.PRODUCT_FETCH_REQUEST
});

export const productFetchRequestSuccess = (products: Product[]) => ({
  type: ActionTypes.PRODUCT_FETCH_REQUEST_SUCCESS,
  payload: products,
});

export const productFetchRequestFail = (errors: ResponseError) => ({
  type: ActionTypes.PRODUCT_FETCH_REQUEST_FAIL,
  payload: errors
});
