import classNames from "classnames";
import styles from "./Table.module.css";

export const TableContainer = ({ children, className, ...props }) => {
	return (
		<div
			className={classNames(styles.table__container, className)}
			{...props}
		>
			{children}
		</div>
	);
};

export const Table = ({ children, className, ...props }) => {
	return (
		<table className={classNames(styles.table, className)} {...props}>
			{children}
		</table>
	);
};

export const TableHeader = ({ children, className, ...props }) => {
	return (
		<thead className={classNames(styles.tableHeader, className)} {...props}>
			{children}
		</thead>
	);
};

export const TableHeaderCell = ({ children, width, className, ...props }) => {
	return (
		<th
			className={classNames(styles.tableHeaderCell, className, {
				[styles.TableHeaderCell__width_80]: width === 80,
				[styles.TableHeaderCell__width_100]: width === 100,
				[styles.TableHeaderCell__width_150]: width === 150,
				[styles.TableHeaderCell__width_250]: width === 250,
				[styles.TableHeaderCell__width_350]: width === 350,
			})}
			{...props}
		>
			{children}
		</th>
	);
};

export const TableBody = ({ children, className, ...props }) => {
	return (
		<tbody className={classNames(styles.tableBody, className)} {...props}>
			{children}
		</tbody>
	);
};

export const TableRow = ({ children, className, ...props }) => {
	return (
		<tr className={classNames(styles.tableRow, className)} {...props}>
			{children}
		</tr>
	);
};

export const TableDataCell = ({ children, className, ...props }) => {
	return (
		<td className={classNames(styles.tableDataCell, className)} {...props}>
			{children}
		</td>
	);
};

export default {
	Table,
	TableBody,
	TableContainer,
	TableDataCell,
	TableHeader,
	TableHeaderCell,
	TableRow,
};
