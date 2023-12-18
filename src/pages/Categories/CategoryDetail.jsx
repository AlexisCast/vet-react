import { useParams, Link, json, useRouteLoaderData } from "react-router-dom";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

const CategoryDetailPage = () => {
	const params = useParams();
	const data = useRouteLoaderData("category-detail");
	console.log("category-detail data");

	console.log(data);
	return (
		<div>
			<h1>Product Detail</h1>
			<p>{params.categoryId}</p>
			<CategoryItem category={data} />
			<p>
				<Link to=".." relative="path">
					Back
				</Link>
			</p>
		</div>
	);
};

export default CategoryDetailPage;

export const loader = async ({ request, params }) => {
	const id = params.categoryId;

	const response = await fetch("http://localhost:8080/api/categories/" + id);

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
