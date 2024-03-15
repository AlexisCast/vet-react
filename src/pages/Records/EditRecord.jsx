import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RecordForm from "../../components/RecordForm/RecordForm";

import userService from "../../services/userService";

const EditRecord = () => {
	const { recordId } = useParams(); // Extract recordId from URL
	const [recordData, setRecordData] = useState([]);

	const listOfPatients = {
		total: 0,
		patients: [],
	};

	useEffect(() => {
		console.log("Record ID:", recordId); // Print out recordId
		const fetchData = async () => {
			try {
				const response = await userService.getRecordById(recordId);
				console.log(response);
				setRecordData(response);
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

	if (recordData.length === 0) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Medical Record</h1>
			<RecordForm
				listOfPatients={listOfPatients}
				costData={recordData.costsData[0]}
				adminMedData={recordData.adminMedData[0]}
				patient={{
					...recordData.patient,
					recordID: recordData._id,
				}}
				showTables={true}
			/>
		</div>
	);
};
export default EditRecord;
