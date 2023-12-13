import { useParams, Link, json, useLoaderData } from "react-router-dom";
import ProductItem from "../components/ProductItem/ProductItem";

const ProductDetailPage = () => {
	const params = useParams();
	const data = useLoaderData();

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
