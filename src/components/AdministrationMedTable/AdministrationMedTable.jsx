import Table from "../Table/Table";

import styles from "./AdministrationMedTable.module.css";

const AdministrationMedTable = ({
	tableAdminMedData,
	setTableAdminMedData,
}) => {
	const { headerData, bodyData } = tableAdminMedData;

	const handleHeaderInputChange = (e, columnIndex) => {
		const { value } = e.target;
		const newHeaderData = [...headerData];
		newHeaderData[columnIndex].headerName = value;
		setTableAdminMedData((prevData) => ({
			...prevData,
			headerData: newHeaderData,
		}));
	};

	const handleInputChange = (e, rowIndex, columnName) => {
		const { value } = e.target;
		setTableAdminMedData((prevData) => {
			const newBodyData = [...prevData.bodyData];
			newBodyData[rowIndex][columnName] = value;
			return {
				...prevData,
				bodyData: newBodyData,
			};
		});
	};

	const handleAddRow = (e) => {
		e.preventDefault();
		setTableAdminMedData((prevData) => ({
			...prevData,
			bodyData: [
				...prevData.bodyData,
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
			],
		}));
	};

	const handleDeleteRow = (e, rowIndex) => {
		e.preventDefault();
		setTableAdminMedData((prevData) => {
			const newBodyData = [...prevData.bodyData];
			newBodyData.splice(rowIndex, 1);
			return {
				...prevData,
				bodyData: newBodyData,
			};
		});
	};

	return (
		<div>
			<Table.TableContainer>
				<Table.Table>
					<Table.TableHeader>
						<Table.TableRow>
							{headerData.map((header, index) => (
								<Table.TableHeaderCell
									key={index}
									width={header.width}
								>
									{index !== 0 &&
									index !== headerData.length - 1 ? (
										<input
											type="text"
											value={header.headerName}
											onChange={(e) =>
												handleHeaderInputChange(
													e,
													index
												)
											}
										/>
									) : (
										header.headerName
									)}
								</Table.TableHeaderCell>
							))}
							<th>Delete</th>
						</Table.TableRow>
					</Table.TableHeader>
					<Table.TableBody>
						{bodyData.map((medication, rowIndex) => (
							<Table.TableRow key={rowIndex}>
								{Object.entries(medication).map(
									([key, value], columnIndex) => (
										<Table.TableDataCell key={columnIndex}>
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
										</Table.TableDataCell>
									)
								)}
								<Table.TableDataCell>
									<button
										onClick={(e) =>
											handleDeleteRow(e, rowIndex)
										}
									>
										Delete
									</button>
								</Table.TableDataCell>
							</Table.TableRow>
						))}
					</Table.TableBody>
				</Table.Table>
			</Table.TableContainer>
			<button onClick={handleAddRow}>Add New Row</button>
		</div>
	);
};

export default AdministrationMedTable;
