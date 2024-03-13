import { useEffect, useState } from "react";

import userService from "../../services/userService";
import RecordsTable from "../../components/RecordsTable/RecordsTable";

import { mockRecordsData } from "../../mock/records";
import { useLocation } from "react-router-dom";

const Records = () => {
	const [records, setRecords] = useState([]);

	const location = useLocation();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await userService.getAllRecords(
					location.search
				);
				console.log(response);
				setRecords(response);
			} catch (error) {
				// Handle error
				console.error(
					"Error fetching data on EditPatient page:",
					error
				);
			}
		};
		
		fetchData();
	}, [location.search]);

	if (records.length === 0) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Medical Records</h1>
			<RecordsTable tableRecordsData={records} />
		</div>
	);
};

export default Records;
