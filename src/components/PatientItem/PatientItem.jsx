import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import noImage from "../../assets/no-image.jpg";

import styles from "./PatientItem.module.css";

const PatientItem = ({ data }) => {
	const token = useRouteLoaderData("root");

	const submit = useSubmit();

	const {
		_id,
		age,
		gender,
		lastName,
		img,
		name,
		note,
		owner,
		race,
		sterilized,
		user,
		weight,
	} = data;

	const startDeleteHandler = () => {
		const proceed = window.confirm("Are you sure?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	};

	return (
		<article className={styles.data}>
			{data.img ? (
				<img src={data.img} alt={data.name} />
			) : (
				<img src={noImage} alt="noImage" />
			)}
			<div className={styles.ownderInfo_container}>
				<p>
					<b>Name:</b> {name}
				</p>
				<p>
					<b>Race:</b> {race}
				</p>
				<p>
					<b>Age:</b> {age}
				</p>
				<p>
					<b>Weight:</b> {weight}
				</p>
				<p>
					<b>Gender:</b> {gender}
				</p>
				<p>
					<b>Sterilized:</b> {sterilized ? "Yes" : "No"}
				</p>
				<p>
					<b>Note:</b> {note}
				</p>
				<p>
					<b>Owners Name:</b>{" "}
					<Link
						to={`/owners/${owner._id}`}
						className={styles.ownerName}
					>
						{owner.name + " " + owner.lastName}
					</Link>
				</p>
				<p>
					<b>Phone Number 1:</b> {owner.phoneNumber1}
				</p>
			</div>
			{/* <p>Available: {data.available ? "YES" : "NO"}</p> */}
			{token && (
				<menu className={styles.actions}>
					<Link to="edit">Edit</Link>
					<button onClick={startDeleteHandler}>Delete</button>
				</menu>
			)}
		</article>
	);
};

export default PatientItem;
