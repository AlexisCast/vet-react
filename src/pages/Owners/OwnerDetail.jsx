import {
	useParams,
	Link,
	json,
	useRouteLoaderData,
	redirect,
} from "react-router-dom";
import OwnerItem from "../../components/OwnerItem/OwnerItem";
import { getAuthToken, isTokenExpired } from "../../../util/auth";

const client_url = import.meta.env.VITE_CLIENT_URL;

const OwnerDetailPage = () => {
	const params = useParams();
	const data = useRouteLoaderData("owner-detail");
	console.log("owner-detail data");

	console.log(data);
	return (
		<div>
			<h1>Owner Detail</h1>
			{/* <p>{params.ownerId}</p> */}
			<OwnerItem data={data} />
			<p>
				<Link to=".." relative="path">
					Back
				</Link>
			</p>
		</div>
	);
};

export default OwnerDetailPage;

export const loader = async ({ request, params }) => {
	const id = params.ownerId;

	console.log("ownerDetail loader");

	const token = getAuthToken();

	const response = await fetch(client_url + "/api/owners/" + id, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch details for selected owner..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};

export const action = async ({ request, params }) => {
	const id = params.ownerId;

	const token = getAuthToken();

	const response = await fetch(client_url + "/api/owners/" + id, {
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
				{ msg: "Could not delete owner..." },
				{
					status: 500,
				}
			);
		}
	}

	console.log("deleting owner", await response.json());

	return redirect("/owners");
};
