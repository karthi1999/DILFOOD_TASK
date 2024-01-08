'use client'

import React, { useEffect, useState } from 'react';
import BannerComponent from './components/pageComponents/BannerComponent';
import HeaderComponent from './components/pageComponents/HeaderComponent';
import AddCart from './components/pageComponents/AddCart';
import ProductsComponent from './components/pageComponents/ProductsComponent';
import FooterComponent from './components/pageComponents/FooterComponent';
import { useDispatch, useSelector } from "react-redux";
import { getProductListAPI } from "./store";
import { AppLoader } from './components/baseComponents/AppLoader';

function App() {
	const dispatch = useDispatch();
	const { isLoading, productList } = useSelector((state) => state.productsState);
	const [loading, setLoading] = useState(true);
	const [flag, setFlag] = useState(false);
	const [items, setItems] = useState([]);
	const [datas, setDatas] = useState([]);

	useEffect(() => {
		dispatch(getProductListAPI())
	}, [])

	useEffect(() => {
		setDatas(productList)
	}, [productList])

	useEffect(() => {
		setLoading(isLoading)
	}, [isLoading])

	const clickHandler = () => {
		setFlag(!flag)
	}

	let categorys = []
	for (let product in datas) {
		Array.isArray(categorys) &&
			!categorys.some(data => data === datas[product].category) &&
			categorys.push(`${datas[`${product}`].category}`)
	}

	return (
		<div className="w-full">
			{loading
				? <AppLoader />
				:
				<>
					<HeaderComponent
						items={items}
						clickHandler={clickHandler}
					/>
					<BannerComponent />
					<ProductsComponent
						setItems={setItems}
						items={items}
						categorys={categorys}
					/>
					{
						flag &&
						<AddCart
							clickHandler={clickHandler}
							items={items}
							setItems={setItems}
						/>
					}
					<FooterComponent />
				</>
			}
		</div>
	);
}

export default App;
