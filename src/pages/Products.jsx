import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { mockProducts } from "../mock/products";

import ProductList from "../components/ProductList/ProductList";

const Products = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchedProducts, setFetchedProducts] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		async function fetchProducts() {
			setIsLoading(true);
			const response = await fetch("http://localhost:8080/api/products");

			if (!response.ok) {
				setError("Fetching products failed.");
			} else {
				const resData = await response.json();
				console.log(await resData);
				console.log(await resData.products);
				console.table(await resData.products);

				setFetchedProducts(resData.products);
			}
			setIsLoading(false);
		}

		fetchProducts();
	}, []);

	return (
		<div>
			<h1>Products </h1>
			<p>
				Go to <Link to="/">HomePage</Link>
			</p>
			<div style={{ textAlign: "center" }}>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
			</div>
			{!isLoading && fetchedProducts && (
				<ProductList products={fetchedProducts} />
			)}
		</div>
	);
};

export default Products;
