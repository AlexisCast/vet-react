import { useEffect, useState } from "react";

import { mockAdminMedData } from "../../mock/records";

import styles from "./AdministrationMedTable.module.css";

const AdministrationMedTable = ({
	tableAdminMedData,
	setTableAdminMedData,
}) => {
	const [headerValues, setHeaderValues] = useState([
		Object.fromEntries(Object.entries(tableAdminMedData[0])),
	]);

	const handleHeaderInputChange = (e, columnIndex) => {
		const { value } = e.target;
		setHeaderValues((prevData) => {
			const newData = [...prevData];
			newData[0][Object.keys(newData[0])[columnIndex]] = value;
			return newData;
		});

		// Update tableAdminMedData with the new header value
		setTableAdminMedData((prevData) => {
			const newData = [...prevData];
			newData[0][Object.keys(newData[0])[columnIndex]] = value;
			return newData;
		});
	};

	const handleInputChange = (e, rowIndex, columnName) => {
		const { value } = e.target;
		setTableAdminMedData((prevData) => {
			const newData = [...prevData];
			newData[rowIndex][columnName] = value;
			return newData;
		});
	};

	const handleAddRow = (e) => {
		e.preventDefault();

		setTableAdminMedData((prevData) => [
			...prevData,
			{
				Medication_Dosis: "",
				hour_1: "",
				hour_2: "",
				hour_3: "",
				hour_4: "",
				hour_5: "",
				hour_6: "",
				hour_7: "",
				hour_8: "",
				hour_9: "",
				hour_10: "",
				hour11: "",
				hour_12: "",
				hour_13: "",
				hour_14: "",
				observations: "",
			},
		]);
	};

	const handleDeleteRow = (e, rowIndex) => {
		e.preventDefault();

		setTableAdminMedData((prevData) => {
			const newData = [...prevData];
			newData.splice(rowIndex, 1);
			return newData;
		});
	};

	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						{Object.entries(headerValues[0]).map(
							([key, value], index) => (
								<th key={index}>
									{index !== 0 &&
									index !==
										Object.keys(headerValues[0]).length -
											1 ? (
										<input
											type="text"
											value={value}
											onChange={(e) =>
												handleHeaderInputChange(
													e,
													index
												)
											}
										/>
									) : (
										value
									)}
								</th>
							)
						)}
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{tableAdminMedData.map(
						(medication, rowIndex) =>
							rowIndex !== 0 && (
								<tr key={rowIndex}>
									{Object.entries(medication).map(
										([key, value], columnIndex) => (
											<td key={columnIndex}>
												<input
													type="text"
													value={value}
													onChange={(e) =>
														handleInputChange(
															e,
															rowIndex,
															key
														)
													}
												/>
											</td>
										)
									)}
									<td>
										<button
											onClick={(e) =>
												handleDeleteRow(e, rowIndex)
											}
										>
											Delete
										</button>
									</td>
								</tr>
							)
					)}
				</tbody>
			</table>
			<button onClick={handleAddRow}>Add New Row</button>
		</div>
	);
};

export default AdministrationMedTable;
