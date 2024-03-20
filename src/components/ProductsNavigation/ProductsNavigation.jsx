import { NavLink, useRouteLoaderData } from "react-router-dom";

import styles from "./ProductsNavigation.module.css";

const ProductsNavigation = () => {
	const token = useRouteLoaderData("root");

	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.list}>
					<li>
						<NavLink to="/products">Products</NavLink>
					</li>
					{token && (
						<>
							<li>
								<NavLink to="/products/new">
									New Product
								</NavLink>
							</li>
						</>
					)}
					<li>
						<NavLink to="/categories">Categories</NavLink>
					</li>
					{token && (
						<>
							<li>
								<NavLink to="/patients">Patients</NavLink>
							</li>
							<li>
								<NavLink to="/owners">Owners</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default ProductsNavigation;
