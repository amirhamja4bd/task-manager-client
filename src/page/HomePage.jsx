import React, { Suspense } from 'react';
import LazyLoader from '../components/masterLayout/LazyLoader';
const HomePage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader/>}>

            </Suspense>
        </div>
    );
};

export default HomePage;