import { Link, json, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../../util/auth";
import SpeciesList from "../../components/SpeciesList/SpeciesList";

const client_url = import.meta.env.VITE_CLIENT_URL;

const Species = () => {
	const data = useLoaderData();
	console.log("data");
	console.log(data);

	if (data.isError) {
		return <p>{data.msg}</p>;
	}
	const species = data.species;

	return (
		<div>
			<h1>Species</h1>
			<p>
				Go to <Link to="/">HomePage</Link>
			</p>
			<SpeciesList species={species} />
		</div>
	);
};

export default Species;

export const loader = async () => {
	console.log("Species");

	const token = getAuthToken();

	const response = await fetch(client_url + "/api/species", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch species..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};
