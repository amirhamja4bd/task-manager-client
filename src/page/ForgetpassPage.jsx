import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/masterLayout/LazyLoader';
const ForgetPassPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>

            </Suspense>
        </div>
    );
};

export default ForgetPassPage;