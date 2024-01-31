import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import noImage from "../../assets/no-image.jpg";

import styles from "./PatientItem.module.css";

const PatientItem = ({ data }) => {
	const token = useRouteLoaderData("root");

	const submit = useSubmit();

	const { age, gender, name, note, owner, race, sterilized, user, _id, img } =
		data;

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
					<b>Gender:</b> {gender}
				</p>
				<p>
					<b>Sterilized:</b> {sterilized ? "Yes" : "No"}
				</p>
				<p>
					<b>Owners Name:</b> {owner.name}
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
