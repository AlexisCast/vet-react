import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import styles from "./SpecieItem.module.css";

const SpecieItem = ({ data }) => {
	const token = useRouteLoaderData("root");

	const submit = useSubmit();

	const { _id, name } = data;

	const startDeleteHandler = () => {
		const proceed = window.confirm("Are you sure?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	};

	return (
		<article className={styles.owner}>
			{/* <p>ID: {_id}</p> */}
			<div className={styles.ownderInfo_container}>
				<h1>{name}</h1>
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

export default SpecieItem;
