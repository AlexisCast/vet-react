import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import styles from "./OwnerItem.module.css";

const OwnerItem = ({ data }) => {
	const token = useRouteLoaderData("root");

	const submit = useSubmit();

	const {
		_id,
		address,
		email,
		lastName,
		name,
		other,
		phoneNumber1,
		phoneNumber2,
	} = data;

	const startDeleteHandler = () => {
		const proceed = window.confirm("Are you sure?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	};

	return (
		<article className={styles.owner}>
			<p>ID: {_id}</p>
			<div className={styles.ownderInfo_container}>
				<p>
					<b>Name:</b> {name}
				</p>
				<p>
					<b>Last Name:</b> {lastName}
				</p>
				<p>
					<b>Email:</b> {email}
				</p>
				<p>
					<b>Address:</b> {address}
				</p>
				<p>
					<b>Other:</b> {other}
				</p>
				<p>
					<b>Phone Number 1:</b> {phoneNumber1}
				</p>
				<p>
					<b>Phone Number 2:</b> {phoneNumber2}
				</p>
			</div>
			{token && (
				<menu className={styles.actions}>
					<Link to="edit">Edit</Link>
					<button onClick={startDeleteHandler}>Delete</button>
				</menu>
			)}
		</article>
	);
};

export default OwnerItem;
