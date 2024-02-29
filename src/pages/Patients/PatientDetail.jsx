import {
	useParams,
	Link,
	json,
	useRouteLoaderData,
	redirect,
} from "react-router-dom";
import PatientItem from "../../components/PatientItem/PatientItem";
import { getAuthToken, isTokenExpired } from "../../../util/auth";

const client_url = import.meta.env.VITE_CLIENT_URL;

const PatientDetailPage = () => {
	const params = useParams();
	const data = useRouteLoaderData("patient-detail");
	console.log("patient-detail data");

	console.log(data);
	return (
		<div>
			<h1>Patient Detail</h1>
			{/* <p>{params.ownerId}</p> */}
			<PatientItem data={data} />
			<p>
				<Link to="/patients">Patients</Link>
			</p>
		</div>
	);
};

export default PatientDetailPage;

export const loader = async ({ request, params }) => {
	const id = params.patientId;

	console.log("patientDetail loader", id);

	const token = getAuthToken();

	const response = await fetch(client_url + "/api/patients/" + id, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-token": token,
		},
	});

	if (!response.ok) {
		throw json(
			{ msg: "Could not fetch details for selected patient..." },
			{
				status: 500,
			}
		);
	} else {
		return response;
	}
};

export const action = async ({ request, params }) => {
	const id = params.patientId;

	const token = getAuthToken();

	const response = await fetch(client_url + "/api/patients/" + id, {
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
				{ msg: "Could not delete patient..." },
				{
					status: 500,
				}
			);
		}
	}

	console.log("deleting patient", await response.json());

	return redirect("/patients");
};
