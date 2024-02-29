import { Link } from "react-router-dom";

import noImage from "../../assets/no-image.jpg";

import styles from "./PatientsList.module.css";

const PatientsList = ({ patients }) => {
	if (patients.length === 0) {
		return <h2>No patients</h2>;
	}

	return (
		<ul className={styles.list}>
			{patients.map((obj) => (
				<li key={obj._id} className={styles.item}>
					<Link to={`/patients/${obj._id}`}>
						{obj.img ? (
							<img src={obj.img} alt={obj.name} />
						) : (
							<img src={noImage} alt="noImage" />
						)}
						<div className={styles.content}>
							<p>Name: {obj.name}</p>
							<p>Race: {obj.race}</p>
							<p>Owner: {obj.owner.name}</p>
							{/* <p>ID: ${obj._id}</p> */}
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default PatientsList;
