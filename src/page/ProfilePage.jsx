import React, { lazy, Suspense } from 'react';
import LazyLoader from '../components/masterLayout/LazyLoader';
import MasterLayout from '../components/masterLayout/MasterLayout';
const Profile = lazy(()=> import('../components/Profile/Profile'));

const ProfilePage = () => {
    return (
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Profile/>
            </Suspense>
        </MasterLayout>
    );
};

export default ProfilePage;