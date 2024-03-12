import classNames from "classnames";
import styles from "./Table.module.css";

export const TableContainer = ({ children, className }) => {
	return (
		<div className={classNames(styles.table__container, className)}>
			{children}
		</div>
	);
};

export const Table = ({ children, className }) => {
	return (
		<table className={classNames(styles.table, className)}>
			{children}
		</table>
	);
};

export const TableHeader = ({ children, className }) => {
	return (
		<thead className={classNames(styles.tableHeader, className)}>
			{children}
		</thead>
	);
};

export const TableHeaderCell = ({ children, width, className }) => {
	return (
		<th
			className={classNames(styles.tableHeaderCell, className, {
				[styles.width_80]: width === 80,
				[styles.width_100]: width === 100,
				[styles.width_150]: width === 150,
				[styles.width_250]: width === 250,
				[styles.width_350]: width === 350,
			})}
		>
			{children}
		</th>
	);
};

export const TableRow = ({ children, ...props }) => {
	return <tr {...props}>{children}</tr>;
};

export const TableBody = ({ children }) => {
	return <tbody>{children}</tbody>;
};

export const TableDataCell = ({ children, ...props }) => {
	return <td {...props}>{children}</td>;
};

export default {
	TableContainer,
	Table,
	TableHeader,
	TableRow,
	TableBody,
	TableDataCell,
	TableHeaderCell,
};
