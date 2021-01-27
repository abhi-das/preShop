import React, {FC} from 'react';
import {AppProps} from 'next/app';
import { wrapper } from '../store/store';

import '../styles/bootstrap.min.css';
import '../styles/global.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import { Container } from 'react-bootstrap';


const WrappedApp: FC<AppProps> = ({Component, pageProps}) =>{
    return <>
        <Header />
        <Container>
            <Component {...pageProps} />
        </Container>
        <Footer />
    </>
};

export default wrapper.withRedux(WrappedApp);