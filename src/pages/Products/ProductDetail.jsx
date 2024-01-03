import {
	useParams,
	Link,
	json,
	useRouteLoaderData,
	redirect,
} from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";

import { getAuthToken, isTokenExpired } from "../../../util/auth";

const ProductDetailPage = () => {
	const params = useParams();
	const data = useRouteLoaderData("product-detail");

	console.log(data);
	return (
		<div>
			<h1>Product Detail</h1>
			<p>{params.productId}</p>
			<ProductItem product={data} />
			<p>
				<Link to=".." relative="path">
					Back
				</Link>
			</p>
		</div>
	);
};

export default ProductDetailPage;

export const loader = async ({ request, params }) => {
	const id = params.productId;
	const response = await fetch("http://localhost:8080/api/products/" + id);

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch details for selected product..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};

export const action = async ({ request, params }) => {
	const id = params.productId;

	const token = getAuthToken();

	const response = await fetch("http://localhost:8080/api/products/" + id, {
		method: request.method,
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		const responseData = await response.clone().json();

		isTokenExpired(responseData?.msg);
		return response;
		// throw json(
		// 	{ msg: "Could not delete product..." },
		// 	{
		// 		status: 500,
		// 	}
		// );
	}

	console.log("deleting product", await response.json());

	return redirect("/products");
};
