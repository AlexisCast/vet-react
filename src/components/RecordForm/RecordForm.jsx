import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";
import PatientItem from "../PatientItem/PatientItem";
import TableCost from "../TableCost/TableCost";
import AdministrationMedTable from "../AdministrationMedTable/AdministrationMedTable";
import RequiredLabel from "../RequiredLabel/RequiredLabel";

import userService from "../../services/userService";

import styles from "./RecordForm.module.css";

const RecordForm = ({
	listOfPatients,
	costData,
	adminMedData,
	patient, // patient exist => editRecord else for newRecord
	showTables = false, //if false is for New Medical record ELSE is for EdiRedord
}) => {
	const navigate = useNavigate();

	const { total: totalOfPatients, patients } = listOfPatients;

	// patient exist => editRecord else for newRecord
	const [selectPatientId, setSelectPatientId] = useState(
		patient ? patient._id : ""
	);
	const [patientData, setPatientData] = useState(patient);

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
		navigate("/records");
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
			if (!patient) {
				const response = await userService.postMedicalRecord(data);

				const createRecordId = response._id;

				console.log("Record saved successfully:", response);

				navigate(`/records/${createRecordId}/edit`);
			} else {
				const response = await userService.putRecordById(
					patientData.recordID,
					{
						costsData: data.costsData,
						adminMedData: data.adminMedData,
					}
				);
				console.log("Record updated successfully:", response);
			}
		} catch (error) {
			console.error("Error saving/updating record:", error);
		}
	};

	return (
		<form className={styles.form}>
			<div className={styles.section}>
				{!patient && (
					<>
						<RequiredLabel htmlFor="patient_id" required>
							Selected Patient:
						</RequiredLabel>
						<Dropdown
							id="patient_id"
							name="patient_id"
							text="Select a Patient"
							options={patientOptions}
							onSelect={handleSelectPatient}
							required
						/>
					</>
				)}

				{patientData && <PatientItem data={patientData} />}
			</div>

			{showTables && (
				<>
					<div>
						<h2>Costs</h2>
						<TableCost
							tableCostData={tableCostData}
							setTableCostData={setTableCostData}
						/>
					</div>

					<div>
						<h2>Administration Medication / Dosis Table</h2>
						<AdministrationMedTable
							tableAdminMedData={tableAdminMedData}
							setTableAdminMedData={setTableAdminMedData}
						/>
					</div>
				</>
			)}

			<section className={styles.section}>
				{selectPatientId && (
					<div className={styles.actions}>
						<button type="button" onClick={cancelHandler}>
							Cancel
						</button>
						<button onClick={saveHandler}>
							{!showTables ? "Create Record" : "Save"}
						</button>
					</div>
				)}
			</section>
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
