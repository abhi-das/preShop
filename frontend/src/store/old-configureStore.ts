import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { initialState, rootReducer } from "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension';
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { Store as ReduxStore } from 'redux';
import { ProductState } from "./types";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

// const configStore = (initialState) => {
//     const store = createStore(
//         rootReducer,
//         initialState,
//         composeWithDevTools(
//             applyMiddleware(thunk)
//         )
//     )
//     return store;
// }

// export default configStore;

// export type Store = ReduxStore<typeof initialState>;
// export interface Store {
//   products: ProductState
// }

export interface Store {
  app: string;
  page: string;
  products: ProductState;
}

// const composedMiddlewares = applyMiddleware(thunk);

// const storeEnhancers: StoreEnhancer = composeWithDevTools({
//   name: "React-node-test"
// })(composedMiddlewares);


// // create a makeStore function
// const makeStore: MakeStore<Store> = (context: Context) => {
//   return createStore(rootReducer);
// };
// // export an assembled wrapper
// export const wrapper = createWrapper<Store>(makeStore);

const middlewares = [thunkMiddleware, logger]

export const makeStore: MakeStore<Store> = (context: Context) =>
  createStore(rootReducer, applyMiddleware(...middlewares));

export const wrapper = createWrapper<Store>(makeStore, { debug: true });





// import thunkMiddleware from 'redux-thunk';
// import {
//   createStore,
//   applyMiddleware,
//   compose,
//   Store as ReduxStore,
// } from 'redux';
// import { createLogger } from 'redux-logger';
// import { initialState, rootReducer } from './reducers';

// const dev: boolean = process.env.NODE_ENV !== 'production';

// export type Store = ReduxStore<typeof initialState>;

// export default (initialState) => {
//   const middlewares = dev ? [thunkMiddleware, createLogger()] : [];
//   return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
// };
