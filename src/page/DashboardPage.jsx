import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/masterLayout/LazyLoader';
import MasterLayout from '../components/masterLayout/MasterLayout';
const Dashboard = lazy(()=> import('../components/Dashboard/Dashboard'));

const DashboardPage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Dashboard/>
            </Suspense>
        </MasterLayout>
    );
};

export default DashboardPage;