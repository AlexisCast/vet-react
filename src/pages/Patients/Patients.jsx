import { Link, useLoaderData, json } from "react-router-dom";
import { getAuthToken } from "../../../util/auth";
import PatientsList from "../../components/PatientsList/PatientsList";

// import { mockProducts } from "../mock/products";

const client_url = import.meta.env.VITE_CLIENT_URL;

const Patients = () => {
	const data = useLoaderData();
	console.log("data");
	console.log(data);

	if (data.isError) {
		return <p>{data.msg}</p>;
	}
	const patients = data.patients;

	return (
		<div>
			<h1>Patients </h1>
			<p>
				Go to <Link to="/">HomePage</Link>
			</p>
			<div style={{ textAlign: "center" }}>
				{/* {isLoading && <p>Loading...</p>} */}
				{/* {error && <p>{error}</p>} */}
			</div>
			{/* {!isLoading && fetchedProducts && ( */}
			<PatientsList patients={patients} />
			{/* )} */}
		</div>
	);
};

export default Patients;

export const loader = async () => {
	console.log("Patients");

	const token = getAuthToken();

	const response = await fetch(client_url + "/api/patients", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch patients..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};
