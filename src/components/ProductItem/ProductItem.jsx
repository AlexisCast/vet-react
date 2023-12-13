import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
	function startDeleteHandler() {
		// ...
	}

	return (
		<article className={styles.product}>
			<img src={product.img} alt={product.name} />
			<h4>{product.name}</h4>
			<p>Available: {product.available ? "YES" : "NO"}</p>
			<p>Category: {product.category.name}</p>
			<menu className={styles.actions}>
				<Link to="edit">Edit</Link>
				<button onClick={startDeleteHandler}>Delete</button>
			</menu>
		</article>
	);
};

export default ProductItem;
