import { NavLink } from "react-router-dom";

import classes from "./ProductsNavigation.module.css";

const ProductsNavigation = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink to="/products">All Products</NavLink>
					</li>
					<li>
						<NavLink to="/products/new">New Product</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default ProductsNavigation;
