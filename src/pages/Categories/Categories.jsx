import { Link, useLoaderData, json } from "react-router-dom";

// import { mockProducts } from "../mock/products";

import CategoryList from "../../components/CategoryList/CategoryList";

const client_url = import.meta.env.VITE_CLIENT_URL;

const Categories = () => {
	const data = useLoaderData();
	console.log("data");
	console.log(data);

	if (data.isError) {
		return <p>{data.msg}</p>;
	}
	const categories = data.categories;

	return (
		<div>
			<h1>Categories </h1>
			<p>
				Go to <Link to="/">HomePage</Link>
			</p>
			<div style={{ textAlign: "center" }}>
				{/* {isLoading && <p>Loading...</p>} */}
				{/* {error && <p>{error}</p>} */}
			</div>
			{/* {!isLoading && fetchedProducts && ( */}
			<CategoryList categories={categories} />
			{/* )} */}
		</div>
	);
};

export default Categories;

export const loader = async () => {
	console.log("Categories");
	const response = await fetch(`${client_url}/api/categories`);

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
