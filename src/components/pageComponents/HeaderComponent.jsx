import React, { memo } from 'react'

const HeaderComponent = ({
    items,
    clickHandler
}) => {
    return (
        <header className="z-10 shadow-md sticky top-0 bg-white w-100 flex justify-between align-items-center px-4 py-4">
            <div>
                <h3 className='mb-0 flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#384aeb" className="w-6 h-6">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    <span>Shoping</span>
                </h3>
            </div>
            <div className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6" onClick={() => clickHandler()}>
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                </svg>
                {
                    Array.isArray(items) &&
                    items.length !== 0 &&
                    <div className='-top-3 -right-3 bg-red-500 p-0.5 px-1.5 text-xs rounded-full absolute flex justify-center align-items-center font-bold text-white'>
                        <span>
                            {
                                items.length <= 10 ? items.length : items.length > 10 ? "10+" : "1"
                            }
                        </span>
                    </div>
                }
            </div>
        </header>
    )
}

export default memo(HeaderComponent)