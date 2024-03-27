import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Table from "../Table/Table";

import userService from "../../services/userService";

import styles from "./OwnersTable.module.css";

const OwnersTable = ({ tableRecordsData }) => {
	const location = useLocation();

	const { total, owners: bodyData } = tableRecordsData;

	// TODO: refactor pagination
	// State variables for pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(15);
	const numberOfPages = Math.ceil(total / itemsPerPage);

	//resets currentpage when it goes back to /owners
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
				const response = await userService.deleteOwnerById(recordId);
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
								Owner First Name
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								Owner Last Name
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								phoneNumber 1
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={150}>
								phoneNumber 2
							</Table.TableHeaderCell>
							<Table.TableHeaderCell width={80}>
								Open
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
									{record.name}
								</Table.TableDataCell>
								<Table.TableDataCell>
									{record.lastName}
								</Table.TableDataCell>
								<Table.TableDataCell>
									{record.phoneNumber1}
								</Table.TableDataCell>
								<Table.TableDataCell>
									{record.phoneNumber2}
								</Table.TableDataCell>
								<Table.TableDataCell>
									<Link to={`/owners/${record._id}`}>
										Open
									</Link>
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
							}`}
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

export default OwnersTable;
