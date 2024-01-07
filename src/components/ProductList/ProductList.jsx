import { Link } from "react-router-dom";

import noImage from "../../assets/no-image.jpg";

import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
	return (
		<ul className={styles.list}>
			{products.map((prod) => (
				<li key={prod._id} className={styles.item}>
					<Link to={`/products/${prod._id}`}>
						{prod.img ? (
							<img src={prod.img} alt={prod.name} />
						) : (
							<img src={noImage} alt="noImage" />
						)}
						<div className={styles.content}>
							<p>Name: {prod.name}</p>
							<p>Price: ${prod.price}</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ProductList;
