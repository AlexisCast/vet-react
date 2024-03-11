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

	const handleAddRow = () => {
		setTableCostData((prevData) => [
			...prevData,
			{
				Procedimiento: "",
				Costos: null,
				Material: "",
				Costos_2: null,
				Medicacion: "",
				Costos_3: null,
				Pruebas: "",
				Costos_4: null,
				Abonos: null,
				Total: null,
			},
		]);
	};

	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						{Object.keys(tableCostData[0]).map((key, index) => (
							<th key={index}>{key}</th>
						))}
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
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={handleAddRow}>Add New Row</button>
		</div>
	);
};

export default TableCost;
