import { useState } from "react";
import styles from "./TableCost.module.css";

const TableCost = () => {
	const jsonData = [
		{
			Procedimiento: "Canalizacion",
			Costos: 350,
			Material: "Paniales",
			Costos_2: 30,
			Medicacion: "Metro",
			Costos_3: 95,
			Pruebas: "Perfilcomp",
			Costos_4: 1500,
			Abonos: "",
			Total: "",
		},
		{
			Procedimiento: "Canalizacion 2",
			Costos: 350,
			Material: "Paniales 4",
			Costos_2: 30,
			Medicacion: "Metro",
			Costos_3: 952,
			Pruebas: "Perfilcomp 5",
			Costos_4: 1500,
			Abonos: "",
			Total: "",
		},
	];

	const [tableData, setTableData] = useState(jsonData);

	const handleInputChange = (e, rowIndex, columnName) => {
		const { value } = e.target;
		setTableData((prevData) => {
			const newData = [...prevData];
			newData[rowIndex][columnName] = value;
			return newData;
		});
	};

	const handleSave = (e) => {
    e.preventDefault();
		console.log("Saving data:", tableData);
	};

	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						{Object.keys(tableData[0]).map((key, index) => (
							<th key={index}>{key}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.map((item, rowIndex) => (
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
			<button onClick={handleSave}>Save</button>
		</div>
	);
};

export default TableCost;
