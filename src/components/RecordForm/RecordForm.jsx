import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";
import PatientItem from "../PatientItem/PatientItem";
import TableCost from "../TableCost/TableCost";
import AdministrationMedTable from "../AdministrationMedTable/AdministrationMedTable";

import userService from "../../services/userService";

import styles from "./RecordForm.module.css";

const RecordForm = ({ method, listOfPatients, costData, adminMedData }) => {
	const navigate = useNavigate();

	const { total: totalOfPatients, patients } = listOfPatients;

	const [selectPatientId, setSelectPatientId] = useState("");
	const [patientData, setPatientData] = useState(null);

	const [tableCostData, setTableCostData] = useState(costData);
	const [tableAdminMedData, setTableAdminMedData] = useState(adminMedData);

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

	function cancelHandler() {
		navigate("..");
	}

	const saveHandler = async (e) => {
		e.preventDefault();

		console.log("Saving data:");

		const data = {
			patient: selectPatientId,
			costsData: tableCostData,
			adminMedData: tableAdminMedData,
		};

		console.log("data", data);

		try {
			const response = await userService.postMedicalRecord(data);
			console.log("Record saved successfully:", response);
		} catch (error) {
			console.error("Error saving record:", error);
		}
	};

	return (
		<form className={styles.form}>
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
				<button type="button" onClick={cancelHandler}>
					Cancel
				</button>
				<button onClick={saveHandler}>Save</button>
			</div>

			<TableCost
				tableCostData={tableCostData}
				setTableCostData={setTableCostData}
			/>

			<h1>_</h1>

			<AdministrationMedTable
				tableAdminMedData={tableAdminMedData}
				setTableAdminMedData={setTableAdminMedData}
			/>
		</form>
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
