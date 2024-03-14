import Table, { TableHeaderCell } from "../Table/Table";

import styles from "./TableCost.module.css";

const TableCost = ({ tableCostData, setTableCostData }) => {
	const { headerData, bodyData } = tableCostData;
	const handleInputChange = (e, rowIndex, columnName) => {
		const { value } = e.target;
		setTableCostData((prevData) => {
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
		setTableCostData((prevData) => ({
			...prevData,
			bodyData: [
				...prevData.bodyData,
				{
					Procedimiento: "",
					Costos: "",
					Material: "",
					Costos_2: "",
					Medicacion: "",
					Costos_3: "",
					Pruebas: "",
					Costos_4: "",
					Abonos: "",
					Total: "",
				},
			],
		}));
	};

	const handleDeleteRow = (e, rowIndex) => {
		e.preventDefault();
		setTableCostData((prevData) => {
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
			<Table.TableContainer className={styles.TableContainer}>
				<Table.Table>
					<Table.TableHeader>
						<Table.TableRow>
							{headerData.map((header, index) => (
								<TableHeaderCell
									key={index}
									width={header.width}
								>
									{header.headerName}
								</TableHeaderCell>
							))}
							<TableHeaderCell>Delete</TableHeaderCell>
						</Table.TableRow>
					</Table.TableHeader>
					<Table.TableBody>
						{bodyData.map((item, rowIndex) => (
							<Table.TableRow key={rowIndex}>
								{Object.entries(item).map(
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

export default TableCost;
