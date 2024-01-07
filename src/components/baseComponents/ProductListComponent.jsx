import React, { memo } from 'react';
import datas from '../utilities/sampledata.json';

const ProductListComponent = (
    {
        category,
        addCartHandler,
    }
) => {
    const flipFrontCard = (cardIndex) => {
        document.getElementById(cardIndex).classList.add("flipcard")
    }
    const flipBackCard = (cardIndex) => {
        document.getElementById(cardIndex).classList.remove("flipcard")
    }
    return (
        <>
            <h4 className='w-3/4 mx-auto text-center my-5 mt-10 text-lg font-semibold'>{category.toUpperCase()}</h4>
            <hr className='w-1/3 mx-auto mb-8' />
            <div className='grid m-4 mt-10 px-4 gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                {
                    Array.isArray(datas) &&
                    datas.length !== 0 &&
                    datas.filter(data => data.category === category).map((data, index) => {
                        const {
                            id,
                            image,
                            price,
                            title,
                            description,
                            rating: {
                                rate,
                                count
                            }
                        } = data
                        return (
                            <div key={index} className='h-[450px] flex flex-col justify-between shadow-md'>
                                <div className="border rounded-md h-full">
                                    <div className='flex flex-col justify-between mx-auto p-3 h-full' id={id}>
                                        <div className='pt-5'>
                                            <img
                                                className='h-64 w-auto mx-auto'
                                                src={image}
                                                alt='trends'
                                            />
                                        </div>
                                        <div className='flex flex-col justify-center items-center mt-4'>
                                            <p className='mb-0 text-center text-sm'>{title}</p>
                                            <div className='flex justify-center items-center gap-3 mt-2 text-sm '>
                                                <p className='flex justify-content-center gap-2 items-center bg-green-600 rounded-md p-3 py-1'>
                                                    <span className="text-white rate">{rate}</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                                    </svg>

                                                </p>
                                                <p className=''>{`( ${count} )`}</p>
                                            </div>

                                        </div>
                                        <div className='mb-0 p-4 py-2 flex justify-between items-center'>
                                            <p className='mb-0 flex gap-2 items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
                                                    <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg>
                                                {price}
                                            </p>
                                            <div>
                                                <button
                                                    type='submit'
                                                    className="p-2 btn text-white bg-indigo-500 rounded-md"
                                                    onClick={() => addCartHandler(data)}>
                                                    Add Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default memo(ProductListComponent)