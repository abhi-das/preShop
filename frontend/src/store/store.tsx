import {createStore, applyMiddleware, StoreEnhancer} from 'redux';
import logger from 'redux-logger';
import {MakeStore, createWrapper, Context} from 'next-redux-wrapper';
// import reducer, {initState, State} from './reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState, rootReducer } from './reducers';
import { AppState } from './types';

const middlewares = applyMiddleware(thunkMiddleware, logger);
// const composedEnhancers = compose(middlewares);
// const composedMiddlewares = applyMiddleware(thunk);

const storeEnhancers: StoreEnhancer = composeWithDevTools({
  name: "React-node-test"
})(middlewares);

export const makeStore: MakeStore<AppState> = (context: Context) => {
    const store = createStore(rootReducer, initialState, storeEnhancers);

    // if (module.hot) {
    //     module.hot.accept('./reducer', () => {
    //         console.log('Replacing reducer');
    //         store.replaceReducer(require('./reducer').default);
    //     });
    // }

    return store;
};

export const wrapper = createWrapper<AppState>(makeStore, {debug: false});