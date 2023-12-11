import { NavLink } from "react-router-dom";

import classes from "./ProductsNavigation.module.css";

const ProductsNavigation = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink href="/products">All Products</NavLink>
					</li>
					<li>
						<NavLink href="/products/new">New Product</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default ProductsNavigation;
