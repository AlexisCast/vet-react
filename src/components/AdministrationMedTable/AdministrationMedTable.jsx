import styles from "./AdministrationMedTable.module.css";

const AdministrationMedTable = () => {
	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Medication / Dosis</th>
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
						<th>10</th>
						<th>11</th>
						<th>Observations</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Medication 2</td>
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
						<td>10:34</td>
						<td>11:34</td>
						<td>Observations 1</td>
					</tr>
					<tr>
						<td>Medication 14</td>
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
						<td>10:34</td>
						<td>11:34</td>
						<td>Observations 1</td>
					</tr>
					<tr>
						<td>Medication 7</td>
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
						<td>10:34</td>
						<td>11:34</td>
						<td>Observations 1</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default AdministrationMedTable;
