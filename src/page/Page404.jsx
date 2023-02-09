import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Page404NotFound = lazy(()=> import('../components/NotFound/NotFound'));


const Page404 = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>
                <Page404NotFound/>
            </Suspense>
        </div>
    );
};

export default Page404;