import {createStore, applyMiddleware, compose, StoreEnhancer} from 'redux';
import logger from 'redux-logger';
import {MakeStore, createWrapper, Context} from 'next-redux-wrapper';
import reducer, {initState, State} from './reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = applyMiddleware(thunkMiddleware, logger);
// const composedEnhancers = compose(middlewares);
// const composedMiddlewares = applyMiddleware(thunk);

const storeEnhancers: StoreEnhancer = composeWithDevTools({
  name: "React-node-test"
})(middlewares);

export const makeStore: MakeStore<State> = (context: Context) => {
    const store = createStore(reducer, initState, storeEnhancers);

    // if (module.hot) {
    //     module.hot.accept('./reducer', () => {
    //         console.log('Replacing reducer');
    //         store.replaceReducer(require('./reducer').default);
    //     });
    // }

    return store;
};

export const wrapper = createWrapper<State>(makeStore, {debug: false});