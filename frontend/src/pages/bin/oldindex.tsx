import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import HelpComponent from '../../components/HelpComponent';
// import { wrapper } from '../store/configureStore';
import { pure } from 'recompose';
// import { InferGetStaticPropsType } from "next";

// const WrapperApp: FC<AppProps> = ({ Component, pageProps }) => (
//     <Component {...pageProps} />
// );

// export default wrapper.withRedux(WrapperApp);


export default compose(
    connect(null, null),
    pure,
)(HelpComponent);



// export default function IndexPage() {
//     return (
//         <main className='py-3'>
//            <h1>Welcome to PreShop</h1>
//         </main>
//     )
// }


// export default function IndexPage({
//     posts
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//     return (
//         <main className='py-3'>
//            <h1>Welcome to PreShop</h1>
//         </main>
//     )
// }

// export async function getStaticProps() {
//     return {
//         props: {
//             posts: []
//         },
//     }
// }