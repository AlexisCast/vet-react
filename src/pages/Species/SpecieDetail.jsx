import { Link, json, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../../util/auth";
import SpecieItem from "../../components/SpecieItem/SpecieItem";
import PatientsList from "../../components/PatientsList/PatientsList";

const client_url = import.meta.env.VITE_CLIENT_URL;

const SpecieDetailPage = () => {
	const data = useRouteLoaderData("specie-detail");
	console.log("data");
	console.log(data);

	const { total, patients, specie } = data;

	return (
		<div>
			<SpecieItem data={specie} />
			<p>
				<Link to="/species">Species</Link>
			</p>
      {patients.length === 0 ? (
				<h2>No patients</h2>
			) : (
				<>
					<h3>Total of Patients: {total}</h3>
					<PatientsList patients={patients} />
				</>
			)}
		</div>
	);
};

export default SpecieDetailPage;

export const loader = async ({ request, params }) => {
	const id = params.specieId;

	const token = getAuthToken();

	const response = await fetch(
		client_url + "/api/species/" + id + "/patients",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"x-token": token,
			},
		}
	);

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch details for selected species..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};
