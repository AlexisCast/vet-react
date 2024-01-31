import { useParams, useRouteLoaderData } from "react-router-dom";
import PatientForm from "../../components/PatientForm/PatientForm";

const EditPatient = () => {
	const params = useParams();
	const data = useRouteLoaderData("patient-detail");
	console.log("patient-detail");
	console.log(data);

	return (
		<div>
			<h1>Edit Owner</h1>
			{/* <p>{params.patientId}</p> */}

			<PatientForm method="put" patient={data} />
		</div>
	);
};

export default EditPatient;
