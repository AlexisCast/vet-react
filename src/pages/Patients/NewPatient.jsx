import PatientForm from "../../components/PatientForm/PatientForm";

const NewPatient = () => {
	const patient = {
		age: "",
		gender: "",
		name: "",
		note: "",
		owner: "",
		race: "",
		sterilized: "",
		user: "",
		_id: "",
		img: "",
	};

	return (
		<div>
			<h1>New Patient</h1>
			<PatientForm method="post" patient={patient} />
		</div>
	);
};

export default NewPatient;
