import { useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";
import PatientItem from "../PatientItem/PatientItem";
import TableCost from "../TableCost/TableCost";
import AdministrationMedTable from "../AdministrationMedTable/AdministrationMedTable";

import styles from "./RecordForm.module.css";

const RecordForm = ({ method, listOfPatients }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	const { total: totalOfPatients, patients } = listOfPatients;

	const [selectPatientId, setSelectPatientId] = useState("");
	const [patientData, setPatientData] = useState(null);

	const patientOptions = patients.map((item) => ({
		id: item._id,
		option: `${item.name} ${item.owner.lastName}`,
	}));

	const handleSelectPatient = (option) => {
		const filteredPatientData = patients.filter(
			(item) => item._id == option
		);

		if (filteredPatientData.length == 0) {
			setSelectPatientId(null);
			setPatientData(null);
		} else {
			setPatientData(filteredPatientData[0]);
			setSelectPatientId(filteredPatientData[0]._id);
		}
	};

	return (
		<Form
			method={method}
			className={styles.form}
			encType="multipart/form-data"
		>
			<>
				<label>Selected Patient:</label>
				<span>{selectPatientId}</span>
				<Dropdown
					id="patient_id"
					name="patient_id"
					text="Select a Patient"
					options={patientOptions}
					onSelect={handleSelectPatient}
				/>
			</>
			{patientData && <PatientItem data={patientData} />}
			<div className={styles.actions}>
				<button disabled={isSubmitting}>
					{isSubmitting ? "... Submitting" : "Save"}
				</button>
			</div>
			<TableCost />

			<h1>_</h1>

			{/* TO DO: */}
			<AdministrationMedTable />
		</Form>
	);
};

export default RecordForm;

export const action = async ({ request, params }) => {
	const method = request.method;

	const data = await request.formData();

	const eventData = {
		patient: data.get("patient_id"),
	};

	console.log("eventData");
	console.log(eventData);

	return null;
};
