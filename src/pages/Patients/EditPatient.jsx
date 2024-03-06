import { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import PatientForm from "../../components/PatientForm/PatientForm";
import userService from "../../services/userService";

const EditPatient = () => {
	const [listOfOwners, setListOfOwners] = useState([]);
	const [listOfSpecies, setListOfSpecies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [owners, species] = await Promise.all([
					userService.getAllOwners(),
					userService.getAllSpecies(),
				]);
				setListOfOwners(owners);
				setListOfSpecies(species);
			} catch (error) {
				// Handle error
				console.error(
					"Error fetching data on EditPatient page:",
					error
				);
			}
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
			<h1>Edit Patient</h1>
			{/* <p>{params.patientId}</p> */}

			<PatientForm
				method="put"
				patient={data}
				listOfOwners={listOfOwners}
				listOfSpecies={listOfSpecies}
			/>
		</div>
	);
};

export default EditPatient;
