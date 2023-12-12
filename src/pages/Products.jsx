import { Link, useLoaderData, json } from "react-router-dom";

// import { mockProducts } from "../mock/products";

import ProductList from "../components/ProductList/ProductList";

const Products = () => {
	const data = useLoaderData();

	if (data.isError) {
		return <p>{data.msg}</p>;
	}
	const products = data.products;

	return (
		<div>
			<h1>Products </h1>
			<p>
				Go to <Link to="/">HomePage</Link>
			</p>
			<div style={{ textAlign: "center" }}>
				{/* {isLoading && <p>Loading...</p>} */}
				{/* {error && <p>{error}</p>} */}
			</div>
			{/* {!isLoading && fetchedProducts && ( */}
			<ProductList products={products} />
			{/* )} */}
		</div>
	);
};

export default Products;

export const loader = async () => {
	const response = await fetch("http://localhost:8080/api/products");

	if (!response.ok) {
		// OPTION 1: return { isError: true, msg: "Could not fetch products..." };
		/* OPTION 2: throw new Response(
			JSON.stringify({ msg: "Could not fetch products..." }),
			{
				status: 500,
			}
		); */
		throw json(
			{ msg: "Could not fetch products..." },
			{
				status: 500,
			}
		);
	} else {
		// const resData = await response.json();
		// console.log(await resData);
		// console.log(await resData.products);
		// console.table(await resData.products);

		// return resData.products;

		return response;
	}
};
