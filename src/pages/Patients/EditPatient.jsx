import { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import PatientForm from "../../components/PatientForm/PatientForm";
import userService from "../../services/userService";

const EditPatient = () => {
	const [listOfOwners, setListOfOwners] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const owners = await userService.getAllOwners();
			setListOfOwners(owners);
		};
		fetchData();
	}, []);

	const params = useParams();
	const data = useRouteLoaderData("patient-detail");
	console.log("patient-detail");
	console.log(data);

	if (listOfOwners.length === 0) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}
	return (
		<div>
			<h1>Edit Owner</h1>
			{/* <p>{params.patientId}</p> */}

			<PatientForm
				method="put"
				patient={data}
				listOfOwners={listOfOwners}
			/>
		</div>
	);
};

export default EditPatient;
