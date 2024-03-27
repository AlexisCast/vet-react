import { Link, useLoaderData, json } from "react-router-dom";

import OwnersList from "../../components/OwnersList/OwnersList";
import OwnersTable from "../../components/OwnersTable/OwnersTable";

import { getAuthToken } from "../../../util/auth";

const client_url = import.meta.env.VITE_CLIENT_URL;

const Owners = () => {
	const data = useLoaderData();
	console.log("data");
	console.log(data);

	if (data.isError) {
		return <p>{data.msg}</p>;
	}

	return (
		<div>
			<h1>Owners </h1>
			<OwnersTable tableRecordsData={data} />
			{/* <OwnersList owners={data.owners} /> */}
		</div>
	);
};

export default Owners;

export const loader = async ({ request, params }) => {
	console.log("Owners");

	const url = new URL(request.url);
	const queryParams = url.searchParams;
	const limit = queryParams.get("limit");
	const from = queryParams.get("from");
	let ownersPagedPath = "";

	const token = getAuthToken();

	if (limit) {
		ownersPagedPath = `?limit=${limit}&from=${from}`;
	}

	const response = await fetch(client_url + "/api/owners" + ownersPagedPath, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch owners..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};
