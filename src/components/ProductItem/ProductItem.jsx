import { Link, useSubmit } from "react-router-dom";

import noImage from "../../assets/no-image.jpg";

import styles from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
	const submit = useSubmit();

	const startDeleteHandler = () => {
		const proceed = window.confirm("Are you sure?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	};

	return (
		<article className={styles.product}>
			{product.img ? (
				<img src={product.img} alt={product.name} />
			) : (
				<img src={noImage} alt="noImage" />
			)}
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
