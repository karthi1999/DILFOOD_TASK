import React, { memo } from 'react'

const AddCart = (
	{
		clickHandler,
		items,
		setItems,
	}
) => {
	const incrementHandler = (itemId) => {
		const cloneCartItem = [...items]
		let index = cloneCartItem.findIndex((data) => data.id === itemId)
		cloneCartItem[index]['productCount'] = items[index]['productCount'] + 1
		setItems([...cloneCartItem])
	}
	const decrementHandler = (itemId) => {
		const cloneCartItem = [...items]
		let index = cloneCartItem.findIndex((data) => data.id === itemId)
		cloneCartItem[index]['productCount'] = items[index]['productCount'] > 1 ? items[index]['productCount'] - 1 : 1
		setItems([...cloneCartItem])
	}
	const trashHandler = (itemId) => {
		const cloneCartItem = [...items]
		let index = cloneCartItem.findIndex((data) => data.id === itemId)
		cloneCartItem.splice(index, 1)
		setItems([...cloneCartItem])
	}
	const total = () => {
		let totalprice = 0;
		Array.isArray(items) &&
			items.length &&
			items.map((data) => {
				return (
					totalprice = totalprice + (data.price * data.productCount)
				)
			})
		return totalprice.toFixed(2)
	}

	return (
		<div className='fixed w-1/3 bg-gray-100 top-16 right-0 p-2 -mt-2 h-full'>
			<div onClick={() => clickHandler()}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</div>

			<i className="fa-solid fa-xmark p-4 text-end w-100 pb-2"></i>
			<p className='w-3/4 mx-auto text-center'>Your Cart</p>
			<hr className='w-3/4 mx-auto' />
			<div className='h-3/4 overflow-y-auto flex flex-col items-center mb-2'>
				{
					Array.isArray(items) &&
						items.length !== 0 ?
						items.map((item, index) => {
							const {
								id,
								image,
								title,
								price,
								productCount
							} = item
							return (
								<div className='p-3 my-3 w-3/4 border text-sm bg-white flex flex-col justify-center items-center' key={index}>
									<div className='text-center mb-2'>
										<img src={image} alt='trends' className='h-36 w-auto ' />
									</div>
									<p className='mb-2 text-center'>{title}</p>
									<div className=' mb-2 flex justify-center items-center'>
										<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-8 h-8 flex justify-center items-center font-bold p-1 sm:p-2 bg-green-600 rounded-full" onClick={() => incrementHandler(id)}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
										</svg>

										<span className='px-3'>
											<input
												type='text'
												className='border text-center p-1.5 rounded-md w-14'
												value={productCount ? productCount : 0}
												readOnly
											/>
										</span>
										<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-8 h-8 flex justify-center items-center font-bold p-1 sm:p-2 bg-red-600 rounded-full" onClick={() => decrementHandler(id)}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
										</svg>

									</div>
									<div className='mb-0 flex justify-between items-center w-full px-3'>
										<p className='mb-0 flex gap-2 items-center'>
											<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
												<path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
											</svg>
											{price}
										</p>
										<div className='text-red-600 text-end'>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6" onClick={() => trashHandler(id)}>
												<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
											</svg>

										</div>
									</div>
								</div>
							)
						}) :
						<div className='pt-3'>Your cart is empty!</div>
				}
			</div>
			<hr className='w-11/12 mx-auto' />
			<div className='w-11/12 mx-auto pt-3'>
				<p>Total<span className='float-end flex items-center gap-2'>
					<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
						<path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
					</svg>{total()}</span></p>
			</div>
		</div>
	)
}

export default memo(AddCart)