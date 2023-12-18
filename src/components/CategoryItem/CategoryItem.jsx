import { Link } from "react-router-dom";

import styles from "./CategoryItem.module.css";

const CategoryItem = ({ category }) => {
	function startDeleteHandler() {
		// ...
	}

	return (
		<article className={styles.product}>
			<h4>{category.name}</h4>
			<p>ID: {category._id}</p>
			<menu className={styles.actions}>
				<Link to="edit">Edit</Link>
				<button onClick={startDeleteHandler}>Delete</button>
			</menu>
		</article>
	);
};

export default CategoryItem;
