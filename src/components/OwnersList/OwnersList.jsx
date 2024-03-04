import { Link } from "react-router-dom";

import styles from "./OwnersList.module.css";

const OwnersList = ({ owners }) => {
	return (
		<ul className={styles.list}>
			{owners.map((obj) => (
				<li key={obj._id} className={styles.item}>
					<Link to={`/owners/${obj._id}`}>
						<div className={styles.content}>
							<p>Name: {obj.name}</p>
							<p>Last Name: {obj.lastName}</p>
							<p>Phone Number 1: {obj.phoneNumber1}</p>
							{obj.phoneNumber2 && (
								<p>Phone Number 2: {obj.phoneNumber2}</p>
							)}
							{/* <p>ID: ${obj._id}</p> */}
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default OwnersList;
