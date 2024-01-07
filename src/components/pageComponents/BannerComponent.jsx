import React, { memo } from 'react';

const BannerComponent = () => {
    return (
        <div className='w-full h-80 md:h-96 lg:h-screen flex align-items-center relative  bg-gray-50 overflow-hidden'>
            <div className='w-2/12 lg:w-1/3 h-full bg-red-500'></div>
            <div className='md:absolute lg:left-4 flex h-full justify-center items-center w-full'>
                <div className='hidden lg:block p-6 md:letter-spacing-3 lg:pt-10 lg:letter-spacing-4 px-6 rounded-md text-center bg-white'>
                    <img
                        className='w-[250px] h-[400px]'
                        src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                        alt="jewelery"
                    />
                </div>
                <div className='p-6 md:letter-spacing-3 lg:pt-10 lg:letter-spacing-4 text-gray-600 lg:w-1/2'>
                    <p className='mb-0 text-sm md:pt-3 md:text-lg'>Shop is fun</p>
                    <h1 className='mb-0 text-2xl font-semibold md:text-4xl pt-4 md:letter-spacing-4 text-black'>Trending Fashion World</h1>
                    <p className='mb-0 text-sm md:pt-3 md:text-lg pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quos nemo tenetur reiciendis nulla sunt cupiditate iste.</p>
                    <button type='submit' className='bg-indigo-500 text-white p-4 py-2 rounded-lg mt-4 text-sm md:text-lg'>Show more</button>
                </div>
            </div>
        </div>
    )
}

export default memo(BannerComponent)