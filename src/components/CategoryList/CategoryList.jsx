import { Link } from "react-router-dom";

import styles from "./CategoryList.module.css";

const CategoryList = ({ categories }) => {
	return (
		<ul className={styles.list}>
			{categories.map((cat) => (
				<li key={cat._id} className={styles.item}>
					<Link to={`/categories/${cat._id}`}>
						<div className={styles.content}>
							<p>{cat.name}</p>
							{/* <p>ID: ${cat._id}</p> */}
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default CategoryList;
