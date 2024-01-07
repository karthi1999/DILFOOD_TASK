import React, { memo } from 'react';
import ProductListComponent from '../baseComponents/ProductListComponent';

const ProductsComponent = (
	{
		items,
		setItems,
		categorys,
	}
) => {
	const addCartHandler = (data) => {
		const selectedData = { ...data }
		selectedData['productCount'] = 1
		Array.isArray(items) &&
			!items.some((obj) => obj.id === data.id) &&
			setItems([...items, selectedData])
	}

	return (
		<>
			<h4 className='w-3/4 mx-auto text-center mt-16 my-8 text-2xl font-semibold'>TRENDING PRODUCTS</h4>
			<hr className='w-3/4 mx-auto' />
			{
				Array.isArray(categorys) &&
				categorys.length !== 0 &&
				categorys.map((category, index) => {
					return (
						<ProductListComponent
							key={index}
							category={category}
							addCartHandler={addCartHandler}
						/>
					)
				})
			}
		</>
	)
}

export default memo(ProductsComponent);