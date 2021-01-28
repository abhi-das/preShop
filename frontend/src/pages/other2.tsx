import React from 'react';
import {NextPage} from 'next';
import Link from 'next/link';
import {useSelector, useDispatch} from 'react-redux';
import { wrapper } from '../store/store';
// import { State } from '../store/bin/reducer';
import { AppState } from '../store/types';

export const getStaticProps = wrapper.getStaticProps(async ({store, previewData}) => {
    console.log('2. Page.getStaticProps uses the store to dispatch things');
    // store.dispatch({type: 'PAGE', payload: 'was set in other (SECOND) page ' + JSON.stringify({previewData})});
});

const OtherPage: NextPage<AppState> = () => {
    const { products } = useSelector<AppState, AppState>(state => state);
    // const dispatch = useDispatch();
    // const bump = () => dispatch({type: 'BUMP'});
    return (
        <div className="other">
            <p>Using Next.js default prop in a wrapped component.</p>
            <pre>{JSON.stringify({ products }, null, 2)}</pre>
            <nav>
                {/* <button onClick={bump}>bump</button> */}
                <Link href="/">
                    <a>Navigate to index</a>
                </Link>
                <Link href="/other">
                    <a>Navigate to other</a>
                </Link>
            </nav>
        </div>
    );
};

export default OtherPage;