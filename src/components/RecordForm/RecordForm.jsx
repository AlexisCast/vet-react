import { useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import styles from "./RecordForm.module.css";

import Dropdown from "../Dropdown/Dropdown";
import PatientItem from "../PatientItem/PatientItem";

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
			<table className={styles.patientTable}>
				<thead>
					<tr>
						<th>Procedimineto</th>
						<th>Costos</th>
						<th>Material</th>
						<th>Costos</th>
						<th>Medicacion</th>
						<th>Costos</th>
						<th>Pruebas</th>
						<th>Costos</th>
						<th>Abonos</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Canalizacion</td>
						<td>350</td>
						<td></td>
						<td></td>
						<td>Metro</td>
						<td>95</td>
						<td>Perfilcomp</td>
						<td>1500</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>

			<h1>_</h1>

			<table className={styles.patientTable}>
				<thead>
					<tr>
						<th rowSpan="2">Medication / Dosis</th>
						<th colSpan="12">Administration</th>
						<th rowSpan="2">Observations</th>
					</tr>
					<tr>
						<th>10</th>
						<th>11</th>
						<th>12</th>
						<th>1</th>
						<th>2</th>
						<th>3</th>
						<th>4</th>
						<th>5</th>
						<th>6</th>
						<th>7</th>
						<th>8</th>
						<th>9</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowSpan="2">Medication 1</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td rowSpan="2">Observations 1</td>
					</tr>
					<tr>
						<td>10:23</td>
						<td></td>
						<td></td>
						<td>1:23</td>
						<td>2:23</td>
						<td></td>
						<td></td>
						<td>5:23</td>
						<td>6:23</td>
						<td></td>
						<td></td>
						<td>9:34</td>
					</tr>
					<tr>
						<td rowSpan="2">Medication 2</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td rowSpan="2">Observations 2</td>
					</tr>
					<tr>
						<td>10:23</td>
						<td></td>
						<td></td>
						<td>1:23</td>
						<td>2:23</td>
						<td></td>
						<td></td>
						<td>5:23</td>
						<td>6:23</td>
						<td></td>
						<td></td>
						<td>9:34</td>
					</tr>
					<tr>
						<td rowSpan="2">Medication 3</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td>yes</td>
						<td>no</td>
						<td>no</td>
						<td>yes</td>
						<td rowSpan="2">Observations 3</td>
					</tr>
					<tr>
						<td>10:23</td>
						<td></td>
						<td></td>
						<td>1:23</td>
						<td>2:23</td>
						<td></td>
						<td></td>
						<td>5:23</td>
						<td>6:23</td>
						<td></td>
						<td></td>
						<td>9:34</td>
					</tr>
				</tbody>
			</table>
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
