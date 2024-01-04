import {
	useParams,
	Link,
	json,
	useRouteLoaderData,
	redirect,
} from "react-router-dom";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { getAuthToken, isTokenExpired } from "../../../util/auth";

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

	console.log("categoryDetail loader");

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

export const action = async ({ request, params }) => {
	const id = params.categoryId;

	const token = getAuthToken();

	const response = await fetch("http://localhost:8080/api/categories/" + id, {
		method: request.method,
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		const responseData = await response.clone().json();

		if (isTokenExpired(responseData?.msg)) {
			return response;
		} else {
			throw json(
				{ msg: "Could not delete category..." },
				{
					status: 500,
				}
			);
		}
	}

	console.log("deleting category", await response.json());

	return redirect("/categories");
};
