import moment from "moment-timezone";

import Table from "../Table/Table";

import { useState } from "react";

import styles from "./RecordsTable.module.css";
import { Link } from "react-router-dom";

const RecordsTable = ({ tableRecordsData }) => {
	const { total, records: bodyData } = tableRecordsData;

	// TODO: complete pagination
	// State variables for pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	return (
		<section className={styles.section}>
			<Table.TableContainer className={styles.TableContainer}>
				<p>Total: {total}</p>
				<Table.Table>
					<Table.TableHeader>
						<Table.TableRow>
							<Table.TableHeaderCell width={150}>
								Patient Name
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Specie
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Owner First Name
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Owner Last Name
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Created
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Last Updated
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={80}>
								Edit
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={80}>
								Delete
							</Table.TableHeaderCell>
						</Table.TableRow>
					</Table.TableHeader>
					<Table.TableBody>
						{bodyData.map((record, index) => (
							<Table.TableRow key={index}>
								<Table.TableDataCell>
									{record.patient.name}
								</Table.TableDataCell>
								<Table.TableDataCell>
									{record.patient.specie}
								</Table.TableDataCell>
								<Table.TableDataCell>
									{record.patient.ownerName}
								</Table.TableDataCell>
								<Table.TableDataCell>
									{record.patient.ownerLastName}
								</Table.TableDataCell>
								<Table.TableDataCell>
									{moment(record.createdAt).format(
										"DD/MM/YY HH:mm:ss"
									)}
								</Table.TableDataCell>
								<Table.TableDataCell>
									{moment(record.lastUpdatedAt).format(
										"DD/MM/YY HH:mm:ss"
									)}
								</Table.TableDataCell>
								<Table.TableDataCell>
									<Link to={`./${record._id}/edit`}>
										Edit
									</Link>
								</Table.TableDataCell>
								<Table.TableDataCell>
									<button>Delete</button>
								</Table.TableDataCell>
							</Table.TableRow>
						))}
					</Table.TableBody>
				</Table.Table>
				{/* TODO: complete pagination */}
				<div className={styles.pagination}>
					<Link
						to={`?limit=${itemsPerPage}&from=${itemsPerPage * 0}`}
						onClick={() => paginate(1)}
					>
						1
					</Link>
					<Link
						to={`?limit=${itemsPerPage}&from=${itemsPerPage * 1}`}
						onClick={() => paginate(1)}
					>
						2
					</Link>
					<Link
						to={`?limit=${itemsPerPage}&from=${itemsPerPage * 2}`}
						onClick={() => paginate(1)}
					>
						3
					</Link>
				</div>
			</Table.TableContainer>
		</section>
	);
};

export default RecordsTable;
