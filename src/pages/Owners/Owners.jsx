import { Link, useLoaderData, json } from "react-router-dom";
import { getAuthToken } from "../../../util/auth";
import OwnersList from "../../components/OwnersList/OwnersList";

// import { mockProducts } from "../mock/products";

const client_url = import.meta.env.VITE_CLIENT_URL;

const Owners = () => {
	const data = useLoaderData();
	console.log("data");
	console.log(data);

	if (data.isError) {
		return <p>{data.msg}</p>;
	}
	const owners = data.owners;

	return (
		<div>
			<h1>Owners </h1>
			<p>
				Go to <Link to="/">HomePage</Link>
			</p>
			<div style={{ textAlign: "center" }}>
				{/* {isLoading && <p>Loading...</p>} */}
				{/* {error && <p>{error}</p>} */}
			</div>
			{/* {!isLoading && fetchedProducts && ( */}
			<OwnersList owners={owners} />
			{/* )} */}
		</div>
	);
};

export default Owners;

export const loader = async () => {
	console.log("Owners");

	const token = getAuthToken();

	const response = await fetch(client_url + "/api/owners", {
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
