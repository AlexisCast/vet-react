import styles from "./TableCost.module.css";

const TableCost = ({ tableCostData, setTableCostData }) => {
	const handleInputChange = (e, rowIndex, columnName) => {
		const { value } = e.target;
		setTableCostData((prevData) => {
			const newData = [...prevData];
			newData[rowIndex][columnName] = value;
			return newData;
		});
	};

	const handleAddRow = (e) => {
		e.preventDefault();

		setTableCostData((prevData) => [
			...prevData,
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
		]);
	};

	const handleDeleteRow = (e, rowIndex) => {
		e.preventDefault();

		setTableCostData((prevData) => {
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
						{Object.keys(tableCostData[0]).map((key, index) => (
							<th key={index}>{key}</th>
						))}
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{tableCostData.map((item, rowIndex) => (
						<tr key={rowIndex}>
							{Object.entries(item).map(
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
					))}
				</tbody>
			</table>
			<button onClick={handleAddRow}>Add New Row</button>
		</div>
	);
};

export default TableCost;
