import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import moment from "moment-timezone";

import Table from "../Table/Table";

import userService from "../../services/userService";

import styles from "./RecordsTable.module.css";

const RecordsTable = ({ tableRecordsData }) => {
	const location = useLocation();

	const { total, records: bodyData } = tableRecordsData;
	
	//// TODO: refactor pagination is used for pagination
	const queryParams = new URLSearchParams(location.search);
	const stateValue = queryParams.get("state");

	// TODO: refactor pagination
	// State variables for pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(15);
	const numberOfPages = Math.ceil(total / itemsPerPage);

	//resets currentpage when it goes back to /records
	useEffect(() => {
		if (!location.search) {
			setCurrentPage(0);
		}
	}, [location.search]);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const deleteHandler = async (recordId) => {
		const proceed = window.confirm("Are you sure?");

		if (proceed) {
			console.log("Deleting the record", recordId);
			try {
				const response = await userService.deleteRecordById(recordId);
				console.log("Record deleted", response);
				window.location.reload();
			} catch (error) {
				console.error("Error deleting record", error);
			}
		}
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
									<button
										onClick={() => {
											deleteHandler(record._id);
										}}
									>
										Delete
									</button>
								</Table.TableDataCell>
							</Table.TableRow>
						))}
					</Table.TableBody>
				</Table.Table>
				{/* TODO: refactor pagination */}
				<div className={styles.pagination}>
					{Array.from({ length: numberOfPages }, (_, index) => (
						<Link
							className={`${styles.linkStyle} ${
								index === currentPage && styles.active
							}`}
							key={index + 1}
							to={`?limit=${itemsPerPage}&from=${
								itemsPerPage * index
							}${stateValue ? "&state=false" : ""}`}
							onClick={() => paginate(index)}
						>
							{index + 1}
						</Link>
					))}
				</div>
			</Table.TableContainer>
		</section>
	);
};

export default RecordsTable;
