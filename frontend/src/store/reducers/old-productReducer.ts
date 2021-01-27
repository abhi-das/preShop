import { HYDRATE } from "next-redux-wrapper";
import { initialState } from ".";
import { productFetchRequest, 
    productFetchRequestFail, 
    productFetchRequestSuccess } from "../actions";

import { ActionTypes, ProductState } from "../types"

type ProductActions = ReturnType<typeof productFetchRequest> & 
ReturnType<typeof productFetchRequestSuccess> &
ReturnType<typeof productFetchRequestFail>;


export interface State {
    app: string;
    page: string;
}


const productReducer = (state: State = { app: "init", page: "init" }, action: ProductActions ) => {
    switch (action.type) {
        case HYDRATE:
            if (action.payload.app === "init") delete action.payload.app;
            if (action.payload.page === "init") delete action.payload.page;
            return { ...state, ...action.payload };
        case "APP":
            return { ...state, app: action.payload };
        case "PAGE":
            return { ...state, page: action.payload };
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

export { productReducer };