import { Link } from "react-router-dom";

import styles from "./SpeciesList.module.css";

const SpeciesList = ({ species }) => {
	return (
		<ul className={styles.list}>
			{species.map((obj) => (
				<li key={obj._id} className={styles.item}>
					<Link to={`/species/${obj._id}`}>
						<div className={styles.content}>
							<p>{obj.name}</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SpeciesList;
