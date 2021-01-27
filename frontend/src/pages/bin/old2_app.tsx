import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../../store/old-configureStore';


const MyApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);
export default wrapper.withRedux(MyApp);

