import React from 'react';
import image from '../../assets/image/404.svg'

const NotFound = () => {
    return (
        <div className='mt-5 pt-5'>
            <img className='w-25 mx-auto d-block mt-5 pt-5' src={image} alt=""/>
        </div>
    );
};

export default NotFound;