import React from 'react';
import {NextPage} from 'next';
import Link from 'next/link';
import {useSelector, useDispatch} from 'react-redux';
import { wrapper } from '../store/store';
// import { State } from '../store/bin/reducer';
import { AppState, Product } from '../store/types';
import { productFetchRequest, productFetchRequestSuccess } from '../store/actions';


export const getStaticProps = wrapper.getStaticProps(async ({store, previewData}) => {
    // console.log('2. Page.getStaticProps uses the store to dispatch things');

    const prodSecond: Product[] = [{
        _id: '2',
        name: 'iPhone 11 Pro 256GB Memory',
        image: '/images/phone.jpg',
        description:
          'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
        brand: 'Apple',
        category: 'Electronics',
        price: 599.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
    }];

    // store.dispatch(productFetchRequest());
    // store.dispatch( productFetchRequestSuccess(prodSecond) );
    // store.dispatch({type: 'PAGE', payload: 'was set in other page ' + JSON.stringify({previewData})});
});

const OtherPage: NextPage<AppState> = () => {
    const { products } = useSelector<AppState, AppState>(state => state);
    const dispatch = useDispatch();
    

    // dispatch(productFetchRequest());
    // const newProduct = () => dispatch( productFetchRequestSuccess(prodSecond) );

    return (
        <div className="other">
            <p>Using Next.js default prop in a wrapped component.</p>
            <pre>{JSON.stringify({ products }, null, 2)}</pre>
            <nav>
                {/* <button onClick={newProduct}>Get New Products</button> */}
                <Link href="/">
                    <a>Navigate to index</a>
                </Link>
                <Link href="/other2">
                    <a>Navigate to other 2</a>
                </Link>
            </nav>
        </div>
    );
};

export default OtherPage;