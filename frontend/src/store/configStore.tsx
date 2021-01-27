import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import thunkMiddleware from 'redux-thunk';

// import { rootReducer } from "./reducers";
import { productReducer, State } from "./reducers/productReducer";

const middlewares = [thunkMiddleware, logger]

export const makeStore: MakeStore<State> = (context: Context) =>
  createStore(productReducer, applyMiddleware(...middlewares));

export const wrapper = createWrapper<State>(makeStore, { debug: true });