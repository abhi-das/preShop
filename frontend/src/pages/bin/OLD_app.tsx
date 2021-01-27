// import React, { Suspense, lazy } from 'react';
// import Footer from '../components/footer';
// import Header from '../components/header';
// // import { Route, Switch, BrowserRouter } from 'react-router-dom';
// // import { Router } from 'react-router';
// // import { createBrowserHistory } from 'history';

// import '../styles/bootstrap.min.css';
// import '../styles/global.scss';
// import type { AppContext, AppInitialProps /*, AppContext */ } from 'next/app'

// import App from 'next/app';
// import { wrapper } from '../store/configureStore';
// import Home from '../components/home';

// const HomeContainerApp = lazy(() => import ('../containers/HomeContainer'));
// const HomeComp = lazy(() => import('../components/home'));
// export default function MyApp({ Component, pageProps }) {


import React, { FC } from 'react';
import App, { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Store, wrapper } from '../store/configureStore';


interface Props {
    store: Store;
}

// class MyApp extends App<Props> {
//     render() {
//         const { store, Component, ...props } = this.props;
//         return (
//             // <Provider store={store}>
//                 <Component {...props} />
//             // </Provider>
//         );
//     }
// }

const MyApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);
export default wrapper.withRedux(MyApp);

// export default withRedux(configureStore)(MyApp);


// class MyApp extends App<Props> {
//     public static getInitialProps = async ({Component, ctx}: AppContext) => {
//         return {
//             pageProps: {}
//         }
//     }
//     public render() {
//         const {Component, pageProps} = this.props;
//         return <>
//             <Header />
                
//                 <Component {...pageProps} />
                    
//             <Footer />
//         </>
//     }
// }

// export default wrapper.withRedux(MyApp);


// interface Props {
//     store: Store;
// }

// class MyApp extends App<Props> {

//     static async getInitialProps ({Component, ctx}) {
//         return {
//         pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
//         }
//     }

//     render() {
//         const {Component, pageProps, store} = this.props;
//         return (
//             <>
//                 <Provider store={store}>
//                     <Component {...pageProps} />
//                 </Provider>
//             </>
//         );
//     }

// }
  
// export default withRedux(configureStore)(MyApp);


// export default function MyApp({ Component, pageProps }: AppProps) {
//     const store = configStore();
// 	return <>
//         <Provider store={store}>
//             <Header/>
//                 <BrowserRouter >
//                     <Suspense fallback='loading...'>
//                         <Switch>
//                             <Route exact path='/'>
//                                 <HomeContainerApp />
//                             </Route>
//                         </Switch>
//                     </Suspense>
//                 </BrowserRouter>                
//             <Footer />
//         </Provider>
//     </>
// }