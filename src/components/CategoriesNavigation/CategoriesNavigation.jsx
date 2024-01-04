import { NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./CategoriesNavigation.module.css";

const CategoriesNavigation = () => {
	const token = useRouteLoaderData("root");

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink to="/products">Products</NavLink>
					</li>
					<li>
						<NavLink to="/categories">Categories</NavLink>
					</li>
					{token && (
						<li>
							<NavLink to="/categories/new">New Category</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default CategoriesNavigation;
